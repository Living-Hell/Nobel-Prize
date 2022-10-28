import axios from "axios"

export const api = axios.create({
    baseURL: 'https://api.nobelprize.org/v1/prize.json'
})

export const getWinners = async () => {
    const response = await api.get('')
    console.log(response.data.prizes);
    return response.data.prizes
}