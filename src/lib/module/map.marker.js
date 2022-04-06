import L from 'leaflet'

import MarkerHotelIcon from '../../assets/svg/MarkerHotelIcon.svelte'
import MarkerRestoIcon from '../../assets/svg/MarkerRestoIcon.svelte'
import MarkerTourIcon from '../../assets/svg/MarkerTourIcon.svelte'

export function markerHotel() {
  let wrapper = L.DomUtil.create('div', '__marker __map-hotel-marker')
  new MarkerHotelIcon({
    target: wrapper,
    props: {}
  })

  return L.divIcon({
    html: wrapper,
    className: '__marker __map-hotel-marker'
  })
}

export function markerResto() {
  let wrapper = L.DomUtil.create('div', '__marker __map-resto-marker')
  new MarkerRestoIcon({
    target: wrapper,
    props: {}
  })

  return L.divIcon({
    html: wrapper,
    className: '__marker __map-resto-marker'
  })
}

export function markerTour() {
  let wrapper = L.DomUtil.create('div', '__marker __map-tour-marker')

  new MarkerTourIcon({
    target: wrapper,
    props: {}
  })

  return L.divIcon({
    html: wrapper,
    className: '__marker __map-tour-marker'
  })
}