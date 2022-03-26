// Router config
import { wrap } from "svelte-spa-router/wrap";

export const routes = {
  "/": wrap({
    asyncComponent: () => import('./home/HomePage.svelte')
  }),

  // Not Found page
  "*": wrap({
    asyncComponent: () => import('./error/NotFoundPage.svelte')
  }),
}