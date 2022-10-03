import type { Plugin } from '@vuepress/core'
import { getDirname, path } from '@vuepress/utils'
import type { GiscusPluginOptions } from '../shared/index.js'

const __dirname = getDirname(import.meta.url)

/**
 *  Giscus Comment Plugin
 */
export const giscusCommentPlugin =
  (options: GiscusPluginOptions): Plugin =>
  (app) => {
    const plugin = { name: '@starzkg/vuepress-plugin-giscus-comment' }

    return {
      ...plugin,
      define: () => ({
        GISCUS_COMMENT_OPTIONS: options,
      }),
      clientConfigFile: path.resolve(__dirname, '../client/config.js'),
    }
  }
