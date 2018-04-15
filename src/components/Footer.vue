<template>
  <div>

    <!-- footer_top -->
    <div class="footer_top">
      <div class="container">
        <!-- start span_of_2 -->
        <div class="span_of_2">
          <div class="span1_of_2">
            <h5>need help?
              <router-link :to="{name: 'Contact'}">
                contact us
                <span> ></span>
              </router-link>
            </h5>
            <p>(or) Call us: +91-70-12345678</p>
          </div>
          <div class="span1_of_2">
            <h5>follow us </h5>
            <div class="social-icons">
              <ul>
                <li>
                  <a href="#" target="_blank"></a>
                </li>
                <li>
                  <a href="#" target="_blank"></a>
                </li>
                <li>
                  <a href="#" target="_blank"></a>
                </li>
                <li>
                  <a href="#" target="_blank"></a>
                </li>
                <li>
                  <a href="#" target="_blank"></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <div class="footer">
      <div class="container">
        <div class="copy">
          <p class="link">&copy; All rights reserved | Design by&nbsp;
            <a href="#">.</a>
          </p>
        </div>
      </div>
    </div>

  </div>

</template>
<script>
export default {
  name: 'footerComponent',
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
