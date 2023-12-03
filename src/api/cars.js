import { instance } from './auth'

export const getAllCars = async () => {
    const { data } = await instance('/cars')
    return data
}

export const postCar = async (body) => {
    const { data } = await instance.post('/cars', body)
    return data
}

for