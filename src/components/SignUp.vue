<template>
  <form @submit.prevent="handleSignupInput">
    <input type="text" required placeholder="First name" v-model="displayName">
    <input type="email" required placeholder="your@email.hear" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <button>
      Sign Up         
    </button>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    //refs
    let displayName = ref( '' )
    let email = ref( '' )
    let password = ref( '' )

    const handleSignupInput = () => {
      console.log( displayName.value, email.value, password.value )
    }

    return { displayName, email, password, handleSignupInput }
  }
}
</script>

<style>

</style>