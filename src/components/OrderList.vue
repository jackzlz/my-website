<template>
  <!-- content -->
  <div class="container">
    <div class="main">
      <div class="orderSearch">
        <form class="form-inline">
          <div class="form-group">
            <input type="text" class="form-control" id="contact" placeholder="Email OR Phone" v-model="contact">
          </div>
          <button type="button" class="btn btn-default" v-on:click="search()">Search</button>
        </form>

      </div>
      <div class="shoping_bag1" v-for="order in orderList" :key="order.order_no">
        <div class="shoping_left">
          <div class="shoping1_of_1">
            <img src="images/w3.jpg" class="img-responsive" alt="" />
          </div>
          <div class="shoping1_of_2">
            <h4>
              <router-link :to="{name: 'Detail', params: {productCode: order.goods_code}}">
                {{order.goods_name}}
              </router-link>
            </h4>
            <span>orderNo
              <b>{{order.order_no}}</b> | qty
              <b>{{order.order_goods_count}}</b> | code :{{order.goods_code}} | time :{{order.create_time}}</span>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="shoping_right">
          <p>
            <span> Rs. {{order.goods_price}}</span>
          </p>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderListComponent',
  data () {
    return {
      orderList: [],
      contact: ''
    }
  },
  methods: {
    search: function () {
      if (!this.contact) {
        return
      }
      this.$http.get(this.GLOBAL.baseUrl + '/business/goods/orderList', { params: { contact: this.contact } }).then(function (response) {
        if (response.body.errno === 0) {
          this.orderList = response.body.body.list
        }
      }, function (response) {
        this.$router.push({ name: 'Product' })
      })
    }
  }

}
</script>

<style scoped>
.container {
  min-height: 650px;
}
.orderSearch {
  height: 70px;
  padding-top: 20px;
}
label {
  display: inline-block;
  margin-bottom: 5px;
  font-weight: 700;
}
</style>
