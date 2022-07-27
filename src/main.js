import App from "./App.svelte";
import "./lib/module/nojsRemove";

const app = new App({
  target: document.body,
  props: {},
});

export default app;
