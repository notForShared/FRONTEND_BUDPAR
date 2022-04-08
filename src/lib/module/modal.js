import { modalState } from '../store/modal/modal.state'

export function openModal(modalId) {
  modalState.set({show: true, modalId: modalId})
}

export function closeModal() {
  modalState.set({show: false, modalId: null})
}