<template>
  <nav class="p-[40px] h-[60px] FR AC JSB border-b-[1px] border-b-[#bec4cd]">
    <router-link to="/">
      <img :src="logo" class="h-[50px] rounded-full" />
    </router-link>
    <div class="FR AC JC">
      <router-link to="/career" class="mr-5">
        <p class="pointer text-[20px] font-bold">Career</p>
      </router-link>
      <router-link to="/portfolio">
        <p class="pointer text-[20px] font-bold">Portfolio</p>
      </router-link>
    </div>
  </nav>
  <div class="FR AC JC">
    <RouterView />
  </div>
</template>

<script lang="ts">
import logo from '@/assets/logo.png'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  setup() {
    return { logo }
  }
})
</script>
<style scoped></style>
