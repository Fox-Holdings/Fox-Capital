<template>
  <div class="container-center-horizontal">
    <div class="investment-description-page screen">
      <div class="flex-row-15">
        <router-link to="/home-page" className="align-self-flex-start"
          ><img class="fox-capital-logo-2-7" :src="foxCapitalLogo2" /></router-link
        ><router-link to="/home-page">
          <div class="place-11 montserrat-bold-storm-dust-22px">{{ place }}</div> </router-link
        ><router-link to="/about-us">
          <div class="about-us-10 montserrat-bold-fuscous-gray-22px">{{ aboutUs }}</div> </router-link
        ><router-link to="/services">
          <div class="services-9 montserrat-bold-storm-dust-22px">{{ services }}</div>
        </router-link>
        <div class="overlap-group11-2">
          <div class="investment-7 montserrat-bold-orange-peel-22px">{{ investment }}</div>
        </div>
      </div>
      <div class="flex-row-16">
        <div class="flex-col-18">
          <img class="landvest-logo" :src="landvestLogo" />
          <div class="real-estate-is-an-al montserrat-normal-eerie-black-19-8px">{{ realEstateIsAnAl }}</div>
        </div>
        <div class="overlap-group10-3" :style="{ 'background-image': 'url(' + overlapGroup10 + ')' }">
          <img class="rectangle-192" :src="rectangle192" />
          <div class="x40-roi">{{ x40Roi }}</div>
          <div class="in-12months montserrat-semi-bold-lima-16-6px">{{ in12Months }}</div>
        </div>
      </div>
      <div class="flex-col-19">
        <div class="the-advantages-of-re montserrat-normal-eerie-black-19-8px">{{ theAdvantagesOfRe }}</div>
        <div class="group-283">
          <div class="how-it-works-1 montserrat-semi-bold-orange-peel-33-6px">{{ howItWorks }}</div>
          <div class="overlap-group3-4">
            <img class="group-159" :src="group159" /><img
              class="rectangle-241"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/rectangle-241-1@2x.svg"
            />
            <img
              class="rectangle-242"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/rectangle-242-1@2x.svg"
            />
            <img
              class="rectangle-127"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/rectangle-127-1@2x.svg"
            />
            <img
              class="rectangle-128"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/rectangle-128-1@2x.svg"
            />
            <img
              class="checkout-our-investment-plans-catelog"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/checkout-our-investment-plans-catelog-1@2x.svg"
            />
            <img
              class="acquired-at-n600000-per-unit"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/acquired-at-n600-000-per-unit-1@2x.svg"
            />
            <img
              class="select-unit"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/select-unit-1@2x.svg"
            />
            <img
              class="roi"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/roi-1@2x.svg"
            />
            <img
              class="group-10"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/group-18@2x.svg"
            />
            <img
              class="group-11"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/group-19@2x.svg"
            />
            <img
              class="group-12"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e5415044f42007a6d4b3d4/img/group-58@2x.svg"
            />
            <img
              class="group-13"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e5415044f42007a6d4b3d4/img/group-59@2x.svg"
            />
            <img
              class="group-14"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e68857b820176ce7f147a4/img/group-22@2x.svg"
            />
            <img
              class="vector-23"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-28@2x.svg"
            />
            <img
              class="vector-24"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-29@2x.svg"
            />
            <img
              class="vector-25"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-30@2x.svg"
            />
            <img
              class="vector-26"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-31@2x.svg"
            />
            <img
              class="vector-27"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-32@2x.svg"
            />
            <img
              class="vector-28"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e68857b820176ce7f147a4/img/vector-33@2x.svg"
            />
            <img
              class="vector-29"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-34@2x.svg"
            />
            <img
              class="vector-30"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-35@2x.svg"
            />
            <img
              class="vector-31"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-36@2x.svg"
            />
            <img
              class="vector-32"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-37@2x.svg"
            />
            <img
              class="vector-33"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-38@2x.svg"
            />
            <img
              class="vector-34"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-39@2x.svg"
            />
            <img
              class="vector-35"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-40@2x.svg"
            />
            <img
              class="vector-36"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/vector-41@2x.svg"
            />
            <img
              class="group-15"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/group-26@2x.svg"
            />
            <img
              class="group-231"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e5415044f42007a6d4b3d4/img/group-231-5@2x.svg"
            />
            <img
              class="group-233"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e5415044f42007a6d4b3d4/img/group-233-5@2x.svg"
            />
          </div>
          <div class="overlap-group5-6">
            <img
              class="select-amount-of-unit-to-be-invested"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/select-amount-of-unit-to-be-invested-1@2x.svg"
            />
            <img
              class="group-16"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e68857b820176ce7f147a4/img/group-23@2x.svg"
            />
          </div>
          <div class="overlap-group4-7">
            <img
              class="get-a-40-roi-in-12-m"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/get-a-40--roi-in-12-months-with-no-hidden-charges-1@2x.svg"
            />
            <img
              class="group-17"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e68857b820176ce7f147a4/img/group-25@2x.svg"
            />
          </div>
          <img
            class="explore-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/explore-2@2x.svg"
          />
          <img
            class="invest-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/invest-2@2x.svg"
          />
          <div class="group-container-5">
            <img
              class="group-18"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e68857b820176ce7f147a4/img/group-24@2x.svg"
            />
            <img
              class="group-232"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/group-232-1@2x.svg"
            />
          </div>
        </div>
        <div class="overlap-group12-1">
          <div class="overlap-group9-3">
            <div class="land-thryve-2 montserrat-bold-white-30-7px">{{ landthryve }}</div>
            <div class="save-now-acquire-later-2 montserrat-normal-white-15-4px">{{ saveNowAcquireLater }}</div>
            <img class="vector-37" :src="vector15" /><img class="image-3" :src="image3" /><img
              class="image-4"
              :src="image4"
            />
            <div class="address-2 montserrat-semi-bold-fuscous-gray-24px" v-html="address"></div>
          </div>
          <div class="investment-table montserrat-semi-bold-orange-peel-34-8px">{{ investmentTable }}</div>
        </div>
        <div class="infofoxcapitalinvestmentplccom montserrat-semi-bold-fuscous-gray-24px">
          {{ infoFoxcapitalinvestmentplcCom }}
        </div>
        <img class="group-67-3" :src="group67" />
        <div class="location-map montserrat-semi-bold-cape-cod-27-2px">{{ locationMap }}</div>
        <div class="overlap-group8-3">
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
          <div class="overlap-group7-4">
            <div class="rectangle-146"></div>
            <div class="group-226">
              <div class="group-225">
                <div class="line-container">
                  <img class="line-40" :src="line40" /><img class="line-41" :src="line41" /><img
                    class="line-42"
                    :src="line42"
                  /><img class="line-43" :src="line43" /><img class="line-44" :src="line44" /><img
                    class="line-45"
                    :src="line45"
                  /><img class="line-46" :src="line46" /><img class="line-47" :src="line47" /><img
                    class="line-48"
                    :src="line48"
                  />
                </div>
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
  name: "InvestmentDescriptionPage",
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
    "realEstateIsAnAl",
    "overlapGroup10",
    "rectangle192",
    "x40Roi",
    "in12Months",
    "theAdvantagesOfRe",
    "howItWorks",
    "group159",
    "landthryve",
    "saveNowAcquireLater",
    "vector15",
    "image3",
    "image4",
    "address",
    "investmentTable",
    "infoFoxcapitalinvestmentplcCom",
    "group67",
    "locationMap",
    "line40",
    "line41",
    "line42",
    "line43",
    "line44",
    "line45",
    "line46",
    "line47",
    "line48",
    "group23432Props",
  ],
};
</script>

