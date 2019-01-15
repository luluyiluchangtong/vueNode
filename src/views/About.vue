<template>
  <div class="about">
    <div>
      <h1>状态管理 state</h1>
      <h2>{{msg}}</h2>
      <h2>{{msg1}}</h2>
    </div>
    <div>
      <h1>状态管理 getters</h1>
      <h2>{{getMessage}}</h2>
      <h2>{{getMsg}}</h2>
    </div>
    <div>
      <h1>状态管理 mutations</h1>
      <h2>{{num}}</h2>
      <button @click="strToUpcase()">strToUpcase</button>
      <button @click="stringToUpCase()">stringToUpCase</button>
      <button @click="numAdd()">按钮</button>
    </div>
    <div>
      <h1>状态管理 actions</h1>
      <button @click="asyncCommit()">按钮</button>
      <button @click="AsyncAddNum()">按钮</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    msg() {
      return this.$store.state.message;
    },

    ...mapState({
      msg1: state => state.message,
      num: state => state.number
    }),

    // ...mapState(['message']),
    // 这里当映射的计算属性名称 和引入的 state 名称相同时，可使用 数组对象 表示

    // ...mapState({ msg2: "message" }),
    //  可以重命名

    getMessage() {
      return this.$store.getters.getMsg;
    },

    ...mapGetters(["getMsg"])
    // ...mapGetters({getMs1:"getMsg"})
    //  可以重命名
  },
  methods: {
    strToUpcase() {
      this.$store.commit("stringToUpCase");
    },
    ...mapMutations(["stringToUpCase"]),
    // ...mapMutations({ addNUM: "addNum" })

    numAdd() {
      this.$store.commit("addNum", { amount: 3 });
    },

    asyncCommit() {
      this.$store.dispatch("AsyncAddNum");
    },
    ...mapActions(["AsyncAddNum"])
    // ...mapActions({addNumAsync:"AsyncAddNum"})
  }
};
</script>
<style lang="scss" scoped>
.about > div {
  border-bottom: solid 1px;
  padding: 20px;
}
</style>