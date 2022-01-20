<template>
  <div class="container-center-horizontal">
    <div class="mobile screen">
      <div class="flex-row-22">
        <div class="flex-col-26">
          <img class="fox-capital-logo-2-11" :src="foxCapitalLogo2" />
          <div class="we-help-you-building-1" v-html="weHelpYouBuilding"></div>
        </div>
        <div class="flex-col-27">
          <div class="frame-35633-1">
            <div class="place-15">{{ place1 }}</div>
          </div>
          <router-link to="/mobile2">
            <div class="about-us-14 montserrat-bold-fuscous-gray-7-2px">{{ aboutUs }}</div> </router-link
          ><router-link to="/mobile22">
            <div class="services-13 montserrat-bold-fuscous-gray-7-2px">{{ services }}</div> </router-link
          ><router-link to="/mobile2-1" className="align-self-flex-end">
            <div class="investment-11 montserrat-bold-fuscous-gray-7-2px">{{ investment }}</div>
          </router-link>
        </div>
      </div>
      <div class="flex-col-28">
        <router-link to="/mobile2-1">
          <div class="group-81-1">
            <div class="frame-11-3">
              <div class="invest-today-1">{{ investToday }}</div>
            </div>
          </div></router-link
        >
        <div class="overlap-group2-20">
          <img class="rectangle-44" :src="rectangle44" /><img class="rectangle-98" :src="rectangle98" />
          <div class="get-the-app-1">
            <div class="coming-soon-2">{{ comingSoon }}</div>
            <img class="badges-1" :src="badges" />
          </div>
          <div class="frame-22-1">
            <div class="enter-your-e-mail-address-1">{{ enterYourEMailAddress }}</div>
          </div>
          <div class="frame-23-1">
            <div class="join-our-wait-list-1">{{ joinOurWaitlist }}</div>
          </div>
          <img class="i-phone-12-pro-3" :src="iphone12Pro1" /><img class="i-phone-12-pro-4" :src="iphone12Pro2" />
        </div>
        <div class="investments-1">{{ investments }}</div>
        <p class="with-real-estate-inv-3">{{ withRealEstateInv }}</p>
        <div class="overlap-group4-10">
          <img class="rectangle-121-1" :src="rectangle121" />
          <div class="rectangle-122-1"></div>
          <div class="rectangle-118-1"></div>
          <img class="rectangle-123-1" :src="rectangle123" /><img class="rectangle-116-1" :src="rectangle116" /><img
            class="rectangle-124-1"
            :src="rectangle124"
          /><img class="rectangle-117-1" :src="rectangle117" />
          <div class="mowe-ibafo-1">{{ moweIbafo }}</div>
          <div class="ibadan-oyo-state-1">{{ ibadanOyoState }}</div>
          <div class="sea-facing-spacious-6">{{ seaFacingSpacious1 }}</div>
          <div class="overlap-group1-23">
            <img class="rectangle-119" :src="rectangle119" />
            <div class="rectangle-120-1"></div>
            <div class="place-16">{{ place2 }}</div>
            <div class="sea-facing-spacious-7">{{ seaFacingSpacious2 }}</div>
          </div>
          <div class="sea-facing-spacious-8">{{ seaFacingSpacious3 }}</div>
        </div>
        <div class="overlap-group5-9" :style="{ 'background-image': 'url(' + overlapGroup5 + ')' }">
          <div class="group-82-1">
            <div class="our-latest-news-1 montserrat-medium-eerie-black-18-3px">{{ ourLatestNews }}</div>
          </div>
          <img class="image-6-1" :src="image6" /><img class="group-67-6" :src="group67" />
        </div>
        <div class="what-we-do-1 montserrat-medium-eerie-black-18-3px">{{ whatWeDo }}</div>
        <group252 :rectangle59="group2521Props.rectangle59" :group4="group2521Props.group4" />
        <div class="investment-management-1 montserrat-bold-eerie-black-14px">{{ investmentManagement }}</div>
        <p class="we-present-to-you-s-1 montserrat-normal-eerie-black-10px">{{ wePresentToYouS }}</p>
        <group252
          :rectangle59="group2522Props.rectangle59"
          :group4="group2522Props.group4"
          :className="group2522Props.className"
        />
        <div class="wealth-creation-1 montserrat-bold-eerie-black-14px">{{ wealthCreation }}</div>
        <p class="you-dont-just-acqui-1 montserrat-normal-black-10px">{{ youDonTJustAcqui }}</p>
        <group252
          :rectangle59="group2523Props.rectangle59"
          :group4="group2523Props.group4"
          :className="group2523Props.className"
        />
        <div class="sales-marketing-1 montserrat-bold-eerie-black-14px">{{ salesMarketing }}</div>
        <p class="lorem-ipsum-dolor-si-3 montserrat-normal-black-10px">{{ loremIpsumDolorSi }}</p>
        <div class="overlap-group3-8">
          <img class="fox-capital-2-1" :src="foxCapital2" />
          <p class="we-are-committed-to-3">{{ weAreCommittedTo }}</p>
          <div class="overlap-group6-7" :style="{ 'background-image': 'url(' + overlapGroup6 + ')' }">
            <div class="your-name-21 montserrat-light-white-8-5px">{{ yourName }}</div>
          </div>
          <div class="overlap-group7-5" :style="{ 'background-image': 'url(' + overlapGroup7 + ')' }">
            <div class="yourmailaddresspleasemailcom-1 montserrat-light-white-8-5px">
              {{ yourmailaddresspleaseMailCom }}
            </div>
          </div>
          <div class="frame-35635-1">
            <div class="frame-35634-2">
              <p class="get-in-touch-with-us-3">{{ getInTouchWithUs }}</p>
              <img class="arrow-13-2" :src="arrow13" />
            </div>
          </div>
        </div>
        <div class="footer-18">
          <div class="frame-35632-16 montserrat-normal-black-3-9px">
            <div class="privacy-policy-16">{{ privacyPolicy }}</div>
            <div class="terms-of-use-16">{{ termsOfUse }}</div>
          </div>
          <p class="x2021-fox-capital-investment-limited-16 montserrat-normal-black-5-2px">
            <span class="montserrat-normal-black-5-2px">{{ spanText1 }}</span
            ><span class="montserrat-normal-black-3-9px">{{ spanText2 }}</span>
          </p>
        </div>
        <img class="vector-3-4" :src="vector3" />
      </div>
    </div>
  </div>
