
/**
 * 通用的百度统计加载器，适用于多个域名共用同一套代码。
 * 使用方法：将以下代码放在你网页的 <head> 标签中，确保它在其他统计代码之前加载。
 * <script src="https://doc-war.com/analytics-loader.js"  async></script>
 *  */ 
window._hmt = window._hmt || [];

(function() {
  // 1. 获取当前网页的纯域名（例如：www.shaodong-keji.com 或 sub.other-domain.cn）
  var currentHost = window.location.hostname.toLowerCase(); 
  var targetId = "";

  // 2. 核心映射表：建议使用「根域名」作为 Key
  var config = {
    "shaodong-keji.com": "4afa3314f1ae1a6e14fd55e6064ca4df",// 这个 ID 适用于 shaodong-keji.com 以及它的所有子域名
    // "other-domain.com": "第二个域名的百度ID",
    // "another-site.cn": "第三个域名的百度ID"
  };

  // 3. 动态匹配：确保 sub.shaodong-keji.com 或 www.shaodong-keji.com 都能正确匹配到 shaodong-keji.com
  for (var domain in config) {
    if (config.hasOwnProperty(domain)) {
      // 判断当前域名是否以配置的域名结尾，或者完全相等
      if (currentHost === domain || currentHost.endsWith("." + domain)) {
        targetId = config[domain];
        break; // 匹配到了就跳出循环
      }
    }
  }

  // 4. 执行加载
  if (targetId) {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?" + targetId; 
    hm.async = true;
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  } else {
    // 提示：方便你本地开发或者新域名上线调试时排查
    console.warn("[Analytics Loader] 未能匹配到当前域名 " + currentHost + " 的统计KEY配置。");
  }
})();