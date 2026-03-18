/*eslint no-console: 0*/
if (process.env.NODE_ENV === "production") {
  if ("serviceWorker" in navigator) {
    const base = document.querySelector("base");
    const baseHref = base ? base.getAttribute("href") : "/";
    navigator.serviceWorker
      .register(`${baseHref}service-worker.js`)
      .catch(ex => {
      console.warn(ex);
      console.warn(
        "(This warning can be safely ignored outside of the production build.)"
      );
      });
  }
}
