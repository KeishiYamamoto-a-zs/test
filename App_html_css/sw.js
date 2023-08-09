// Cache name
const CACHE_NAME = 'pwa-sample-caches-v1';
// Cache targets
const urlsToCache = [
  './',
  './css/bootstrap.css',
  './css/inputform.css',
  './css/question.css',
  './css/result1.css',
  './css/title.css',
  './images/a-zs_logo.png',
  './images/animalCrossing.jpg',
  './images/apex.jpg',
  './images/valorant.png',
  './app.js',
  './demoResult.html',
  './demoResult2.html',
  './demoResult3.html',
  './camera.html',
  './informationConsent.html',
  './inputform.html',
  './question.html',
  './index.html',
];

//swは正常に登録されるとinstallイベントが走る
//正常に登録されたら、キャッシュにurlsToCacheに入れたファイルを次々とキャッシュしていく（All-or-Nothing特性）
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

//ページ遷移のときに、リクエストされたファイルがキャッシュの中にあれば該当キャッシュファイルを返す
//なかった場合はネットワークから取得しようとする
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return response ? response : fetch(event.request);
      })
  );
});