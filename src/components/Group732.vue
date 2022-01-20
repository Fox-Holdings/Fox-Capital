<template>
  <div :class="[`group-73-3-1`, className || ``]" :style="{ 'background-image': 'url(' + group73 + ')' }">
    <img class="group-72-4" :src="group72" />
  </div>
</template>

<script>
export default {
  name: "Group732",
  props: ["group73", "group72", "className"],
};
</script>

<style>
.group-73-3-1 {
  align-self: flex-end;
  background-size: 100% 100%;
  display: flex;
  height: 50px;
  margin-bottom: -0.3px;
  margin-left: 20px;
  width: 54px;
}

.group-72-4 {
  height: 15.5px;
  margin-left: 20.1px;
  margin-top: 21.8px;
  width: 13.5px;
}
</style>
