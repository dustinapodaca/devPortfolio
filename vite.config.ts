import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxFactory: "jsx",
    jsxInject: `import { jsx } from 'theme-ui'`,
  },
});
