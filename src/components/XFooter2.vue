<template>
  <div :class="[`footer-23`, className || ``]">
    <frame35632 :className="frame35632Props.className" />
    <p class="x2021-fox-capital-investment-limited-21 montserrat-normal-black-16px">
      <span class="span-28 montserrat-normal-black-16px">©</span
      ><span class="span-28 montserrat-normal-black-12px"> 2021 Fox Capital Investment Limited</span>
    </p>
  </div>
</template>

<script>
import Frame35632 from "./Frame35632";
export default {
  name: "XFooter2",
  components: {
    Frame35632,
  },
  props: ["className", "frame35632Props"],
};
</script>

<style>
.footer-23 {
  align-items: center;
  background-color: var(--concrete);
  display: flex;
  height: 52px;
  margin-right: 4px;
  margin-top: 145px;
  min-width: 1920px;
  padding: 0 91px;
  position: relative;
}

.x2021-fox-capital-investment-limited-21 {
  letter-spacing: 0;
  margin-left: 900px;
  min-height: 20px;
  min-width: 233px;
}

.footer-23.footer-26 {
  align-items: unset;
  margin-right: unset;
  min-width: unset;
  padding: unset;
  width: 1920px;
}

.footer-23.footer-26 .x2021-fox-capital-investment-limited-21 {
  height: 20px;
  margin-top: 16px;
  min-height: unset;
  min-width: unset;
  width: 233px;
}

.footer-23.footer-27 {
  left: 0;
  margin-right: unset;
  margin-top: unset;
  position: absolute;
  top: 9987px;
}
</style>
