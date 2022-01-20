<template>
  <div class="container-center-horizontal">
    <div class="about-us-1-1 screen">
      <div class="flex-row-53">
        <router-link to="/home-page" className="align-self-flex-start"
          ><img class="fox-capital-logo-2-26" :src="foxCapitalLogo2" /></router-link
        ><router-link to="/home-page">
          <div class="place-35 montserrat-bold-storm-dust-22px">{{ place }}</div> </router-link
        ><router-link to="/about-us">
          <div class="about-us-29 montserrat-bold-fuscous-gray-22px">{{ aboutUs }}</div> </router-link
        ><router-link to="/services">
          <div class="services-25 montserrat-bold-storm-dust-22px">{{ services }}</div>
        </router-link>
        <div class="overlap-group9-14">
          <div class="investment-27 montserrat-bold-orange-peel-22px">{{ investment }}</div>
        </div>
      </div>
      <div class="flex-row-54">
        <div class="flex-col-67">
          <img class="landvest-logo-5" :src="landvestLogo" />
          <div class="lorem-ipsum-dolor-si-26 montserrat-normal-eerie-black-19-8px">{{ loremIpsumDolorSi }}</div>
        </div>
        <div class="overlap-group10-11" :style="{ 'background-image': 'url(' + overlapGroup10 + ')' }">
          <img
            class="rectangle-192-6"
            src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e5415044f42007a6d4b3d4/img/rectangle-192@1x.svg"
          />
          <div class="x40-roi-5 montserrat-extra-bold-lima-24-9px">{{ x40Roi }}</div>
          <div class="in-12months-5 montserrat-semi-bold-lima-16-6px">{{ in12Months }}</div>
        </div>
      </div>
      <div class="flex-col-68">
        <div class="overlap-group7-17">
          <div class="how-it-works-6 montserrat-semi-bold-orange-peel-33-6px">{{ howItWorks }}</div>
          <div class="overlap-group4-22">
            <img
              class="group-159-6"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e5415044f42007a6d4b3d4/img/group-159@2x.svg"
            />
            <img
              class="rectangle-241-6"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e5415044f42007a6d4b3d4/img/rectangle-241-5@2x.svg"
            />
            <img
              class="rectangle-242-6"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e5415044f42007a6d4b3d4/img/rectangle-242-5@2x.svg"
            />
            <img
              class="rectangle-127-6"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e5415044f42007a6d4b3d4/img/rectangle-127-5@2x.svg"
            />
            <img
              class="rectangle-128-6"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e5415044f42007a6d4b3d4/img/rectangle-128-5@2x.svg"
            />
            <img
              class="checkout-our-investment-plans-catelog-6"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/checkout-our-investment-plans-catelog-1@2x.svg"
            />
            <img
              class="acquired-at-n600000-per-unit-6"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/acquired-at-n600-000-per-unit-1@2x.svg"
            />
            <img
              class="select-unit-6"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/select-unit-1@2x.svg"
            />
            <img
              class="roi-6"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/roi-1@2x.svg"
            />
            <img
              class="group-68"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/group-18@2x.svg"
            />
            <img
              class="group-69"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/group-19@2x.svg"
            />
            <img
              class="group-70"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e5415044f42007a6d4b3d4/img/group-58@2x.svg"
            />
            <img
              class="group-71"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e5415044f42007a6d4b3d4/img/group-59@2x.svg"
            />
            <img
              class="group-74"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/group-22@2x.svg"
            />
            <img
              class="vector-128"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-28@2x.svg"
            />
            <img
              class="vector-129"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-29@2x.svg"
            />
            <img
              class="vector-130"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-30@2x.svg"
            />
            <img
              class="vector-131"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-31@2x.svg"
            />
            <img
              class="vector-132"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-32@2x.svg"
            />
            <img
              class="vector-133"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-33@2x.svg"
            />
            <img
              class="vector-134"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-34@2x.svg"
            />
            <img
              class="vector-135"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-35@2x.svg"
            />
            <img
              class="vector-136"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-36@2x.svg"
            />
            <img
              class="vector-137"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-37@2x.svg"
            />
            <img
              class="vector-138"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-38@2x.svg"
            />
            <img
              class="vector-139"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-39@2x.svg"
            />
            <img
              class="vector-140"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-40@2x.svg"
            />
            <img
              class="vector-141"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-41@2x.svg"
            />
            <img
              class="group-75"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/group-26@2x.svg"
            />
            <img
              class="group-231-6"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e5415044f42007a6d4b3d4/img/group-231-5@2x.svg"
            />
            <img
              class="group-233-6"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e5415044f42007a6d4b3d4/img/group-233-5@2x.svg"
            />
          </div>
          <div class="overlap-group5-23">
            <img
              class="select-amount-of-unit-to-be-invested-6"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/select-amount-of-unit-to-be-invested-1@2x.svg"
            />
            <img
              class="group-79"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/group-23@2x.svg"
            />
          </div>
          <div class="overlap-group6-20">
            <img
              class="get-a-40-roi-in-12-m-6"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/get-a-40--roi-in-12-months-with-no-hidden-charges-1@2x.svg"
            />
            <img
              class="group-83"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/group-25@2x.svg"
            />
          </div>
          <img
            class="explore-7"
            src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/explore-2@2x.svg"
          />
          <img
            class="invest-7"
            src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/invest-2@2x.svg"
          />
          <div class="group-container-15">
            <img
              class="group-84"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/group-24@2x.svg"
            />
            <img
              class="group-232-6"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/group-232-1@2x.svg"
            />
          </div>
        </div>
        <div class="overlap-group13-7">
          <div class="investment-table-6 montserrat-semi-bold-orange-peel-34-8px">{{ investmentTable }}</div>
          <div class="overlap-group11-10">
            <img
              class="vector-142"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e5415044f42007a6d4b3d4/img/vector-94@2x.svg"
            />
            <img class="image-3-6" :src="image3" />
          </div>
        </div>
        <img class="image-4-6" :src="image4" />
        <div class="address-12 montserrat-semi-bold-fuscous-gray-24px" v-html="address"></div>
        <div class="infofoxcapitalinvestmentplccom-6 montserrat-semi-bold-fuscous-gray-24px">
          {{ infoFoxcapitalinvestmentplcCom }}
        </div>
        <img
          class="group-67-15"
          src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e5415044f42007a6d4b3d4/img/group-67-2@2x.svg"
        />
        <div class="location-map-9 montserrat-semi-bold-cape-cod-27-2px">{{ locationMap }}</div>
        <div class="overlap-group12-9">
          <div class="google-maps-views-12">
            <iframe
              width="100%"
              height="100%"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=1 Emina Street, Off Toyin Street, Ikeja Lagos Nigeria&t=&z=12&ie=UTF8&iwloc=B&output=embed"
            ></iframe>
          </div>
          <div class="overlap-group8-12">
            <div class="rectangle-146-9"></div>
            <div class="group-226-9">
              <div class="line-container-12">
                <img
                  class="line-40-7"
                  src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e5415044f42007a6d4b3d4/img/line-40@2x.svg"
                />
                <img
                  class="line-41-6"
                  src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e5415044f42007a6d4b3d4/img/line-41@2x.svg"
                />
                <img
                  class="line-42-6"
                  src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e5415044f42007a6d4b3d4/img/line-42@2x.svg"
                />
                <img
                  class="line-43-6"
                  src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e5415044f42007a6d4b3d4/img/line-43@2x.svg"
                />
                <img
                  class="line-44-9"
                  src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e5415044f42007a6d4b3d4/img/line-44@2x.svg"
                />
                <img
                  class="line-45-7"
                  src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e5415044f42007a6d4b3d4/img/line-45@2x.svg"
                />
                <img
                  class="line-46-6"
                  src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e5415044f42007a6d4b3d4/img/line-46@2x.svg"
                />
                <img
                  class="line-47-6"
                  src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e5415044f42007a6d4b3d4/img/line-47@2x.svg"
                />
                <img
                  class="line-48-6"
                  src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e5415044f42007a6d4b3d4/img/line-48@2x.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <group23432
          :className="group23432Props.className"
          :group217Props="group23432Props.group217Props"
          :group217Props2="group23432Props.group217Props2"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Group23432 from "./Group23432";
