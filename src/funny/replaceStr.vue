<script setup lang="ts">
import { ref, customRef, Ref } from "vue";

const list = ["sb", "SB"];
const replaceStr = (str: string) => {
  list.forEach((item) => {
    str = str.replaceAll(item, "**");
  });
  return str;
};
const useReplaceRef = (value: string) => {
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue: string) {
        value = replaceStr(newValue);
        trigger();
      },
    };
  });
};

const msg = useReplaceRef("this is msg");
</script>

<template>
  <div>
    <input w:border="black" w:p="x-2 y-2" type="text" v-model="msg" />
  </div>
</template>

<style scoped></style>
