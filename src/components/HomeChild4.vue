<template>
  <div class="bb b--dashed">
    <h1>过滤器 filters</h1>
    <p>{{message | capitalize}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "abcd"
    };
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
  //   Vue.filter('capitalize', function (value) {
  //   if (!value) return ''
  //   value = value.toString()
  //   return value.charAt(0).toUpperCase() + value.slice(1)
  //    })   全局
};
</script>
<style scoped lang="scss">
.b--dashed {
  border-top: none;
  border-left: none;
  border-right: none;
  padding-bottom: 10px;
}
</style>