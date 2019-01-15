<template>
  <div class="home">
    <div>
      <h1 :class="{active:isActive}">class 内联写法</h1>
      <h1 :class="classObject">class 对象写法</h1>
      <h1 :class="classComputed">class 计算属性写法</h1>
      <h1 :style="{color:isGreen, background:bgG}">style 内联写法</h1>
      <h1 :style="styleObject">style 对象写法</h1>
      <h1 :style="styleComputed">style 计算属性写法</h1>
      <h1 :class="[classArr1]" :style="[styleArr1]">stye class 数组写法</h1>
    </div>

    <div>
      <h1 v-if="toggle">两个元素之间的切换 --- v-if</h1>
      <h1 v-else>两个元素之间的切换 --- v-else</h1>
      <button @click="bothToggle">按钮</button>
    </div>

    <div>
      <h1>两组元素之间的切换</h1>
      <template v-if="type==='pass'">
        <label for="pass">密码：</label>
        <input id="pass" type="password">
      </template>
      <template v-else>
        <label for="name">用户名：</label>
        <input id="name" type="text">
      </template>
      <button @click="ToggleGroup">按钮</button>
    </div>
    <!-- v-if 和 v-show 的本质区别就是，前者条件为 真 其标签才渲染到 DOM，  v-show 则只是 display:block/none. 一直都存在在dom 中 -->
    <!-- v-if="ok" 默认的开关   V-if="type===A" 相当于一个有名字的开关。在 data 里 开启一个默认的， 然后在 methods 中控制开启哪个。或切换哪两个 -->
    <!-- 注意： display:block / none;  visibility:visible / hidden 它们的标签都是存在于 DOM 结构中的。 visibility 有占据位置功能， display 没有 -->
    <div>
      <h1>数组的 v-for</h1>
      <ul>
        <li v-for="(item, index) of items" :key="index">{{item.text}}</li>
      </ul>
      <h1>数组的 v-for 的计算属性结果</h1>
      <ul>
        <li v-for="item of filterItem" :key="item.id">{{item.text}}</li>
      </ul>
    </div>
    <div>
      <h1>对象的 v-for</h1>
      <ul v-for="(value, key, index) in object" :key="index">
        <li>{{value}}</li>
      </ul>
    </div>
    <div>
      <h1>
        Vue 不允许在已经创建的实例上 动态添加 新的根级响应式属性 (root-level reactive property)。
        然而它可以使用 Vue.set(object, key, value) 方法将 响应属性 添加到嵌套的对象上
      </h1>
    </div>
    <div>
      <h1>
        v-if v-for 不要混合使用在同一个元素上，
        首先， 当它们处于同一节点，v-for 的优先级比 v-if 更高，
        所以无论 v-for 在前，还是在后，都是先执行的，这会导致 多余的遍历，
      </h1>
    </div>
    <!-- 数组的变异 push() pop() ...   非变异方法 (concat() filter() ...)， 即 是否修改了 原始数组 -->
    <!-- 
         vm.$set(vm.items, indexOfItem, newValue)  通过索引设置数组的方式
         vm.items.splice(newLength)   修改数组长度 
         根实例使用 vm ，扩展的实例下使用 this
         this.$set(vm.items, indexOfItem, newValue)
         this.items.splice(newLength) 
    -->
    <!--
        vm.$set(vm.userProfile, 'age', 27)  设置对象属性
        vm.userProfile = Object.assign({}, vm.userProfile, {  设置对象多个属性
          age: 27,
          favoriteColor: 'Vue Green'
        }) 
        根实例使用 vm ，扩展的实例下使用 this
    -->
    <div>
      <h1>指令的修饰符 lazy / number / trim</h1>
      <input class="w-30" type="text" v-model.lazy="msg" placeholder="在 change事件 而非 input事件 时更新">
      <input type="number" v-model.number="msgNumber" placeholder="定义输入的数据类型">
      <input type="text" v-model.trim="msg" placeholder="去除前后空格">
    </div>

    <div>
      <HomeChild2
        v-on:click="nativeClick"
        class="ad"
        id="ssss"
        placeholder="这个 特性值 不会被 传入到根组件上， 由 input 接受"
      ></HomeChild2>
      <!-- 组件上监听的事件 都只能是 组件内 $emit 提供来的，如果想要 监听原声事件 传一个 .native 修饰符就行了, 此时事件是作用在 最外层元素上的 -->
      <!-- 组件上绑定  v-model -->
    </div>

    <div>
      <HomeChild1 :title.sync="title" v-on:emitParam="emitFun" v-model="value">
        <p>slot默认插槽 {{msgNumber}}</p>
        <p slot="slotsName">slot命名插槽</p>
        <p slot="scopeSlot" slot-scope="user">
          <span>作用域插槽</span>
          <!-- 子组件自己定义一个 作用域，名称自已定 user, 接受 '父组件'传过来的 shuju -->
          {{user.shuju[2]}}
        </p>
        <!-- this.$slots.slotsName 访问 插槽 slotsName 分发的内容 -->
      </HomeChild1>
    </div>

    <div>
      <HomeChild3/>
    </div>

    <div>
      <HomeChild4/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeChild1 from "@/components/HomeChild1.vue";
import HomeChild2 from "@/components/HomeChild2.vue";
import HomeChild3 from "@/components/HomeChild3.vue";
import HomeChild4 from "@/components/HomeChild4.vue";
export default {
  name: "home",
  customOption: "foo", // 创建自定义选项
  components: {
    HomeChild1,
    HomeChild2,
    HomeChild3,
    HomeChild4
  },
  data() {
    return {
      classArr1: {
        classArrText: true
      },
      styleArr1: {
        background: "blue"
      },
      isGreen: "green",
      bgG: "blue",
      isActive: true,
      title: "wer",
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" }
      ],
      msg: "xinxi",
      msgNumber: 123,
      styleObject: {
        color: "yellow",
        background: "red"
      },
      classObject: {
        textColor: true,
        bgGround: true
      },
      toggle: true,
      type: "",
      items: [
        { text: "青菜", id: 0 },
        { text: "萝卜", id: 1 },
        { text: "米饭", id: 2 }
      ],
      object: {
        firstName: "lu",
        lastName: "zhengong",
        age: 23
      },
      value: "ss"
      // items: [1, 2, 3, 4, 5, 6],
    };
  },
  computed: {
    filterItem() {
      return this.items.filter(item1 => {
        return item1.text === "青菜";
      });
    },
    classComputed: function() {
      return {
        active: this.isActive
      };
    },
    styleComputed() {
      return {
        color: "orange",
        background: "black"
      };
    }
  },
  methods: {
    bothToggle() {
      this.toggle = !this.toggle;
    },
    ToggleGroup() {
      this.type = this.type === "pass" ? "name" : "pass";
    },
    nativeClick() {
      alert("nativeClick");
      console.log(this.$slots.slotsName); // undefined  不懂？？？
      console.log(this.$root);
      console.log(this.$options.customOption); // => 'foo'
      console.log(this.$data);
    },
    emitFun(amount) {
      this.msgNumber += amount;
    }
  }
};
</script>
<style>
.classArrText {
  color: red;
}
.active {
  background: red;
}
.home > div {
  border-bottom: solid 1px;
  padding: 20px;
}
.textColor {
  color: red;
}
.bgGround {
  background: green;
}
</style>