</template>

<script>
import Group252 from "./Group252";
export default {
  name: "Mobile",
  components: {
    Group252,
  },
  props: [
    "foxCapitalLogo2",
    "weHelpYouBuilding",
    "place1",
    "aboutUs",
    "services",
    "investment",
    "investToday",
    "rectangle44",
    "rectangle98",
    "comingSoon",
    "badges",
    "enterYourEMailAddress",
    "joinOurWaitlist",
    "iphone12Pro1",
    "iphone12Pro2",
    "investments",
    "withRealEstateInv",
    "rectangle121",
    "rectangle123",
    "rectangle116",
    "rectangle124",
    "rectangle117",
    "moweIbafo",
    "ibadanOyoState",
    "seaFacingSpacious1",
    "rectangle119",
    "place2",
    "seaFacingSpacious2",
    "seaFacingSpacious3",
    "overlapGroup5",
    "ourLatestNews",
    "image6",
    "group67",
    "whatWeDo",
    "investmentManagement",
    "wePresentToYouS",
    "wealthCreation",
    "youDonTJustAcqui",
    "salesMarketing",
    "loremIpsumDolorSi",
    "foxCapital2",
    "weAreCommittedTo",
    "overlapGroup6",
    "yourName",
    "overlapGroup7",
    "yourmailaddresspleaseMailCom",
    "getInTouchWithUs",
    "arrow13",
    "privacyPolicy",
    "termsOfUse",
    "spanText1",
    "spanText2",
    "vector3",
    "group2521Props",
    "group2522Props",
    "group2523Props",
  ],
  mounted: () => {
    var image = document.querySelectorAll(".rectangle-119");
    new window.simpleParallax(image, {
      orientation: "left",
      scale: 1.2,
      overflow: true,
      delay: 0.4,
      transition: "none",
    });
  },
};
</script>

