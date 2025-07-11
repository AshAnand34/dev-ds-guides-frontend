# Dev-DS-Guides Frontend

[![Next.js](https://img.shields.io/badge/built%20with-Next.js-000000?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/styled%20with-Tailwind%20CSS-38B2AC?logo=tailwind-css\&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Deploy with Vercel](https://img.shields.io/badge/deploy%20with-Vercel-000000?logo=vercel)](https://vercel.com)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](../../pulls)

---

A clean, navigable frontend for the [Dev-DS-Guides](https://github.com/darinz/Dev-DS-Guides) repository, built with **Next.js** and **Tailwind CSS**, allowing users to browse guides structured in subfolders with rendered markdown pages.

---

## 🚀 Features

✅ Sidebar navigation reflecting folder structure
✅ Beautiful markdown rendering with syntax highlighting
✅ Fast static site generation with Next.js
✅ Responsive design using Tailwind CSS
✅ (Optional) Full-text search across guides

---

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Markdown Parsing:** [Gray Matter](https://github.com/jonschlinkert/gray-matter), [Remark](https://remark.js.org/)

---

## 📂 Project Structure

```
/content                # Markdown files cloned from Dev-DS-Guides
/lib/guides.js          # Utilities to read files and build folder tree
/components/Sidebar.js  # Sidebar tree navigation component
/pages/guides/[...slug].js # Dynamic markdown rendering pages
/pages/_app.js          # App layout with sidebar
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/dev-ds-guides-frontend.git
cd dev-ds-guides-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Clone Dev-DS-Guides content

```bash
git clone https://github.com/darinz/Dev-DS-Guides.git content
```

Alternatively, set up a script to sync content automatically from the source repository.

### 4. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

---

## 🏗️ Build for Production

```bash
npm run build
npm run start
```

---

## 📌 Deployment

This app can be easily deployed on **[Vercel](https://vercel.com)**:

1. Push your code to GitHub.
2. Import the repository into Vercel.
3. Set the build command to `npm run build` and output directory to `.next`.

---

## 💡 Future Improvements

* 🔍 Implement search functionality with fuse.js
* 🌙 Add dark mode support
* 🔄 Fetch markdown dynamically from GitHub API for real-time updates
* 🧪 Add unit and integration tests with Jest and React Testing Library
* ✨ Enhance markdown styling with custom components

---

## 🤝 Contributing

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](../../pulls)

Pull requests are welcome. For major changes, please open an issue first to discuss proposed modifications.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

* [Dev-DS-Guides](https://github.com/darinz/Dev-DS-Guides) for the original guide content
* Next.js, Tailwind CSS, and Remark open source communities