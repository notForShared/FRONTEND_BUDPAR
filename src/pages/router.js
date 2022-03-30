// Router config
import { wrap } from "svelte-spa-router/wrap";

export const routes = {
  "/": wrap({
    asyncComponent: () => import('./home/HomePage.svelte')
  }),

  "/map": wrap({
    asyncComponent: () => import('./map/MapPage.svelte')
  }),

  "/content": wrap({
    asyncComponent: () => import('./content/ContentPage.svelte')
  }),

  // Not Found page
  "*": wrap({
    asyncComponent: () => import('./error/NotFoundPage.svelte')
  }),
}