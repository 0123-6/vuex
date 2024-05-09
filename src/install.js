let Vue // bind on install

export default function install (_Vue) {
  if (Vue && _Vue === Vue) {
    return
  }
  Vue = _Vue
  
  const mixinOptions = {
    /**
     * Vuex init hook, injected into each instances init hooks list.
     */
    beforeCreate() {
      const options = this.$options
      // store injection
      if (options.store) {
        this.$store = typeof options.store === 'function'
          ? options.store()
          : options.store
      } else if (options.parent && options.parent.$store) {
        this.$store = options.parent.$store
      }
    },
  }
  Vue.mixin(mixinOptions)
}
