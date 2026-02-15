# Fix: SEC_E_NO_CREDENTIALS when pushing to GitHub

Your repo is now set to **save** your credentials after you enter them once. Follow **one** of these:

---

## Option 1: Use a Personal Access Token (recommended)

### Step 1: Create a token

1. Open **https://github.com/settings/tokens**
2. **Generate new token** → **Generate new token (classic)**
3. Note: `manavdeltal` · Expiration: 90 days · Check **repo**
4. Generate and **copy the token** (starts with `ghp_`)

### Step 2: Save the token so Git can use it

Open **PowerShell** and run this (replace `YOUR_TOKEN_HERE` with your real token):

```powershell
$cred = "https://iaminputalisadak-ops:YOUR_TOKEN_HERE@github.com"
$file = "$env:USERPROFILE\.git-credentials"
$cred | Out-File -FilePath $file -Encoding utf8 -Append
```

Or do it manually:

1. Open Notepad.
2. Type exactly (replace `YOUR_TOKEN_HERE` with your token):
   ```
   https://iaminputalisadak-ops:YOUR_TOKEN_HERE@github.com
   ```
3. Save as: `C:\Users\Ghost\.git-credentials`  
   (File name: `.git-credentials`, Save as type: All files, Encoding: UTF-8)

### Step 3: Push

```powershell
cd "c:\Users\Ghost\Downloads\manavdeltal"
git push origin main
```

It should push without asking for a password.

---

## Option 2: Use SSH (no token needed after setup)

### Step 1: Check for an SSH key

In PowerShell:

```powershell
Get-Content "$env:USERPROFILE\.ssh\id_ed25519.pub" -ErrorAction SilentlyContinue
```
or
```powershell
Get-Content "$env:USERPROFILE\.ssh\id_rsa.pub" -ErrorAction SilentlyContinue
```

If you see a long line starting with `ssh-ed25519` or `ssh-rsa`, you have a key. Copy that whole line.

### Step 2: Add the key to GitHub

1. Open **https://github.com/settings/keys**
2. **New SSH key** → paste the line → Save

### Step 3: Switch this repo to SSH and push

In PowerShell:

```powershell
cd "c:\Users\Ghost\Downloads\manavdeltal"
git remote set-url origin git@github.com:iaminputalisadak-ops/manavdeltal.git
git push origin main
```

If you don’t have a key, create one first:

```powershell
ssh-keygen -t ed25519 -C "iaminputalisadak@gmail.com" -f "$env:USERPROFILE\.ssh\id_ed25519" -N '""'
```

Then run the “Add the key to GitHub” and “Switch this repo to SSH” steps above.

---

## Option 3: GitHub CLI (one-time login)

1. Install: **https://cli.github.com/**
2. In PowerShell:

```powershell
gh auth login
```

Choose: GitHub.com → HTTPS → **Login with a web browser**. Complete the steps in the browser.

3. Then:

```powershell
cd "c:\Users\Ghost\Downloads\manavdeltal"
git push origin main
```

---

**Summary:** Option 1 (token + `.git-credentials`) usually fixes the error right away. Option 2 (SSH) avoids passwords after setup. Option 3 (GitHub CLI) is good if you use `gh` anyway.
