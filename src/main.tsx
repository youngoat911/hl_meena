import './index.css'

// The prerendered page paints first; React attaches once the hero image has loaded,
// so script download does not compete with it.
const start = () => void import('./hydrate')
if (document.readyState === 'complete' || import.meta.env.DEV) start()
else window.addEventListener('load', start, { once: true })
