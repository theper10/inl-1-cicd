import { defineConfig } from 'vite'

export default defineConfig({
    base: '/inl-1-cicd/',
    test: {
        environment: 'jsdom'
    }
})