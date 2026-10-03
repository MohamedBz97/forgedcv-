# forgedCV

forgedCV is a browser-local resume builder with live preview, PDF printing, resume scoring, cover-letter tools, and a LinkedIn profile PDF importer.

## Deploy to Vercel

1. Import this repository in Vercel and keep the project connected to the `main` branch.
2. Set the project root to the folder containing this `package.json`.
3. Keep the framework preset as Next.js and use `npm run build` as the build command.
4. No database or resume-storage environment variables are required for this release.
5. Test the Preview deployment before merging to `main`; pushing the approved change to `main` updates the existing production project and forgedcv.com domain.

Resume drafts stay in the visitor's browser and do not synchronize between devices. Users can download and restore a JSON backup from the editor's data menu.

## Checks

```powershell
npm ci
npm run lint
npm run typecheck
npm test
npm run build
npm audit --audit-level=moderate
```