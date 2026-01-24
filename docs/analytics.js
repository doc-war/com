//通用的统计代码集成，各页面一行代码继承
//<script src="/analytics.js" defer></script>


// Google Analytics
(function () {
  var gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-35NVTJRXGL';
  document.head.appendChild(gtagScript);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', 'G-35NVTJRXGL');
})();

// Baidu Analytics
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?795b4ac94c7ceb06937c0c4880eb0f0d";
  document.head.appendChild(hm);
})();
