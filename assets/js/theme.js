function loadFontAwesomeCSS(){const e=document.createElement("link");e.rel="stylesheet",e.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",document.head.appendChild(e)}function successCallback(e){
  // Call the reverse geocoding function to get the city name
  reverseGeocode(e.coords.latitude,e.coords.longitude)}function errorCallback(e){document.getElementById("location").innerHTML="Unable to retrieve your location."}function reverseGeocode(e,t){
  // Make an API request
  fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${e}&lon=${t}`).then((e=>e.json())).then((e=>{const t=e.address.city,o=e.address.country,r=t?`${t}, ${o}`:o;
  // Update the location element with the city and country information
  document.getElementById("location").innerHTML=`<i class="fas fa-map-marker-alt"></i> ${r}`})).catch((e=>{document.getElementById("location").innerHTML="Error fetching location data.",console.error(e)}));
  // Get the visitorId when you need it.
  import("https://fpjscdn.net/v3/Cvj1RAxgKnVqgk3t8p9H").then((e=>e.load())).then((e=>e.get())).then((e=>{const t=e.visitorId;console.log(t);const o=t,r=function getVisitCount(e){
  // Check if the visitorId is already stored in the local storage
  const t=localStorage.getItem(e);let o=0;t&&(o=parseInt(t));
  // Increment the visit count and store it in the local storage
  return o++,localStorage.setItem(e,o),o}(t);document.getElementById("visit-summary").innerHTML=`<i class="fas fa-eye"></i> You visited  ${r} Times.`,document.getElementById("fingerprint").innerHTML=`<i class="fas fa-fingerprint"></i> ${o}`}))}window.onload=function(){
  // Load Font Awesome CSS dynamically
  loadFontAwesomeCSS(),
  // Check if geolocation is available in the browser
  "geolocation"in navigator?navigator.geolocation.getCurrentPosition(successCallback,errorCallback):document.getElementById("location").innerHTML="Geolocation is not available in your browser."};var theme={
  /**
     * Theme's components/functions list
     * Comment out or delete the unnecessary component.
     * Some components have dependencies (plugins).
     * Do not forget to remove dependency from src/js/vendor/ and recompile.
     */
  init:function(){theme.stickyHeader(),theme.subMenu(),theme.offCanvas(),theme.isotope(),theme.onepageHeaderOffset(),theme.spyScroll(),theme.anchorSmoothScroll(),theme.svgInject(),theme.backgroundImage(),theme.backgroundImageMobile(),theme.imageHoverOverlay(),theme.rellax(),theme.scrollCue(),theme.swiperSlider(),theme.lightbox(),theme.plyr(),theme.progressBar(),theme.loader(),theme.pageProgress(),theme.counterUp(),theme.bsTooltips(),theme.bsPopovers(),theme.bsModal(),theme.iTooltip(),theme.forms(),theme.passVisibility(),theme.pricingSwitcher(),theme.textRotator(),theme.codeSnippet()},
  /**
     * Sticky Header
     * Enables sticky behavior on navbar on page scroll
     * Requires assets/js/vendor/headhesive.min.js
     */
  stickyHeader:()=>{if(null!=document.querySelector(".navbar"))new Headhesive(".navbar",{offset:350,offsetSide:"top",classes:{clone:"navbar-clone fixed",stick:"navbar-stick",unstick:"navbar-unstick"},onStick:function(){var e=this.clonedElem.classList;e.contains("transparent")&&e.contains("navbar-dark")&&(this.clonedElem.className=this.clonedElem.className.replace("navbar-dark","navbar-light"))}})},
  /**
     * Sub Menus
     * Enables multilevel dropdown
     */
  subMenu:()=>{!function(e){const t="has-child-dropdown-show";var o;e.Dropdown.prototype.toggle=(o=e.Dropdown.prototype.toggle,function(){document.querySelectorAll("."+t).forEach((function(e){e.classList.remove(t)}));let e=this._element.closest(".dropdown").parentNode.closest(".dropdown");for(;e&&e!==document;e=e.parentNode.closest(".dropdown"))e.classList.add(t);return o.call(this)}),document.querySelectorAll(".dropdown").forEach((function(e){e.addEventListener("hide.bs.dropdown",(function(e){this.classList.contains(t)&&(this.classList.remove(t),e.preventDefault()),e.stopPropagation()}))}))}(bootstrap)},
  /**
     * Offcanvas
     * Enables offcanvas-nav, closes offcanvas on anchor clicks, focuses on input in search offcanvas
     */
  offCanvas:()=>{if(null==document.querySelector(".navbar"))return;const e=document.querySelectorAll(".offcanvas-nav-btn"),t=document.querySelector(".navbar:not(.navbar-clone) .offcanvas-nav"),o=new bootstrap.Offcanvas(t,{scroll:!0}),r=document.querySelectorAll(".onepage .navbar li a.scroll"),n=document.getElementById("offcanvas-search");e.forEach((e=>{e.addEventListener("click",(e=>{o.show()}))})),r.forEach((e=>{e.addEventListener("click",(e=>{o.hide()}))})),null!=n&&n.addEventListener("shown.bs.offcanvas",(function(){document.getElementById("search-form").focus()}))},
  /**
     * Isotope
     * Enables isotope grid layout and filtering
     * Requires assets/js/vendor/isotope.pkgd.min.js
     * Requires assets/js/vendor/imagesloaded.pkgd.min.js
     */
  isotope:()=>{var e=document.querySelectorAll(".grid");null!=e&&e.forEach((e=>{var t=e.querySelector(".isotope"),o=e.querySelector(".isotope-filter"),r=e.querySelectorAll(".isotope-filter"),n=new Isotope(t,{itemSelector:".item",layoutMode:"masonry",masonry:{columnWidth:t.offsetWidth/12},percentPosition:!0,transitionDuration:"0.7s"});if(imagesLoaded(t).on("progress",(function(){n.layout({masonry:{columnWidth:t.offsetWidth/12}})})),window.addEventListener("resize",(function(){n.arrange({masonry:{columnWidth:t.offsetWidth/12}})}),!0),null!=o){o.addEventListener("click",(function(e){if(matchesSelector(e.target,".filter-item")){var t=e.target.getAttribute("data-filter");n.arrange({filter:t})}}));for(var a=0,i=r.length;a<i;a++){var l=r[a];l.addEventListener("click",(function(e){matchesSelector(e.target,".filter-item")&&(l.querySelector(".active").classList.remove("active"),e.target.classList.add("active"))}))}}}))},
  /**
     * Onepage Header Offset
     * Adds an offset value to anchor point equal to sticky header height on a onepage
     */
  onepageHeaderOffset:()=>{if(null==document.querySelector(".navbar"))return;const e=document.querySelector(".navbar").offsetHeight;document.querySelectorAll(".onepage section").forEach((e=>{e.style.paddingTop="75px",e.style.marginTop="-75px"}));const t=document.querySelector(".onepage section:first-of-type");null!=t&&(t.style.paddingTop=e+"px",t.style.marginTop="-"+e+"px")},
  /**
     * Spy Scroll
     * Highlights the active nav link while scrolling through sections
     */
  spyScroll:()=>{let e=document.querySelectorAll("section[id]"),t=document.querySelectorAll(".nav-link.scroll");window.onscroll=()=>{e.forEach((e=>{let o=window.scrollY,r=e.offsetTop-0,n=e.offsetHeight,a=e.getAttribute("id");//returns the number of pixels that the document is currently scrolled vertically.
  //gets the value of an attribute of an element
  o>=r&&o<r+n&&t.forEach((e=>{e.classList.remove("active"),document.querySelector(`.nav-link.scroll[href*=${a}]`).classList.add("active")}
  //[att*=val] Represents an element with the att attribute whose value contains at least one instance of the substring "val". If "val" is the empty string then the selector does not represent anything.
  ))}))}},
  /**
     * Anchor Smooth Scroll
     * Adds smooth scroll animation to links with .scroll class
     * Requires assets/js/vendor/smoothscroll.js
     */
  anchorSmoothScroll:()=>{const e=document.querySelectorAll(".scroll");for(const t of e)t.addEventListener("click",clickHandler);function clickHandler(e){e.preventDefault(),this.blur();const t=this.getAttribute("href"),o=document.querySelector(t).offsetTop;scroll({top:o,behavior:"smooth"})}},
  /**
     * SVGInject
     * Replaces an img element with an inline SVG so you can apply colors to your SVGs
     * Requires assets/js/vendor/svg-inject.min.js
     */
  svgInject:()=>{SVGInject.setOptions({onFail:function(e,t){e.classList.remove("svg-inject")}}),document.addEventListener("DOMContentLoaded",(function(){SVGInject(document.querySelectorAll("img.svg-inject"),{useCache:!0})}))},
  /**
     * Background Image
     * Adds a background image link via data attribute "data-image-src"
     */
  backgroundImage:()=>{for(var e=document.querySelectorAll(".bg-image"),t=0;t<e.length;t++){var o=e[t].getAttribute("data-image-src");e[t].style.backgroundImage="url('"+o+"')"}},
  /**
     * Background Image Mobile
     * Adds .mobile class to background images on mobile devices for styling purposes
     */
  backgroundImageMobile:()=>{!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i))&&document.querySelectorAll(".image-wrapper").forEach((e=>{e.classList.add("mobile")}))},
  /**
     * Image Hover Overlay
     * Adds span.bg inside .overlay for simpler markup and styling purposes
     */
  imageHoverOverlay:()=>{for(var e=document.querySelectorAll(".overlay > a, .overlay > span"),t=0;t<e.length;t++){var o=document.createElement("span");o.className="bg",e[t].appendChild(o)}},
  /**
     * Rellax.js
     * Adds parallax animation to shapes and elements
     * Requires assets/js/vendor/rellax.min.js
     */
  rellax:()=>{null!=document.querySelector(".rellax")&&(window.onload=function(){var e=new Rellax(".rellax",{speed:2,center:!0,breakpoints:[576,992,1201]}),t=document.querySelectorAll(".projects-overflow");imagesLoaded(t,(function(){e.refresh()}))})},
  /**
     * scrollCue.js
     * Enables showing elements by scrolling
     * Requires assets/js/vendor/scrollCue.min.js
     */
  scrollCue:()=>{scrollCue.init({interval:-400,duration:700,percentage:.8}),scrollCue.update()},
  /**
     * Swiper Slider
     * Enables carousels and sliders
     * Requires assets/js/vendor/swiper-bundle.min.js
     */
  swiperSlider:function(){for(var e=document.querySelectorAll(".swiper-container"),t=0;t<e.length;t++){var o=e[t];o.classList.add("swiper-container-"+t);var r=document.createElement("div");r.className="swiper-controls";var n=document.createElement("div");n.className="swiper-pagination";var a=document.createElement("div");a.className="swiper-navigation";var i=document.createElement("div");i.className="swiper-button swiper-button-prev";var l=document.createElement("div");l.className="swiper-button swiper-button-next",o.appendChild(r),r.appendChild(a),a.appendChild(i),a.appendChild(l),r.appendChild(n);var s=o.getAttribute("data-effect")?o.getAttribute("data-effect"):"slide";if("true"===o.getAttribute("data-items-auto"))var c="auto",d=null;else{var u=o.getAttribute("data-items")?o.getAttribute("data-items"):3,m=o.getAttribute("data-items-xs")?o.getAttribute("data-items-xs"):1,p=o.getAttribute("data-items-sm")?o.getAttribute("data-items-sm"):Number(m),g=o.getAttribute("data-items-md")?o.getAttribute("data-items-md"):Number(p),h=o.getAttribute("data-items-lg")?o.getAttribute("data-items-lg"):Number(g),f=o.getAttribute("data-items-xl")?o.getAttribute("data-items-xl"):Number(h),v=o.getAttribute("data-items-xxl")?o.getAttribute("data-items-xxl"):Number(f);// items in all devices
  c=u,d={0:{slidesPerView:Number(m)},576:{slidesPerView:Number(p)},768:{slidesPerView:Number(g)},992:{slidesPerView:Number(h)},1200:{slidesPerView:Number(f)},1400:{slidesPerView:Number(v)}}}var b=o.getAttribute("data-speed")?o.getAttribute("data-speed"):500,y=(o.getAttribute("data-autoplay"),o.getAttribute("data-autoplaytime")?o.getAttribute("data-autoplaytime"):5e3),w="true"===o.getAttribute("data-autoheight"),S="false"!==o.getAttribute("data-resizeupdate"),A="false"!==o.getAttribute("data-drag"),E="true"===o.getAttribute("data-reverse"),q=o.getAttribute("data-margin")?o.getAttribute("data-margin"):30,L="true"===o.getAttribute("data-loop"),k="true"===o.getAttribute("data-centered"),C=o.querySelector(".swiper:not(.swiper-thumbs)"),x=o.querySelector(".swiper-thumbs"),T=new Swiper(x,{slidesPerView:5,spaceBetween:10,loop:!1,threshold:2,slideToClickedSlide:!0});if("true"===o.getAttribute("data-thumbs")){var I=T,N=document.createElement("div");N.className="swiper-main",C.parentNode.insertBefore(N,C),N.appendChild(C),o.removeChild(r),N.appendChild(r)}else I=null;new Swiper(C,{on:{beforeInit:function(){"true"!==o.getAttribute("data-nav")&&"true"!==o.getAttribute("data-dots")&&r.remove(),"true"!==o.getAttribute("data-dots")&&n.remove(),"true"!==o.getAttribute("data-nav")&&a.remove()},init:function(){"true"!==o.getAttribute("data-autoplay")&&this.autoplay.stop(),this.update()}},autoplay:{delay:y,disableOnInteraction:!1,reverseDirection:E,pauseOnMouseEnter:!1},allowTouchMove:A,speed:parseInt(b),slidesPerView:c,loop:L,centeredSlides:k,spaceBetween:Number(q),effect:s,autoHeight:w,grabCursor:!0,resizeObserver:!1,updateOnWindowResize:S,breakpoints:d,pagination:{el:e[t].querySelector(".swiper-pagination"),clickable:!0},navigation:{prevEl:o.querySelector(".swiper-button-prev"),nextEl:o.querySelector(".swiper-button-next")},thumbs:{swiper:I}})}},
  /**
     * GLightbox
     * Enables lightbox functionality
     * Requires assets/js/vendor/glightbox.js
     */
  lightbox:()=>{GLightbox({selector:"*[data-glightbox]",touchNavigation:!0,loop:!1,zoomable:!1,autoplayVideos:!0,moreLength:0,slideExtraAttributes:{poster:""},plyr:{css:"",js:"",config:{ratio:"",fullscreen:{enabled:!1,iosNative:!1},youtube:{noCookie:!0,rel:0,showinfo:0,iv_load_policy:3},vimeo:{byline:!1,portrait:!1,title:!1,transparent:!1}}}})},
  /**
     * Plyr
     * Enables media player
     * Requires assets/js/vendor/plyr.js
     */
  plyr:()=>{Plyr.setup(".player",{loadSprite:!0})},
  /**
     * Progressbar
     * Enables animated progressbars
     * Requires assets/js/vendor/progressbar.min.js
     * Requires assets/js/vendor/noframework.waypoints.min.js
     */
  progressBar:()=>{const e=document.querySelectorAll(".progressbar.line"),t=document.querySelectorAll(".progressbar.semi-circle");e.forEach((e=>{var t=new ProgressBar.Line(e,{strokeWidth:6,trailWidth:6,duration:3e3,easing:"easeInOut",text:{style:{color:"inherit",position:"absolute",right:"0",top:"-30px",padding:0,margin:0,transform:null},autoStyleContainer:!1},step:(e,t)=>{t.setText(Math.round(100*t.value())+" %")}}),o=e.getAttribute("data-value")/100;new Waypoint({element:e,handler:function(){t.animate(o)},offset:"bottom-in-view"})})),t.forEach((e=>{var t=new ProgressBar.SemiCircle(e,{strokeWidth:6,trailWidth:6,duration:2e3,easing:"easeInOut",step:(e,t)=>{t.setText(Math.round(100*t.value()))}}),o=e.getAttribute("data-value")/100;new Waypoint({element:e,handler:function(){t.animate(o)},offset:"bottom-in-view"})}))},
  /**
     * Loader
     *
     */
  loader:()=>{var e=document.querySelector(".page-loader");null!=e&&(document.body.onload=function(){setTimeout((function(){e.classList.contains("done")||e.classList.add("done")}),1e3)})},
  /**
     * Page Progress
     * Shows page progress on the bottom right corner of pages
     */
  pageProgress:()=>{var e=document.querySelector(".progress-wrap");if(null!=e){var t=document.querySelector(".progress-wrap path"),o=t.getTotalLength();t.style.transition=t.style.WebkitTransition="none",t.style.strokeDasharray=o+" "+o,t.style.strokeDashoffset=o,t.getBoundingClientRect(),t.style.transition=t.style.WebkitTransition="stroke-dashoffset 10ms linear",window.addEventListener("scroll",(function(r){var n=document.body.scrollTop||document.documentElement.scrollTop,a=document.documentElement.scrollHeight-document.documentElement.clientHeight,i=o-n*o/a;t.style.strokeDashoffset=i,(document.body.scrollTop||document.documentElement.scrollTop)>=50?e.classList.add("active-progress"):e.classList.remove("active-progress")})),e.addEventListener("click",(function(e){e.preventDefault(),window.scroll({top:0,left:0,behavior:"smooth"})}))}},
  /**
     * Counter Up
     * Counts up to a targeted number when the number becomes visible
     * Requires assets/js/vendor/counterup.min.js
     * Requires assets/js/vendor/noframework.waypoints.min.js
     */
  counterUp:()=>{var e=window.counterUp.default;document.querySelectorAll(".counter").forEach((t=>{new Waypoint({element:t,handler:function(){e(t,{duration:1e3,delay:50}),this.destroy()},offset:"bottom-in-view"})}))},
  /**
     * Bootstrap Tooltips
     * Enables Bootstrap tooltips
     * Requires Poppers library
     */
  bsTooltips:()=>{[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function(e){return new bootstrap.Tooltip(e,{trigger:"hover"})})),[].slice.call(document.querySelectorAll('[data-bs-toggle="white-tooltip"]')).map((function(e){return new bootstrap.Tooltip(e,{customClass:"white-tooltip",trigger:"hover",placement:"left"})}))},
  /**
     * Bootstrap Popovers
     * Enables Bootstrap popovers
     * Requires Poppers library
     */
  bsPopovers:()=>{[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map((function(e){return new bootstrap.Popover(e)}))},
  /**
     * Bootstrap Modal
     * Enables Bootstrap modal popup
     */
  bsModal:()=>{if(null!=document.querySelector(".modal-popup")){var e=new bootstrap.Modal(document.querySelector(".modal-popup"));setTimeout((function(){e.show()}),200)}
  // Fixes jumping of page progress caused by modal
  var t=window.innerWidth-document.body.clientWidth,o=document.querySelectorAll(".modal"),r=document.querySelector(".navbar.fixed"),n=document.querySelector(".progress-wrap");o.forEach((e=>{e.addEventListener("show.bs.modal",(function(e){!function setPadding(){null!=r&&(r.style.paddingRight=t+"px"),null!=n&&(n.style.marginRight=t+"px")}()})),e.addEventListener("hidden.bs.modal",(function(e){!function removePadding(){null!=r&&(r.style.paddingRight=""),null!=n&&(n.style.marginRight="")}()}))}))},
  /**
     * iTooltip
     * Enables custom tooltip style for image hover docs/elements/hover.html
     * Requires assets/js/vendor/itooltip.min.js
     */
  iTooltip:()=>{new iTooltip(".itooltip").init({className:"itooltip-inner",indentX:15,indentY:15,positionX:"right",positionY:"bottom"})},
  /**
     * Form Validation and Contact Form submit
     * Bootstrap validation - Only sends messages if form has class ".contact-form" and is validated and shows success/fail messages
     */
  forms:()=>{!function(){"use strict";window.addEventListener("load",(function(){var e=document.querySelectorAll(".needs-validation"),t=document.querySelector("input[data-recaptcha]");window.verifyRecaptchaCallback=function(e){t.value=e,t.dispatchEvent(new Event("change"))},window.expiredRecaptchaCallback=function(){var e=document.querySelector("input[data-recaptcha]");e.value="",e.dispatchEvent(new Event("change"))};Array.prototype.filter.call(e,(function(e){e.addEventListener("submit",(function(t){if((!1===e.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.classList.add("was-validated"),!0===e.checkValidity())&&(t.preventDefault(),e.classList.remove("was-validated"),e.classList.contains("contact-form"))){var o=new FormData(e),r="alert-danger";fetch("assets/php/contact.php",{method:"post",body:o}).then((e=>(e.ok&&(r="alert-success"),e.text()))).then((t=>{var o='<div class="alert '+r+' alert-dismissible fade show"><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'+t+"</div>";r&&t&&(e.querySelector(".messages").insertAdjacentHTML("beforeend",o),e.reset(),grecaptcha.reset())})).catch((e=>{console.log(e)}))}}),!1)}))}),!1)}()},
  /**
     * Password Visibility Toggle
     * Toggles password visibility in password input
     */
  passVisibility:()=>{let e=document.querySelectorAll(".password-field");for(let t=0;t<e.length;t++){let o=e[t].querySelector(".form-control"),r=e[t].querySelector(".password-toggle > i");r.addEventListener("click",(e=>{"password"===o.type?(o.type="text",r.classList.remove("uil-eye"),r.classList.add("uil-eye-slash")):(o.type="password",r.classList.remove("uil-eye-slash"),r.classList.add("uil-eye"))}),!1)}},
  /**
     * Pricing Switcher
     * Enables monthly/yearly switcher seen on pricing tables
     */
  pricingSwitcher:()=>{if(null!=document.querySelector(".pricing-switchers")){document.querySelectorAll(".pricing-wrapper").forEach((e=>{const t=e.querySelector(".pricing-switchers"),o=e.querySelectorAll(".pricing-switcher"),r=e.querySelectorAll(".price");t.addEventListener("click",(e=>{o.forEach((e=>{e.classList.toggle("pricing-switcher-active")})),r.forEach((e=>{e.classList.remove("price-hidden"),e.classList.toggle("price-show"),e.classList.toggle("price-hide")}))}))}))}},
  /**
     * ReplaceMe.js
     * Enables text rotator
     * Requires assets/js/vendor/replaceme.min.js
     */
  textRotator:()=>{if(null!=document.querySelector(".rotator-zoom"))new ReplaceMe(document.querySelector(".rotator-zoom"),{animation:"animate__animated animate__zoomIn",speed:2500,separator:",",clickChange:!1,loopCount:"infinite"});if(null!=document.querySelector(".rotator-fade"))new ReplaceMe(document.querySelector(".rotator-fade"),{animation:"animate__animated animate__fadeInDown",speed:2500,separator:",",clickChange:!1,loopCount:"infinite"})},
  /**
     * Clipboard.js
     * Enables clipboard on docs
     * Requires assets/js/vendor/clipboard.min.js
     */
  codeSnippet:()=>{document.querySelectorAll(".code-wrapper-inner").forEach((function(e){e.insertAdjacentHTML("beforebegin",'<button type="button" class="btn btn-sm btn-white rounded-pill btn-clipboard">Copy</button>')})),new ClipboardJS(".btn-clipboard",{target:function(e){return e.nextElementSibling}}).on("success",(e=>{e.trigger.textContent="Copied!",e.clearSelection(),setTimeout((function(){e.trigger.textContent="Copy"}),2e3)})),new ClipboardJS(".btn-copy-icon").on("success",(function(e){e.clearSelection(),e.trigger.textContent="Copied!",window.setTimeout((function(){e.trigger.textContent="Copy"}),2300)}))}};theme.init();