// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, './Home/Home.html'),
                shop: resolve(__dirname, './Shop/Shop.html'),
                deital: resolve(__dirname, './Deital/Deital.html'),
                cart: resolve(__dirname, './Cart/Cart.html'),
                checkout: resolve(__dirname, './CheckOut/CheckOut.html'),
            },
        },
    },
})