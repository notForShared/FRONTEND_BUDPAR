import { writable } from "svelte/store";

export const imageViewerState = writable({ show: false, viewer: null });
