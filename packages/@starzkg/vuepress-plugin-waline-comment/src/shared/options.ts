import type { LocaleConfig } from '@vuepress/core'
import type { WalineInitOptions, WalineLocale } from '@waline/client'

export interface WalineCommentPluginOptions
  extends Omit<WalineInitOptions, 'el' | 'comment'> {
  /**
   * Default author
   *
   * 默认作者
   */
  author?: string

  /**
   * Whether enable comment by default
   *
   * 是否默认启用评论
   *
   * @default true
   */
  comment?: boolean

  /**
   * The delay of dom operation, in ms
   *
   * If the theme you are using has a switching animation, it is recommended to configure this option to `Switch animation duration + 200`
   *
   * 进行 DOM 操作的延时，单位 ms
   *
   * 如果你使用的主题有切换动画，建议配置此选项为 `切换动画时长 + 200`
   *
   * @default 500
   */
  delay?: number

  /**
   * Whether import meta icons
   *
   * 是否导入 Meta 图标
   *
   * @default true
   */
  metaIcon?: boolean

  /**
   * Whether enable page views count by default
   *
   * 是否启用访问量
   *
   * @default true
   */
  pageview?: boolean

  /**
   * Locale config for waline
   */
  locales?: LocaleConfig<WalineLocale>
}