<style>
.investment-description-page {
  align-items: center;
  background-color: var(--concrete);
  display: flex;
  flex-direction: column;
  height: 3637px;
  overflow: hidden;
  padding: 81.9px 0;
  width: 1200px;
}

.flex-row-15 {
  align-items: center;
  display: flex;
  margin-right: 3.54px;
  min-width: 1060px;
}

.fox-capital-logo-2-7 {
  align-self: flex-start;
  cursor: pointer;
  height: 62px;
  object-fit: cover;
  width: 141px;
}

.place-11 {
  cursor: pointer;
  letter-spacing: 0.11px;
  line-height: 29.3px;
  margin-left: 149px;
  margin-top: 0.12px;
  min-height: 29px;
  min-width: 70px;
  white-space: nowrap;
}

.about-us-10 {
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

.services-9 {
  cursor: pointer;
  letter-spacing: 0.11px;
  line-height: 29.3px;
  margin-left: 106px;
  margin-top: 0.12px;
  min-height: 29px;
  min-width: 97px;
  white-space: nowrap;
}

.overlap-group11-2 {
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

.investment-7 {
  letter-spacing: 0.11px;
  line-height: 29.3px;
  min-height: 29px;
  opacity: 0.9;
  white-space: nowrap;
}

.flex-row-16 {
  align-items: flex-end;
  display: flex;
  margin-right: 3.25px;
  margin-top: 110px;
  min-width: 1059px;
}

.flex-col-18 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  min-height: 243px;
  width: 466px;
}

.landvest-logo {
  height: 68px;
  object-fit: cover;
  width: 406px;
}

.real-estate-is-an-al {
  letter-spacing: 0.59px;
  line-height: 29.7px;
  margin-left: 4.25px;
  margin-top: 48px;
  min-height: 127px;
  width: 462px;
}

.overlap-group10-3 {
  background-size: 100% 100%;
  height: 360px;
  margin-left: 65px;
  position: relative;
  width: 528px;
}

.rectangle-192 {
  height: 360px;
  left: 0;
  position: absolute;
  top: 0;
  width: 528px;
}

.x40-roi {
  color: var(--lima);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-s);
  font-weight: 800;
  left: 37px;
  letter-spacing: 0.11px;
  line-height: 32.3px;
  position: absolute;
  top: 230px;
  white-space: nowrap;
}

