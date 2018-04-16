<template>
  <!-- content -->
  <div class="container">
    <div class="main">
      <div class="shoping_bag1">
        <div class="shoping_left">
          <div class="shoping1_of_1">
            <img src="images/w3.jpg" class="img-responsive" alt="" />
          </div>
          <div class="shoping1_of_2">
            <h4>
              <router-link :to="{name: 'Detail', params: {productCode: goods.goods_code}}">{{goods.goods_name}}</router-link>
            </h4>
            <span>qty
              <b>{{buyNum}}</b> | code :{{goods.goods_code}}</span>
            <ul class="s_icons">
              <li>
                <a href="#"><img src="../assets/images/s_icon1.png" alt=""></a>
              </li>
              <li>
                <a href="#"><img src="../assets/images/s_icon2.png" alt=""></a>
              </li>
              <li>
                <a href="#"><img src="../assets/images/s_icon3.png" alt=""></a>
              </li>
            </ul>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="shoping_right">
          <p>
            <span> Rs. {{goods.goods_price}}</span>
          </p>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="shoping_bag1">
        <div class="shoping_right">
          <p>sub total &nbsp;
            <span> Rs. {{totalFee}}</span>
          </p>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="shoping_bag2">
        <div class="shoping_left">
          <a class="btn1" href="#" v-on:click="order">place order</a>
        </div>
        <div class="shoping_right">
          <p class="tot">total &nbsp;
            <span class="color"> Rs. {{totalFee}}</span>
          </p>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>

    <!-- 模态框（Modal） -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
            <h4 class="modal-title" id="myModalLabel">
              Place Order
            </h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="productName">Product Name</label>
                <input type="text" class="form-control" id="productName" disabled v-model="goods.goods_name">
              </div>
              <div class="form-group">
                <label for="num">Num</label>
                <input type="number" class="form-control" id="num" disabled v-model="buyNum">
              </div>
              <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="Email" v-model="email">
              </div>
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="text" class="form-control" id="phone" placeholder="" v-model="phone">
              </div>
              <div class="form-group">
                <label for="desc">Desc</label>
                <textarea class="form-control" rows="3" v-model="desc" id="desc"></textarea>
              </div>

            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close
            </button>
            <button type="button" class="btn btn-primary" v-on:click="submit()">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '@/assets/js/bootstrap.min.js'
export default {
  name: 'buyComponent',
  data () {
    return {
      buyNum: this.$route.params.num,
      goods: {},
      email: '',
      phone: '',
      desc: '',
      errors: []
    }
  },
  computed: {
    totalFee: function () {
      return this.buyNum * this.goods.goods_price
    }

  },
  created: function () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      this.$http.get(this.GLOBAL.baseUrl + '/business/goods/goodDetail', { params: { good_code: this.$route.params.productCode } }).then(function (response) {
        if (response.body.errno === 0 && response.body.body.good) {
          this.goods = response.body.body.good
        } else {
          this.$router.push({ name: 'Product' })
        }
      }, function (response) {
        console.log(response)
        this.$router.push({ name: 'Product' })
      })
    },
    order: function () {
      event.preventDefault()
      $('#myModal').modal({
        keyboard: true
      })
    },
    submit: function () {
      if (!this.checkForm()) {
        return
      }
      let orderInfo = { goods_code: this.goods.goods_code, goods_count: this.buyNum, desc: this.desc }
      let orderInfos = []
      orderInfos.push(orderInfo)
      let params = { email: this.email, phone: this.phone, order_info: JSON.stringify(orderInfos) }
      this.$http.post(this.GLOBAL.baseUrl + '/business/goods/saveOrderGoods', params, { emulateJSON: true }).then(function (response) {
        if (response.body.errno === 0) {
          $('#myModal').modal('hide')
        }
      }, function (response) {
        this.$router.push({ name: 'Product' })
      })
    },
    checkForm: function () {
      this.errors = []
      if (!this.phone) this.errors.push('Phone required.')
      if (!this.email) {
        this.errors.push('Email required.')
      } else if (!this.validEmail(this.email)) {
        // this.errors.push('Valid email required.')
      }
      if (!this.errors.length) return true
    },
    validEmail: function (email) {
      var re = /^(([^<>()[]\\.,;:\s@"]+(\.[^<>()[]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>

<style scoped>

</style>
