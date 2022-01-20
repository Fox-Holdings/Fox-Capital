<template>
  <div :class="[`group-212`, className || ``]">
    <div class="where-are-we-located montserrat-light-eerie-black-38-1px">Where Are We Located?</div>
    <div class="surname-11 montserrat-normal-eerie-black-17-7px">
      Fox Capital provides a quality, consumer driver platform for&nbsp;&nbsp; new property buyers.For the first time,
      prospective buyers will be able to access every listing consisting of New Age Homes or properties&nbsp;&nbsp;with
      amenities and life style features of the 21st century all in one place.<br />Let’s meet!!
    </div>
    <div class="address montserrat-semi-bold-fuscous-gray-16-3px">
      1 Emina Crescent, Off Toyin Street, Ikeja<br />Lagos, Nigeria.
    </div>
    <img
      class="group-67-1"
      src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1f5e7c8a5a94370b7df04/img/group-67-6@2x.png"
    />
  </div>
</template>

<script>
export default {
  name: "Group212",
  props: ["className"],
};
</script>

<style>
.group-212 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.95px;
  min-height: 475px;
  width: 498px;
}

.where-are-we-located {
  letter-spacing: 0;
  line-height: 54px;
  margin-left: 8.78px;
  min-height: 50px;
  white-space: nowrap;
}

.surname-11 {
  align-self: center;
  letter-spacing: 0.18px;
  line-height: 30.7px;
  margin-left: 2.78px;
  margin-top: 54px;
  min-height: 209px;
  width: 483px;
}

.address {
  letter-spacing: 0.49px;
  line-height: 24.5px;
  margin-left: 8.78px;
  margin-top: 54px;
  min-height: 48px;
  width: 429px;
}

.group-67-1 {
  height: 21px;
  margin-left: 0;
  margin-top: 40px;
  width: 208px;
}

.group-212.group-212-1 {
  margin-bottom: unset;
  margin-right: 68.08px;
  margin-top: 100px;
}
</style>
