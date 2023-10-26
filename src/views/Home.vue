<template>
  <div class="section"></div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useCommon from '@/composables/useCommon'

export default defineComponent({
  components: {},
  setup() {
    const { testCommonStoreState, ReadFile } = useCommon()
    const count = ref(1)
    return { count, testCommonStoreState, ReadFile }
  }
})
</script>
<style scoped>
.section {
  padding: 40px;
  width: 1200;
}
</style>
