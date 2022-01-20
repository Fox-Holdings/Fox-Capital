<template>
  <div :class="[`frame-20`, className || ``]">
    <div class="jeminat-muritala montserrat-bold-eerie-black-15-4px">Jeminat Muritala</div>
    <img
      class="group-185-3"
      src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e6a200f6d2adc8e6027bea/img/group-185-2@2x.png"
    />
  </div>
</template>

<script>
export default {
  name: "Frame20",
  props: ["className"],
};
</script>

<style>
.frame-20 {
  align-items: center;
  display: flex;
  height: 21px;
  left: 326px;
  min-width: 203px;
  position: absolute;
  top: 1838px;
}

.jeminat-muritala {
  letter-spacing: 0.08px;
  line-height: 20.5px;
  min-height: 21px;
  white-space: nowrap;
  width: 138px;
}

.group-185-3 {
  height: 20px;
  margin-left: 30px;
  width: 20px;
}

.frame-20.frame-20-1 {
  left: unset;
  margin-right: 9px;
  margin-top: 22px;
  position: unset;
  top: unset;
}
</style>
