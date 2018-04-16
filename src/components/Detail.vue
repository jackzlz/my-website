<template>
  <!-- content -->
  <div class="container">
    <div class="women_main">
      <!-- start content -->
      <div class="row single">
        <div class="col-md-9">
          <div class="single_left">
            <div class="grid images_3_of_2">
              <ul id="etalage">
                <li v-for="(imgUrl, index) in goods.goods_img_url" :key="index">
                  <img class="etalage_thumb_image" :src="imgUrl" />
                  <img class="etalage_source_image" :src="imgUrl" title="" />
                </li>
              </ul>
              <div class="clearfix"></div>
            </div>
            <div class="desc1 span_3_of_2">
              <h3>{{goods.goods_name}}</h3>
              <p>Rs. {{goods.goods_price}}
              </p>

              <div class="btn_form">

                <div class="input-group" style="width:120px;float:left;margin-right:20px">
                  <span class="input-group-btn">
                    <button type="button" class="btn btn-default btn-number" :disabled="num === min" v-on:click="num-=1">
                      <span class="glyphicon glyphicon-minus"></span>
                    </button>
                  </span>
                  <input type="text" class="form-control input-number" v-model.number="num">
                  <span class="input-group-btn">
                    <button type="button" class="btn btn-default btn-number" :disabled="num === max" v-on:click="num+=1">
                      <span class="glyphicon glyphicon-plus"></span>
                    </button>
                  </span>
                </div>

                <a href="buy.html" style="margin-top:-4px" v-on:click="buy($event)">buy</a>
              </div>

            </div>
            <div class="clearfix"></div>
          </div>
          <div class="single-bottom1">
            <h6>Details</h6>
            <p class="prod-desc">{{goods.desc}}
            </p>
          </div>

        </div>
        <div class="clearfix"></div>
      </div>
      <!-- end content -->
    </div>
  </div>

</template>
<script>
import '@/assets/css/etalage.css'
import '@/assets/js/jquery.etalage.js'
export default {
  name: 'detail',
  data () {
    return {
      num_actual: 1,
      min: 1,
      max: 10,
      goods: {},
      etalageNeedLoad: false
    }
  },
  computed: {
    num: {
      get: function () {
        return this.num_actual
      },
      set: function (newValue) {
        if (!isNaN(newValue)) {
          this.num_actual =
            newValue < this.min
              ? this.min
              : newValue > this.max ? this.max : newValue
        }
      }
    }
  },
  methods: {
    buy: function (event) {
      event.preventDefault()
      this.$router.push({
        name: 'Buy',
        params: {
          productCode: this.goods.goods_code,
          productId: this.goods.id,
          num: this.num_actual
        }
      })
    },
    fetchData: function () {
      this.$http
        .get(this.GLOBAL.baseUrl + '/business/goods/goodDetail', {
          params: { good_code: this.$route.params.productCode }
        })
        .then(
          function (response) {
            if (response.body.errno === 0 && response.body.body.good) {
              this.goods = response.body.body.good
              this.etalageNeedLoad = true
            } else {
              this.$router.push({ name: 'Product' })
            }
          },
          function (response) {
            this.$router.push({ name: 'Product' })
          }
        )
    }
  },
  updated: function () {
    if (this.etalageNeedLoad) {
      $('#etalage').etalage({
        thumb_image_width: 300,
        thumb_image_height: 400,
        source_image_width: 900,
        source_image_height: 1200,
        show_hint: true,
        click_callback: function (imageAnchor, instanceId) {
          alert(
            'Callback example:\nYou clicked on an image with the anchor: "' +
              imageAnchor +
              '"\n(in Etalage instance: "' +
              instanceId +
              '")'
          )
        }
      })
      this.etalageNeedLoad = false
    }
  },
  created: function () {
    this.fetchData()
  },

  mounted: function () {}
}
</script>

<style scoped>

</style>