export default {
  name: "AboutUs2",
  components: {
    Group23432,
  },
  props: [
    "foxCapitalLogo2",
    "place",
    "aboutUs",
    "services",
    "investment",
    "landvestLogo",
    "loremIpsumDolorSi",
    "overlapGroup10",
    "x40Roi",
    "in12Months",
    "howItWorks",
    "investmentTable",
    "image3",
    "image4",
    "address",
    "infoFoxcapitalinvestmentplcCom",
    "locationMap",
    "group23432Props",
  ],
};
</script>

<style>
.about-us-1-1 {
  align-items: center;
  background-color: var(--concrete);
  display: flex;
  flex-direction: column;
  height: 3642px;
  overflow: hidden;
  padding: 81.9px 0;
  width: 1200px;
}

.flex-row-53 {
  align-items: center;
  display: flex;
  margin-right: 3.54px;
  min-width: 1060px;
}

.fox-capital-logo-2-26 {
  align-self: flex-start;
  cursor: pointer;
  height: 62px;
  object-fit: cover;
  width: 141px;
}

.place-35 {
  cursor: pointer;
  letter-spacing: 0.11px;
  line-height: 29.3px;
  margin-left: 149px;
  margin-top: 0.12px;
  min-height: 29px;
  min-width: 70px;
  white-space: nowrap;
}

