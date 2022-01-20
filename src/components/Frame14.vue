<template>
  <div :class="[`frame-14`, className || ``]">
    <div class="kehinde-osagie montserrat-bold-eerie-black-15-4px">Kehinde Osagie</div>
    <img class="group-179" :src="group179" />
  </div>
</template>

<script>
export default {
  name: "Frame14",
  props: ["group179", "className"],
};
</script>

<style>
.frame-14 {
  align-items: center;
  display: flex;
  height: 21px;
  left: 332px;
  min-width: 178px;
  position: absolute;
  top: 1260px;
}

.kehinde-osagie {
  letter-spacing: 0.08px;
  line-height: 20.5px;
  min-height: 21px;
  white-space: nowrap;
  width: 128px;
}

.group-179 {
  height: 20px;
  margin-left: 17px;
  width: 20px;
}

.frame-14.frame-14-1 {
  left: 64px;
  top: 632px;
}
</style>