.in-12months {
  left: 34px;
  letter-spacing: 0.08px;
  line-height: 24.4px;
  position: absolute;
  top: 262px;
  white-space: nowrap;
}

.flex-col-19 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 4px;
  margin-top: 65px;
  min-height: 2899px;
  position: relative;
  width: 1204px;
}

.the-advantages-of-re {
  letter-spacing: 0.59px;
  line-height: 29.7px;
  margin-right: 7px;
  min-height: 90px;
  width: 1059px;
}

.group-283 {
  height: 336px;
  margin-left: 42px;
  margin-top: 49px;
  position: relative;
  width: 1026px;
}

.how-it-works-1 {
  left: 354px;
  letter-spacing: 0.17px;
  line-height: 49.3px;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 233px;
}

.overlap-group3-4 {
  height: 335px;
  left: 0;
  position: absolute;
  top: 2px;
  width: 1008px;
}

.group-159 {
  height: 181px;
  left: 842px;
  position: absolute;
  top: 0;
  width: 166px;
}

.rectangle-241 {
  height: 73px;
  left: 0;
  position: absolute;
  top: 147px;
  width: 73px;
}

.rectangle-242 {
  height: 73px;
  left: 470px;
  position: absolute;
  top: 262px;
  width: 73px;
}

.rectangle-127 {
  height: 73px;
  left: 262px;
  position: absolute;
  top: 76px;
  width: 73px;
}

.rectangle-128 {
  height: 73px;
  left: 679px;
  position: absolute;
  top: 76px;
  width: 73px;
}

.checkout-our-investment-plans-catelog {
  height: 53px;
  left: 75px;
  position: absolute;
  top: 224px;
  width: 124px;
}

