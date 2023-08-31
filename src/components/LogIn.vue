<template>
  <form @submit.prevent="handleLoginInput">
    <input type="email" required placeholder="your@email.hear" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <button>
      Log In
    </button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    //refs
    let email = ref( '' )
    let password = ref( '' )

    const handleLoginInput = () => {
      console.log( email.value, password.value )
    }

    return { email, password, handleLoginInput }
  }
}
</script>

<style>

</style>