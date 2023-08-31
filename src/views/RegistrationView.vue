<template>
  <div class="welcome container">
    <p>Welcome</p>
    <SignUpVue />
    <LogInVue />
  </div>
</template>

<script>
import SignUpVue from '@/components/SignUp.vue'
import LogInVue from '@/components/LogIn.vue'

export default {

  components: {
    SignUpVue,
    LogInVue
  }

}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0px;
  }

  .welcome form {
    width: 80%;
    max-width: 300px;
    margin: 20px auto;
  }

  .welcome label {
    display: block;
    margin: 20px 0px 10px;
  }

  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
</style>