<style>
.mobile {
  align-items: flex-start;
  background-color: var(--concrete);
  display: flex;
  flex-direction: column;
  height: 2838px;
  overflow: hidden;
  padding: 43.8px 0;
  width: 320px;
}

.flex-row-22 {
  align-items: center;
  align-self: center;
  display: flex;
  height: 154px;
  margin-left: 4px;
  min-width: 254px;
}

.flex-col-26 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 154px;
  width: 185px;
}

.fox-capital-logo-2-11 {
  height: 30px;
  margin-left: 1.49px;
  object-fit: cover;
  width: 68px;
}

.we-help-you-building-1 {
  color: var(--cape-cod);
  font-family: var(--font-family-lora);
  font-size: var(--font-size-s);
  font-weight: 400;
  letter-spacing: 0;
  line-height: 31.2px;
  margin-top: 24px;
  min-height: 99px;
  width: 185px;
}

.flex-col-27 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 21.36px;
  margin-left: 6px;
  min-height: 96px;
  width: 63px;
}

.frame-35633-1 {
  background-color: var(--desert-storm);
  border-radius: 4.91px;
  box-shadow: 3.27px 3.27px 6.54px #00000017, -3.27px -3.27px 6.54px #ffffff;
  display: flex;
  height: 28px;
  width: 63px;
}

.place-15 {
  color: var(--orange-peel);
  font-family: var(--font-family-montserrat);
  font-size: 7.2px;
  font-weight: 700;
  height: 9.49px;
  letter-spacing: 0.04px;
  line-height: 9.6px;
  margin-left: 20px;
  margin-top: 9.2px;
  white-space: nowrap;
  width: 22.9px;
}

.about-us-14 {
  cursor: pointer;
  letter-spacing: 0.04px;
  line-height: 9.6px;
  margin-right: 0;
  margin-top: 12px;
  min-height: 9px;
  transition: all 0.2s ease;
  white-space: nowrap;
  width: 35px;
}

.about-us-14:hover,
.services-13:hover,
.investment-11:hover {
  color: #5dca22;
}

.services-13 {
  cursor: pointer;
  letter-spacing: 0.04px;
  line-height: 9.6px;
  margin-right: 0.33px;
  margin-top: 15px;
  min-height: 9px;
  opacity: 0.9;
  transition: all 0.2s ease;
  white-space: nowrap;
  width: 32px;
}

.investment-11 {
  align-self: flex-end;
  cursor: pointer;
  letter-spacing: 0.04px;
  line-height: 9.6px;
  margin-right: 3.6px;
  margin-top: 12px;
  min-height: 9px;
  opacity: 0.9;
  transition: all 0.2s ease;
  white-space: nowrap;
  width: 44px;
}

.flex-col-28 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: -3px;
  margin-top: 69px;
  min-height: 5562px;
  position: relative;
  width: 1923px;
}

.group-81-1 {
  cursor: pointer;
  display: flex;
  margin-left: 38px;
  width: 87px;
}

.frame-11-3 {
  align-items: flex-end;
  background-color: var(--desert-storm);
  border-radius: 6.54px;
  box-shadow: 3.27px 3.27px 6.54px #00000014, -3.27px -3.27px 6.54px #ffffff;
  display: flex;
  height: 32px;
  min-width: 87px;
  padding: 9.9px 6.9px;
}

.invest-today-1 {
  color: var(--orange-peel);
  font-family: var(--font-family-montserrat);
  font-size: 9.2px;
  font-weight: 700;
  letter-spacing: 0.05px;
  line-height: 12.2px;
  min-height: 12px;
  white-space: nowrap;
  width: 64px;
}

.overlap-group2-20 {
  height: 377px;
  margin-left: 3px;
  margin-top: 25px;
  position: relative;
  width: 324px;
}

