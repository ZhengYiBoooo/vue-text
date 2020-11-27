
<template>
  <div class="home">
    <input
      name="all"
      type="checkbox"
      :checked="checkedall"
      @change="parentclick"
    />
    <label for="all">全选</label>
    <div>
      <li v-for="(item, index) in list" :key="index">
        <input type="checkbox" v-model="checkallchange" :value="index" />
        <label>{{ item.name }}</label>
        
      </li>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import HelloWorld from "@/components/HelloWorld.vue";
import { addresslist, demolist, addresdupdata } from "../http/api";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      lisrt: {
        phone: "17733933505",
      },
      ite: "123123",
      checkedall: false,
      checkallchange: [],
      list: [
        {
          id: 1,
          name: "苹果",
          boo: false,
        },
        {
          id: 2,
          name: "香蕉",
          boo: false,
        },
        {
          id: 3,
          name: "西瓜",
          boo: false,
        },
        {
          id: 4,
          name: "葡萄",
          boo: false,
        },
      ],
    };
  },
  created() {
    // this.addresslist();
    // this.demolist();
  },
  watch: {
    checkallchange(curVal) {
      if (curVal.length == this.list.length) {
        this.checkedall = true;
      } else {
        this.checkedall = false;
      }
    },
  },
  methods: {
    parentclick(event) {
      console.log(event.currentTarget.checked);
      if (!event.currentTarget.checked) {
        this.checkallchange = [];
      } else {
        //实现全选
        this.checkallchange = [];
        this.list.forEach((item, i) => {
          this.checkallchange.push(i);
        });
      }
    },
  },
};
</script>
