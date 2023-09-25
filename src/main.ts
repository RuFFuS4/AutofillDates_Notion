import "./app.postcss";
import App from "./App.svelte";
import { createConnection } from "./NotionFetchs";

async function init() {
  await createConnection();
  const app = new App({
    target: document.getElementById("app"),
  });
}

init();
