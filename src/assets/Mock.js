// 数据模板定义规范
// 数据占位符定义规范
import Mock from "Mockjs";
Mock.mock({
  "name|1-10": "lu",
  "name|10": "lu",

  "number1|1-100.1-10": 1, // 整数部分大于等于 1、小于等于 100，小数部分保留 1 到 10 位。
  "number2|123.1-10": 1, // 整数大于等于 0， 小于 123， 小数部分保留 1 到 10
  "number3|123.3": 1,
  "number4|123.10": 1.123, // 若只有一位，则整数部分 大于等于 0， 小于123， 小数部分 保留 0 到 10
  "number5|+1": 10,
  "number6|1-10": 6,

  "name|1": true, // 概率为  1/2
  "name|1-3": value, // 值为 value 的概率是 1/1+3   值为 !value 的概率是 3/ 1+3

  "name|2": { a: 11, b: 22 }, // 随机取出 1 个属性
  "name|1-5": { a: 11, b: 22 }, // 随机取出 1 到 5  个属性

  "name|1": [1, 2, 3, 4, 5], // 随机选一个元素
  "name|+1": [1, 2, 3, 4, 5], // 按顺序选一个元素
  "name|1-7": [1, 2, 3, 4, 5], // 重复属性值， 次数为 1-7 次
  "name|10": [1, 2, 3, 4, 5], // 重复属性值， 次数为 10 次

  name: function() {
    return "ss";
  }, // 取返回值

  name: regexp, //正则

  first: "@FIRST",
  constellation: "@CONSTELLATION"
});
Random.extend({
  constellation: function(date) {
    var constellations = [
      "白羊座",
      "金牛座",
      "双子座",
      "巨蟹座",
      "狮子座",
      "处女座",
      "天秤座",
      "天蝎座",
      "射手座",
      "摩羯座",
      "水瓶座",
      "双鱼座"
    ];
    return this.pick(constellations);
  }
});
