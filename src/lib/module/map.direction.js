import {ORS_API} from '../config'
import {ORS_KEY} from '../token'

export function getCurrentLocation () {
  return new Promise((resolve, reject) => {
    if (window.navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        resolve({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        })
      }, (error) => {
        reject(error)
      }, {enableHighAccuracy: true})
    }else {
      reject('Browser not supporting geolocation')
    }
  })
}

export async function getDirection (dest, currentPosition) {
  let direction = await fetch(`${ORS_API}/directions/driving-car?api_key=${ORS_KEY}&start=${currentPosition}&end=${dest}`)

  if (direction.status === 200) {
    let directionData = await direction.json()

    return {
      geoJsonPath: directionData.features[0],
      distance: {
        km: (Number(directionData.features[0].properties.summary.distance) / 1000).toFixed(2)
      },
      duration: {
        hour:  Math.floor(Number(directionData.features[0].properties.summary.duration) / 3600),
        minute: Math.floor(Number(directionData.features[0].properties.summary.duration) % 3600 / 60),
        second: Math.floor(Number(directionData.features[0].properties.summary.duration) % 3600 % 60)
      }
    }
  }else {
    throw new Error('Cannot fetch ')
  }
}