.rectangle-44 {
  height: 354px;
  left: 8px;
  position: absolute;
  top: 19px;
  width: 316px;
}

.rectangle-98 {
  height: 377px;
  left: 0;
  position: absolute;
  top: 0;
  width: 323px;
}

.get-the-app-1 {
  display: flex;
  flex-direction: column;
  height: 288px;
  left: 90px;
  position: absolute;
  top: 18px;
  width: 116px;
}

.coming-soon-2 {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 13.7px;
  font-weight: 700;
  height: 26.5px;
  letter-spacing: 0;
  line-height: 26.4px;
  margin-left: 12.8px;
  margin-top: 0;
  white-space: nowrap;
  width: 100.77px;
}

.badges-1 {
  height: 17.5px;
  margin-left: -0.4px;
  margin-top: 244.7px;
  width: 56.5px;
}

.frame-22-1 {
  align-items: flex-start;
  background-color: var(--heavy-metal);
  border-radius: 3.06px;
  box-shadow: 2.19px 2.19px 6.57px #00000073, -2.19px -2.19px 6.57px #2a2a2a;
  display: flex;
  height: 22px;
  left: 43px;
  min-width: 192px;
  padding: 7px 19.5px;
  position: absolute;
  top: 326px;
}

.enter-your-e-mail-address-1 {
  color: var(--orange-peel);
  font-family: var(--font-family-montserrat);
  font-size: 5.7px;
  font-weight: 700;
  letter-spacing: 0.03px;
  line-height: 7.6px;
  min-height: 8px;
  white-space: nowrap;
}

.frame-23-1 {
  background-color: var(--desert-storm);
  border-radius: 3.28px;
  box-shadow: 2.19px 2.19px 4.38px #00000017;
  display: flex;
  height: 19px;
  left: 166px;
  position: absolute;
  top: 328px;
  width: 69px;
}

.join-our-wait-list-1 {
  color: var(--orange-peel);
  font-family: var(--font-family-montserrat);
  font-size: 4.8px;
  font-weight: 700;
  height: 6.35px;
  letter-spacing: 0.02px;
  line-height: 6.4px;
  margin-left: 11.5px;
  margin-top: 6.1px;
  white-space: nowrap;
  width: 45.52px;
}

.i-phone-12-pro-3 {
  height: 217px;
  left: 69px;
  position: absolute;
  top: 64px;
  width: 108px;
}

.i-phone-12-pro-4 {
  height: 206px;
  left: 159px;
  position: absolute;
  top: 101px;
  width: 102px;
}

.investments-1 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 18.3px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 26px;
  margin-left: 52.17px;
  margin-top: 24px;
  min-height: 27px;
  white-space: nowrap;
}

.with-real-estate-inv-3 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 7.9px;
  font-weight: 400;
  letter-spacing: 0.24px;
  line-height: 11.8px;
  margin-left: 52.82px;
  margin-top: 10px;
  min-height: 38px;
  width: 243px;
}

.overlap-group4-10 {
  height: 598px;
  margin-left: 20.8px;
  margin-top: 22px;
  position: relative;
  width: 298px;
}

.rectangle-121-1 {
  height: 237px;
  left: 0;
  position: absolute;
  top: 183px;
  width: 298px;
}

.rectangle-122-1 {
  background-color: var(--concrete);
  border-radius: 18.54px;
  box-shadow: 8.62px 8.62px 21.56px #d2d2d2, -8.62px -8.62px 21.56px #ffffff;
  height: 188px;
  left: 25px;
  position: absolute;
  top: 410px;
  width: 247px;
}

.rectangle-118-1 {
  background-color: var(--concrete);
  border-radius: 19.05px;
  box-shadow: 8.86px 8.86px 22.15px #d2d2d2, -8.86px -8.86px 22.15px #ffffff;
  height: 193px;
  left: 23px;
  position: absolute;
  top: 0;
  width: 254px;
}

