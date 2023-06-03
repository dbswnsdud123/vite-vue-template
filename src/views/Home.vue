<template>
  <div>
    <p>{{ count }}</p>
    <button @click="count++">count 증가</button>
    <button @click="count--">count 감소</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {},
  setup() {
    const count = ref(1)
    return { count }
  }
})
</script>
<style scoped></style>
