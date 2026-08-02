# Push this website to GitHub

Repository: `https://github.com/mahindrautela/morph.github.io`

## Option A: Clone the empty repository, then copy these files

```bash
git clone https://github.com/mahindrautela/morph.github.io.git
cd morph.github.io
```

Copy the contents of the delivered `morph.github.io` folder into this cloned folder. Then run:

```bash
git add .
git commit -m "Add MORPH paper website"
git branch -M main
git push -u origin main
```

## Option B: You already cloned the repository

From inside your existing local clone:

```bash
git pull origin main
```

Copy/replace the delivered files, then run:

```bash
git add .
git commit -m "Populate MORPH project website"
git push origin main
```

## Enable GitHub Pages

On GitHub:

1. Open the repository.
2. Select **Settings**.
3. Select **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select **main** and **/(root)**.
6. Select **Save**.

## Expected website URL

With the current repository name, the default project URL is:

```text
https://mahindrautela.github.io/morph.github.io/
```

To publish at the cleaner URL below, rename the repository to `mahindrautela.github.io`:

```text
https://mahindrautela.github.io/
```

`https://morph.github.io/` is only available to a GitHub user or organization whose account name is exactly `morph`.
