import { defineClientConfig } from '@vuepress/client'
import GiscusComment from './components/GiscusComment.js'
import './styles/index.scss'

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component('GiscusComment', GiscusComment)
  },
})
