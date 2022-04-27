import { defineConfig } from 'vite';
import dynamicImport from 'vite-plugin-dynamic-import';

export default defineConfig({
    plugins: [
        dynamicImport()
    ],
    server: {
        host: true,
        watch: {
            usePolling: true
        }
    },
});
