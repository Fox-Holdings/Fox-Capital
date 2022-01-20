<template>
  <div :class="[`group-234-21`, className || ``]">
    <div class="do-we-have-everythin-17 montserrat-bold-eerie-black-60px">
      Do we have everything you&#39;re looking for?
    </div>
    <div class="drop-us-your-contact-18 montserrat-normal-eerie-black-35px">
      Drop us your contact details, We are always more than happy to help.
    </div>
    <group2173 :className="group217Props22.className" />
    <x-footer2 :className="group217Props222.className" :frame35632Props="group217Props222.frame35632Props" />
  </div>
</template>

<script>
import Group2173 from "./Group2173";
import XFooter2 from "./XFooter2";
export default {
  name: "Group23452",
  components: {
    Group2173,
    XFooter2,
  },
  props: ["className", "group217Props22", "group217Props222"],
};
</script>

<style>
.group-234-21 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 243px;
  min-height: 647px;
  position: relative;
  width: 1924px;
}

.do-we-have-everythin-17 {
  letter-spacing: 0;
  line-height: 85.1px;
  margin-left: 14px;
  min-height: 92px;
  white-space: nowrap;
  width: 1336px;
}

.drop-us-your-contact-18 {
  letter-spacing: 0;
  line-height: 56.7px;
  margin-left: 15px;
  margin-top: 32px;
  min-height: 101px;
  text-align: center;
  width: 885px;
}

.group-234-21.group-234-22 {
  margin-top: 236px;
}

.group-234-21.group-234-24 {
  align-items: unset;
  height: 647px;
  min-height: unset;
}

.group-234-21.group-234-24 .do-we-have-everythin-17 {
  height: 92px;
  margin-left: 301px;
  min-height: unset;
}

.group-234-21.group-234-24 .drop-us-your-contact-18 {
  height: 101px;
  margin-left: 527px;
  min-height: unset;
}
</style>
