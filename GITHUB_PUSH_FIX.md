# Fix: Git push credential error on Windows

Your error: `SEC_E_NO_CREDENTIALS` — Git can't use your GitHub login over HTTPS.

Use **one** of the solutions below.

---

## Solution A: Personal Access Token (works in 2 minutes)

### 1. Create a token on GitHub

1. Open: **https://github.com/settings/tokens**
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. **Note:** `manavdeltal push`
4. **Expiration:** 90 days (or your choice)
5. **Scopes:** check **repo**
6. Click **Generate token**
7. **Copy the token** (starts with `ghp_`) — you won't see it again!

### 2. Push and paste the token

Open **PowerShell** or **Command Prompt** and run:

```powershell
cd "c:\Users\Ghost\Downloads\manavdeltal"
git push -u origin main
```

When it asks:

- **Username:** `iaminputalisadak-ops`
- **Password:** paste your **token** (not your GitHub password)

If Windows asks to save the password, click **Yes** so you don't need to paste again.

---

## Solution B: Use SSH instead of HTTPS

If you have an SSH key added to GitHub, we can switch the remote to SSH so you never need to enter a password.

### 1. Check if you have an SSH key

```powershell
type %USERPROFILE%\.ssh\id_ed25519.pub
```
or
```powershell
type %USERPROFILE%\.ssh\id_rsa.pub
```

If you see a long line starting with `ssh-ed25519` or `ssh-rsa`, you have a key.

### 2. If you have a key: add it to GitHub (if not already)

- Copy the full line from the command above
- Go to **https://github.com/settings/keys**
- **New SSH key** → paste → Save

### 3. Switch this repo to SSH and push

```powershell
cd "c:\Users\Ghost\Downloads\manavdeltal"
git remote set-url origin git@github.com:iaminputalisadak-ops/manavdeltal.git
git push -u origin main
```

No password needed if your SSH key is in GitHub.

### 4. If you don't have an SSH key: create one

```powershell
ssh-keygen -t ed25519 -C "iaminputalisadak@gmail.com" -f "%USERPROFILE%\.ssh\id_ed25519" -N '""'
```

Then add the **public** key to GitHub (step 2 above) and run the commands in step 3.

---

## Solution C: GitHub CLI (one-time login)

1. Install: **https://cli.github.com/**
2. In PowerShell:

```powershell
gh auth login
```

Choose: GitHub.com → HTTPS → Login with web browser. Finish the steps.

3. Then:

```powershell
cd "c:\Users\Ghost\Downloads\manavdeltal"
git push -u origin main
```

---

**Recommendation:** Use **Solution A** (token) if you want it working in 2 minutes. Use **Solution B** (SSH) if you prefer no passwords later.
