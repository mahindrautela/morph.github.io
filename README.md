# MORPH project website

Static project website for **MORPH: PDE Foundation Models with Arbitrary Data Modality**.

- Paper: https://arxiv.org/abs/2509.21670
- Code: https://github.com/lanl/MORPH

## Local preview

From the repository root:

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.

## Publish with GitHub Pages

1. Push these files to the `main` branch.
2. Open **Settings → Pages** in the GitHub repository.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select branch **main**, folder **/(root)**, and save.

### Important URL note

Because this repository is named `morph.github.io` under the account `mahindrautela`, GitHub treats it as a **project site**. Its default URL will be:

```text
https://mahindrautela.github.io/morph.github.io/
```

For the cleaner account-site URL:

```text
https://mahindrautela.github.io/
```

rename the repository to `mahindrautela.github.io` before publishing.

The address `https://morph.github.io/` would require control of the GitHub account or organization named `morph`.

## Repository structure

```text
.
├── index.html
├── .nojekyll
├── README.md
└── static
    ├── css/site.css
    ├── js/site.js
    └── images/
```

All asset paths are relative, so the site works at either a project URL or an account-root URL.
