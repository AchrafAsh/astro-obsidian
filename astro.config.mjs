import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

function defaultLayoutPlugin() {
    return function (tree, file) {
        file.data.astro.frontmatter.layout = "@/layouts/note-layout.astro";
    };
}

// https://astro.build/config
export default defineConfig({
    markdown: {
        remarkPlugins: [defaultLayoutPlugin],
        extendDefaultPlugins: true,
    },
    integrations: [tailwind({ config: { applyBaseStyles: false } })],
});
