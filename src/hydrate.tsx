import { startTransition, StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Production HTML is prerendered (scripts/prerender.mjs); the dev server's is empty.
// startTransition lets React attach in small slices instead of one long task.
if (root.firstElementChild) startTransition(() => void hydrateRoot(root, app))
else createRoot(root).render(app)
