<template>
  <nav class="p-[40px] h-[60px] FR AC JSB border-b-[1px] border-b-[#adbac7]">
    <img :src="logo" class="h-[50px] rounded-full" />
    <div class="FR AC JE">
      <router-link to="/career" class="mr-[20px]">
        <p class="pointer text-[20px] font-bold">Career</p>
      </router-link>
      <router-link to="/" class="mr-[20px]">
        <p class="pointer text-[20px] font-bold">Portfolio</p>
      </router-link>

      <router-link to="/career"><p class="pointer text-[20px] font-bold">Resume</p></router-link>
    </div>
  </nav>
  <RouterView />
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
