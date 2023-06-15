import env from '@lib/env'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import * as React from 'react'

const containerStyle = {
  width: '400px',
  height: '400px',
}

const center = {
  lat: 35.14281742535103,
  lng: 126.8006953515396,
}

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: env.VITE_MAP_API_KEY,
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    />
  ) : null
}

export default React.memo(Map)
