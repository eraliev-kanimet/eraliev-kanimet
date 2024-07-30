import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                admin: resolve(__dirname, 'admin/index.html'),
            },
        },
    },
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'src/components'),
        }),
    ],
};