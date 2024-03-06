'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "df48ec2453261b5a5c651fc93687b534",
".git/config": "a4128f185855af136c6056b09bbc533d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "09372987e67b91a0de238ef20c4bd621",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "883b5cfe7d5a2459aa145300afe5a7e4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e1c6d5124aff284e250847cae7951716",
".git/logs/refs/heads/main": "864ca95a723e556ed3c474512920e592",
".git/logs/refs/remotes/origin/HEAD": "d7ca040be805b73aa411070fddf2d60b",
".git/logs/refs/remotes/origin/main": "b3928c72de72a7b7fcb82bc0671794b3",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/6e0690eaea551fe94608bbce2b7206c3791a8e": "b0e14225907120b29c684cbb4a98f8f7",
".git/objects/05/f0980a5ada294625867875bd22dc5b71da3372": "5615ae769f1dc7cd3e8d8ade78b5343d",
".git/objects/06/57aa7df426750d3d555344c559d67c0bcf051b": "13e65d67a91a01364d63c42a6eb7c391",
".git/objects/06/850bee30be51b129f1fd9ce4f6a3d88128d856": "c3b5f346b49166996367b88680311be5",
".git/objects/09/ce74d3d3a6296adce38d545f954256bca5ffe7": "352bc45dcb67f27510aa48199d3b026f",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0d/bff57e869eb34067505f3a1ace21b51a8de716": "6da5316ce6c828397d5295cdeb647798",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/1b/680b0bdf691252a6ba7e5fff80b603c27516ff": "76400925ed320e092340d531d7624688",
".git/objects/1d/e70ce5d75fc3ad506599b445f7eaf1df778533": "5c322b6a7a04c80f811370894794952c",
".git/objects/1f/3c541ebffa4ab6fde74e85bdee3d4a9d3b3fd9": "150b848115a4af4c707b15d96ce88199",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/61565fb6d653b6531b58e5121c6e9d2b6c9d9e": "bcee86f9f868bc863716593ed26e5499",
".git/objects/28/4202b0080818ca2bb5ba47415a6ed2162586c7": "64e7354edfa8906412e33fe66cbdcd35",
".git/objects/2b/cf8879923618d399ed73f2db07fd2bdf5c3100": "9cf463b945c7a89fb681bd323f9a46c6",
".git/objects/37/dc49989a23c0cfffc644aad9f362dd9ba245de": "cf194ff909b2182eef2007879a35dc38",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/39/78f1a61c830d76d82d5906bf3f2e0a4143f32a": "21f1e09fd257e491800fcd0d58d94c2b",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/42/a5aa125bffdd35557cfadd4c1d3947d534f05c": "227ecc5d090db379eca5bc9536dfd684",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/72b1ee930115e430ec9476d851a45f9e7b30a9": "855003102b8eae5a7678927eb9efc2ca",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/84689c807e5d2ff622fb2e1fd59bb8f9cc3292": "e8fe02d9a4f361390c83b85078d616a2",
".git/objects/57/fc0c67dc70e48c44ea868f4c78616bcb690589": "238c640bba00192e721348859a952b3c",
".git/objects/5a/00748eb375b9e12cafb3246779d92faae0c155": "40b7441aac902072634b9cd260a11feb",
".git/objects/6a/72fe628d8b0a5985a299624214e65c3ec9a3f0": "16bc0b8120372750d9d048d2047d8cbc",
".git/objects/6b/3f43ba655de039e9b027982d55a93b7b5ec6c3": "d80ed3c26c16def05462ad7d98e64c06",
".git/objects/70/aa8cce9daf1cc52bd4505a681b201ac45ccfb4": "357d9ae81f5ae4bfc3d5f36013d9e689",
".git/objects/71/12697b4d8d1eb3b1fbd549e82831cc1ac7a3f4": "fc3e231fb2583366d8862cdd4ea28681",
".git/objects/82/a94d67d75caf5d71269beb554c06295550c318": "1c16bd0a93545e4059d3af5de19ef74c",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8b/96fd1dc1cab288462e8157dfc8deae8730c149": "6a7aece2dd98b4757ab882e01ddc9c97",
".git/objects/8d/735df7fa3bb3df05357f67980538ee07d1703f": "160a568824a32b8109cce39c852c4bbd",
".git/objects/8f/0429d032488cb544a0b74de1bf3be37fdcc228": "7bec43436ecd6a6a60873ec814bdf3f8",
".git/objects/a4/fb2f39eb6f736793ee9a847af8e514b0823fe0": "3d757d1a3c14f3df7d8278ce45340d13",
".git/objects/a8/ebc61717a2b991820945ecd9d2b506602dd2e1": "83e00570562bb2f4bcf22d01514c558b",
".git/objects/aa/c5855d3d7b7cb55c137a659f11db98cffa82f0": "2c5b7c8d3062323afd65cd92691e9ea8",
".git/objects/ad/91994ce432dd880ed52b35ab7342c8a9dde8ef": "a2da46d8eed4d11908a5f29983d034b0",
".git/objects/b8/f42f178c8c865a9a8fd8946fc1f906d7cb0545": "5543dc7a247bf0c7e58481d4e6e73594",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/be/14257e32b34ed163549bce64cbed5ed67691eb": "65c83836178457e71c07af99f142a8b2",
".git/objects/be/4848fbcd64621c18f4a8b2d0c5621a516aadcf": "e9234398a030803043df57d135fbef11",
".git/objects/bf/eb38c07d1fc8cbe9e77db9d87163c78f4dacc1": "2808629275fa90a7503561e61fcf9622",
".git/objects/c0/db8d333b3b1b7b4c7281492025b3c0284bc045": "360192018c422b9e2eb288831526a03a",
".git/objects/c5/d62e7c20f979914af98e8642a63d42472fb557": "a61dbedfea56b460185f031630ab5636",
".git/objects/c8/4b67a76f76e570b1009c5d6c3cf4d3906c7c92": "bee8e626be2a762d1ac1147339a844a9",
".git/objects/cb/127d15d80ce107d976af7c048802c378573e5a": "cbf5e8149d5188ae1617c2289c4165cb",
".git/objects/d0/d0eb1a021da93b86906880d1965aa8759d9a28": "cbeaea358801a2c66f5a4ddfadeaee46",
".git/objects/d1/14874387532943f09384b8a4ad4020c9f57200": "79d053eaa7bed7c75fce164c6602348a",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/402ee365be50fcd8b577e67bbaeb5ab428e294": "6ceadadbaf67417c1517a2c390859ebc",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e3/23f3e3f108afeb469ad8d6a6f0c54a489cd52d": "fef5e0501c0693018bb05ad2e2f10f24",
".git/objects/e4/0726b91173893432217b7e149218201902bcd6": "eee19851e75bce2d84d2b1b0d622a614",
".git/objects/e4/4cbbe840a7d4704f4c9c355693c104e0e5fd56": "0dbdb975adf54caa247bcbafa9731d55",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/3650b693d5dbf8e00ba6ce909efb483d22be9d": "638d90bf083ef5a98df6d279c870287e",
".git/objects/e8/3f3ef453464df96255d80679df2ffafa8e3e6e": "87526e33e4755d833c2a3dc37e8c3ace",
".git/objects/e8/5e7a0764a08e87d0aa740d8f6d01ef8bdad153": "eb23b6ea48afcea1c423b705d6846800",
".git/objects/eb/4231a0d3b728d8a06cba1a1ee46d848aec98e4": "31ad887728be60cef547e47db45b6856",
".git/objects/eb/bddf1f5f9c73e4c0bc8e5498822e0cd7f856bd": "45c4e92b9d3de2bd6926114bb518002a",
".git/objects/ed/f6df536fa6f5dc2878fd801b6d82e01e59ff42": "bec899113febe917396b39e56b932b6a",
".git/objects/ee/064b18e6f2896c58d3c7068583329c2a088b23": "35dc8c12f79f9f9ff045170e52c18421",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fb/0e63fef4e664be9514ba8ddd73f34aed01c8e2": "37a66bfcfa0818aa1e7a624e0b72444e",
".git/objects/fe/d774190baf731644b7ee87d2d225f596bece54": "0503be906c4be25c4c3ba114286e08dc",
".git/ORIG_HEAD": "8d7bde06687839f69f1ab205e935372d",
".git/REBASE_HEAD": "8d7bde06687839f69f1ab205e935372d",
".git/refs/heads/main": "fe5354ba081fb670290656d6c7269c29",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "fe5354ba081fb670290656d6c7269c29",
"Ads.txt": "12df14c6f0dad292df88172214e71484",
"adview.html": "1bc723f80df13770dc297c12dab1caae",
"assets/AssetManifest.bin": "2fe983fbd1fd40120ae5c80e9852216b",
"assets/AssetManifest.bin.json": "7366408ec05bac2ae390762077a2d2c1",
"assets/AssetManifest.json": "348506508372c6d545bff89359ac5fc8",
"assets/assets/images/leagueLogo.jpg": "35a047dfd48930269b58c4135ad23d64",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "b166e4a7f6ad4ca91f9c3e6b2c571a39",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets.zip": "e7aa722856cc803454aece9a16bb28ce",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "e68c25ad98137e86bca16e1244f239b8",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ef60d664a1af6af4ae4f51e77b1c59c8",
"icons/Icon-512.png": "57bda109d76a67e737f2df755373328e",
"icons/Icon-maskable-192.png": "ef60d664a1af6af4ae4f51e77b1c59c8",
"icons/Icon-maskable-512.png": "57bda109d76a67e737f2df755373328e",
"index.html": "dfd06392e396a315b6e51516ba94281b",
"/": "dfd06392e396a315b6e51516ba94281b",
"main.dart.js": "4f6880c20a422ceec40d528c8333f63a",
"manifest.json": "ca4bcd14dd56aa05ae88596ad7af332f",
"version.json": "ee4b3b70baa3b2d270d6c5bb31e13590"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
