<template>
  <div>
    <count-time
        v-show="timestatus==2?true:false"
      :createdtime="'2020-09-15 20:20:20'"
      :nowtime="'2020-09-15 20:20:20'"
      :statsus="timestatus"
    ></count-time>
    <button @click="DateStatus">点击</button>
  </div>
</template>
<script>
import countTime from "../components/counttime";
export default {
  data() {
    return {
      timestatus: 1,
    };
  },
  components: {
    countTime: countTime,
  },
  created() {
  },
  methods: {
    DateStatus() {
        this.timestatus = 2;
    },
  },
};
</script>