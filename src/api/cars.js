import { instance } from './auth'
import { data } from './data.js'

export const getAllCars = async () => {
    const { data } = await instance('/cars')
    return data
}

export const postCar = async (body) => {
    const { data } = await instance.post('/cars', body)
    return data
}

// for (let index = 0; index < data.length; index++) {
//     postCar(data[index]);
// }