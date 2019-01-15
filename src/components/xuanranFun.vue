
<script>
export default {
  props: {
    pp: {
      type: String,
      default: "sssfffffffff"
    }
  },
  data() {
    return {
      msg: 345
    };
  },
  methods: {
    clickHandler() {
      alert("s");
      this.$emit("nativeClickHandler");
    }
  },
  render(createElement) {
    var header = this.$slots.header;
    var body = this.$slots.default;
    var footer = this.$slots.footer;
    return createElement(
      "div",
      {
        // 和`v-bind:class`一样的 API
        // 接收一个字符串、对象或字符串和对象组成的数组
        class: {
          foo: true,
          bar: false
        },
        // 和`v-bind:style`一样的 API
        // 接收一个字符串、对象或对象组成的数组
        style: {
          color: "red",
          fontSize: "14px"
        },
        // 普通的 HTML 特性
        attrs: {
          id: this.pp
        },
        // 组件 props
        props: {
          myProp: "bar"
        },
        // DOM 属性
        domProps: {
          innerHTML: this.msg
        },
        // 事件监听器基于 `on`
        // 所以不再支持如 `v-on:keyup.enter` 修饰器
        // 需要手动匹配 keyCode。
        on: {
          click: this.clickHandler
        },
        // 仅用于组件，用于监听原生事件，而不是组件内部使用
        // `vm.$emit` 触发的事件。
        nativeOn: {
          click: this.nativeClickHandler
        },

        // 作用域插槽格式
        // { name: props => VNode | Array<VNode> }
        scopedSlots: {
          default: props => createElement("span", props.text)
        },
        // 如果组件是其他组件的子组件，需为插槽指定名称
        slot: "chacao",
        // 其他特殊顶层属性
        key: "myKey",
        ref: "myRef",
        // 如果你在渲染函数中向多个元素都应用了相同的 ref 名，
        // 那么 `$refs.myRef` 会变成一个数组。
        refInFor: true
      },
      [
        createElement("header", header),
        createElement("main", body),
        createElement("footer", footer)
      ]
    );
  }
};
</script>