.acquired-at-n600000-per-unit {
  height: 51px;
  left: 509px;
  position: absolute;
  top: 228px;
  width: 97px;
}

.select-unit {
  height: 13px;
  left: 298px;
  position: absolute;
  top: 195px;
  width: 88px;
}

.roi {
  height: 12px;
  left: 751px;
  position: absolute;
  top: 202px;
  width: 27px;
}

.group-10 {
  height: 26px;
  left: 20px;
  position: absolute;
  top: 175px;
  width: 29px;
}

.group-11 {
  height: 26px;
  left: 281px;
  position: absolute;
  top: 100px;
  width: 35px;
}

.group-12 {
  height: 26px;
  left: 490px;
  position: absolute;
  top: 288px;
  width: 35px;
}

.group-13 {
  height: 26px;
  left: 698px;
  position: absolute;
  top: 100px;
  width: 36px;
}

.group-14 {
  height: 71px;
  left: 43px;
  position: absolute;
  top: 106px;
  width: 191px;
}

.vector-23 {
  height: 108px;
  left: 29px;
  position: absolute;
  top: 214px;
  width: 212px;
}

.vector-24 {
  height: 71px;
  left: 237px;
  position: absolute;
  top: 146px;
  width: 29px;
}

.vector-25 {
  height: 108px;
  left: 330px;
  position: absolute;
  top: 109px;
  width: 120px;
}

.vector-26 {
  height: 18px;
  left: 259px;
  position: absolute;
  top: 134px;
  width: 18px;
}

.vector-27 {
  height: 71px;
  left: 446px;
  position: absolute;
  top: 214px;
  width: 29px;
}

.vector-28 {
  height: 108px;
  left: 536px;
  position: absolute;
  top: 214px;
  width: 123px;
}

.vector-29 {
  height: 18px;
  left: 468px;
  position: absolute;
  top: 277px;
  width: 18px;
}

.vector-30 {
  height: 71px;
  left: 656px;
  position: absolute;
  top: 146px;
  width: 28px;
}

.vector-31 {
  height: 108px;
  left: 748px;
  position: absolute;
  top: 109px;
  width: 120px;
}

.vector-32 {
  height: 18px;
  left: 677px;
  position: absolute;
  top: 134px;
  width: 18px;
}

.vector-33 {
  height: 11px;
  left: 25px;
  position: absolute;
  top: 215px;
  width: 11px;
}

.vector-34 {
  height: 11px;
  left: 323px;
  position: absolute;
  top: 106px;
  width: 11px;
}

.vector-35 {
  height: 11px;
  left: 528px;
  position: absolute;
  top: 311px;
  width: 11px;
}

.vector-36 {
  height: 11px;
  left: 740px;
  position: absolute;
  top: 106px;
  width: 11px;
}

.group-15 {
  height: 23px;
  left: 124px;
  position: absolute;
  top: 166px;
  width: 22px;
}

.group-231 {
  height: 24px;
  left: 328px;
  position: absolute;
  top: 164px;
  width: 29px;
}

.group-233 {
  height: 26px;
  left: 749px;
  position: absolute;
  top: 165px;
  width: 32px;
}

.overlap-group5-6 {
  height: 91px;
  left: 244px;
  position: absolute;
  top: 233px;
  width: 199px;
}

.select-amount-of-unit-to-be-invested {
  height: 51px;
  left: 41px;
  position: absolute;
  top: 0;
  width: 105px;
}

.group-16 {
  height: 71px;
  left: 0;
  position: absolute;
  top: 20px;
  width: 199px;
}

.overlap-group4-7 {
  height: 89px;
  left: 662px;
  position: absolute;
  top: 235px;
  width: 199px;
}

.get-a-40-roi-in-12-m {
  height: 53px;
  left: 19px;
  position: absolute;
  top: 0;
  width: 165px;
}

.group-17 {
  height: 71px;
  left: 0;
  position: absolute;
  top: 18px;
  width: 199px;
}