.rectangle-123-1 {
  height: 182px;
  left: 27px;
  position: absolute;
  top: 211px;
  width: 242px;
}

.rectangle-116-1 {
  height: 178px;
  left: 29px;
  position: absolute;
  top: 415px;
  width: 238px;
}

.rectangle-124-1 {
  height: 182px;
  left: 27px;
  position: absolute;
  top: 211px;
  width: 243px;
}

.rectangle-117-1 {
  height: 179px;
  left: 29px;
  position: absolute;
  top: 415px;
  width: 239px;
}

.mowe-ibafo-1 {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 15.7px;
  font-weight: 700;
  left: 39px;
  letter-spacing: 0.08px;
  line-height: 21px;
  position: absolute;
  top: 346px;
  white-space: nowrap;
  width: 101px;
}

.ibadan-oyo-state-1 {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 17.2px;
  font-weight: 700;
  left: 39px;
  letter-spacing: 0.09px;
  line-height: 23px;
  position: absolute;
  top: 547px;
  white-space: nowrap;
  width: 162px;
}

.sea-facing-spacious-6 {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 7.9px;
  font-weight: 400;
  left: 39px;
  letter-spacing: 0.24px;
  line-height: 11.8px;
  position: absolute;
  top: 368px;
  white-space: nowrap;
  width: 83px;
}

.overlap-group1-23 {
  height: 183px;
  left: 27px;
  position: absolute;
  top: 5px;
  width: 247px;
}

.rectangle-119 {
  width: 100%;
}

.rectangle-120-1 {
  background-color: var(--black-2);
  border-radius: 14.18px;
  height: 183px;
  left: 0;
  position: absolute;
  top: 0;
  width: 247px;
}

.place-16 {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-xxs);
  font-weight: 700;
  left: 12px;
  letter-spacing: 0.09px;
  line-height: 23.6px;
  position: absolute;
  top: 135px;
  white-space: nowrap;
  width: 69px;
}

.sea-facing-spacious-7 {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 9.7px;
  font-weight: 400;
  left: 12px;
  letter-spacing: 0.29px;
  line-height: 14.7px;
  position: absolute;
  top: 158px;
  white-space: nowrap;
  width: 104px;
}

.sea-facing-spacious-8 {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 9.5px;
  font-weight: 400;
  left: 39px;
  letter-spacing: 0.28px;
  line-height: 14.3px;
  position: absolute;
  top: 569px;
  white-space: nowrap;
  width: 101px;
}

.overlap-group5-9 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  margin-top: 23px;
  min-height: 276px;
  padding: 19.4px 48.8px;
  width: 320px;
}

.group-82-1 {
  display: flex;
  height: 26px;
  margin-left: 1.3px;
  width: 156px;
}

.our-latest-news-1 {
  height: 25.85px;
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
  width: 153.78px;
}

.image-6-1 {
  height: 146px;
  margin-top: 7px;
  width: 218px;
}

.group-67-6 {
  height: 8px;
  margin-left: 1.08px;
  margin-top: 25px;
  width: 62px;
}

.what-we-do-1 {
  letter-spacing: 0;
  line-height: 26px;
  margin-left: 47.92px;
  margin-top: 32px;
  min-height: 27px;
  white-space: nowrap;
}

.investment-management-1 {
  letter-spacing: 0.07px;
  line-height: 18.7px;
  margin-left: 69px;
  margin-top: 6px;
  min-height: 19px;
  white-space: nowrap;
}

.we-present-to-you-s-1 {
  letter-spacing: 0.3px;
  line-height: 15px;
  margin-left: 51px;
  margin-top: 7px;
  min-height: 40px;
  text-align: center;
  width: 225px;
}

.wealth-creation-1 {
  letter-spacing: 0.07px;
  line-height: 18.7px;
  margin-left: 103px;
  margin-top: 9px;
  min-height: 19px;
  white-space: nowrap;
}

.you-dont-just-acqui-1 {
  letter-spacing: 0.3px;
  line-height: 15px;
  margin-left: 37px;
  margin-top: 11px;
  min-height: 40px;
  text-align: center;
  width: 252px;
}