.about-us-29 {
  cursor: pointer;
  letter-spacing: 0.11px;
  line-height: 29.3px;
  margin-left: 106px;
  margin-top: 0.12px;
  min-height: 29px;
  min-width: 108px;
  opacity: 0.9;
  white-space: nowrap;
}

.services-25 {
  cursor: pointer;
  letter-spacing: 0.11px;
  line-height: 29.3px;
  margin-left: 106px;
  margin-top: 0.12px;
  min-height: 29px;
  min-width: 97px;
  white-space: nowrap;
}

.overlap-group9-14 {
  align-items: flex-start;
  align-self: flex-end;
  background-color: var(--desert-storm);
  border-radius: 15px;
  box-shadow: 10px 10px 20px #00000017, -10px -10px 20px #ffffff;
  display: flex;
  height: 85px;
  margin-left: 91px;
  min-width: 192px;
  padding: 23px;
}

.investment-27 {
  letter-spacing: 0.11px;
  line-height: 29.3px;
  min-height: 29px;
  opacity: 0.9;
  white-space: nowrap;
}

.flex-row-54 {
  align-items: center;
  display: flex;
  margin-right: 3.25px;
  margin-top: 96px;
  min-width: 1059px;
}

.flex-col-67 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.78px;
  min-height: 202px;
  width: 419px;
}

.landvest-logo-5 {
  height: 68px;
  object-fit: cover;
  width: 406px;
}

.lorem-ipsum-dolor-si-26 {
  letter-spacing: 0.59px;
  line-height: 29.7px;
  margin-left: 3.54px;
  margin-top: 48px;
  min-height: 86px;
  width: 416px;
}

.overlap-group10-11 {
  background-size: 100% 100%;
  height: 415px;
  margin-left: 33px;
  position: relative;
  width: 607px;
}

.rectangle-192-6 {
  height: 415px;
  left: 0;
  position: absolute;
  top: 0;
  width: 607px;
}

.x40-roi-5 {
  left: 42px;
  letter-spacing: 0.12px;
  line-height: 36.6px;
  position: absolute;
  top: 264px;
  white-space: nowrap;
  width: 120px;
}

.in-12months-5 {
  left: 50px;
  letter-spacing: 0.08px;
  line-height: 24.4px;
  position: absolute;
  top: 302px;
  white-space: nowrap;
  width: 105px;
}

.flex-col-68 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 4px;
  margin-top: 163px;
  min-height: 2760px;
  position: relative;
  width: 1204px;
}

.overlap-group7-17 {
  align-self: center;
  height: 336px;
  margin-left: 23.69px;
  position: relative;
  width: 1008px;
}

.how-it-works-6 {
  left: 354px;
  letter-spacing: 0.17px;
  line-height: 49.3px;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 233px;
}

.overlap-group4-22 {
  height: 335px;
  left: 0;
  position: absolute;
  top: 1px;
  width: 1008px;
}

.group-159-6 {
  height: 182px;
  left: 842px;
  position: absolute;
  top: 0;
  width: 166px;
}

.rectangle-241-6 {
  height: 73px;
  left: 0;
  position: absolute;
  top: 148px;
  width: 73px;
}

.rectangle-242-6 {
  height: 73px;
  left: 470px;
  position: absolute;
  top: 262px;
  width: 73px;
}

.rectangle-127-6 {
  height: 73px;
  left: 262px;
  position: absolute;
  top: 77px;
  width: 73px;
}

.rectangle-128-6 {
  height: 73px;
  left: 679px;
  position: absolute;
  top: 77px;
  width: 73px;
}

