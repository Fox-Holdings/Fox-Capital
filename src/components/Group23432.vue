<template>
  <div :class="[`group-234-10`, className || ``]">
    <div class="do-we-have-everythin-8 montserrat-bold-eerie-black-40-8px">
      Do we have everything you&#39;re looking for?
    </div>
    <div class="drop-us-your-contact-9 montserrat-normal-eerie-black-23-8px">
      Drop us your contact details, We are always more than happy to help.
    </div>
    <group217
      :overlapGroup2="group217Props.overlapGroup2"
      :overlapGroup1="group217Props.overlapGroup1"
      :className="group217Props.className"
    />
    <x-footer :className="group217Props2.className" />
  </div>
</template>

<script>
import Group217 from "./Group217";
import XFooter from "./XFooter";
export default {
  name: "Group23432",
  components: {
    Group217,
    XFooter,
  },
  props: ["className", "group217Props", "group217Props2"],
};
</script>

<style>
.group-234-10 {
  display: flex;
  flex-direction: column;
  height: 408px;
  left: 0;
  position: absolute;
  top: 1492px;
  width: 1204px;
}

.do-we-have-everythin-8 {
  height: 58px;
  letter-spacing: 0;
  line-height: 57.9px;
  margin-left: 147px;
  white-space: nowrap;
  width: 906px;
}

.drop-us-your-contact-9 {
  height: 68.63px;
  letter-spacing: 0;
  line-height: 38.5px;
  margin-left: 323px;
  margin-top: 26.3px;
  text-align: center;
  width: 553.12px;
}

.group-234-10.group-234-11 {
  left: unset;
  margin-top: 200px;
  position: relative;
  top: unset;
}

.group-234-10.group-234-12,
.group-234-10.group-234-16 {
  left: unset;
  margin-top: 71px;
  position: relative;
  top: unset;
}

.group-234-10.group-234-13,
.group-234-10.group-234-14 {
  left: unset;
  margin-top: 101px;
  position: relative;
  top: unset;
}

.group-234-10.group-234-15 {
  left: unset;
  margin-left: 4px;
  margin-top: 111px;
  position: relative;
  top: unset;
}

.group-234-10.group-234-17,
.group-234-10.group-234-18 {
  align-items: center;
  height: unset;
  left: unset;
  margin-top: 71px;
  min-height: 408px;
  position: relative;
  top: unset;
}

.group-234-10.group-234-17 .do-we-have-everythin-8,
.group-234-10.group-234-18 .do-we-have-everythin-8 {
  height: unset;
  margin-left: unset;
  margin-right: 4px;
  min-height: 58px;
  min-width: 906px;
  width: unset;
}

.group-234-10.group-234-17 .drop-us-your-contact-9,
.group-234-10.group-234-18 .drop-us-your-contact-9 {
  height: unset;
  margin-left: unset;
  margin-right: 4.88px;
  margin-top: 26px;
  min-height: 69px;
  width: 553px;
}
</style>
