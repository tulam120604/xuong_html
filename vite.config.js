// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, '../Home/Home.html'),
                shop: resolve(__dirname, './Desktop/Shop/Shop.html'),
                deital: resolve(__dirname, './Desktop/Deital/Deital.html'),
                cart: resolve(__dirname, './Desktop/Cart/Cart.html'),
                checkout: resolve(__dirname, './Desktop/CheckOut/CheckOut.html'),
            },
        },
    },
})
