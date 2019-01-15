<template>
  <div>
    <h1>$attr(包含根元素上的 所有属性) $listheners(包含根元素上的 所有监听器)</h1>
    <p>{{post.title}}</p>

    <input v-on="inputListeners" v-bind="$attrs" type="text">
    <!-- 
组件上，传入的特性值一般替换掉 组件内 的值， class style 时特例， 会合并掉内部的 和 外部传入的

组件可以接受任意的特性，而这些特性会被添加到这个组件的 '根元素' 上
组件上的 特性（除了 class style），若不想传递到 '根元素'， 
首先：使用 inheritAttrs: false, 禁用掉，
然后：通过在  想要接受的 组件元素 上绑定 v-bind="$attrs" 接受父组件上 特性的传递。

在禁止 特性传递到 根元素的设置下， 若组件上有 native 原生事件时，就失效了，
此时可使用 $listeners 属性， 将 所有的 事件监听器 指向这个组件的某个特定的子元素
    -->
  </div>
</template>
<script>
export default {
  inheritAttrs: false, // 这个选项不影响 class 和 style 绑定到父元素上
  props: {
    post: {
      type: Object,
      default: function() {
        return {
          title: "指定某个元素包含组件根元素上的 特性，监听器"
        };
      }
    }
  },
  components: {},
  computed: {
    inputListeners: function() {
      var vm = this;
      return Object.assign(
        {}, // 将所有的对象合并为一个新对象
        this.$listeners, // 我们从父级添加所有的监听器，如果只是单纯的将 监听器 接受过来 则直接写在组件内元素上就行 v-on="$listeners"
        {
          // 添加自定义监听器，！！！！！！！！！！！
          // 这里确保组件配合 `v-model` 的工作
          input: function(event) {
            vm.$emit("input", event.target.value);
          }
        }
      );
    }
  },
  methods: {}
};
</script>