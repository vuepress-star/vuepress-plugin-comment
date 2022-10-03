import { defineClientConfig } from '@vuepress/client'
import TwikooComment from './components/TwikooComment.js'
import './styles/index.scss'

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component('TwikooComment', TwikooComment)
  },
})
