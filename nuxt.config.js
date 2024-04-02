import Spritesmith from 'vite-plugin-spritesmith';
import path from 'path';
const resolve = (dir) => path.join(process.cwd(), dir);
const spriteConfig = {
  imgTarget: resolve('./dist/'),
  scssTarget: resolve('./dist/'),
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  vite: {
    plugins: [
      Spritesmith({
        watch: process.env.NODE_ENV !== 'production',
        src: {
          cwd: resolve('/sprites'),
          glob: '*.png',
        },
        target: {
          image: `${spriteConfig.imgTarget}sprite.png`,
          css: `${spriteConfig.scssTarget}sprite.scss`,
        },
        apiOptions: {
          cssImageRef: 'sprite/img/sprite.png',
          spritesheet_info: {
            name: 'vite1',
          },
          retina_spritesheet_info: {
            name: 'vi-retina',
          },
        },
      }),
    ],
  },
});
