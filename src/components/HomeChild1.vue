<template>
  <div class="hello">
    <div class="bb b--dashed">
      <h1>{{title}}</h1>
      <button @click="updateProps">按钮</button>
    </div>

    <div class="bb b--dashed">
      <h1>在组件上绑定 v-model</h1>
      <input :value="value" @input="$emit('input',$event.target.value)">
      <!-- value 特性绑定 props 下的 value属性（父组件绑定传过来的），通过 input 触发父组件上的 input -->
      <p>{{value}}</p>
    </div>

    <div class="bb b--dashed">
      <button @click="$emit('emitParam',1)">$emit带参数的形式触发事件</button>
      <!--  @click="$emit('abc',12)  触发 父组件 的事件时， 还可以传递参数，父组件利用这个参数作运算 -->
    </div>

    <div class="bb b--dashed">
      <h1>默认插槽，命名插槽，作用域插槽</h1>
      <slot></slot>
      <slot name="slotsName"></slot>
      <slot name="scopeSlot" :shuju="shujuku"></slot>
      <!--此时的 slot 组件其实就是一个 父组件，通过 props - shuju 向'子组件' 传递 shujuku -->
    </div>

    <div class="bb b--dashed">
      <p ref="Ap">{{msg}}</p>
      <button @click="nextTic">按钮</button>
    </div>

    <div class="bb b--dashed">
      <button @click="$_toggleShow">mixins methods</button>
      <p v-if="isShowing">mixins data</p>
    </div>
  </div>
</template>

<script>
import HomeChild2 from "@/components/HomeChild2";
import HomeChild3 from "./HomeChild3";
import { extend } from "@/components/mixins/extend";
import { toggle } from "@/components/mixins/toggle";
export default {
  mixins: [toggle], // 除此还有全局混入写法
  extends: extend,
  name: "HelloWorld",
  props: {
    title: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: "value"
    }
  },
  inheritAttrs: false,
  components: {
    HomeChild3
  },

  data() {
    return {
      msg: "msg",
      shujuku: [1, 2, 3, 4, 5, 6]
      // loginType: true
    };
  },

  mounted() {
    this.nextTic(); // 或是放在 mounted 周期里，
  },

  methods: {
    updateProps() {
      this.$emit(
        "update:title",
        "子组件通过 sync 修饰符修改 父组件通过传过来的 props"
      );
      this.$set(this.shujuku, 6, 400);
      // 组件通过  :title.sync="title"  修饰符 sync 告诉 title 有机会修改 父组件传过来的 title值
    },

    nextTic() {
      this.msg = "this.$nextTick";
      // this.$nextTick 是一个异步函数，在修改数据后，确保 整个DOM渲染完毕，再去访问 DOM
      // 即 vue 中的 DOM的更新 是异步的。。需要等虚拟 DOM 更新完成后才开始渲染数据，直接操作 DOM 则需要一个异步函数
      // 配合 深入响应式系统 那张图 就好理解了。
      this.$nextTick(function() {
        console.log(this.$refs.Ap.innerHTML);
      });
    }
  },
  model: {
    prop: "value",
    event: "input"
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.b--dashed {
  border-top: none;
  border-left: none;
  border-right: none;
  padding-bottom: 10px;
}
</style>
