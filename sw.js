/* Temple Fitness — service worker (offline app shell) */
const CACHE='temple-fitness-v1';
const ASSETS=[
  './','./index.html',
  './icons/icon-192.png','./icons/icon-512.png',
  './icons/apple-touch-icon.png','./icons/favicon-32.png',
  './manifest.webmanifest'
];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS.map(u=>new Request(u,{cache:'reload'})))).catch(()=>{}));
  self.skipWaiting();
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET'){return;}
  // network-first for the HTML doc so updates land; cache-first for everything else
  if(req.mode==='navigate'||(req.headers.get('accept')||'').includes('text/html')){
    e.respondWith(fetch(req).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put('./index.html',cp));return r;}).catch(()=>caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(req).then(r=>r||fetch(req).then(resp=>{const cp=resp.clone();caches.open(CACHE).then(c=>c.put(req,cp));return resp;}).catch(()=>r)));
});
