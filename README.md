# Kumina

Websites and apps for small businesses, by Ville Syrjälä.

Bilingual (Finnish / English) single-page site built with Next.js.

## Stack

- Next.js (App Router) + TypeScript
- Plain CSS: global tokens in `globals.css`, component styles in CSS Modules
- Custom i18n: `app/[lang]` routing with JSON dictionaries, no library
- Hosted on Vercel

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
app/[lang]/        pages per language (fi, en)
components/        components with their own .module.css
dictionaries/      fi.json and en.json
```