.explore-1 {
  height: 16px;
  left: 107px;
  position: absolute;
  top: 195px;
  width: 60px;
}

.invest-1 {
  height: 12px;
  left: 526px;
  position: absolute;
  top: 197px;
  width: 48px;
}

.group-container-5 {
  height: 85px;
  left: 453px;
  position: absolute;
  top: 108px;
  width: 199px;
}

.group-18 {
  height: 70px;
  left: 0;
  position: absolute;
  top: 0;
  width: 199px;
}

.group-232 {
  height: 27px;
  left: 86px;
  position: absolute;
  top: 58px;
  width: 27px;
}

.overlap-group12-1 {
  height: 1161px;
  margin-right: 18.15px;
  margin-top: 85px;
  position: relative;
  width: 1006px;
}

.overlap-group9-3 {
  height: 1161px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1006px;
}

.land-thryve-2 {
  left: 0;
  letter-spacing: 0.15px;
  line-height: 41px;
  position: absolute;
  top: 703px;
  width: 473px;
}

.save-now-acquire-later-2 {
  left: 0;
  letter-spacing: 0.46px;
  line-height: 23.1px;
  position: absolute;
  top: 746px;
  width: 473px;
}

.vector-37 {
  height: 214px;
  left: 16px;
  position: absolute;
  top: 0;
  width: 204px;
}

.image-3 {
  height: 650px;
  left: 140px;
  object-fit: cover;
  position: absolute;
  top: 62px;
  width: 866px;
}

.image-4 {
  height: 250px;
  left: 311px;
  position: absolute;
  top: 783px;
  width: 399px;
}

.address-2 {
  left: 48px;
  letter-spacing: 0.72px;
  line-height: 36.1px;
  position: absolute;
  top: 1091px;
  width: 631px;
}

.investment-table {
  left: 416px;
  letter-spacing: 0.17px;
  line-height: 51.2px;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 315px;
}

.infofoxcapitalinvestmentplccom {
  align-self: flex-start;
  letter-spacing: 0.72px;
  line-height: 36.1px;
  margin-left: 138px;
  margin-top: 15px;
  min-height: 70px;
  width: 631px;
}

.group-67-3 {
  align-self: flex-start;
  height: 30px;
  margin-left: 144px;
  margin-top: 16px;
  width: 332px;
}

.location-map {
  align-self: flex-start;
  letter-spacing: 0.14px;
  line-height: 40px;
  margin-left: 135px;
  margin-top: 77px;
  min-height: 40px;
  white-space: nowrap;
}

.overlap-group8-3 {
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

.overlap-group7-4 {
  height: 373px;
  left: 32px;
  position: absolute;
  top: 21px;
  width: 17px;
}

.rectangle-146 {
  background-color: var(--teal-blue);
  height: 3px;
  left: -178px;
  position: absolute;
  top: 185px;
  transform: rotate(-90deg);
  width: 373px;
}

.group-226 {
  background-color: var(--teal-blue);
  border-radius: 15.18px;
  display: flex;
  height: 50px;
  left: 0;
  position: absolute;
  top: 157px;
  width: 17px;
}

.group-225 {
  align-items: flex-start;
  display: flex;
  height: 37.39px;
  justify-content: flex-end;
  margin-left: 5.5px;
  margin-top: 6.2px;
  min-width: 6.83px;
}

.line-container {
  height: 38px;
  margin-top: -0.42px;
  position: relative;
  width: 7px;
}

.line-40 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 0;
  width: 7px;
}

.line-41 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 4px;
  width: 7px;
}

.line-42 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 8px;
  width: 7px;
}

.line-43 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 13px;
  width: 7px;
}

.line-44 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 17px;
  width: 7px;
}

.line-45 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 21px;
  width: 7px;
}

.line-46 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 26px;
  width: 7px;
}

.line-47 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 30px;
  width: 7px;
}

.line-48 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 34px;
  width: 7px;
}
</style>
