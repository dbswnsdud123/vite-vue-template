<template>
  <div class="section">
    <p>{{ count }}</p>
    <button @click="count++">count 증가</button>
    <button @click="count--">count 감소</button>
    <button @click="ReadFile('https://cat-fact.herokuapp.com/facts')">파일 읽기</button>
    <p>{{ testCommonStoreState }}</p>
  </div>
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
}
</style>
