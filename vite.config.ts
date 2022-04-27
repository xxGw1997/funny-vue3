import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import WindiCSS from 'vite-plugin-windicss'
import fs from 'fs-extra'
import matter from 'gray-matter'
import VitePages from 'vite-plugin-pages'
import ViteMarkdown from 'vite-plugin-md'
import Components from 'unplugin-vue-components/vite'


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    WindiCSS(),
    /**
     * 静态markdown文件生成对应路由页面
     */
    VitePages({
      extensions: ["vue", "md"],  //需要包含的文件类型
      pagesDir: "pages",      //寻找根目录下文件的目录
      /**
       * 提供一个方法,对每一个文件产生路由做一些加工，这里对meta信息进行了处理
       * @param route 
       * @returns 
       */
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1))
        const md = fs.readFileSync(path, "utf-8")
        const { data } = matter(md)
        route.meta = Object.assign(route.meta || {}, { frontmatter: data })
        return route
      }
    }),
    ViteMarkdown(),
    Components({
      extensions: ['vue', 'md'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    })
  ],
})
