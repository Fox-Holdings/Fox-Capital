<template>
  <div :class="[`group-252`, className || ``]">
    <div class="group-251">
      <div class="overlap-group-31">
        <img class="rectangle" :src="rectangle59" /><img class="group-4-4" :src="group4" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Group252",
  props: ["rectangle59", "group4", "className"],
};
</script>

<style>
.group-252 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1f5e7c8a5a94370b7df04/img/rectangle-2-3@2x.png);
  background-size: 100% 100%;
  display: flex;
  height: 84px;
  margin-left: 116px;
  margin-top: 29px;
  width: 89px;
}

.group-251 {
  align-items: flex-start;
  display: flex;
  height: 55px;
  justify-content: flex-end;
  margin-left: 15px;
  margin-top: 14px;
  min-width: 59px;
}

.overlap-group-31 {
  height: 88px;
  margin-top: -9.96px;
  position: relative;
  width: 92px;
}

.rectangle {
  cursor: pointer;
  height: 88px;
  left: 0;
  position: absolute;
  top: 0;
  transition: all 0.2s ease;
  width: 92px;
}

.rectangle:hover {
  transform: scale(1.1);
}

.group-4-4 {
  height: 22px;
  left: 34px;
  position: absolute;
  top: 27px;
  width: 10px;
}

.group-252.group-254 {
  margin-top: 52px;
}

.group-252.group-254 .group-251 {
  margin-top: 13.3px;
}

.group-252.group-254 .group-4-4 {
  height: 20px;
  left: 35px;
  top: 26px;
}

.group-252.group-256 {
  margin-top: 47px;
}

.group-252.group-256 .group-251 {
  margin-top: 14.3px;
}

.group-252.group-256 .group-4-4 {
  top: 26px;
}
</style>
