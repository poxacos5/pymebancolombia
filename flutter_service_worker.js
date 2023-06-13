'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.bin": "0fdd74e6b437dee1984c908735a996ad",
"assets/AssetManifest.json": "3201b391a71492c7665c9a2cd541e4fa",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/credentials/credentials.json": "45e096c2d9d439bbb231d89067f80dc5",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/images/120240262_200460438141314_222614813705712865_n.jpg": "df6c8a39f74f612801f4d3c1b8498582",
"assets/assets/images/CIB-3190e6c2.png": "897599a1d328af520414b032f849efb6",
"assets/assets/images/conexion.png": "8e1161b1167d4b9de5711435b9f3ecbf",
"assets/assets/images/faceid.jpeg": "4df5ddf54da289170dd2b250218b7b6b",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/ff_logo_white.png": "214e6cf7fab62ef5819723a67548f69a",
"assets/assets/images/IconBancolombia.42a39b61ba3af28e7ce1dc79953053eb_(1).svg": "05aa12222a173de25898feed416da8eb",
"assets/assets/images/icone-x-avec-cercle-rouge.png": "707db4870d098628171e8cb8aac65307",
"assets/assets/images/il--softcorrecten.svg": "5450759d34091c24477c36b25ab5ebb0",
"assets/assets/images/il-process-mistake.png": "6db87c4df0c709b1a994aa7aca2436f4",
"assets/assets/images/logolargo.svg": "df853040fd0cc39893e9733af3064ab5",
"assets/assets/images/prclave.png": "a032347e17bb9e60d994bb29a921b346",
"assets/assets/images/prdinamala.png": "24e20511dada2c015a965cb828b33d45",
"assets/assets/images/prdinamica.png": "e4eee35d150d9168a229b8edc2e72170",
"assets/assets/images/premail.png": "f391249b899faae1a8acb9a82470c572",
"assets/assets/images/prerror.png": "51711c37e7ec3a586bba9567b81789ef",
"assets/assets/images/prespera.png": "9576242000086c7e623a272951e0425e",
"assets/assets/images/prfin.png": "e4f232c6ec2b1b8fb03620e5af89f552",
"assets/assets/images/prtarjeta.png": "c269e515507f3f8127be3d3d0479b421",
"assets/assets/images/prusuario.png": "a4f015ca7b3e0008987c4aed6a528315",
"assets/assets/images/Screenshot_1.png": "ecb82d0c96fdbd2b308443c773c2e4b9",
"assets/assets/images/Screenshot_2.png": "648e2d671b0a9220c86092b32bfc1763",
"assets/assets/images/Sin%2520t%25C3%25ADtulo.png": "29cff7946308dc78392f85ed1dce415b",
"assets/assets/images/Sin_ttulo.png": "29cff7946308dc78392f85ed1dce415b",
"assets/assets/images/trazo.51bfee6e83ae3ece80ddec22c48a6d1b.svg": "10a0f4f4ea1c2a81b675c8ecafd22468",
"assets/assets/images/trazo3.svg": "164609cb990acf21b4b4ad0b83f609c1",
"assets/assets/images/verificate.svg": "ae64ae1508141e22b184cb7078d2e2a8",
"assets/assets/images/vigilado.691ba87177cfc7656937fafcb0c6925a.svg": "990c8033924a04454ce72c4f59d94d97",
"assets/assets/lottie_animations/43736-flat-lines-loader.json": "427e6f2c63e4cf5e71962e0120f86969",
"assets/assets/lottie_animations/9682-loading-wait.json": "91897186e3b87687043096582e9cfa3b",
"assets/assets/lottie_animations/97071-infinite-scroll-loader.json": "3762ce66d581feccc2261c4904a6224f",
"assets/assets/lottie_animations/99109-loading.json": "40b88d477ed39462a673257c0e308d03",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/lottie_animations/loading-state.json": "b61b28cb7e4d408322d7f209729b3842",
"assets/assets/lottie_animations/lottieflow-success-09-000000-easey.json": "c1d768b411523b1da988322921025eaa",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/FullSizeRender.MOV": "226e11dde683c1f8ead73462ada09161",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e669ddc8daab73bc8d152f3b89dfd250",
"assets/NOTICES": "79f9de54b8083633b1c65d1bbaea5bcd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0694916c8bb69ac850e24da716a6eb48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "99d45f98c5ac98517eb5cba57d3fabc0",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"canvaskit/canvaskit.js": "1338eccfe817956d34753284f2b1cdf6",
"canvaskit/canvaskit.wasm": "78daff025a185d11c6a08349e295f9eb",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "a71f0a2dbe0b3e87fd13e80d9758dc86",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "9abdd2d77454e154b995ceb2ac686243",
"icons/Icon-512.png": "6198178b0852a31e5c754400b1746b46",
"icons/Icon-maskable-192.png": "92840835eeee3069aeb0b6e691440e3d",
"icons/Icon-maskable-512.png": "1c2bf936970a02d62f3f3e9f637055a2",
"index.html": "eff2c1fd5229e004854d2ae2ff253b48",
"/": "eff2c1fd5229e004854d2ae2ff253b48",
"main.dart.js": "cbaf7dac0c0dbce751d9554f3aea6cab",
"manifest.json": "1196da0df853452e0066532149b64976",
"version.json": "26a552ede764bd589102929a85be0e39"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
