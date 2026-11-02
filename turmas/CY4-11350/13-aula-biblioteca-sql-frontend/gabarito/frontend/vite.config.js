import { defineConfig } from 'vite';

export default defineConfig({
  server: { port: 5173 }, // precisa bater com o origin liberado no CORS do backend
});
