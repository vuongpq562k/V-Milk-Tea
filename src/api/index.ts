import axios from 'axios'

const URL =`http://localhost:5000`
export const fetchProducts = () => axios.get(`${URL}/products`);

export const usersApi= `${URL}/users`
export const productsApi= `${URL}/products`
export const ordersApi= `${URL}/orders`
export const adminId= 'L4InZ-dBp'
export const imageApi = 'https://api.cloudinary.com/v1_1/vmilktea/image/upload'