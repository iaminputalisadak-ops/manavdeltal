# Manav Dental Clinic & Manavdeltal App

## 1. Static website (Manav Dental Clinic)

- `index.html` – Main page
- `styles.css` – Styling
- `script.js` – Mobile menu

**Run:** Open `index.html` in a browser, or `npx serve .` then visit the URL.

**Clinic:** [manavdental.com](https://manavdental.com) · MM5W+R62, Damak 57217 · 023-574973

---

## 2. Manav Dental Clinic – React website + PHP/MySQL

Full multi-page dental clinic site: Home, About, Services, Doctors, Gallery, Testimonials, Contact, Book Appointment. React Router, PHP API, MySQL for appointments and contact form.

- **Frontend:** `client/` – React (Vite) + React Router
- **Backend:** `api/` – PHP (appointments, contacts, services, admin)

### Prerequisites

- Node.js 18+
- PHP 8+ with PDO MySQL
- MySQL (XAMPP, WAMP, or standalone)

### Database setup (dental site)

```bash
mysql -u root -p < api/schema_dental.sql
```

This creates `manav_dental_db` and tables: `appointments`, `contacts`, `services`. Edit `api/config/database_dental.php` if your MySQL user/password/host differ.

### Run the site

**Terminal 1 – PHP API (port 8000):**

```bash
cd api
php -S localhost:8000
```

**Terminal 2 – React (port 3000):**

```bash
cd client
npm install
npm run dev
```

Open **http://localhost:3000**. Use “Book Appointment” and “Contact” forms; data is stored in MySQL. Admin: `GET /api/admin_appointments.php` to list appointments (add auth in production).

### Build for production

```bash
cd client
npm run build
```

Serve `client/dist/` and the `api/` folder from your host.

---

**Repo:** [github.com/iaminputalisadak-ops/manavdeltal](https://github.com/iaminputalisadak-ops/manavdeltal)
