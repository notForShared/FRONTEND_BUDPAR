import { sidebarState } from '../store/sidebar/sidebar.state'
import { get } from 'svelte/store'

export function openSidebar() {
  sidebarState.set({show: true})
}

export function closeSidebar() {
  sidebarState.set({show: false})
}

export function getSidebar() {
  return get(sidebarState)
}