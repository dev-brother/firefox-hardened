// Recommended Settings for hardening firefox
// https://github.com/swordsteel/firefox-debloat-scripted

// for info on using user.js - http://kb.mozillazine.org/User.js_file

// Leaks the browsing history to Google. Note that disabling Safe Browsing exposes you to a risk of not being stopped from visiting malicious or phishing sites.
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);

// Firefox stats collecting
// [Stability and performance reports.](https://www.mozilla.org/en-US/privacy/firefox///health-report)
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);

// Telemetry data gathering
// [Usage statistics.](https://www.mozilla.org/en-US/privacy/firefox///telemetry)
user_pref("toolkit.telemetry.enabled", false);

// A binary plugin (closed-source) is shipped with Firefox since v38. It enables playback of encrypted media and lets you use e.g. Netflix without Microsoft Silverlight. To completely remove the plugin you would have to install an [EME-free](http://download.cdn.mozilla.net/pub/firefox/releases/latest/win32-EME-free/) build of Firefox.
// [Encrypted Media Extensions (DRM)](https://wiki.mozilla.org/Media/EME)
user_pref("media.eme.enabled", false);
user_pref("media.gmp-eme-adobe.enabled", false);

// Firefox connects to third-party (Telefonica) servers without asking for permission.
// [Firefox Hello](https://support.mozilla.org/en-US/kb/firefox-hello-video-and-voice-conversations-online)
user_pref("loop.enabled", false);

// A third-party service for managing a reading list of articles.
//Enhance our privacy but removing connections to third-parties in the browser.
// [Pocket integration](https://support.mozilla.org/en-US/kb/save-web-pages-later-pocket-firefox)
user_pref("browser.pocket.enabled", "");
// Then erase value for
user_pref("browser.pocket.api", "");
user_pref("browser.pocket.oAuthConsumerKey", "");
user_pref("browser.pocket.site", "");
user_pref("geo.wifi.uri", "");
user_pref("browser.safebrowsing.appRepURL", "");
user_pref("browser.safebrowsing.gethashURL", "");
user_pref("browser.safebrowsing.malware.reportURL", "");
user_pref("browser.safebrowsing.reportURL", "");
user_pref("browser.safebrowsing.updateURL", "");

// Search suggestions
// Everything you type in the search box is sent to the search engine. Suggestions based on local history will still work.
user_pref("browser.search.suggest.enabled", false);

// Leaks the real IP when using VPN/TOR. [Description and demo](https://github.com/diafygi/webrtc-ips)
// [WebRTC](https://wiki.mozilla.org/Media/WebRTC)
// can be exploited via Javascript to track your real location
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.identity.timeout", 1);

// Geolocation
// Do not tell servers where we are (geolocation) or which page we were viewing before visiting their site. In addition, // let's reduce websites' permission to store things in our computers:
user_pref("geo.enabled", false);
user_pref("network.http.sendSecureXSiteReferrer", false);
user_pref("network.http.speculative-parallel-limit", 0);
// few sites may not work properly if the "referrer header" or the "dom.storage.enabled" value are changed. If this ever // happens to you, modify the option back to its default value, 2 or true, to make that web page work
user_pref("network.http.sendRefererHeader", 0);
user_pref("dom.storage.enabled", false);
// You may need to create a boolean for the value below
user_pref("geo.wifi.logging.enabled", false);


// Disable location bar search
// When you type an invalid URL into Firefox's address bar and hit enter (or mistakenly use the location bar in place of // the search box), Firefox's default behavior is to send this information to Google as a search query, whereupon Google // shows you results for the invalid URL
user_pref("keyword.enabled", false);

// Disable websites' control of our clipboard or right-click context menu. Leave this as true if you want to copy paste.
user_pref("dom.event.clipboardevents.enabled", false);
user_pref("dom.event.contextmenu.enabled", false);

// Disable WebGL, potential 

// TLS Oh yeah! Nuf said!
user_pref("security.tls.version.min", 1);

// type "security.ssl3" and change everything to false except the following entries to true
// The first one works against the SSL3 "Poodle" vulnerability, the next three against the Logjam Attack, the last ones // disables RC4, an insecure encryption method.
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256", true);
user_pref("security.ssl3.ecdhe_rsa_aes_128_gcm_sha256", true);
user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", true);
user_pref("security.ssl3.rsa_aes_256_sha", true);
// Set following to false
user_pref("security.ssl3.dhe_dss_aes_128_sha", false);
user_pref("security.ssl3.dhe_dss_aes_256_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
user_pref("security.ssl3.dhe_rsa_camellia_128_sha", false);
user_pref("security.ssl3.dhe_rsa_camellia_256_sha", false);
user_pref("security.ssl3.dhe_rsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha", false);
user_pref("security.ssl3.rsa_aes_128_sha", false);
user_pref("security.ssl3.rsa_camellia_128_sha", false);
user_pref("security.ssl3.rsa_camellia_256_sha", false);
user_pref("security.ssl3.rsa_des_ede3_sha", false);
user_pref("security.ssl3.rsa_rc4_128_md5", false);
user_pref("security.ssl3.rsa_rc4_128_sha", false);

// Speed stuff
// Firefox has been programmed to try to guess which web page you want to see next and to start downloading its contents // (prefetch) and to send a signal to the site once you stop seeing a said web page (beacon). With the options above,
// you disable these activities. Firefox will only open the web pages you ask it to open.
// Create a boolean value if you don't find it.
user_pref("network.dns.disablePrefetch", true);
user_pref("network.prefetch-next", false);
user_pref("beacon.enabled", false);
// Firefox stores your current session (the set of web pages you have open) every 15 seconds "just in case" something
// happens. Slowing it down to half a minute or a full minute gets you a slightly faster overall performance.
// Create
user_pref("content.notify.ontimer boolean setting", true);
// integer setting, and set it to any number above 500000
user_pref("content.notify.interval", 510000);
// 30000 or 60000
user_pref("browser.sessionstore.interval", 30000);

// it is generally not suggested to disable the check for updates as security issues will get fixed regularly by browser updates. This is only for hardcore folks.
// Disable addon updates
user_pref("app.update.enabled", false);
user_pref("app.update.auto", false);
user_pref("browser.search.update", false);
user_pref("extensions.update.enabled", false);
// Caution
user_pref("extensions.blocklist.enabled", false);
// Disable search and addon suggestions
user_pref("extensions.webservice.discoverURL", "http://127.0.0.1");
user_pref("browser.search.suggest.enabled", false);

// Disable Seer 
// Seer is a component of Necko Predictive Network Actions. It keeps track of components that were loaded during the
// visit of a page on the Internet so that the browser knows next time which resources to request from the web server.
user_pref("network.seer.enabled", false);

// Add-on metadata updating: Firefox displays information about each add-on that you have installed in the browser. 
// You can click on the more link for instance in the add-on manager to display the author's description. 
// This feature checks for updates to those information.
user_pref("extensions.getAddons.cache.enabled", false);

// Send Video to Device: Firefox sends Simple Service Discovery Protocol packages to discover casting devices such as 
// Chromecast or Roku automatically to the local network.
user_pref("browser.casting.enabled", false);



