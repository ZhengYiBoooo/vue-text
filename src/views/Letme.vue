<template>
  <div>
    <input type="text" @keyup="clickdemo" />

    <div class="box"></div>
  </div>
</template>
<script>
import { addresslist } from "../http/api";

export default {
  data() {
    return {
      newlist: [],
    };
  },
  created() {
    this.addresslist();
  },
  methods: {
    clickdemo(e) {},
    async addresslist() {
      const res = await addresslist();
      if (res.data.code == 200) {
        this.newlist = Object.freeze(res.data.array);
        console.log(this.newlist);
      }
    },
  },
  destroyed() {
      
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
  border: 1px solid #333;
}
</style>