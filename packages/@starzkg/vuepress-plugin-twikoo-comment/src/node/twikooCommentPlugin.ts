import type { Plugin } from '@vuepress/core'
import { getDirname, path } from '@vuepress/utils'
import type { TwikooCommentPluginOptions } from '../shared/index.js'

const __dirname = getDirname(import.meta.url)

/**
 *  Twikoo Comment Plugin
 */
export const twikooCommentPlugin =
  (options: TwikooCommentPluginOptions): Plugin =>
  (app) => {
    const plugin = { name: '@starzkg/vuepress-plugin-twikoo-comment' }

    return {
      ...plugin,
      define: () => ({
        TWIKOO_COMMENT_OPTIONS: options,
      }),
      clientConfigFile: path.resolve(__dirname, '../client/config.js'),
    }
  }