.checkout-our-investment-plans-catelog-6 {
  height: 53px;
  left: 75px;
  position: absolute;
  top: 225px;
  width: 124px;
}

.acquired-at-n600000-per-unit-6 {
  height: 51px;
  left: 509px;
  position: absolute;
  top: 229px;
  width: 97px;
}

.select-unit-6 {
  height: 13px;
  left: 298px;
  position: absolute;
  top: 196px;
  width: 88px;
}

.roi-6 {
  height: 12px;
  left: 751px;
  position: absolute;
  top: 203px;
  width: 27px;
}

.group-68 {
  height: 26px;
  left: 20px;
  position: absolute;
  top: 175px;
  width: 29px;
}

.group-69 {
  height: 26px;
  left: 281px;
  position: absolute;
  top: 101px;
  width: 35px;
}

.group-70 {
  height: 26px;
  left: 490px;
  position: absolute;
  top: 289px;
  width: 35px;
}

.group-71 {
  height: 26px;
  left: 698px;
  position: absolute;
  top: 101px;
  width: 36px;
}

.group-74 {
  height: 71px;
  left: 43px;
  position: absolute;
  top: 107px;
  width: 191px;
}

.vector-128 {
  height: 108px;
  left: 29px;
  position: absolute;
  top: 214px;
  width: 212px;
}

.vector-129 {
  height: 71px;
  left: 237px;
  position: absolute;
  top: 146px;
  width: 29px;
}

.vector-130 {
  height: 108px;
  left: 330px;
  position: absolute;
  top: 109px;
  width: 120px;
}

.vector-131 {
  height: 18px;
  left: 259px;
  position: absolute;
  top: 135px;
  width: 18px;
}

.vector-132 {
  height: 71px;
  left: 446px;
  position: absolute;
  top: 214px;
  width: 29px;
}

.vector-133 {
  height: 108px;
  left: 536px;
  position: absolute;
  top: 214px;
  width: 123px;
}

.vector-134 {
  height: 18px;
  left: 468px;
  position: absolute;
  top: 277px;
  width: 18px;
}

.vector-135 {
  height: 71px;
  left: 656px;
  position: absolute;
  top: 146px;
  width: 28px;
}

.vector-136 {
  height: 108px;
  left: 748px;
  position: absolute;
  top: 109px;
  width: 120px;
}

.vector-137 {
  height: 18px;
  left: 677px;
  position: absolute;
  top: 135px;
  width: 18px;
}

.vector-138 {
  height: 11px;
  left: 25px;
  position: absolute;
  top: 216px;
  width: 11px;
}

.vector-139 {
  height: 11px;
  left: 323px;
  position: absolute;
  top: 106px;
  width: 11px;
}

.vector-140 {
  height: 11px;
  left: 528px;
  position: absolute;
  top: 312px;
  width: 11px;
}

.vector-141 {
  height: 11px;
  left: 740px;
  position: absolute;
  top: 106px;
  width: 11px;
}

.group-75 {
  height: 23px;
  left: 124px;
  position: absolute;
  top: 166px;
  width: 22px;
}

.group-231-6 {
  height: 24px;
  left: 328px;
  position: absolute;
  top: 165px;
  width: 29px;
}

.group-233-6 {
  height: 26px;
  left: 749px;
  position: absolute;
  top: 165px;
  width: 32px;
}

.overlap-group5-23 {
  height: 91px;
  left: 244px;
  position: absolute;
  top: 233px;
  width: 199px;
}

.select-amount-of-unit-to-be-invested-6 {
  height: 51px;
  left: 41px;
  position: absolute;
  top: 0;
  width: 105px;
}

.group-79 {
  height: 71px;
  left: 0;
  position: absolute;
  top: 20px;
  width: 199px;
}

.overlap-group6-20 {
  height: 89px;
  left: 663px;
  position: absolute;
  top: 235px;
  width: 199px;
}

.get-a-40-roi-in-12-m-6 {
  height: 53px;
  left: 19px;
  position: absolute;
  top: 0;
  width: 165px;
}

.group-83 {
  height: 71px;
  left: 0;
  position: absolute;
  top: 18px;
  width: 199px;
}

.explore-7 {
  height: 16px;
  left: 107px;
  position: absolute;
  top: 195px;
  width: 60px;
}

