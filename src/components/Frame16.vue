<template>
  <div :class="[`frame-16`, className || ``]">
    <div class="adewale-oshinaike montserrat-bold-eerie-black-17-5px">Adewale Oshinaike</div>
    <img class="group-177" :src="group177" />
  </div>
</template>

<script>
export default {
  name: "Frame16",
  props: ["group177", "className"],
};
</script>

<style>
.frame-16 {
  align-items: center;
  display: flex;
  height: 24px;
  left: 331px;
  min-width: 216px;
  position: absolute;
  top: 97px;
}

.adewale-oshinaike {
  letter-spacing: 0.09px;
  line-height: 23.3px;
  min-height: 24px;
  white-space: nowrap;
  width: 177px;
}

.group-177 {
  height: 22px;
  margin-left: 17px;
  width: 22px;
}

.frame-16.frame-16-1 {
  left: 71px;
  top: 454px;
}

.frame-16.frame-16-2 {
  left: 327px;
}
</style>
