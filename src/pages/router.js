// Router config
import { wrap } from "svelte-spa-router/wrap";

export const routes = {
  "/": wrap({
    asyncComponent: () => import('./home/HomePage.svelte')
  }),

  "/search": wrap({
    asyncComponent: () => import('./search/SearchPage.svelte')
  }),

  // Map Page
  "/map": wrap({
    asyncComponent: () => import('./map/MapPage.svelte')
  }),

  '/direction': wrap({
    asyncComponent: () => import('./map/DirectionPage.svelte')
  }),

  // List page
  "/tour-list": wrap({
    asyncComponent: () => import('./tour/TourListPage.svelte')
  }),

  "/activity-list": wrap({
    asyncComponent: () => import('./activity/ActivityListPage.svelte')
  }),

  "/news-list": wrap({
    asyncComponent: () => import('./news/NewsListPage.svelte')
  }),

  // Detail Page
  "/article-detail": wrap({
    asyncComponent: () => import('./content/ArticleDetailPage.svelte')
  }),

  "/news-detail": wrap({
    asyncComponent: () => import('./content/NewsDetailPage.svelte')
  }),
  
  "/activity-detail": wrap({
    asyncComponent: () => import('./content/ActivityDetailPage.svelte')
  }),

  "/tour-detail": wrap({
    asyncComponent: () => import('./content/TourDetailPage.svelte')
  }),

  "/hotel-detail": wrap({
    asyncComponent: () => import('./content/HotelDetailPage.svelte')
  }),

  "/resto-detail": wrap({
    asyncComponent: () => import('./content/RestoDetailPage.svelte')
  }),

  // Not Found page
  "*": wrap({
    asyncComponent: () => import('./error/NotFoundPage.svelte')
  }),
}