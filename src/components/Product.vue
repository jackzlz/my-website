<template>
  <div class="product">

    <!-- content -->
    <div class="container">
      <div class="women_main">
        <!-- start sidebar -->
        <div class="col-md-3">
          <div class="w_sidebar">
            <div class="w_nav1">
              <h4>All</h4>
              <ul>
                <li v-for="group in groups" :key="group">
                  <a href="#" v-on:click="groupClick(group,$event)">{{group}}</a>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <!-- start content -->
        <div class="col-md-9 w_content">

          <!-- grids_of_4 -->

          <div class="grids_of_4" v-for="(datas,index) in dataList" :key="index">
            <div class="grid1_of_4" v-for="product in datas" :key="product.id">
              <div class="content_box">
                <router-link :to="{name: 'Detail', params: {productCode: product.goods_code}}">
                  <div class="view view-fifth">
                    <img :src="product.goods_img_url" class="img-responsive" alt="" />
                    <div class="mask">
                      <div class="info">Quick View</div>
                    </div>
                  </div>
                </router-link>
                <h4>
                  <router-link :to="{name: 'Detail', params: {productCode: product.goods_code}}">{{product.goods_name}}</router-link>
                </h4>
                <p>{{product.desc}}</p>
                Rs. {{product.goods_price}}
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
          <!-- end grids_of_4 -->

          <!-- <nav aria-label="Page navigation" style="text-align:right">
            <ul class="pagination">
              <li>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav> -->
        </div>
        <div class="clearfix"></div>

        <!-- end content -->
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'product',
  data () {
    return {
      productList: [],
      columns: 4,
      groups: []
    }
  },
  computed: {
    dataList () {
      var len = this.productList.length
      var datalist = []
      let i = 0
      for (; i < len; i += this.columns) {
        datalist.push(this.productList.slice(i, i + this.columns))
      }
      return datalist
    }
  },
  created: function () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      this.fetchGroups()
    },

    fetchGroups: function () {
      this.$http.get(this.GLOBAL.baseUrl + '/business/goods/seriesList').then(function (response) {
        if (response.body.errno === 0) {
          let groupList = response.body.body.list
          for (let group of groupList) {
            this.groups.push(group.goods_series)
          }

          this.fetchProductList(this.groups[0])
        }
      }, function (response) {
        this.$router.push({ name: 'Product' })
      })
    },

    fetchProductList: function (group) {
      this.productList = []
      this.$http.get(this.GLOBAL.baseUrl + '/business/goods/list', { params: { goods_series: group } }).then(function (response) {
        if (response.body.errno === 0) {
          let productList = response.body.body.list
          for (let product of productList) {
            this.productList.push(product)
          }
        }
      }, function (response) {
        this.$router.push({ name: 'Product' })
      })
    },

    groupClick: function (group, event) {
      event.stopPropagation()
      this.fetchProductList(group)
    }
  }
}
</script>

<style scoped>
.product {
  min-height: 650px;
}
</style>
