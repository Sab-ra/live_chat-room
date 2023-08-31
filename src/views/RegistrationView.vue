<template>
  <div class="welcome container">
    <p>Welcome</p>
    <SignUpVue/>
  </div>
</template>

<script>
import SignUpVue from '@/components/SignUp.vue'

export default {

  components: {
    SignUpVue
  }

}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0px;
  }
</style>