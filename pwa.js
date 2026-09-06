(() => {
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js").catch((error) => {
        console.warn("TechGen1o1 offline mode could not start.", error);
      });
    });
  }

  if (isIOS && !isStandalone && !sessionStorage.getItem("techgen1o1-pwa-tip-dismissed")) {
    const tip = document.createElement("div");
    tip.className = "pwa-install-tip";
    tip.innerHTML = `
      <div class="pwa-install-tip-copy">
        <strong>Install TechGen1o1 on this iPhone</strong>
        <span>In Safari, tap <b>Share</b> then <b>Add to Home Screen</b>.</span>
      </div>
      <button class="pwa-install-tip-close" type="button" aria-label="Dismiss install tip">×</button>`;
    document.body.appendChild(tip);
    tip.querySelector("button").addEventListener("click", () => {
      sessionStorage.setItem("techgen1o1-pwa-tip-dismissed", "1");
      tip.remove();
    });
  }
})();
