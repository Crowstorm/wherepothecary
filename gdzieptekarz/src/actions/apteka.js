//SET_LAT
export const setLat = (latA) => ({
    type: 'SET_LAT',
    latA
})

//SET_LON
export const setLon = (lonA) => ({
    type: 'SET_LON',
    lonA
})

export const setName = (name, address) => ({
    type: 'SET_NAME',
    name,
    address
})