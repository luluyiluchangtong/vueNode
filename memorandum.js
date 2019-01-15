// 运行时版本 + 编译器 = 完整版本  runtime + compiler
// 最终打好的包里实际上是不需要 编译器 的，所以只用 运行时版本 即可。
// 响应式数据：通常是 通过 view 来修改 model，如果能够通过 model来反映 view的变化。则就实现了 响应式数据！！
// 双向数据绑定
// M: model 数据模型   V：视图
// MVC（Model-View-Controller）：
// MVVM（Model-View-ViewModel）:  
// ViewModel 是一个同步View 和 Model的对象，
// ViewModel 通过 双向数据绑定  把 View 层和 Model 层连接了起来，
// 它们之间的区别：
// mvvm 主要解决了 mvc 中大量的DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验
// 通过 vue的 dev-tool 查看input 的 v-model 绑定，修改视图里的数据，相应的 data 也会改变，修改 data里的数据，视图改变

// 生命周期
// beforeCreate: 实例刚被创建，未观测到数据 data，计算属性。 初始化方法
// created：实例被创建完成，观测到数据 data,  计算属性。初始化方法
// beforeMount:  启动 render 函数，编译 template 模板为 render 函数
// Mounted：创建 vm.$el 将实例模板挂载到上面
// beforeUpdate/updated: 更新实例前后， 数据更新 updated ，， 虚拟 DOM 重新渲染打补丁，，
// beforeDestory/destroed：销毁实例前后

// data 选项 必须是函数, 这样每个组件都返回一个 新的 data 对象；
// 如果是 只是 data 对象，不是函数，则引用的都是同一个 对象，则改变一个组件就会影响其他组件


// 所有的 vue 组件 都是被根实例扩展的 vue 实例，所有根实例  vm.$el ... 下的属性，方法，在扩展实例中则是： this.$el ...

// 响应式原理
// Vue 遍历 data对象里的 所有属性，通过 Object.defineProperty 将数据转为访问器属性  getter setter， 
// get，set变化，"通知" watcher 函数， watcher函数 "触发" render函数生成虚拟 DOM，最后渲染数据，视图改变，

// virtual DOM  不是 shadow DOM （MDN），， 后者只是一种 dom封装，其实还是操作实际 dom

// 模板语法： 插值， 指令， 缩写

// 数据变化 执行异步 或 开销较大的操作时 是使用侦听器 watch:{}, 

// 多个元素为一组 进行切换时， 请使用 template  包裹这组元素， template 不会被渲染到页面上。。

// title 特性 和 vue 实例的 message 属性 '保持一致'
// 数据 绑定到 DOM文本， DOM特性， DOM结构上
// 这篇教程 '主要描述的' 就是如何使用这些选项来创建你想要的行为
// vue 实例暴露的属性  const vm=new Vue({})   vm.$data  vm.$el  vm.$watch()....
// 生命周期钩子函数，这给了用户在不同阶段添加自己的代码的机

// 事件修饰符  按键修饰符  系统修饰符  

// 不同于组件和 prop，事件名不会被用作一个 JavaScript 变量名或属性名，所以就没有理由使用 camelCase 或 PascalCase 了
// 全局注册组件 和 局部注册组件的 区别是， 局部注册的组件在使用时， 需要在 components 选项里声明。

// 异步组件 ？？？？？

// Vue 插件的使用 
// 需要有一个 install 方法。 才可以 Vue.use()  这样使用
// 否则，只有在 vue 的原型 prototype 上添加方法。  Vue.prototype.$charts=charts
// vue引入第三方 npm包的方式：
// import moment from 'moment';
// Object.defineProperty(Vue.prototype, '$moment', { value: moment });
// 优于 
// Vue.prototype.$message = message;
// 使用 Object.define…   可以防止别人修改了这个公共属性

// 带有 $ 前缀的是公共的属性 和 方法





// vue-cli3 包含 CLI CLI服务 CLI插件
// CLI --- 提供了终端里的 vue 命令： vue ui(图形化管理项目) vue serve(构建原型) vue create(构建新项目)
// CLI 服务 --- 是一个 '开发环境依赖', 可升级，可扩展，可配置
// 安装全局扩展 npm install -g @vue/cli-service-global, vue-cli-service 提供了三个命令 vue-cli-service serve / build / inspect 
// 在 package.json 中配置好 script，运用 vue serve vue build 命令对单个 *.vue 文件进行快速原型开发。 vue inspect 检查 webpack.config 配置
// vue-cli-service serve --open /.... 配置参数 启动一个开发服务器, 可在 devServer 里配置参数 
// vue-cli-service build --mode /.... 配置参数 会在 dist/ 目录产生一个可用于生产环境的包

// CLI 插件 --- 内建插件，社区插件
// 在现有的项目上安装插件 vue add @vue/cli-plugin-eslint vue add @vue/eslint 
// vue --version 查看版本， 不是 vue -v
// Vue-cli3 构建项目时   配置内容 选择放在  config文件中， 
// 而不是 package.json 中， 否则热更新失效，其次请使用  npm 安装，而不是 cnpm


// vue 书写规范
// 组件名应为 多个单词 ，避免和 html 元素冲突
// 基础组件名  BaseButton
// 单例组件名  TheNav
// 紧密耦合组件名  searchSideBar   searchSideBarNav
// 没有内容的自闭合组件 请以单标签结束
// html 特性请使用使用引号包裹  <AppSidebar :style="{ width: sidebarWidth + 'px' }">
// 元素选择器 应避免在 scoped 中出现，影响性能
// 组件接口 props   model

// 所有 混入对象的选项 将被混入 该组件 本身的 选项： 
// 数据对象 data： 合并数据，同名时以组件的数据优先 
// 同名钩子函数 created 等周期函数：合并为数组， 混入的先调用
// 值为对象的选项 methods 等下面的对象：合并对象，同名时以组建的对象优先