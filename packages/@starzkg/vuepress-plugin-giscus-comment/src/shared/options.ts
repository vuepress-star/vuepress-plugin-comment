import type {
  GiscusInputPosition,
  GiscusMapping,
  GiscusRepo,
  GiscusTheme,
} from './giscus.js'

export interface GiscusPluginOptions {
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
   * The name of repository to store discussions.
   *
   * 存放评论的仓库
   */
  repo: GiscusRepo

  /**
   * The ID of repository to store discussions.
   *
   * 仓库 ID
   */
  repoId: string

  /**
   * The name of the discussion category.
   *
   * 讨论分类
   */
  category: string

  /**
   * The ID of the discussion category.
   *
   * 分类 ID
   */
  categoryId: string

  /**
   * Page - discussion mapping.
   *
   * 页面 ↔️ discussion 映射关系
   *
   * @default "pathname"
   */
  mapping?: GiscusMapping

  /**
   * Whether enable strict mapping
   *
   * 是否启用严格匹配
   *
   * @default true
   */
  strict?: boolean

  /**
   * Whether enable lazy loading
   *
   * 是否启用懒加载
   *
   * @default true
   */
  lazyLoading?: boolean

  /**
   * Whether enable reactions or not
   *
   * 是否启用主帖子上的反应
   *
   * @default true
   */
  reactionsEnabled?: boolean

  /**
   * Input position
   *
   * 输入框的位置
   *
   * @default 'top'
   */
  inputPosition?: GiscusInputPosition

  /**
   * Giscus theme used in lightmode
   *
   * @description Should be a built-in theme keyword or a css link starting with `https://`
   *
   * Giscus 在日间模式下使用的主题
   *
   * @description 应为一个内置主题关键词或者一个 CSS 链接
   *
   * @default "light"
   */
  lightTheme?: GiscusTheme

  /**
   * Giscus theme used in darkmode
   *
   * @description Should be a built-in theme keyword or a css link starting with `https://`
   *
   * Giscus 在夜间模式下使用的主题
   *
   * @description 应为一个内置主题关键词或者一个 CSS 链接
   *
   * @default "dark"
   */
  darkTheme?: GiscusTheme
}
