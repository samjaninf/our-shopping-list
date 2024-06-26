import {store} from '@/service/store'

const snackbar = {
  msg: function (content) {
    return this.showMessage({content})
  },
  showMessage: function ({ content = '', color = '', timeout = null, closeable = true}) {
    if (arguments.length === 1 && typeof arguments[0] === 'string') {
      content = arguments[0]
    }
    store.commit(
      'snackbar/showMessage',
      { content, color, timeout, closeable },
      { root: true }
    )
  },
  close: function() {
    store.commit(
      'snackbar/close',
      { root: true }
    )
  }
}

const snackbarPlugin = {
  install(app) {
    if (!store) {
      throw new Error('Please provide vuex store.')
    }

    app.config.globalProperties.$snackbar = snackbar
  }
}

export {
  snackbarPlugin,
  snackbar
}
