import { App } from 'vue'
import * as layouts from './layouts'
import * as pages from './pages'
import * as components from './components'

function install (app: App) {
  for (const key in layouts) {
    // @ts-expect-error
    app.component(key, layouts[key])
  }
  for (const key in pages) {
    // @ts-expect-error
    app.component(key, pages[key])
  }
  for (const key in components) {
    // @ts-expect-error
    app.component(key, components[key])
  }
}

import './assets/theme.scss'

export default { install }

export * from './layouts'
export * from './pages'
export * from './components'
