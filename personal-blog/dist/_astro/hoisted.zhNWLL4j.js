import"./hoisted.Bij1AwUQ.js";window.addEventListener("load",()=>{"PerformanceObserver"in window&&new PerformanceObserver(n=>{for(const t of n.getEntries())t.entryType==="largest-contentful-paint"&&console.log("LCP:",t.startTime),t.entryType==="first-input"&&console.log("FID:",t.processingStart-t.startTime),t.entryType==="layout-shift"&&console.log("CLS:",t.value)}).observe({entryTypes:["largest-contentful-paint","first-input","layout-shift"]});const o=performance.timing.loadEventEnd-performance.timing.navigationStart;console.log("Page Load Time:",o+"ms")});class l{constructor(){this.metrics={},this.observers=[],this.init()}init(){this.setupCoreWebVitals(),this.setupCustomMetrics(),this.setupErrorTracking(),this.setupResourceTiming()}setupCoreWebVitals(){if("PerformanceObserver"in window){const e=new PerformanceObserver(s=>{const i=s.getEntries(),a=i[i.length-1];this.metrics.lcp=a.startTime,this.reportMetric("LCP",a.startTime)});e.observe({entryTypes:["largest-contentful-paint"]});const n=new PerformanceObserver(s=>{s.getEntries().forEach(a=>{const c=a.processingStart-a.startTime;this.metrics.fid=c,this.reportMetric("FID",c)})});n.observe({entryTypes:["first-input"]});let t=0;const r=new PerformanceObserver(s=>{s.getEntries().forEach(a=>{a.hadRecentInput||(t+=a.value,this.metrics.cls=t,this.reportMetric("CLS",t))})});r.observe({entryTypes:["layout-shift"]}),this.observers.push(e,n,r)}}setupCustomMetrics(){const e=performance.getEntriesByType("navigation")[0];if(e){const t=e.responseStart-e.requestStart;this.metrics.ttfb=t,this.reportMetric("TTFB",t)}const n=performance.getEntriesByName("first-contentful-paint")[0];n&&(this.metrics.fcp=n.startTime,this.reportMetric("FCP",n.startTime)),window.addEventListener("load",()=>{const t=performance.timing.loadEventEnd-performance.timing.navigationStart;this.metrics.loadTime=t,this.reportMetric("LoadTime",t)})}setupErrorTracking(){window.addEventListener("error",e=>{this.reportError("JavaScript Error",{message:e.message,filename:e.filename,lineno:e.lineno,colno:e.colno})}),window.addEventListener("unhandledrejection",e=>{this.reportError("Unhandled Promise Rejection",{reason:e.reason})}),window.addEventListener("error",e=>{e.target&&e.target.tagName&&this.reportError("Resource Loading Error",{tagName:e.target.tagName,src:e.target.src||e.target.href})},!0)}setupResourceTiming(){if("PerformanceObserver"in window){const e=new PerformanceObserver(n=>{n.getEntries().forEach(r=>{r.duration>2e3&&this.reportMetric("SlowResource",{name:r.name,duration:r.duration,size:r.transferSize})})});e.observe({entryTypes:["resource"]}),this.observers.push(e)}}reportMetric(e,n){typeof gtag<"u"&&gtag("event","performance_metric",{metric_name:e,metric_value:n,page_url:window.location.href});const t=JSON.parse(localStorage.getItem("performance_metrics")||"{}");t[e]=n,localStorage.setItem("performance_metrics",JSON.stringify(t))}reportError(e,n){typeof gtag<"u"&&gtag("event","exception",{description:e,fatal:!1,custom_map:n})}getMetrics(){return this.metrics}getScore(){const e={lcp:this.getLCPScore(),fid:this.getFIDScore(),cls:this.getCLSScore()};return{scores:e,average:Object.values(e).reduce((n,t)=>n+t,0)/Object.keys(e).length}}getLCPScore(){const e=this.metrics.lcp;return e<=2500?1:e<=4e3?.5:0}getFIDScore(){const e=this.metrics.fid;return e<=100?1:e<=300?.5:0}getCLSScore(){const e=this.metrics.cls;return e<=.1?1:e<=.25?.5:0}destroy(){this.observers.forEach(e=>e.disconnect())}}window.performanceMonitor=new l;window.getPerformanceMetrics=()=>window.performanceMonitor.getMetrics();window.getPerformanceScore=()=>window.performanceMonitor.getScore();window.addEventListener("online",()=>{document.getElementById("offline-indicator").classList.add("hidden")});window.addEventListener("offline",()=>{document.getElementById("offline-indicator").classList.remove("hidden")});navigator.onLine||document.getElementById("offline-indicator").classList.remove("hidden");const d=`
    const CACHE_NAME = 'astro-blog-v1';
    const urlsToCache = [
      '/',
      '/blog',
      '/about',
      '/contact',
      '/styles.css',
      '/scripts.js',
      '/favicon.svg',
      '/manifest.json'
    ];

    // Install event - cache resources
    self.addEventListener('install', event => {
      event.waitUntil(
        caches.open(CACHE_NAME)
          .then(cache => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
          })
      );
    });

    // Fetch event - serve from cache, fallback to network
    self.addEventListener('fetch', event => {
      event.respondWith(
        caches.match(event.request)
          .then(response => {
            // Return cached version or fetch from network
            return response || fetch(event.request)
              .then(response => {
                // Check if we received a valid response
                if (!response || response.status !== 200 || response.type !== 'basic') {
                  return response;
                }

                // Clone the response
                const responseToCache = response.clone();

                caches.open(CACHE_NAME)
                  .then(cache => {
                    cache.put(event.request, responseToCache);
                  });

                return response;
              });
          })
      );
    });

    // Activate event - clean up old caches
    self.addEventListener('activate', event => {
      event.waitUntil(
        caches.keys().then(cacheNames => {
          return Promise.all(
            cacheNames.map(cacheName => {
              if (cacheName !== CACHE_NAME) {
                console.log('Deleting old cache:', cacheName);
                return caches.delete(cacheName);
              }
            })
          );
        })
      );
    });

    // Background sync for offline content
    self.addEventListener('sync', event => {
      if (event.tag === 'background-sync') {
        event.waitUntil(doBackgroundSync());
      }
    });

    // Push notifications
    self.addEventListener('push', event => {
      const options = {
        body: event.data ? event.data.text() : 'New content available!',
        icon: '/icon-192x192.png',
        badge: '/badge-72x72.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        },
        actions: [
          {
            action: 'explore',
            title: 'View',
            icon: '/icon-192x192.png'
          },
          {
            action: 'close',
            title: 'Close',
            icon: '/icon-192x192.png'
          }
        ]
      };

      event.waitUntil(
        self.registration.showNotification('Blog Update', options)
      );
    });

    // Notification click
    self.addEventListener('notificationclick', event => {
      event.notification.close();

      if (event.action === 'explore') {
        event.waitUntil(
          clients.openWindow('/')
        );
      }
    });

    // Background sync function
    async function doBackgroundSync() {
      try {
        // Sync any pending data
        const response = await fetch('/api/sync', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            timestamp: Date.now(),
            data: 'offline_data'
          })
        });

        if (response.ok) {
          console.log('Background sync successful');
        }
      } catch (error) {
        console.error('Background sync failed:', error);
      }
    }

    // Cache strategies
    const cacheStrategies = {
      // Cache first, fallback to network
      cacheFirst: async (request) => {
        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(request);
        
        if (cachedResponse) {
          return cachedResponse;
        }
        
        try {
          const networkResponse = await fetch(request);
          cache.put(request, networkResponse.clone());
          return networkResponse;
        } catch (error) {
          return new Response('Offline content not available', {
            status: 503,
            statusText: 'Service Unavailable'
          });
        }
      },

      // Network first, fallback to cache
      networkFirst: async (request) => {
        try {
          const networkResponse = await fetch(request);
          const cache = await caches.open(CACHE_NAME);
          cache.put(request, networkResponse.clone());
          return networkResponse;
        } catch (error) {
          const cachedResponse = await caches.match(request);
          if (cachedResponse) {
            return cachedResponse;
          }
          return new Response('Offline content not available', {
            status: 503,
            statusText: 'Service Unavailable'
          });
        }
      },

      // Stale while revalidate
      staleWhileRevalidate: async (request) => {
        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(request);
        
        const fetchPromise = fetch(request).then(networkResponse => {
          cache.put(request, networkResponse.clone());
          return networkResponse;
        });
        
        return cachedResponse || fetchPromise;
      }
    };

    // Route specific caching strategies
    const routeStrategies = {
      '/': cacheStrategies.cacheFirst,
      '/blog': cacheStrategies.networkFirst,
      '/api/': cacheStrategies.networkFirst,
      '/images/': cacheStrategies.cacheFirst,
      '/fonts/': cacheStrategies.cacheFirst
    };

    // Enhanced fetch with route-based strategies
    self.addEventListener('fetch', event => {
      const url = new URL(event.request.url);
      const path = url.pathname;
      
      // Find matching strategy
      let strategy = cacheStrategies.networkFirst; // default
      
      for (const [route, routeStrategy] of Object.entries(routeStrategies)) {
        if (path.startsWith(route)) {
          strategy = routeStrategy;
          break;
        }
      }
      
      event.respondWith(strategy(event.request));
    });
  `,u=new Blob([d],{type:"application/javascript"}),f=URL.createObjectURL(u);"serviceWorker"in navigator&&navigator.serviceWorker.register(f).then(o=>{console.log("Service Worker registered successfully")}).catch(o=>{console.error("Service Worker registration failed:",o)});"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(o=>{console.log("SW registered: ",o)}).catch(o=>{console.log("SW registration failed: ",o)})});document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("analytics_consent")===null&&{privacyMode}&&setTimeout(()=>{const e=document.getElementById("privacy-banner");e&&e.classList.remove("translate-y-full")},2e3)});class h{constructor(){this.init()}init(){this.setupKeyboardNavigation(),this.setupARIALabels(),this.setupLiveRegions(),this.setupColorContrast(),this.setupReducedMotion(),this.setupFocusManagement()}setupKeyboardNavigation(){document.addEventListener("keydown",e=>{e.key==="Escape"&&this.closeAllModals(),e.key==="Tab"&&this.handleTabNavigation(e),(e.key==="ArrowDown"||e.key==="ArrowUp")&&this.handleArrowNavigation(e)})}setupARIALabels(){document.querySelectorAll("img:not([alt])").forEach(r=>{r.alt||(r.alt="Image")}),document.querySelectorAll("button:not([aria-label])").forEach(r=>{r.textContent.trim()||r.setAttribute("aria-label","Button")}),document.querySelectorAll("a:not([aria-label])").forEach(r=>{r.textContent.trim()||r.setAttribute("aria-label","Link")})}setupLiveRegions(){const e=document.createElement("div");e.setAttribute("aria-live","polite"),e.setAttribute("aria-atomic","true"),e.className="sr-only",document.body.appendChild(e),this.liveRegion=e}setupColorContrast(){const e=()=>{document.querySelectorAll("*").forEach(t=>{const r=window.getComputedStyle(t),s=r.backgroundColor,i=r.color;s&&i&&console.log("Contrast check for:",t.tagName)})};window.addEventListener("load",e)}setupReducedMotion(){const e=window.matchMedia("(prefers-reduced-motion: reduce)");e.matches&&document.documentElement.classList.add("reduced-motion"),e.addEventListener("change",n=>{n.matches?document.documentElement.classList.add("reduced-motion"):document.documentElement.classList.remove("reduced-motion")})}setupFocusManagement(){let e=null;document.addEventListener("focusin",n=>{e=n.target}),this.restoreFocus=()=>{e&&e.focus&&e.focus()}}handleTabNavigation(e){const n=document.querySelector('[role="dialog"]');if(n&&n.contains(e.target)){const t=n.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),r=t[0],s=t[t.length-1];e.shiftKey&&e.target===r?(e.preventDefault(),s.focus()):!e.shiftKey&&e.target===s&&(e.preventDefault(),r.focus())}}handleArrowNavigation(e){const n=e.target.closest('[role="listbox"]');if(n){const t=n.querySelectorAll('[role="option"]'),r=Array.from(t).findIndex(i=>i.getAttribute("aria-selected")==="true");let s=r;e.key==="ArrowDown"?s=Math.min(r+1,t.length-1):e.key==="ArrowUp"&&(s=Math.max(r-1,0)),s!==r&&(t[r]?.setAttribute("aria-selected","false"),t[s]?.setAttribute("aria-selected","true"),t[s]?.focus())}}closeAllModals(){document.querySelectorAll('[role="dialog"]').forEach(n=>{const t=n.querySelector('[aria-label*="close"], [aria-label*="Close"]');t&&t.click()})}announceToScreenReader(e){this.liveRegion&&(this.liveRegion.textContent=e,setTimeout(()=>{this.liveRegion.textContent=""},1e3))}isVisible(e){const n=e.getBoundingClientRect();return n.width>0&&n.height>0}getFocusableElements(e=document){return e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')}setFocusTrap(e){const n=this.getFocusableElements(e),t=n[0],r=n[n.length-1];e.addEventListener("keydown",s=>{s.key==="Tab"&&(s.shiftKey&&s.target===t?(s.preventDefault(),r.focus()):!s.shiftKey&&s.target===r&&(s.preventDefault(),t.focus()))})}}document.addEventListener("DOMContentLoaded",()=>{window.accessibility=new h});
