module.exports = {
  pages: {
    index: 'src/main.js'
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true
        },
        appId: 'com.zhizhuvideo.maccmsplayer',
        copyright: 'Copyright @ 2020 supbose@pm.me',
        productName: 'MaccmsPlayer',
        publish: [
          {
            provider: 'github',
            owner: 'zhizhu-video',
            repo: 'MaccmsPlayer'
          }
        ],
        mac: {
          icon: 'build/icon/icon.icns',
          category: 'public.app-category.developer-tools',
          target: 'default',
          extendInfo: {
            LSUIElement: 1
          }
        },
        win: {
          icon: 'build/icons/icon.ico',
          target: 'nsis'
        },
        linux: {
          icon: 'build/icons/'
        },
        snap: {
          publish: ['github']
        }
      }
    }
  }
}
