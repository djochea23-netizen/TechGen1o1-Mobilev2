(() => {
  const isNative = Boolean(window.Capacitor && typeof window.Capacitor.isNativePlatform === "function" && window.Capacitor.isNativePlatform());
  document.documentElement.classList.toggle("native-app", isNative);

  async function saveBlob(blob, filename, title = "TechGen1o1 file") {
    try {
      const file = new File([blob], filename, { type: blob.type || "application/octet-stream" });
      if (navigator.share && (!navigator.canShare || navigator.canShare({ files: [file] }))) {
        await navigator.share({ title, files: [file] });
        return true;
      }
    } catch (error) {
      if (error && error.name === "AbortError") return false;
      console.warn("Native share failed; falling back to download.", error);
    }

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
    return true;
  }

  function openSms(uri) {
    if (isNative) {
      window.location.href = uri;
      return null;
    }
    return window.open(uri, "_blank");
  }

  window.TechGenMobile = { isNative, saveBlob, openSms };
})();
