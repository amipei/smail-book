//@ts-nocheck
class EventBus {
  registry: Function
  constructor() {
    this.registry = null
  }
  //注册
  on(callback: Function) {
    this.registry = callback
  }
  // 解除事件绑定
  off(callback: Function) {
   this.registry = null
  }
  //触发事件
  emit(msg: string) {
    if (this.registry == null) return;
    this.registry.call(null, msg)
  }
}
const eventBus = new EventBus()
export default eventBus
export const toastMethods = {
  show: (msg: string) => eventBus.emit(msg)
}