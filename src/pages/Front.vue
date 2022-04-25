<script setup lang="ts">
import useCountStore from "@/store/modules/useCountStore";
import { storeToRefs } from "pinia";
const countStore = useCountStore();
const refCount = storeToRefs(countStore)
</script>

<template>
  <div>count: {{ countStore.num }}</div>
  <div>count: {{ refCount.num }}</div>
  <div><button @click="countStore.increment()">+1</button></div>
</template>

<style lang="scss" scoped>

</style>
