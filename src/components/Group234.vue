<template>
  <div :class="[`group-234`, className || ``]">
    <div class="do-we-have-everythin montserrat-bold-eerie-black-25-5px">
      Do we have everything you&#39;re looking for?
    </div>
    <p class="drop-us-your-contact montserrat-normal-eerie-black-14-9px">
      Drop us your contact details, We are always more than happy to help.
    </p>
    <div class="group-217">
      <div class="overlap-group1" :style="{ 'background-image': 'url(' + overlapGroup + ')' }">
        <div class="your-name montserrat-bold-cape-cod-11px">Your Name</div>
      </div>
      <div class="overlap-group-4" :style="{ 'background-image': 'url(' + overlapGroup1 + ')' }">
        <div class="your-email-address montserrat-bold-cape-cod-11px">Your Email Address</div>
      </div>
      <div class="overlap-group2-1"><div class="get-in-touch montserrat-bold-orange-peel-11px">Get in Touch</div></div>
    </div>
    <div class="footer">
      <div class="frame-35632 montserrat-normal-black-5-1px">
        <div class="privacy-policy">Privacy Policy</div>
        <div class="terms-of-use">Terms of Use</div>
      </div>
      <p class="x2021-fox-capital-investment-limited montserrat-normal-black-6-8px">
        <span class="span-2 montserrat-normal-black-6-8px">©</span
        ><span class="span-2 montserrat-normal-black-5-1px"> 2021 Fox Capital Investment Limited</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Group234",
  props: ["overlapGroup", "overlapGroup1", "className"],
};
</script>

<style>
.group-234 {
  display: flex;
  flex-direction: column;
  height: 255px;
  margin-left: 4px;
  margin-top: 125px;
  width: 754px;
}

.do-we-have-everythin {
  height: 36.25px;
  letter-spacing: 0;
  line-height: 36.2px;
  margin-left: 91.9px;
  margin-top: 0;
  white-space: nowrap;
  width: 566.25px;
}

.drop-us-your-contact {
  height: 42.89px;
  letter-spacing: 0;
  line-height: 24.1px;
  margin-left: 201.9px;
  margin-top: 16.4px;
  text-align: center;
  width: 345.7px;
}

.group-217 {
  align-items: flex-start;
  display: flex;
  height: 53.09px;
  margin-left: 57px;
  margin-top: 42.5px;
  min-width: 649.15px;
}

.overlap-group1 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 54px;
  margin-top: -0.21px;
  min-width: 201px;
  padding: 17.2px 27.6px;
}

.your-name {
  letter-spacing: 0;
  line-height: 18.9px;
  min-height: 16px;
  white-space: nowrap;
}

.overlap-group-4 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 54px;
  margin-left: 20px;
  margin-top: -0.21px;
  min-width: 201px;
  padding: 17.2px 27.1px;
}

.your-email-address {
  letter-spacing: 0;
  line-height: 18.9px;
  min-height: 19px;
  white-space: nowrap;
}

.overlap-group2-1 {
  align-items: flex-end;
  background-color: var(--concrete);
  border-radius: 6.37px;
  box-shadow: 4.25px 4.25px 8.49px #00000017, -4.25px -4.25px 8.49px #ffffff;
  display: flex;
  height: 53px;
  justify-content: flex-end;
  margin-left: 21px;
  margin-top: 0;
  min-width: 201px;
  padding: 19px 60.4px;
}

.get-in-touch {
  letter-spacing: 0.06px;
  line-height: 14.7px;
  min-height: 15px;
  opacity: 0.9;
  white-space: nowrap;
  width: 74px;
}

.footer {
  background-color: var(--concrete);
  display: flex;
  height: 22.08px;
  margin-top: 41.6px;
  width: 750px;
}

.frame-35632 {
  display: flex;
  margin-left: 66.3px;
  margin-top: 7.9px;
  width: 136.25px;
}

.privacy-policy {
  height: 6.37px;
  letter-spacing: 0;
  width: 34.83px;
}

.terms-of-use {
  height: 6.37px;
  letter-spacing: 0;
  margin-left: 10.2px;
  width: 33.13px;
}

.x2021-fox-capital-investment-limited {
  height: 8.49px;
  letter-spacing: 0;
  margin-left: 382.2px;
  margin-top: 6.8px;
  width: 98.96px;
}

.group-234.group-234-1 {
  margin-left: 3px;
  margin-top: 36px;
}

.group-234.group-234-2 {
  margin-top: 109px;
}

.group-234.group-234-3 {
  margin-left: 3px;
  margin-top: 176px;
}

.group-234.group-234-4 {
  margin-top: 100px;
}

.group-234.group-234-4 .do-we-have-everythin,
.group-234.group-234-4 .overlap-group2-1 {
  margin-top: unset;
}

.group-234.group-234-5 {
  align-items: center;
  height: unset;
  margin-left: 3px;
  margin-top: 36px;
  min-height: 255px;
}

.group-234.group-234-5 .do-we-have-everythin {
  height: unset;
  margin-left: unset;
  margin-right: 4px;
  margin-top: unset;
  min-height: 36px;
  width: 566px;
}

.group-234.group-234-5 .drop-us-your-contact {
  height: unset;
  margin-left: unset;
  margin-right: 4.55px;
  margin-top: 16px;
  min-height: 43px;
  width: 346px;
}

.group-234.group-234-5 .group-217 {
  height: unset;
  margin-left: 9.21px;
  margin-top: 42px;
  min-width: 649px;
}

.group-234.group-234-5 .overlap-group1 {
  margin-top: -0.46px;
  padding: 17.4px 27.6px;
}

.group-234.group-234-5 .overlap-group-4 {
  margin-top: -0.46px;
  padding: 17.4px 27.1px;
}

.group-234.group-234-5 .footer {
  align-items: center;
  height: 22px;
  margin-right: 4px;
  margin-top: 42px;
  min-width: 750px;
  padding: 0 66.3px;
  width: unset;
}

.group-234.group-234-5 .frame-35632 {
  align-items: flex-start;
  height: 6px;
  margin-bottom: 0;
  margin-left: unset;
  margin-top: unset;
  min-width: 136px;
  width: unset;
}

.group-234.group-234-5 .privacy-policy {
  height: unset;
  min-height: 6px;
  width: 35px;
}

.group-234.group-234-5 .terms-of-use {
  height: unset;
  margin-left: 10px;
  min-height: 6px;
  width: 33px;
}

.group-234.group-234-5 .x2021-fox-capital-investment-limited {
  height: unset;
  margin-left: 382px;
  margin-top: unset;
  min-height: 8px;
  width: 99px;
}
</style>
