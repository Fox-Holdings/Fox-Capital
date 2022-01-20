<template>
  <div :class="[`frame-19`, className || ``]">
    <div class="name-3 montserrat-bold-eerie-black-17-5px">John Fadejola</div>
    <img class="group-185" :src="group185" />
  </div>
</template>

<script>
export default {
  name: "Frame19",
  props: ["group185", "className"],
};
</script>

<style>
.frame-19 {
  align-items: center;
  display: flex;
  height: 23px;
  left: 327px;
  min-width: 200px;
  position: absolute;
  top: 974px;
}

.name-3 {
  letter-spacing: 0.09px;
  line-height: 23.3px;
  min-height: 23px;
  white-space: nowrap;
  width: 144px;
}

.group-185 {
  height: 22px;
  margin-left: 34px;
  width: 22px;
}

.frame-19.frame-19-1 {
  left: unset;
  margin-left: 16.02px;
  margin-top: 16px;
  position: unset;
  top: unset;
}

.frame-19.frame-19-2 {
  top: 1097px;
}
</style>
