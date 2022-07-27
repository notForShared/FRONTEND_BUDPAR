import { imageViewerState } from "../store/imageViewer/imageViewer.store";

export function openViewer(viewerID) {
  imageViewerState.set({ show: true, viewer: viewerID });
}

export function closeViewer() {
  imageViewerState.set({ show: false, viewer: null });
}
