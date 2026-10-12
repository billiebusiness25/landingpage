import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('./dist/', import.meta.url));
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8'};
http.createServer(async (req,res) => { try { const pathname = new URL(req.url,'http://localhost').pathname; const filename=path.resolve(root,'.'+(pathname==='/'?'/index.html':decodeURIComponent(pathname))); if(!filename.startsWith(root)){res.writeHead(403);res.end();return;} const data=await readFile(filename);res.writeHead(200,{'Content-Type':mime[path.extname(filename)] || 'application/octet-stream'});res.end(data); } catch {res.writeHead(404);res.end('Not found');} }).listen(3100,'127.0.0.1',()=>console.log('Local: http://localhost:3100'));
