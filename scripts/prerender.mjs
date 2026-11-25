// Puts the rendered page into dist/index.html so it paints before JavaScript loads.
import { readFileSync, rmSync, writeFileSync } from 'node:fs'
import { render } from '../dist-ssr/entry-server.js'

const file = new URL('../dist/index.html', import.meta.url)
const html = readFileSync(file, 'utf8')
if (!html.includes('<!--app-->')) throw new Error('Prerender placeholder missing from index.html')
writeFileSync(file, html.replace('<!--app-->', () => render()))
rmSync(new URL('../dist-ssr', import.meta.url), { recursive: true })
