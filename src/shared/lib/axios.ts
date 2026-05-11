import axios from 'axios'
import { env } from '@/app/config/env'

export const http = axios.create({
  baseURL: env.API_URL,
  headers: { 'Content-Type': 'application/json' },
})

http.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)
