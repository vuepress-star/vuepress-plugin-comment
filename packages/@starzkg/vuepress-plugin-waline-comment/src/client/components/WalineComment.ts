import {
  usePageFrontmatter,
  usePageLang,
  useRouteLocale,
  withBase,
} from '@vuepress/client'
import { Waline } from '@waline/client/dist/component.mjs'
import { pageviewCount } from '@waline/client/dist/pageview.mjs'
import { computed, defineComponent, h, onMounted, watch } from 'vue'
import type { VNode } from 'vue'
import { useRoute } from 'vue-router'
import type {
  WalineCommentPageFrontmatter,
  WalineCommentPluginOptions,
} from '../../shared/index.js'

import '@waline/client/dist/waline.css'

declare const WALINE_COMMENT_OPTIONS: WalineCommentPluginOptions

const walineOption = WALINE_COMMENT_OPTIONS
const enableWaline = Boolean(walineOption.serverURL)

if (walineOption.meta) import('@waline/client/dist/waline-meta.css')

export default defineComponent({
  name: 'WalineComment',

  setup() {
    const route = useRoute()
    const routeLocale = useRouteLocale()
    const frontmatter = usePageFrontmatter<WalineCommentPageFrontmatter>()
    const lang = usePageLang()
    const walineLocale = walineOption.locales?.[routeLocale.value]

    let abort: () => void

    const enableComment = computed(() => {
      if (!enableWaline) return false
      const pluginConfig = walineOption.comment !== false
      const pageConfig = frontmatter.value.comment

      return Boolean(pageConfig) || (pluginConfig && pageConfig !== false)
    })

    const enablePageViews = computed(() => {
      if (!enableWaline) return false
      const pluginConfig = walineOption.pageview !== false
      const pageConfig = frontmatter.value.pageview

      return Boolean(pageConfig) || (pluginConfig && pageConfig !== false)
    })

    const walineProps = computed(() => ({
      lang: lang.value === 'zh-CN' ? 'zh-CN' : 'en',
      locale: {
        ...walineLocale,
        ...(walineOption.locale || {}),
      },
      emoji: [
        '//unpkg.com/@waline/emojis@1.1.0/weibo',
        '//unpkg.com/@waline/emojis@1.1.0/bilibili',
      ],
      dark: 'html.dark',
      ...walineOption,
      path: withBase(route.path),
    }))

    onMounted(() => {
      watch(
        () => route.path,
        () => {
          abort?.()

          if (enablePageViews.value)
            setTimeout(() => {
              abort = pageviewCount({
                serverURL: walineOption.serverURL,
                path: withBase(route.path),
              })
            }, walineOption.delay || 500)
        },
        { immediate: true }
      )
    })

    return (): VNode | null =>
      enableComment.value
        ? h(
            'div',
            { class: 'waline-wrapper' },
            enableWaline ? h(Waline, walineProps.value) : []
          )
        : null
  },
})
