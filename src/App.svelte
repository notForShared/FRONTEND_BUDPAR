<script>
  import Router from "svelte-spa-router";
  import { routes } from "./pages/router";
  import NavbarComponent from "./components/navbar/NavbarComponent.svelte";
</script>

<main class="w-full relative">
  <NavbarComponent />
  <Router {routes} />
</main>
