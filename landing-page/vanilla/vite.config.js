import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '.'),
            '@assets': path.resolve(__dirname, './public/assets')
        }
    }
});

