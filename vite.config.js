// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "tailwindcss";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});

//Needed to update vite.config to handle tailwind
//Tailwind documentation correct for pure react applications
//I guess it works differently with vite?
