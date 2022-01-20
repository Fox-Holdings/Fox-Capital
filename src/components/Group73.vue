<template>
  <div :class="[`group-73-2`, className || ``]" :style="{ 'background-image': 'url(' + group73 + ')' }">
    <img class="group-72-3" :src="group72" />
  </div>
</template>

<script>
export default {
  name: "Group73",
  props: ["group73", "group72", "className"],
};
</script>

<style>
.group-73-2 {
  align-self: flex-end;
  background-size: 100% 100%;
  display: flex;
  height: 58px;
  margin-bottom: -0.37px;
  margin-left: 21px;
  width: 58px;
}

.group-72-3 {
  height: 17.5px;
  margin-left: 20.7px;
  margin-top: 24.9px;
  width: 15px;
}

.group-73-2.group-73 .group-72-3,
.group-73-2.group-73-1 .group-72-3 {
  margin-left: 20.5px;
  width: 15.5px;
}
</style>
