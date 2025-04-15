# 📦 BitBin

**BitBin** is een simpele en snelle manier om code snippets te delen met anderen. Het is een Laravel + React-project geïnspireerd door Pastebin, maar met een modern en gebruiksvriendelijk ontwerp.

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
git clone https://example.com/bitbin.git
cd bitbin
composer install
cp .env.example .env
php artisan key:generate

# Verbind met je database in .env
php artisan migrate
php artisan serve

npm install
npm run dev
