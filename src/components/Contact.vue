<template>
  <!-- content -->
  <div class="container">
    <div class="main">
      <div class="contact">
        <div class="contact-form">
          <h2>Contact Us</h2>
          <form>
            <div>
              <span>
                <label>Name</label>
              </span>
              <span><input name="userName" type="text" class="textbox" v-model="userName"></span>
            </div>
            <div>
              <span>
                <label>E-mail</label>
              </span>
              <span><input name="userEmail" type="text" class="textbox" v-model="userEmail"></span>
            </div>
            <div>
              <span>
                <label>Mobile</label>
              </span>
              <span><input name="userPhone" type="text" class="textbox" v-model="userPhone"></span>
            </div>
            <div>
              <span>
                <label>Subject</label>
              </span>
              <span><input name="subject" type="text" class="textbox" v-model="subject"></span>
            </div>
            <div>
              <span>
                <label>Message</label>
              </span>
              <span>
                <textarea name="userMsg" v-model="userMsg"> </textarea>
              </span>
            </div>
            <div>
              <span><input type="button" value="Submit us" v-on:click="submit()"></span>
            </div>
          </form>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'contactComponent',
  data () {
    return {
      userName: '',
      userEmail: '',
      userPhone: '',
      subject: '',
      userMsg: ''
    }
  },
  methods: {
    submit: function () {
      this.$http.post(this.GLOBAL.baseUrl + '/business/message/leave', { cust_name: this.userName, contact: this.userEmail, subject: this.subject, message: this.userMsg }).then(function (response) {
        console.log(response)
      }, function (response) {
        console.log(response)
      })
    }
  }
}
</script>
