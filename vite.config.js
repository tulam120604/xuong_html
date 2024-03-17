// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, '.Home.html'),
                shop: resolve(__dirname, './Shop.html'),
                deital: resolve(__dirname, './Deital.html'),
                cart: resolve(__dirname, './Cart.html'),
                checkout: resolve(__dirname, './CheckOut.html'),
            },
        },
    },
})