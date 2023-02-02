import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
// https://dev.to/avxkim/setup-path-aliases-w-react-vite-ts-poa
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
});
