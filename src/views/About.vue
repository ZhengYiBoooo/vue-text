

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="recomTime" v-show="orderinfo.orderState == '1'">
      剩余支付时间 {{ rocallTime }}
    </div>
  </div>
</template>
<script>
import timeout from "../components/timecheckout";
export default {
  data() {
    return {
      enddtime: "2020-09-09",
      rocallTime:'',
      box: "123123123",
      orderinfo: {
        orderState: 1,
      },
    };
  },
  created() {
    let dtsad=new Date();
    let yy=[dtsad.getFullYear(),dtsad.getMonth()+1,dtsad.getDate()];
    let bb=[dtsad.getHours(),dtsad.getMinutes(),dtsad.getSeconds()];
    let YMCA=[yy.join('-'),bb.join(':')].join(' ');
    console.log(YMCA);
    this.ComputetTime(YMCA)
  },
  methods: {
    ComputetTime(data) {
      let st = data.replace(/\-/g, "/"), //当前服务器时间
        ct = data.replace(/\-/g, "/"); //创建订单时间
      let ts = new Date(st).getTime(),
        tc = new Date(ct).getTime();
      let cm = 10 * 60 * 1000 - (ts - tc);
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
        console.log(123);
      }
    },
  },
};
</script>