Great! Here's a full guide to **collaborating on a GitHub repo with another Gmail/GitHub account**, including:

1. Using multiple GitHub accounts on the same system
2. Switching Git/GitHub config per repo
3. Inviting and accepting collaborators
4. Performing operations from the second account

---

## ✅ Step-by-Step: Collaborating with Another Gmail (GitHub Account)

---

### 🌐 1. **Create a Second GitHub Account with Another Gmail**

If you haven't already:

* Go to [github.com](https://github.com)
* Sign up using another Gmail

---

### 👤 2. **Set Up Git Config Per Account (Global vs Local)**

You'll want to use different Git identity (email, username) **per repo**.

#### 🔁 Switch Git Identity Per Repo:

```bash
git config user.name "Second Account Name"
git config user.email "secondaccount@gmail.com"
```

To check:

```bash
git config user.name
git config user.email
```

This only applies to the **current repo**.

---

### 🔐 3. **Add SSH Key for Second Account (Important for Push/Pull)**

> Each GitHub account needs a **different SSH key** if you want to push via SSH.

#### Generate a new SSH key:

```bash
ssh-keygen -t ed25519 -C "secondaccount@gmail.com"
# Save as: /home/youruser/.ssh/id_ed25519_second
```

Then add to SSH agent:

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519_second
```

#### Add the key to GitHub:

1. Copy the key:

   ```bash
   cat ~/.ssh/id_ed25519_second.pub
   ```
2. Go to [GitHub SSH Settings](https://github.com/settings/keys) (while logged into 2nd account)
3. Click “New SSH Key” and paste it.

---

### 🧭 4. **Create a Custom SSH Config File**

```bash
nano ~/.ssh/config
```

Add:

```ssh
# Default (first account)
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519

# Second account
Host github-second
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_second
```

---

### 🧪 5. **Clone Using Correct SSH Host**

To clone as second user:

```bash
git clone git@github-second:secondusername/repo-name.git
```

To push, Git will use the right SSH key.

---

### 🤝 6. **Invite Collaborator from Main Account**

On GitHub:

* Go to the repo → **Settings** → **Collaborators and teams**
* Add the **second GitHub username** (not email!)
* Send invitation

---

### 📩 7. **Accept Invitation from Second Account**

1. Log in to second GitHub account
2. Go to [https://github.com/notifications](https://github.com/notifications) or check email
3. Accept the invitation

Now the second account has **write access**.

---

### 🔁 8. **Second Account Can Clone, Create Branches, Push, PR**

From the second account system:

```bash
git clone git@github-second:mainuser/repo-name.git
cd repo-name

git checkout -b fix/something
# Make changes
git add .
git commit -m "Fixed something"
git push origin fix/something
```

Then go to GitHub → Create Pull Request

---

### 🧪 9. **Multiple GitHub Accounts on One System (Optional GitHub CLI Login)**

To log in GitHub CLI with second account:

```bash
gh auth login
# Follow prompts and select correct GitHub user
```

You can log in per terminal or use `gh auth status` to check.

---

### ✅ Summary

| Task                    | Command/Action                    |
| ----------------------- | --------------------------------- |
| Set Git identity        | `git config user.name/email`      |
| Use SSH for 2nd account | SSH key + `~/.ssh/config`         |
| Clone using 2nd account | `git@github-second:user/repo.git` |
| Add collaborator        | GitHub → Settings → Collaborators |
| Accept invite           | GitHub Notifications or Email     |
| Push and PR             | Just like first account           |

---

Would you like a zip file with a script to set this all up automatically?
