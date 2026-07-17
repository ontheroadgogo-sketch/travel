// 최소 서비스워커: 설치(홈 화면 추가) 조건을 만족시키기 위한 용도.
// 공격적인 캐싱은 하지 않아서, 앱을 계속 수정해도 항상 최신 버전이 보여요.
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
