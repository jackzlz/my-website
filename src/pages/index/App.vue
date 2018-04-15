<template>
  <div id="contact">
    <form action="#" method="post" name="contact-form" id="main-contact-form">
      <div class="form-group">
        <input type="text" required placeholder="Name" class="form-control" name="name" v-model="name">
      </div>
      <div class="form-group">
        <input type="email" required placeholder="Email" class="form-control" name="email" v-model="email">
      </div>
      <div class="form-group">
        <input type="text" required placeholder="Subject" class="form-control" name="subject" v-model="subject">
      </div>
      <div class="form-group">
        <textarea required placeholder="Message" rows="8" class="form-control" name="message" v-model="message"></textarea>
      </div>
      <button class="btn btn-primary" type="button" v-on:click="submit()">SUBMIT</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  },
  methods: {
    submit: function () {
      if (!this.name || !this.email || !this.subject || !this.message) {
        return
      }
      this.$http.post(this.GLOBAL.baseUrl + '/business/msg/leave', { cust_name: this.name, contact: this.email, subject: this.subject, message: this.message }, { emulateJSON: true }).then(function (response) {
        if (response.body.errno === 0) {
          this.name = ''
          this.email = ''
          this.subject = ''
          this.message = ''
        }
      }, function (response) {
      })
    }
  }

}
</script>

<style>

</style>