.invest-7 {
  height: 12px;
  left: 526px;
  position: absolute;
  top: 197px;
  width: 48px;
}

.group-container-15 {
  height: 85px;
  left: 454px;
  position: absolute;
  top: 108px;
  width: 199px;
}

.group-84 {
  height: 70px;
  left: 0;
  position: absolute;
  top: 0;
  width: 199px;
}

.group-232-6 {
  height: 27px;
  left: 86px;
  position: absolute;
  top: 58px;
  width: 27px;
}

.overlap-group13-7 {
  align-self: center;
  height: 713px;
  margin-right: 2.35px;
  margin-top: 84px;
  position: relative;
  width: 990px;
}

.investment-table-6 {
  left: 400px;
  letter-spacing: 0.17px;
  line-height: 51.2px;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 315px;
}

.overlap-group11-10 {
  height: 713px;
  left: 0;
  position: absolute;
  top: 0;
  width: 990px;
}

.vector-142 {
  height: 215px;
  left: 0;
  position: absolute;
  top: 0;
  width: 205px;
}

.image-3-6 {
  height: 650px;
  left: 124px;
  object-fit: cover;
  position: absolute;
  top: 63px;
  width: 866px;
}

.image-4-6 {
  align-self: center;
  height: 250px;
  margin-right: 3px;
  margin-top: 70px;
  width: 399px;
}

.address-12 {
  letter-spacing: 0.72px;
  line-height: 36.1px;
  margin-left: 138px;
  margin-top: 58px;
  min-height: 70px;
  width: 631px;
}

.infofoxcapitalinvestmentplccom-6 {
  letter-spacing: 0.72px;
  line-height: 36.1px;
  margin-left: 138px;
  margin-top: 15px;
  min-height: 70px;
  width: 631px;
}

.group-67-15 {
  height: 31px;
  margin-left: 144px;
  margin-top: 16px;
  width: 332px;
}

.location-map-9 {
  letter-spacing: 0.14px;
  line-height: 40px;
  margin-left: 135px;
  margin-top: 76px;
  min-height: 40px;
  white-space: nowrap;
}

.overlap-group12-9 {
  align-self: center;
  background-color: var(--concrete);
  border-radius: 31.3px;
  box-shadow: 9.34px 9.34px 23.36px #d2d2d2, -9.34px -9.34px 23.36px #ffffff;
  height: 415px;
  margin-right: 147px;
  margin-top: 36px;
  position: relative;
  width: 803px;
}

.google-maps-views-12 {
  border-radius: 30.37px;
  height: 383px;
  left: 13px;
  position: absolute;
  top: 17px;
  width: 778px;
}

.overlap-group8-12 {
  height: 373px;
  left: 32px;
  position: absolute;
  top: 21px;
  width: 17px;
}

.rectangle-146-9 {
  background-color: var(--teal-blue);
  height: 3px;
  left: -178px;
  position: absolute;
  top: 185px;
  transform: rotate(-90deg);
  width: 373px;
}

.group-226-9 {
  align-items: flex-start;
  background-color: var(--teal-blue);
  border-radius: 15.18px;
  display: flex;
  height: 50px;
  justify-content: flex-end;
  left: 0;
  min-width: 17px;
  padding: 5.5px 4.3px;
  position: absolute;
  top: 157px;
}

.line-container-12 {
  height: 39px;
  position: relative;
  width: 8px;
}

.line-40-7 {
  height: 5px;
  left: 0;
  position: absolute;
  top: 0;
  width: 8px;
}

.line-41-6 {
  height: 5px;
  left: 0;
  position: absolute;
  top: 4px;
  width: 8px;
}

.line-42-6 {
  height: 5px;
  left: 0;
  position: absolute;
  top: 8px;
  width: 8px;
}

.line-43-6 {
  height: 5px;
  left: 0;
  position: absolute;
  top: 13px;
  width: 8px;
}

.line-44-9 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 17px;
  width: 8px;
}

.line-45-7 {
  height: 5px;
  left: 0;
  position: absolute;
  top: 21px;
  width: 8px;
}

.line-46-6 {
  height: 5px;
  left: 0;
  position: absolute;
  top: 25px;
  width: 8px;
}

.line-47-6 {
  height: 5px;
  left: 0;
  position: absolute;
  top: 30px;
  width: 8px;
}

.line-48-6 {
  height: 5px;
  left: 0;
  position: absolute;
  top: 34px;
  width: 8px;
}
</style>