.sales-marketing-1 {
  letter-spacing: 0.07px;
  line-height: 18.7px;
  margin-left: 97px;
  margin-top: 10px;
  min-height: 19px;
  white-space: nowrap;
}

.lorem-ipsum-dolor-si-3 {
  letter-spacing: 0.3px;
  line-height: 15px;
  margin-left: 56px;
  margin-top: 8px;
  min-height: 39px;
  text-align: center;
  width: 215px;
}

.overlap-group3-8 {
  align-items: center;
  background-color: var(--heavy-metal);
  display: flex;
  flex-direction: column;
  margin-left: 4.4px;
  margin-top: 71px;
  min-height: 353px;
  padding: 51.4px 40.3px;
  width: 318px;
}

.fox-capital-2-1 {
  align-self: flex-start;
  height: 30px;
  margin-top: 18px;
  width: 78px;
}

.we-are-committed-to-3 {
  color: var(--bon-jour);
  font-family: var(--font-family-montserrat);
  font-size: 7.9px;
  font-weight: 300;
  letter-spacing: 0.24px;
  line-height: 11.8px;
  margin-right: 6.87px;
  margin-top: 21px;
  min-height: 37px;
  width: 204px;
}

.overlap-group6-7 {
  align-items: flex-end;
  background-size: 100% 100%;
  display: flex;
  height: 30px;
  margin-right: 2.94px;
  margin-top: 29px;
  min-width: 208px;
  padding: 9.3px 13px;
}

.your-name-21 {
  letter-spacing: 0.26px;
  line-height: 11.3px;
  min-height: 11px;
  white-space: nowrap;
  width: 49px;
}

.overlap-group7-5 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 30px;
  margin-right: 2.94px;
  margin-top: 11px;
  min-width: 208px;
  padding: 9.5px 13px;
}

.yourmailaddresspleasemailcom-1 {
  letter-spacing: 0.26px;
  line-height: 11.3px;
  min-height: 11px;
  white-space: nowrap;
}

.frame-35635-1 {
  align-self: flex-start;
  background-color: var(--heavy-metal);
  border-radius: 4.58px;
  box-shadow: 3.27px 3.27px 9.82px #00000073, -3.27px -3.27px 9.82px #2a2a2a;
  display: flex;
  height: 31px;
  margin-left: 14.1px;
  margin-top: 14px;
  width: 179px;
}

.frame-35634-2 {
  align-items: center;
  display: flex;
  height: 11.29px;
  margin-left: 11.3px;
  margin-top: 9.6px;
  min-width: 119.62px;
}

.get-in-touch-with-us-3 {
  color: var(--orange-peel);
  font-family: var(--font-family-montserrat);
  font-size: 8.5px;
  font-weight: 700;
  letter-spacing: 0.04px;
  line-height: 11.3px;
  min-height: 11px;
  white-space: nowrap;
  width: 95px;
}

.arrow-13-2 {
  height: 8px;
  margin-bottom: 0;
  margin-left: 11px;
  width: 14px;
}

.footer-18 {
  background-color: var(--concrete);
  display: flex;
  height: 17px;
  margin-left: 17.78px;
  margin-top: 9px;
  width: 287px;
}

.frame-35632-16 {
  display: flex;
  margin-left: 7.9px;
  margin-top: 6.1px;
  width: 77.87px;
}

.privacy-policy-16 {
  height: 4.91px;
  letter-spacing: 0;
  width: 26.83px;
}

.terms-of-use-16 {
  height: 4.91px;
  letter-spacing: 0;
  margin-left: 7.9px;
  margin-top: 0;
  width: 25.52px;
}

.x2021-fox-capital-investment-limited-16 {
  height: 6.54px;
  letter-spacing: 0;
  margin-left: 116.8px;
  margin-top: 5.2px;
  width: 76.23px;
}

.vector-3-4 {
  height: 1065px;
  margin-top: 1931px;
  width: 1923px;
}
</style>
