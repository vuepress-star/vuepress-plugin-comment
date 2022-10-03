import { defineClientConfig } from '@vuepress/client'
import WalineComment from './components/WalineComment.js'
import './styles/index.scss'

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component('WalineComment', WalineComment)
  },
})
