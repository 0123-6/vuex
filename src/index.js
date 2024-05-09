/**
 * 项目入口文件
 */

// 导入Store, install函数,是Vuex本身
import Store from './store'
// 安装函数
import install from './install'
// 导入在组件内快速获取vuex值的函数
import { mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers } from './helpers'

// 导出对象
export default {
  Store,
  install,
  
  mapState,
  mapMutations,
  mapGetters,
  mapActions,
  createNamespacedHelpers
}
