<template>
  <div :class="[`frame-35632-21 montserrat-normal-black-12px`, className || ``]">
    <div class="privacy-policy-21">Privacy Policy</div>
    <div class="terms-of-use-21">Terms of Use</div>
  </div>
</template>

<script>
export default {
  name: "Frame35632",
  props: ["className"],
};
</script>

<style>
.frame-35632-21 {
  align-items: flex-start;
  display: flex;
  height: 15px;
  min-width: 605px;
}

.privacy-policy-21 {
  letter-spacing: 0;
  min-height: 15px;
  min-width: 82px;
}

.terms-of-use-21 {
  letter-spacing: 0;
  margin-left: 24px;
  min-height: 15px;
}

.frame-35632-21.frame-35632-24 {
  align-items: unset;
  height: unset;
  margin-left: 91px;
  margin-top: 18.5px;
  min-width: unset;
  width: 605px;
}

.frame-35632-21.frame-35632-24 .privacy-policy-21 {
  height: 15px;
  min-height: unset;
  min-width: unset;
  width: 82px;
}

.frame-35632-21.frame-35632-24 .terms-of-use-21 {
  height: 15px;
  min-height: unset;
  width: 78px;
}
</style>
