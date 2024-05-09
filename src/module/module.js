// Base data struct for store's module, package with some attribute and method
export default class Module {
  constructor (rawModule, runtime) {
    this.runtime = runtime
    // Store some children item
    this._children = Object.create(null)
    // Store the origin module object which passed by programmer
    this._rawModule = rawModule
    const rawState = rawModule.state

    // Store the origin module's state
    this.state = (typeof rawState === 'function' ? rawState() : rawState) || {}
  }

  get namespaced () {
    return !!this._rawModule.namespaced
  }

  addChild (key, module) {
    this._children[key] = module
  }

  removeChild (key) {
    delete this._children[key]
  }

  getChild (key) {
    return this._children[key]
  }

  hasChild (key) {
    return key in this._children
  }

  update (rawModule) {
    this._rawModule.namespaced = rawModule.namespaced
    if (rawModule.actions) {
      this._rawModule.actions = rawModule.actions
    }
    if (rawModule.mutations) {
      this._rawModule.mutations = rawModule.mutations
    }
    if (rawModule.getters) {
      this._rawModule.getters = rawModule.getters
    }
  }

  forEachChild (fn) {
    for (const [key, value] of Object.entries(this._children)) {
      fn(value, key)
    }
  }

  forEachGetter (fn) {
    if (this._rawModule.getters) {
      for (const [key, value] of Object.entries(this._rawModule.getters)) {
        fn(value, key)
      }
    }
  }

  forEachAction (fn) {
    if (this._rawModule.actions) {
      for (const [key, value] of Object.entries(this._rawModule.actions)) {
        fn(value, key)
      }
    }
  }

  forEachMutation (fn) {
    if (this._rawModule.mutations) {
      for (const [key, value] of Object.entries(this._rawModule.mutations)) {
        fn(value, key)
      }
    }
  }
}
