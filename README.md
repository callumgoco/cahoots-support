# Cahoots Website

Static marketing + legal site for the Cahoots iOS app.

## Pages

| Path | Purpose |
|------|---------|
| `/` | Branded landing |
| `/privacy/` | Privacy Policy |
| `/terms/` | Terms of Use |
| `/support/` | Support / contact |
| `/join/` | Fallback for invite links |
| `/.well-known/apple-app-site-association` | Universal Links for `/join/*` and `/log/*` |

## Local preview

```sh
cd "/Users/callumoconnor/Documents/Cahoots Website"
python3 -m http.server 5173
```

Open http://localhost:5173

## Deploy

Host the whole folder on any static host (Netlify, Cloudflare Pages, Vercel, S3, etc.).

Requirements for App Store / invites:

1. Custom domain (example `cahoots.app` or `invite.yourdomain.com`)
2. Serve AASA as JSON with **no redirects** at `https://YOUR_DOMAIN/.well-known/apple-app-site-association`
3. Point the iOS app `Configuration.xcconfig` at that domain:

```
CAHOOTS_INVITE_HOST = your.domain
CAHOOTS_SUPPORT_EMAIL = support@your.domain
CAHOOTS_PRIVACY_URL = https:/$()/your.domain/privacy/
CAHOOTS_TERMS_URL = https:/$()/your.domain/terms/
```

Team ID + bundle in AASA: `PVP9QSJ25G.com.callumoconnor.cahoots`
