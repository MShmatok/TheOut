import { instance } from './auth'

export const getAllCars = async () => {
    const { data } = await instance('/cars')
    return data
}
