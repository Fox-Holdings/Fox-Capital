<template>
  <div :class="[`footer-7`, className || ``]">
    <div class="frame-35632-7 montserrat-normal-black-8-2px">
      <div class="privacy-policy-7">Privacy Policy</div>
      <div class="terms-of-use-7">Terms of Use</div>
    </div>
    <p class="x2021-fox-capital-investment-limited-7 montserrat-normal-black-10-9px">
      <span class="span-10 montserrat-normal-black-10-9px">©</span
      ><span class="span-10 montserrat-normal-black-8-2px"> 2021 Fox Capital Investment Limited</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "XFooter",
  props: ["className"],
};
</script>

<style>
.footer-7 {
  background-color: var(--concrete);
  display: flex;
  height: 35.34px;
  margin-top: 66.5px;
  width: 1200px;
}

.frame-35632-7 {
  display: flex;
  margin-left: 106.1px;
  margin-top: 12.6px;
  width: 218px;
}

.privacy-policy-7 {
  height: 10.19px;
  letter-spacing: 0;
  width: 55.72px;
}

.terms-of-use-7 {
  height: 10.19px;
  letter-spacing: 0;
  margin-left: 16.3px;
  width: 53px;
}

.x2021-fox-capital-investment-limited-7 {
  height: 13.59px;
  letter-spacing: 0;
  margin-left: 611.6px;
  margin-top: 10.9px;
  width: 158.33px;
}

.footer-7.footer-8 {
  margin-top: 44.5px;
}

.footer-7.footer-15,
.footer-7.footer-16 {
  align-items: center;
  height: 35px;
  margin-right: 4px;
  margin-top: 67px;
  min-width: 1200px;
  padding: 10.9px 106.1px;
  width: unset;
}

.footer-7.footer-15 .frame-35632-7,
.footer-7.footer-16 .frame-35632-7 {
  align-items: flex-start;
  height: 10px;
  margin-left: unset;
  margin-top: 0;
  min-width: 218px;
  width: unset;
}

.footer-7.footer-15 .privacy-policy-7,
.footer-7.footer-16 .privacy-policy-7 {
  height: unset;
  min-height: 10px;
  width: 56px;
}

.footer-7.footer-15 .terms-of-use-7,
.footer-7.footer-16 .terms-of-use-7 {
  height: unset;
  margin-left: 16px;
  min-height: 10px;
  width: 53px;
}

.footer-7.footer-15 .x2021-fox-capital-investment-limited-7,
.footer-7.footer-16 .x2021-fox-capital-investment-limited-7 {
  align-self: flex-end;
  height: unset;
  margin-left: 612px;
  margin-top: unset;
  min-height: 14px;
  width: 158px;
}
</style>
