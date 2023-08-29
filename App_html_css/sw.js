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
  './images/a-zs_logo_full.png',
  './images/a-zs_logo.png',
  './images/apex.jpg',
  './images/fallguys.jpg',
  './images/fortnite.jfif',
  './images/mariokart8dx.jfif',
  './images/pokemon.png',
  './images/rocketleague.jpg',
  './images/splatoon3.png',
  './images/streetfighter6.png',
  './images/sumabura.jfif',
  './answersInformation.html',
  './app.js',
  './checkPhoto.html',
  './informationConsent.html',
  './inputform.html',
  './question.html',
  './questions.js',
  './index.html',
  './result1.html',
  './result2.html',
  './result3.html',
  './result4.html',
  './result5.html',
  './result6.html',
  './result7.html',
  './result8.html',
  './result9.html',
  './statsTest.html',
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