import { defineConfig } from 'vite';
// import { ConfigEnv, UserConfigExport, Plugin } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
const pathSrc = path.resolve(__dirname, './src');
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh(), tsconfigPaths()],
    define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    },
    css: {
        preprocessorOptions: {
            scss: { additionalData: `@import "${pathSrc}/styles/_mixins";` },
        },
    },
});
