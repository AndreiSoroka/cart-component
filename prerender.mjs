import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from "vite";

const vite = await createServer({
    server: { middlewareMode: "custom" }
});

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)
const filePath = toAbsolute('dist/index.html');

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");

const appHtml = await render()
const html = template.replace(`<!--app-html-->`, appHtml);
fs.writeFileSync(toAbsolute(filePath), html)
vite.close();
