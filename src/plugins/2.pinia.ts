import { Marquee } from '@selemondev/vue3-marquee'
import '@selemondev/vue3-marquee/dist/style.css'
import { createPinia } from 'pinia'
import type { App } from 'vue'
import JsonExcel from 'vue-json-excel3'

export const store = createPinia()

export default function (app: App) {
  app.component('DownloadExcel', JsonExcel)
  app.component('Marque', Marquee)
  app.use(store)
}
