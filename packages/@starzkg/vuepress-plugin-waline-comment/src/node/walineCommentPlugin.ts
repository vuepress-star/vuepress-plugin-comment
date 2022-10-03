import type { Plugin } from '@vuepress/core'
import { getDirname, path } from '@vuepress/utils'
import type { WalineCommentPluginOptions } from '../shared/index.js'

const __dirname = getDirname(import.meta.url)

/**
 * Waline Comment Plugin
 */
export const walineCommentPlugin =
  (options: WalineCommentPluginOptions): Plugin =>
  (app) => {
    const plugin = { name: '@starzkg/vuepress-plugin-waline-comment' }

    return {
      ...plugin,
      define: () => ({
        WALINE_COMMENT_OPTIONS: options,
      }),
      clientConfigFile: path.resolve(__dirname, '../client/config.js'),
    }
  }
