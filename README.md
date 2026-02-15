# Manav Dental Clinic & Manavdeltal App

## 1. Static website (Manav Dental Clinic)

- `index.html` – Main page
- `styles.css` – Styling
- `script.js` – Mobile menu

**Run:** Open `index.html` in a browser, or `npx serve .` then visit the URL.

**Clinic:** [manavdental.com](https://manavdental.com) · MM5W+R62, Damak 57217 · 023-574973

---

## 2. React app + PHP/MySQL backend

- **Frontend:** `client/` – React (Vite) app
- **Backend:** `api/` – PHP with MySQL

### Prerequisites

- Node.js 18+
- PHP 8+ with PDO MySQL
- MySQL (e.g. XAMPP, WAMP, or standalone MySQL)

### Database setup

```bash
mysql -u root -p < api/schema.sql
```

Or in MySQL client, run the contents of `api/schema.sql` to create database `manavdeltal` and table `items`.

Edit `api/config/database.php` if your MySQL user/password/host differ (default: host=localhost, user=root, pass=empty, db=manavdeltal).

### Run the app

**Terminal 1 – PHP API (port 8000):**

```bash
cd api
php -S localhost:8000
```

**Terminal 2 – React dev server (port 3000):**

```bash
cd client
npm install
npm run dev
```

Open **http://localhost:3000**. The React app will proxy `/api/*` to the PHP backend.

### Build for production

```bash
cd client
npm run build
```

Output is in `client/dist/`. Point your web server at it and serve the PHP API from your existing PHP host (e.g. Apache with mod_php or PHP-FPM).

---

**Repo:** [github.com/iaminputalisadak-ops/manavdeltal](https://github.com/iaminputalisadak-ops/manavdeltal)
