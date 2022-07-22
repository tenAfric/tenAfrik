import axios from "axios"

export const api = axios.create({
    baseURL: 'https://api.tenafric.com'
})

export const getPosts = async () => {
    const response = await api.get('/blogs')
    return response.data
}