import { usePageFrontmatter, usePageLang } from '@vuepress/client'
import { computed, defineComponent, h, onMounted } from 'vue'
import type { VNode } from 'vue'
import type {
  TwikooCommentFrontmatter,
  TwikooCommentPluginOptions,
} from '../../shared/index.js'

declare const TWIKOO_COMMENT_OPTIONS: TwikooCommentPluginOptions

const twikooOption = TWIKOO_COMMENT_OPTIONS
const enableTwikoo = Boolean(twikooOption.envId)

export default defineComponent({
  name: 'TwikooComment',

  setup() {
    const frontmatter = usePageFrontmatter<TwikooCommentFrontmatter>()
    const lang = usePageLang()

    let id: number

    const enableComment = computed(() => {
      if (!enableTwikoo) return false
      const pluginConfig = twikooOption !== undefined
      const pageConfig = frontmatter.value.comment

      return Boolean(pageConfig) || (pluginConfig && pageConfig !== false)
    })

    const initTwikoo = (): void => {
      const timeID = (id = new Date().getTime())

      Promise.all([
        import('twikoo'),
        new Promise<void>((resolve) => setTimeout(resolve, twikooOption.delay)),
      ]).then(([{ init }]) => {
        if (timeID === id)
          init({
            lang: lang.value === 'zh-CN' ? 'zh-CN' : 'en',
            ...twikooOption,
            el: '#twikoo-comment',
          })
      })
    }

    onMounted(() => {
      if (enableTwikoo) initTwikoo()
    })

    return (): VNode =>
      h(
        'div',
        {
          class: 'twikoo-wrapper',
          style: { display: enableComment.value ? 'block' : 'none' },
        },
        h('div', { id: 'twikoo-comment' })
      )
  },
})
