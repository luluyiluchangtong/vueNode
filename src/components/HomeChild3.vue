<template>
  <div>
    <div class="bb b--dashed">
      <h1>注册指令 v-focus 并绑定给 p 元素</h1>
      <p v-focus>directives</p>
    </div>

    <div class="bb b--dashed">
      <h1>动态组件切换</h1>
      <button @click="aliveComponent">按钮</button>
      <transition name="fade">
        <keep-alive>
          <!-- include  exclude max -->
          <component :is="currentView"></component>
        </keep-alive>
      </transition>
    </div>

    <div class="bb b--dashed">
      <h1>过渡动画</h1>
      <button v-on:click="shuffle">Shuffle</button>
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
      <transition-group name="list-complete" tag="p">
        <!-- 和 transition 一样 list-complete 是 css 类前缀 -->
        <span v-for="item in items" v-bind:key="item" class="list-complete-item">{{ item }}</span>
      </transition-group>
    </div>
    <!-- <transition-group> 元素作 为多个元素/组件 的过渡效果 -->
  </div>
</template>
<script>
import _ from "lodash";
import HomeChild4 from "./HomeChild4";
import HomeChild2 from "./HomeChild2";
export default {
  data() {
    return {
      currentView: HomeChild4,
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    };
  },
  components: {
    HomeChild4,
    HomeChild2
  },
  methods: {
    aliveComponent() {
      this.currentView =
        this.currentView === "HomeChild4" ? "HomeChild2" : "HomeChild4";
    },
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length);
    }, // 产生  0-9 的随机数
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    }, // 从随机位置减去一位
    remove: function() {
      this.items.splice(this.randomIndex(), 1);
    }, // 从随机位置加上一位
    shuffle: function() {
      this.items = _.shuffle(this.items);
    }
  },

  // Vue.directive('focus', {
  //   // 当被绑定的元素插入到 DOM 中时……
  //   inserted: function (el) {
  //     // 聚焦元素
  //     el.focus()
  //   }
  // })     全局
  directives: {
    focus: {
      // 这是局部注册 指令名称
      inserted: function(el) {
        el.focus();
      },
      bind: function(el, binding, vnode, oldnode) {
        // 钩子函数（均为可选）：
        // bind  只调用一次， 指令第一次绑定到元素时调用
        // inserted  被绑定元素插入父节点时调用
        // unbind  只调用一次，指令与元素解绑时调用

        // update   所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前
        // componentUpdated  指令所在组件的 VNode 及其子 VNode 全部更新后调用。

        // 每个钩子函数中传入 四个参数（除了 el，其他都是只读）， 其中 binding 参数有如下属性，
        var s = JSON.stringify;
        el.innerHTML =
          "name: " +
          s(binding.name) +
          "<br>" +
          "value: " +
          s(binding.value) +
          "<br>" +
          "expression: " +
          s(binding.expression) +
          "<br>" +
          "argument: " +
          s(binding.arg) +
          "<br>" +
          "modifiers: " +
          s(binding.modifiers) +
          "<br>" +
          "vnode keys: " +
          Object.keys(vnode).join(", ");
      }
    }
  }
};
</script>

<style scoped lang="scss">
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.b--dashed {
  border-top: none;
  border-left: none;
  border-right: none;
  padding-bottom: 10px;
}
</style>
