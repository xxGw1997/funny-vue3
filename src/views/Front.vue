<script setup lang="ts">
import useCountStore from "@/store/modules/useCountStore";
import { storeToRefs } from "pinia";
const countStore = useCountStore();
const refCount = storeToRefs(countStore);

const toggleMode = () => {
  const classes = document.documentElement.classList.value.split(" ");
  if (classes.includes("dark")) {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
};
</script>

<template>
  <div>count: {{ countStore.num }}</div>
  <div>count: {{ refCount.num }}</div>
  <div><button @click="countStore.increment()">+1</button></div>
  <button
    w:bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
    w:text="sm white dark:red-500"
    w:font="mono light"
    w:p="y-2 x-2"
    w:border="2 rounded blue-200"
    w:text-white
  >
    windi css
  </button>
  <br />
  <button class="btn hover:btn-green dark:bg-dark ">
    use shortcuts
  </button>
  <br />
  <button @click="toggleMode">toggle mode</button>
</template>

<style lang="scss" scoped></style>
