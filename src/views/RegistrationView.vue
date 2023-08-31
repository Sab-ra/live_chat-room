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
</style>