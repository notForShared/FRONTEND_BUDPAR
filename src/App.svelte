<script>
  import Router from "svelte-spa-router";
  import { routes } from "./pages/router";

  import SidebarButtonComponent from "./components/floatingbutton/SidebarButtonComponent.svelte";
  import SidebarComponent from "./components/sidebar/SidebarComponent.svelte";
  import NavbarComponent from "./components/navbar/NavbarComponent.svelte";
</script>

<main class="w-full relative">
  <NavbarComponent />
  <Router {routes} restoreScrollState={true} />
  <SidebarButtonComponent />

  <SidebarComponent />
</main>
