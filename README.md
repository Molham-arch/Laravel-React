# 📦 BitBin

**BitBin** is een simpele en snelle manier om code snippets te delen met anderen. Het is een Laravel + React-project geïnspireerd door Pastebin, maar met een modern en gebruiksvriendelijk ontwerp.

---

## Live portfolio demo

The Vercel deployment is an interactive, browser-only demo. It reuses the original React pages and saves snippets in localStorage. Create, edit, syntax highlighting, copy, download, and delete work without a server. Public/Unlisted/Private are interface previews only: there are no accounts, shared links, or hosted Laravel database. The demo displays this limitation on every page.

Run `npm ci`, then `npm run dev:demo`. Build with `npm run build:demo`; Vercel uses `vercel.json` and publishes `dist-demo`. Run `node demo/store.test.mjs` to verify storage behavior. The original `npm run dev` and `npm run build` commands remain for the Laravel application below.

---

## 🚀 Functies

- ✅ Code snippet aanmaken, bewerken, verwijderen
- 🌐 Public/Unlisted/Private zichtbaarheid (Private alleen zichtbaar voor ingelogde gebruikers)
- 🖍️ Syntax highlighting met PrismJS
- 📋 Kopieer snippet met één klik
- 💾 Download snippets met bestandsextensie
- 🧹 Responsive en dark-mode vriendelijke UI
- 🧠 Gemaakt met Laravel (API) + React (frontend)

---

## ⚙️ Installatie-instructies

### 1. Run...

```bash
git clone https://github.com/Molham-arch/Laravel-React.git
cd Laravel-React
composer install
cp .env.example .env
php artisan key:generate

# Verbind met je database in .env
php artisan migrate
php artisan serve

npm install
npm run dev
