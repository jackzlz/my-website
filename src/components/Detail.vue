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
                <li>
                  <a href="optionallink.html">
                    <img class="etalage_thumb_image" src="@/assets/images/d1.jpg" />
                    <img class="etalage_source_image" src="../assets/images/d1.jpg" title="" />
                  </a>
                </li>
                <li>
                  <img class="etalage_thumb_image" src="../assets/images/d2.jpg" />
                  <img class="etalage_source_image" src="../assets/images/d2.jpg" title="" />
                </li>
                <li>
                  <img class="etalage_thumb_image" src="../assets/images/d3.jpg" />
                  <img class="etalage_source_image" src="../assets/images/d3.jpg" />
                </li>
                <li>
                  <img class="etalage_thumb_image" src="../assets/images/d4.jpg" />
                  <img class="etalage_source_image" src="../assets/images/d4.jpg" />
                </li>
              </ul>
              <div class="clearfix"></div>
            </div>
            <div class="desc1 span_3_of_2">
              <h3>soluta nobis eleifend option</h3>
              <p>Rs. 999
                <a href="#">click for offer</a>
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
              <a href="#">
                <span>login to save in wishlist </span>
              </a>

            </div>
            <div class="clearfix"></div>
          </div>
          <div class="single-bottom1">
            <h6>Details</h6>
            <p class="prod-desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option
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
      max: 10
    }
  },
  computed: {
    num: {
      get: function () {
        return this.num_actual
      },
      set: function (newValue) {
        if (!isNaN(newValue)) {
          this.num_actual = newValue < this.min ? this.min : newValue > this.max ? this.max : newValue
        }
      }
    }
  },
  methods: {

    buy: function (event) {
      event.preventDefault()
      alert()
    }
  },

  mounted: function () {
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
  }
}
</script>

<style scoped>

</style>
