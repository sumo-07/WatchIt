# 🎬 WatchIt

> **WatchIt** is a movie discovery web app built with **React** and **React Router**.
> It lets users explore movies, view details, and stay updated with the latest cinema trends — all in a clean, responsive UI.

---

## 🚀 Features

✅ **Browse Movies** – Search and explore a wide range of movies.
✅ **Dynamic Routing** – Each movie opens a unique details page using React Router.
✅ **Search Functionality** – Instantly find your favorite films by title.
✅ **Loader Data API** – Efficient data fetching using `useLoaderData` and route loaders.
✅ **Responsive UI** – Works perfectly across desktop and mobile.
✅ **Reusable Components** – Modular code using functional components and hooks.
✅ **Contact Form** – A functional form powered by React Router’s `<Form>` and `action` handler.

---

## 🛠️ Tech Stack

| Tool                   | Purpose                          |
| ---------------------- | -------------------------------- |
| ⚛️ **React**           | Frontend framework               |
| 🧭 **React Router v6** | Routing & data loading           |
| 🎨 **CSS / Flexbox**   | Styling and layout               |
| 🌐 **Fetch API**       | Data fetching from IMDB API      |
| ⚡ **Vite**             | Lightning-fast bundler for React |

---

## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/sumo-07/WatchIt.git
cd WatchIt
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## 🌍 Folder Structure

```
WatchIt/
│
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Page components (Home, About, Movie, Contact)
│   ├── api/               # API and data loader functions
│   ├── App.jsx            # Main app entry
│   ├── main.jsx           # Root render and router setup
│
├── public/                # Static assets
├── vite.config.js         # Vite configuration
└── package.json
```



## 🧠 Concepts Used

* React Hooks: `useState`, `useEffect`, `useRef`, `useReducer`, `useCallback`, `useMemo`
* React Router: `createBrowserRouter`, `useLoaderData`, `NavLink`, `Form`, `action`
* Debouncing for optimized search input
* Component-based architecture




