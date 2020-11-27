<!--
 * @Author: your name
 * @Date: 2020-11-07 09:59:13
 * @LastEditTime: 2020-11-07 18:07:13
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue测试\vue-demo\src\components\counttime.vue
-->

<template>
  <div>
      <div id="recomTime">剩余支付时间 {{rocallTime}}</div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            rocallTime:''
        }
    },
    props:['createdtime','nowtime','statsus'],
    created() {
        this.ComputetTime(this.nowtime,this.createdtime);
        console.log(this.statsus);
    },
  methods: {
    ComputetTime(data,datas) {
      let st = data.replace(/\-/g, "/"), //当前服务器时间
        ct = datas.replace(/\-/g, "/"); //创建订单时间
      let ts = new Date(st).getTime(),
        tc = new Date(ct).getTime();
      let cm = 15 * 60 * 1000 - (ts - tc);
      this.runBack(cm);
      
    },
    runBack(cm) {
      if (cm > 0) {
        cm > 60000
          ? (this.rocallTime =
              (new Date(cm).getMinutes() < 10
                ? "0" + new Date(cm).getMinutes()
                : new Date(cm).getMinutes()) +
              ":" +
              (new Date(cm).getSeconds() < 10
                ? "0" + new Date(cm).getSeconds()
                : new Date(cm).getSeconds()))
          : (this.rocallTime =
              "00:" +
              (new Date(cm).getSeconds() < 10
                ? "0" + new Date(cm).getSeconds()
                : new Date(cm).getSeconds()));
        let _msThis = this;
        setTimeout(function () {
          cm -= 1000;
          _msThis.runBack(cm);
        }, 1000);
      } else {
        // this.changeOrderState(); //调用改变订单状态接口
        console.log(123);
      }
    },
  },
};
</script>