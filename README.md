# GameVault

GameVault is a modern, static Android game download website and portfolio. It allows users to discover, view details, and download Android games directly from GitHub Releases.

## Features
- **Modern Design:** Clean, premium, playful UI built with standard CSS.
- **Responsive:** Works beautifully across Desktop, Tablet, and Mobile.
- **Static Hosting:** Fully compatible with GitHub Pages.
- **Easy Game Management:** Centralized `games.js` config file to add/remove games without touching UI components.
- **GitHub Releases Integration:** Link directly to APKs hosted on GitHub Releases, keeping the repository small and fast.

## Tech Stack
- React.js
- Vite
- Framer Motion (Animations)
- Lucide React (Icons)
- React Router (Hash Routing for GH Pages)

## Project Structure
- `src/components/`: Reusable UI components like Navbar, Footer, GameCard.
- `src/pages/`: Main views (Home, GameDetails).
- `src/data/games.js`: The central configuration for all games.
- `src/index.css`: Global styles and CSS variables.

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## How to Add a New Game

Adding a new game is extremely easy. You only need to modify one file.

1. Open `src/data/games.js`.
2. Add a new object to the `games` array:
   ```javascript
   {
     id: "newgame", // Must be unique, used in URL (/games/newgame)
     title: "New Game",
     tagline: "Short and punchy.",
     description: "Full description of the game.",
     version: "1.0.0",
     platform: "Android",
     status: "AVAILABLE",
     categories: ["Puzzle", "Single Player"],
     technologies: ["Unity", "C#"],
     features: ["Feature 1", "Feature 2"],
     image: "/assets/games/newgame/cover.png",
     screenshots: ["/assets/games/newgame/screenshot1.png"],
     downloadUrl: "https://github.com/USERNAME/REPO/releases/latest/download/app-release.apk",
     githubUrl: "https://github.com/USERNAME/REPO"
   }
   ```
3. Save the file. The homepage grid and filters will automatically update!

## How to Update an APK Download URL (GitHub Releases)

To avoid storing large APKs in this repository, we use **GitHub Releases**.

1. Build your Android APK.
2. Go to your Game's GitHub Repository -> **Releases** -> **Draft a new release**.
3. Create a tag (e.g., `v1.0.0`) and give it a title.
4. **Upload your APK** file into the "Attach binaries" section.
5. Publish the release.
6. Right-click the uploaded `.apk` file under "Assets" and copy the link address.
7. Paste this URL into the `downloadUrl` field in `src/data/games.js`.

## GitHub Pages Deployment

This project uses **GitHub Actions** for seamless deployment to GitHub Pages.

1. Ensure your repository is named `gamevault` (matching the `base` in `vite.config.js`).
2. Push your code to the `main` or `master` branch.
3. The `.github/workflows/deploy.yml` action will run automatically.
4. Go to **Settings > Pages** in your GitHub repository and ensure the source is set to **GitHub Actions**.
5. Your site will be live at `https://<USERNAME>.github.io/gamevault/`.
