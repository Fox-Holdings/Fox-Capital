<template>
  <div :class="[`group-217-9`, className || ``]">
    <div class="overlap-group-15" :style="{ 'background-image': 'url(' + overlapGroup2 + ')' }">
      <div class="your-name-11 montserrat-bold-cape-cod-17-7px">Your Name</div>
    </div>
    <div class="overlap-group1-11" :style="{ 'background-image': 'url(' + overlapGroup1 + ')' }">
      <div class="your-email-address-10 montserrat-bold-cape-cod-17-7px">Your Email Address</div>
    </div>
    <div class="overlap-group2-9">
      <div class="get-in-touch-10 montserrat-bold-orange-peel-17-7px">Get in Touch</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Group217",
  props: ["overlapGroup2", "overlapGroup1", "className"],
};
</script>

<style>
.group-217-9 {
  align-items: flex-start;
  display: flex;
  height: 84.94px;
  margin-left: 91.2px;
  margin-top: 68px;
  min-width: 1035.04px;
}

.overlap-group-15 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 86px;
  margin-top: -0.28px;
  min-width: 322px;
  padding: 27.5px 44px;
}

.your-name-11 {
  letter-spacing: 0;
  line-height: 30.3px;
  min-height: 26px;
  white-space: nowrap;
}

.overlap-group1-11 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 86px;
  margin-left: 32px;
  margin-top: -0.28px;
  min-width: 322px;
  padding: 27.5px 43.2px;
}

.your-email-address-10 {
  letter-spacing: 0;
  line-height: 30.3px;
  min-height: 30px;
  white-space: nowrap;
}

.overlap-group2-9 {
  align-items: flex-end;
  background-color: var(--concrete);
  border-radius: 10.19px;
  box-shadow: 6.8px 6.8px 13.59px #00000017, -6.8px -6.8px 13.59px #ffffff;
  display: flex;
  height: 85px;
  justify-content: flex-end;
  margin-left: 33px;
  min-width: 321px;
  padding: 30.4px 96.7px;
}

.get-in-touch-10 {
  letter-spacing: 0.09px;
  line-height: 23.6px;
  min-height: 24px;
  min-width: 118px;
  opacity: 0.9;
  white-space: nowrap;
}

.group-217-9.group-217-10 .overlap-group-15 {
  height: 85px;
  margin-top: -0.03px;
  padding: 27.2px 44px;
}

.group-217-9.group-217-10 .overlap-group1-11 {
  height: 85px;
  margin-top: -0.03px;
  padding: 27.2px 43.2px;
}

.group-217-9.group-217-17,
.group-217-9.group-217-18 {
  height: unset;
  margin-left: 13.54px;
  margin-top: 68px;
  min-width: 1035px;
}

.group-217-9.group-217-17 .overlap-group-15,
.group-217-9.group-217-18 .overlap-group-15 {
  margin-left: -1px;
  margin-top: -0.53px;
  padding: 27.7px 44.3px;
}

.group-217-9.group-217-17 .overlap-group1-11,
.group-217-9.group-217-18 .overlap-group1-11 {
  margin-top: -0.53px;
  padding: 27.7px 43.5px;
}
</style>
