<template>
  <div :class="[`frame-15`, className || ``]">
    <div class="name montserrat-bold-eerie-black-17-5px">{{ name }}</div>
    <img class="group-181" :src="group181" />
  </div>
</template>

<script>
export default {
  name: "Frame15",
  props: ["name", "group181", "className"],
};
</script>

<style>
.frame-15 {
  align-items: center;
  display: flex;
  height: 24px;
  left: 327px;
  min-width: 211px;
  position: absolute;
  top: 373px;
}

.name {
  letter-spacing: 0.09px;
  line-height: 23.3px;
  min-height: 24px;
  white-space: nowrap;
  width: 153px;
}

.group-181 {
  height: 22px;
  margin-left: 36px;
  width: 22px;
}

.frame-15.frame-18 {
  top: 681px;
}

.frame-15.frame-18 .name,
.frame-15.frame-18-1 .name {
  width: 155px;
}

.frame-15.frame-18 .group-181,
.frame-15.frame-18-1 .group-181 {
  margin-left: 34px;
}

.frame-15.frame-15-1 {
  left: unset;
  margin-right: 29.94px;
  margin-top: 10px;
  position: unset;
  top: unset;
}

.frame-15.frame-15-1 .group-181 {
  margin-left: 37px;
}

.frame-15.frame-21 {
  align-items: flex-start;
  height: 23px;
  left: unset;
  margin-right: 29.94px;
  margin-top: 31px;
  position: unset;
  top: unset;
}

.frame-15.frame-21 .name {
  margin-top: -0.29px;
  width: 155px;
}

.frame-15.frame-21 .group-181 {
  align-self: center;
  margin-left: 34px;
}

.frame-15.frame-15-2 {
  top: 415px;
}

.frame-15.frame-18-1 {
  top: 762px;
}
</style>
