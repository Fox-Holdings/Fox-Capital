<template>
  <div class="container-center-horizontal">
    <div class="home-page-1 screen">
      <div class="overlap-group-53">
        <div class="overlap-group11-12">
          <img class="rectangle-54-1" :src="rectangle54" /><img class="image-6-3" :src="image6" />
          <div class="rectangle-99-2"></div>
          <div class="group-82-3">
            <div class="flex-col-75">
              <div class="about-us-31">{{ aboutUs1 }}</div>
              <div class="surname-30 montserrat-light-white-35px">
                <span class="montserrat-light-white-35px">{{ spanText1 }}</span
                ><span class="montserrat-light-white-35px">{{ spanText2 }}</span>
              </div>
              <div class="surname-31" v-html="surname"></div>
            </div>
            <div class="our-latest-news-3">{{ ourLatestNews }}</div>
          </div>
        </div>
        <img class="group-67-17" :src="group67" /><img class="vector-3-12" :src="vector3" />
      </div>
      <div class="overlap-group9-16">
        <img class="rectangle-8" :src="rectangle44" /><img class="rectangle-8" :src="rectangle98" />
        <div class="get-the-app-3">
          <div class="overlap-group1-34">
            <div class="grow-your-investment-funds-1">{{ growYourInvestmentFunds }}</div>
            <div class="asset-acquisition-ju-1 montserrat-normal-white-24px" v-html="assetAcquisitionJu"></div>
          </div>
          <div class="coming-soon-5">{{ comingSoon }}</div>
          <img class="badges-3" :src="badges" />
        </div>
      </div>
      <div class="overlap-group2-31">
        <img class="fox-capital-2-3" :src="foxCapital2" />
        <div class="we-are-committed-to-5">{{ weAreCommittedTo1 }}</div>
        <img class="rectangle-74-1" :src="rectangle74" />
        <div class="flex-row-60">
          <div class="your-name-24 montserrat-light-white-26px">{{ yourName }}</div>
          <img class="rectangle-77-1" :src="rectangle77" />
        </div>
        <div class="overlap-group15-5">
          <img class="rectangle-78-1" :src="rectangle78" />
          <div class="yourmailaddresspleasemailcom-3 montserrat-light-white-26px">
            {{ yourmailaddresspleaseMailCom }}
          </div>
        </div>
        <div class="overlap-group14-4">
          <div class="get-in-touch-with-us-4 montserrat-bold-orange-peel-26px">{{ getInTouchWithUs }}</div>
          <img class="arrow-13-3" :src="arrow13" />
        </div>
      </div>
      <div class="we-help-you-building-3" v-html="weHelpYouBuilding"></div>
      <div class="frame-35633-3">
        <div class="place-37 montserrat-bold-orange-peel-22px">{{ place1 }}</div>
      </div>
      <router-link to="/services">
        <div class="services-26 montserrat-bold-fuscous-gray-22px">{{ services }}</div> </router-link
      ><router-link to="/investment-landing-page">
        <div class="investment-29 montserrat-bold-fuscous-gray-22px">{{ investment }}</div> </router-link
      ><router-link to="/about-us">
        <div class="about-us-32 montserrat-bold-fuscous-gray-22px">{{ aboutUs2 }}</div>
      </router-link>
      <div class="overlap-group7-19" :style="{ 'background-image': 'url(' + overlapGroup7 + ')' }">
        <img class="rectangle-11-1" :src="rectangle115" />
      </div>
      <div class="what-we-do-3 montserrat-light-eerie-black-56px">{{ whatWeDo }}</div>
      <div class="how-it-works-8 montserrat-light-eerie-black-56px">{{ howItWorks }}</div>
      <div class="lorem-ipsum-dolor-si-32 montserrat-normal-black-24px">{{ loremIpsumDolorSi }}</div>
      <div class="you-dont-just-acqui-3 montserrat-normal-black-24px">{{ youDonTJustAcqui }}</div>
      <div class="we-present-to-you-s-3 montserrat-normal-eerie-black-24px">{{ wePresentToYouS }}</div>
      <div class="we-are-committed-to-6 montserrat-normal-eerie-black-24px">{{ weAreCommittedTo2 }}</div>
      <div class="investment-management-3 montserrat-bold-eerie-black-26px">{{ investmentManagement }}</div>
      <div class="wealth-creation-3 montserrat-bold-eerie-black-26px">{{ wealthCreation }}</div>
      <div class="sales-marketing-3 montserrat-bold-eerie-black-26px">{{ salesMarketing }}</div>
      <div class="overlap-group10-13">
        <img class="rectangle-9" :src="rectangle2" />
        <div class="group-25-1">
          <img class="group-4-10" :src="group4" /><img class="rectangle-59-1" :src="rectangle59" />
        </div>
      </div>
      <div class="overlap-group13-9">
        <img class="rectangle-9" :src="rectangle60" />
        <div class="group-25-1">
          <img class="group-5-6" :src="group5" /><img class="rectangle-6-2" :src="rectangle61" />
        </div>
      </div>
      <div class="overlap-group5-25">
        <img class="rectangle-9" :src="rectangle62" />
        <div class="group-25-1">
          <img class="group-6-7" :src="group6" /><img class="rectangle-6-2" :src="rectangle63" />
        </div>
      </div>
      <img class="rectangle-111-1" :src="rectangle111" /><img class="rectangle-112-1" :src="rectangle112" /><img
        class="rectangle-113-1"
        :src="rectangle113"
      /><img class="rectangle-114-1" :src="rectangle114" /><img
        class="take-a-look-at-our-various-projects-1"
        :src="takeALookAtOurVariousProjects"
      /><img class="select-a-property-of-1" :src="selectAPropertyOfYourChoiceToInvest" /><img
        class="book-a-site-inspection-1"
        :src="bookASiteInspection"
      /><img class="invest-your-money-1" :src="investYourMoney" /><img class="explore-9" :src="explore" /><img
        class="select-a-property-1"
        :src="selectAProperty"
      /><img class="book-visitation-1" :src="bookVisitation" /><img class="invest-9" :src="invest" /><img
        class="group-96"
        :src="group1"
      /><img class="group-97" :src="group2" /><img class="group-99" :src="group3" /><img
        class="group-100"
        :src="group7"
      /><img class="group-101" :src="group8" /><img class="group-102" :src="group9" /><img
        class="group-103"
        :src="group10"
      /><img class="group-105" :src="group11" /><img
        class="vector-159"
        src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/group-67@2x.png"
      />
      <img class="vector-160" :src="vector2" /><img class="vector-161" :src="vector4" /><img
        class="vector-162"
        :src="vector5"
      /><img class="vector-163" :src="vector6" /><img class="vector-164" :src="vector7" /><img
        class="vector-165"
        :src="vector8"
      /><img class="vector-166" :src="vector9" /><img class="vector-167" :src="vector10" /><img
        class="vector-168"
        :src="vector11"
      /><img class="vector-169" :src="vector12" /><img class="vector-170" :src="vector13" /><img
        class="vector-171"
        :src="vector14"
      /><img class="vector-172" :src="vector15" /><img class="group-106" :src="group12" /><img
        class="group-76-1"
        :src="group76"
      /><img class="group-77-1" :src="group77" /><img class="group-78-1" :src="group78" /><router-link
        to="/investment-landing-page"
      >
        <div class="group-81-3">
          <div class="frame-11-5">
            <div class="invest-today-3">{{ investToday }}</div>
          </div>
        </div></router-link
      ><img class="rectangle-121-3" :src="rectangle121" />
      <div class="overlap-group-container-13">
        <div class="overlap-group17-4" :style="{ 'background-image': 'url(' + overlapGroup17 + ')' }">
          <img class="rectangle-11-1" id="rectangle-117" :src="rectangle117" />
        </div>
        <div class="overlap-group16-5">
          <div class="ibadan-oyo-state-3 montserrat-bold-white-40px">{{ ibadanOyoState }}</div>
          <div class="sea-facing-spacious-14 montserrat-normal-white-22px">{{ seaFacingSpacious1 }}</div>
        </div>
      </div>
      <div class="overlap-group3-23">
        <img class="rectangle-119" :src="rectangle119" />
        <div class="rectangle-120-3"></div>
        <div class="place-38 montserrat-bold-white-40px">{{ place2 }}</div>
        <div class="sea-facing-spacious-15 montserrat-normal-white-22px">{{ seaFacingSpacious2 }}</div>
      </div>
      <div class="overlap-group12-10" :style="{ 'background-image': 'url(' + overlapGroup12 + ')' }">
        <a href="#rectangle-117"><img class="rectangle-124-3" :src="rectangle124" /></a>
      </div>
      <div class="mowe-ibafo-3">{{ moweIbafo }}</div>
      <div class="investments-3 montserrat-light-eerie-black-56px">{{ investments }}</div>
      <div class="with-real-estate-inv-6 montserrat-normal-eerie-black-24px">{{ withRealEstateInv }}</div>
      <div class="sea-facing-spacious-16 montserrat-normal-white-24px">{{ seaFacingSpacious3 }}</div>
      <div class="overlap-group8-14">
        <div class="our montserrat-light-eerie-black-56px">{{ checkOurRecentProject }}</div>
        <div class="we-are-committed-to-7 montserrat-normal-black-24px" v-html="weAreCommittedTo3"></div>
        <img class="rectangle-51-1" :src="rectangle51" />
      </div>
      <img class="fox-capital-logo-2-28" :src="foxCapitalLogo2" />
      <div class="group-230-1">
        <div class="our montserrat-light-eerie-black-56px">{{ ourSubsidiaries }}</div>
        <div class="frame-11-6">
          <div class="frame-7-1">
            <img class="countryhill-logo-2-3" :src="countryhillLogo21" />
            <div class="countryhill-affordab-1 montserrat-normal-black-18px">{{ countryhillAffordab }}</div>
          </div>
          <div class="frame-10-1">
            <img class="countryhill-logo-2-4" :src="countryhillLogo22" />
            <div class="this-is-the-construc-2 montserrat-normal-black-18px">{{ thisIsTheConstruc1 }}</div>
          </div>
          <div class="frame-11-7">
            <img class="countryhill-logo-2-5" :src="countryhillLogo23" />
            <div class="this-is-the-construc-3 montserrat-normal-black-18px">{{ thisIsTheConstruc2 }}</div>
          </div>
        </div>
      </div>
      <x-footer2 :className="xFooter2Props.className" :frame35632Props="xFooter2Props.frame35632Props" />
      <div class="frame-container-3">
        <div class="frame-22-3">
          <div class="enter-your-e-mail-address-3 montserrat-bold-orange-peel-26px">{{ enterYourEMailAddress }}</div>
        </div>
        <div class="frame-23-3">
          <div class="join-our-wait-list-3 montserrat-bold-orange-peel-22px">{{ joinOurWaitlist }}</div>
        </div>
      </div>
      <img class="i-phone-12-pro-8" :src="iphone12Pro1" /><img class="i-phone-12-pro-9" :src="iphone12Pro2" />
    </div>
  </div>
</template>

<script>
import XFooter2 from "./XFooter2";
export default {
  name: "HomePage2",
  components: {
    XFooter2,
  },
  props: [
    "rectangle54",
    "image6",
    "aboutUs1",
    "spanText1",
    "spanText2",
    "surname",
    "ourLatestNews",
    "group67",
    "vector3",
    "rectangle44",
    "rectangle98",
    "growYourInvestmentFunds",
    "assetAcquisitionJu",
    "comingSoon",
    "badges",
    "foxCapital2",
    "weAreCommittedTo1",
    "rectangle74",
    "yourName",
    "rectangle77",
    "rectangle78",
    "yourmailaddresspleaseMailCom",
    "getInTouchWithUs",
    "arrow13",
    "weHelpYouBuilding",
    "place1",
    "services",
    "investment",
    "aboutUs2",
    "overlapGroup7",
    "rectangle115",
    "whatWeDo",
    "howItWorks",
    "loremIpsumDolorSi",
    "youDonTJustAcqui",
    "wePresentToYouS",
    "weAreCommittedTo2",
    "investmentManagement",
    "wealthCreation",
    "salesMarketing",
    "rectangle2",
    "group4",
    "rectangle59",
    "rectangle60",
    "group5",
    "rectangle61",
    "rectangle62",
    "group6",
    "rectangle63",
    "rectangle111",
    "rectangle112",
    "rectangle113",
    "rectangle114",
    "takeALookAtOurVariousProjects",
    "selectAPropertyOfYourChoiceToInvest",
    "bookASiteInspection",
    "investYourMoney",
    "explore",
    "selectAProperty",
    "bookVisitation",
    "invest",
    "group1",
    "group2",
    "group3",
    "group7",
    "group8",
    "group9",
    "group10",
    "group11",
    "vector2",
    "vector4",
    "vector5",
    "vector6",
    "vector7",
    "vector8",
    "vector9",
    "vector10",
    "vector11",
    "vector12",
    "vector13",
    "vector14",
    "vector15",
    "group12",
    "group76",
    "group77",
    "group78",
    "investToday",
    "rectangle121",
    "overlapGroup17",
    "rectangle117",
    "ibadanOyoState",
    "seaFacingSpacious1",
    "rectangle119",
    "place2",
    "seaFacingSpacious2",
    "overlapGroup12",
    "rectangle124",
    "moweIbafo",
    "investments",
    "withRealEstateInv",
    "seaFacingSpacious3",
    "checkOurRecentProject",
    "weAreCommittedTo3",
    "rectangle51",
    "foxCapitalLogo2",
    "ourSubsidiaries",
    "countryhillLogo21",
    "countryhillAffordab",
    "countryhillLogo22",
    "thisIsTheConstruc1",
    "countryhillLogo23",
    "thisIsTheConstruc2",
    "enterYourEMailAddress",
    "joinOurWaitlist",
    "iphone12Pro1",
    "iphone12Pro2",
    "xFooter2Props",
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
.home-page-1 {
  background-color: var(--concrete);
  height: 10066px;
  overflow: hidden;
  position: relative;
  width: 1920px;
}

.overlap-group-53 {
  height: 1080px;
  left: 0;
  position: absolute;
  top: 4344px;
  width: 1515px;
}

.overlap-group11-12 {
  height: 1080px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1515px;
}

.rectangle-54-1 {
  height: 1px;
  left: 959px;
  position: absolute;
  top: 540px;
  width: 1px;
}

.image-6-3 {
  height: 1px;
  left: 1432px;
  position: absolute;
  top: 570px;
  width: 1px;
}

.rectangle-99-2 {
  background-color: var(--eerie-black-2);
  height: 1080px;
  left: 0;
  position: absolute;
  top: 0;
  width: 940px;
}

.group-82-3 {
  align-items: flex-start;
  display: flex;
  height: 717px;
  left: 169px;
  min-width: 1346px;
  position: absolute;
  top: 95px;
}

.flex-col-75 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 717px;
  width: 611px;
}

.about-us-31 {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 56px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 79.5px;
  min-height: 79px;
  white-space: nowrap;
}

.surname-30 {
  letter-spacing: 0;
  line-height: 64.5px;
  margin-top: 105px;
  min-height: 49px;
  white-space: nowrap;
}

.surname-31 {
  color: var(--concrete);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-s);
  font-weight: 400;
  letter-spacing: 0.66px;
  line-height: 33.1px;
  margin-top: 48px;
  min-height: 436px;
  width: 611px;
}

.our-latest-news-3 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 56px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 79.5px;
  margin-left: 257px;
  margin-top: 60px;
  min-height: 79px;
  white-space: nowrap;
}

.group-67-17 {
  height: 1px;
  left: 1203px;
  position: absolute;
  top: 980px;
  width: 1px;
}

.vector-3-12 {
  height: 1px;
  left: 958px;
  position: absolute;
  top: 951px;
  width: 1px;
}

.overlap-group9-16 {
  height: 401px;
  left: 943px;
  position: absolute;
  top: 1447px;
  width: 650px;
}

.rectangle-8 {
  height: 1px;
  left: 16px;
  position: absolute;
  top: 204px;
  width: 1px;
}

.get-the-app-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 401px;
  position: absolute;
  top: 0;
  width: 650px;
}

.overlap-group1-34 {
  height: 195px;
  position: relative;
  width: 644px;
}

.grow-your-investment-funds-1 {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 42px;
  font-weight: 700;
  left: 0;
  letter-spacing: 0;
  line-height: 80.8px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.asset-acquisition-ju-1 {
  left: 0;
  letter-spacing: 0;
  line-height: 40.4px;
  position: absolute;
  top: 75px;
  width: 644px;
}

.coming-soon-5 {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 22.7px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 35.4px;
  margin-top: 88px;
  min-height: 36px;
  white-space: nowrap;
}

.badges-3 {
  height: 1px;
  margin-left: 84.75px;
  margin-top: 56px;
  width: 1px;
}

.overlap-group2-31 {
  align-items: flex-end;
  background-color: var(--heavy-metal);
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 1080px;
  padding: 143px 112px;
  position: absolute;
  top: 8834px;
  width: 1920px;
}

.fox-capital-2-3 {
  align-self: center;
  height: 1px;
  margin-left: 606px;
  margin-top: 115px;
  width: 1px;
}

.we-are-committed-to-5 {
  color: var(--bon-jour);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-m);
  font-weight: 300;
  letter-spacing: 0.72px;
  line-height: 36.1px;
  margin-top: 109px;
  min-height: 112px;
  width: 624px;
}

.rectangle-74-1 {
  align-self: center;
  height: 1px;
  margin-right: 847px;
  margin-top: 60px;
  width: 1px;
}

.flex-row-60 {
  align-items: center;
  display: flex;
  height: 35px;
  margin-right: 305.5px;
  margin-top: 56px;
  min-width: 278px;
}

.your-name-24 {
  letter-spacing: 0.78px;
  line-height: 34.7px;
  min-height: 35px;
  min-width: 151px;
  white-space: nowrap;
}

.rectangle-77-1 {
  height: 1px;
  margin-left: 126px;
  width: 1px;
}

.overlap-group15-5 {
  height: 35px;
  margin-right: 119px;
  margin-top: 91px;
  position: relative;
  width: 465px;
}

.rectangle-78-1 {
  height: 1px;
  left: 278px;
  position: absolute;
  top: 17px;
  width: 1px;
}

.yourmailaddresspleasemailcom-3 {
  left: 0;
  letter-spacing: 0.78px;
  line-height: 34.7px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.overlap-group14-4 {
  align-items: center;
  background-color: var(--heavy-metal);
  border-radius: 14px;
  box-shadow: 10px 10px 30px #00000073, -10px -10px 30px #2a2a2a;
  display: flex;
  height: 107px;
  margin-right: 165px;
  margin-top: 73px;
  min-width: 457px;
  padding: 34.9px 46px;
}

.get-in-touch-with-us-4 {
  align-self: flex-end;
  letter-spacing: 0.13px;
  line-height: 34.7px;
  min-height: 32px;
  white-space: nowrap;
  width: 300px;
}

.arrow-13-3 {
  height: 1px;
  margin-left: 33px;
  margin-top: 5px;
  width: 1px;
}

.we-help-you-building-3 {
  color: var(--cape-cod);
  font-family: var(--font-family-lora);
  font-size: 54px;
  font-weight: 400;
  left: 101px;
  letter-spacing: 0;
  line-height: 76.6px;
  position: absolute;
  top: 351px;
  width: 566px;
}

.frame-35633-3 {
  align-items: center;
  background-color: var(--desert-storm);
  border-radius: 15px;
  box-shadow: 10px 10px 20px #00000017, -10px -10px 20px #ffffff;
  display: flex;
  height: 85px;
  left: 812px;
  min-width: 192px;
  padding: 0 61px;
  position: absolute;
  top: 935px;
}

.place-37 {
  letter-spacing: 0.11px;
  line-height: 29.3px;
  min-height: 29px;
  min-width: 70px;
  white-space: nowrap;
}

.services-26 {
  cursor: pointer;
  left: 1413px;
  letter-spacing: 0.11px;
  line-height: 29.3px;
  opacity: 0.9;
  position: absolute;
  top: 963px;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.services-26:hover,
.investment-29:hover,
.about-us-32:hover {
  color: #5dca22;
}

.investment-29 {
  cursor: pointer;
  left: 1656px;
  letter-spacing: 0.11px;
  line-height: 29.3px;
  opacity: 0.9;
  position: absolute;
  top: 963px;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.about-us-32 {
  cursor: pointer;
  left: 1155px;
  letter-spacing: 0.11px;
  line-height: 29.3px;
  position: absolute;
  top: 963px;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.overlap-group7-19 {
  align-items: flex-start;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  height: 1px;
  left: 1314px;
  min-width: 1px;
  position: absolute;
  top: 435px;
}

.rectangle-11-1 {
  height: 1px;
  width: 1px;
}

.what-we-do-3 {
  left: 89px;
  letter-spacing: 0;
  line-height: 79.5px;
  position: absolute;
  top: 5653px;
  white-space: nowrap;
  width: 379px;
}

.how-it-works-8 {
  left: 97px;
  letter-spacing: 0;
  line-height: 79.5px;
  position: absolute;
  top: 3300px;
  white-space: nowrap;
  width: 758px;
}

.lorem-ipsum-dolor-si-32 {
  left: 1287px;
  letter-spacing: 0.72px;
  line-height: 36.1px;
  position: absolute;
  text-align: center;
  top: 6332px;
  width: 521px;
}

.you-dont-just-acqui-3 {
  left: 677px;
  letter-spacing: 0.72px;
  line-height: 36.1px;
  position: absolute;
  text-align: center;
  top: 6332px;
  width: 566px;
}

.we-present-to-you-s-3 {
  left: 89px;
  letter-spacing: 0.72px;
  line-height: 36.1px;
  position: absolute;
  text-align: center;
  top: 6332px;
  width: 521px;
}

.we-are-committed-to-6 {
  left: 99px;
  letter-spacing: 0.72px;
  line-height: 36.1px;
  position: absolute;
  top: 3421px;
  width: 882px;
}

.investment-management-3 {
  left: 156px;
  letter-spacing: 0.13px;
  line-height: 34.7px;
  position: absolute;
  top: 6285px;
  white-space: nowrap;
}

.wealth-creation-3 {
  left: 834px;
  letter-spacing: 0.13px;
  line-height: 34.7px;
  position: absolute;
  top: 6285px;
  white-space: nowrap;
}

.sales-marketing-3 {
  left: 1442px;
  letter-spacing: 0.13px;
  line-height: 34.7px;
  position: absolute;
  top: 6285px;
  white-space: nowrap;
}

.overlap-group10-13 {
  height: 214px;
  left: 243px;
  position: absolute;
  top: 5932px;
  width: 214px;
}

.rectangle-9 {
  height: 1px;
  left: 107px;
  position: absolute;
  top: 107px;
  width: 1px;
}

.group-25-1 {
  align-items: center;
  display: flex;
  height: 214px;
  justify-content: flex-end;
  left: 0;
  min-width: 214px;
  padding: 86.8px;
  position: absolute;
  top: 0;
}

.group-4-10 {
  height: 1px;
  margin-top: 0.22px;
  width: 1px;
}

.rectangle-59-1 {
  align-self: flex-end;
  cursor: pointer;
  height: 1px;
  margin-left: 19px;
  transition: all 0.2s ease;
  width: 1px;
}

.rectangle-59-1:hover,
.rectangle-6-2:hover {
  transform: scale(1.1);
}

.overlap-group13-9 {
  height: 214px;
  left: 844px;
  position: absolute;
  top: 5932px;
  width: 214px;
}

.group-5-6 {
  height: 1px;
  margin-bottom: 0.11px;
  width: 1px;
}

.rectangle-6-2 {
  align-self: flex-end;
  cursor: pointer;
  height: 1px;
  margin-left: 20px;
  transition: all 0.2s ease;
  width: 1px;
}

.overlap-group5-25 {
  height: 214px;
  left: 1441px;
  position: absolute;
  top: 5932px;
  width: 214px;
}

.group-6-7 {
  height: 1px;
  margin-top: 0.97px;
  width: 1px;
}

.rectangle-111-1 {
  height: 1px;
  left: 248px;
  position: absolute;
  top: 3789px;
  width: 1px;
}

.rectangle-112-1 {
  height: 1px;
  left: 1087px;
  position: absolute;
  top: 3993px;
  width: 1px;
}

.rectangle-113-1 {
  height: 1px;
  left: 717px;
  position: absolute;
  top: 3662px;
  width: 1px;
}

.rectangle-114-1 {
  height: 1px;
  left: 1462px;
  position: absolute;
  top: 3662px;
  width: 1px;
}

.take-a-look-at-our-various-projects-1 {
  height: 1px;
  left: 425px;
  position: absolute;
  top: 3890px;
  width: 1px;
}

.select-a-property-of-1 {
  height: 1px;
  left: 798px;
  position: absolute;
  top: 3945px;
  width: 1px;
}

.book-a-site-inspection-1 {
  height: 1px;
  left: 1179px;
  position: absolute;
  top: 3894px;
  width: 1px;
}

.invest-your-money-1 {
  height: 1px;
  left: 1545px;
  position: absolute;
  top: 3901px;
  width: 1px;
}

.explore-9 {
  height: 1px;
  left: 425px;
  position: absolute;
  top: 3827px;
  width: 1px;
}

.select-a-property-1 {
  height: 1px;
  left: 793px;
  position: absolute;
  top: 3825px;
  width: 1px;
}

.book-visitation-1 {
  height: 1px;
  left: 1163px;
  position: absolute;
  top: 3828px;
  width: 1px;
}

.invest-9 {
  height: 1px;
  left: 1550px;
  position: absolute;
  top: 3833px;
  width: 1px;
}

.group-96 {
  height: 1px;
  left: 245px;
  position: absolute;
  top: 3796px;
  width: 1px;
}

.group-97 {
  height: 1px;
  left: 716px;
  position: absolute;
  top: 3663px;
  width: 1px;
}

.group-99 {
  height: 1px;
  left: 1085px;
  position: absolute;
  top: 3998px;
  width: 1px;
}

.group-100 {
  height: 1px;
  left: 1461px;
  position: absolute;
  top: 3663px;
  width: 1px;
}

.group-101 {
  height: 1px;
  left: 431px;
  position: absolute;
  top: 3714px;
  width: 1px;
}

.group-102 {
  height: 1px;
  left: 798px;
  position: absolute;
  top: 3973px;
  width: 1px;
}

.group-103 {
  height: 1px;
  left: 1171px;
  position: absolute;
  top: 3713px;
  width: 1px;
}

.group-105 {
  height: 1px;
  left: 1545px;
  position: absolute;
  top: 3973px;
  width: 1px;
}

.vector-159 {
  height: 1px;
  left: 424px;
  position: absolute;
  top: 3939px;
  width: 1px;
}

.vector-160 {
  height: 1px;
  left: 633px;
  position: absolute;
  top: 3784px;
  width: 1px;
}

.vector-161 {
  height: 1px;
  left: 880px;
  position: absolute;
  top: 3751px;
  width: 1px;
}

.vector-162 {
  height: 1px;
  left: 662px;
  position: absolute;
  top: 3717px;
  width: 1px;
}

.vector-163 {
  height: 1px;
  left: 1007px;
  position: absolute;
  top: 3906px;
  width: 1px;
}

.vector-164 {
  height: 1px;
  left: 1251px;
  position: absolute;
  top: 3939px;
  width: 1px;
}

.vector-165 {
  height: 1px;
  left: 1036px;
  position: absolute;
  top: 3973px;
  width: 1px;
}

.vector-166 {
  height: 1px;
  left: 1380px;
  position: absolute;
  top: 3784px;
  width: 1px;
}

.vector-167 {
  height: 1px;
  left: 1627px;
  position: absolute;
  top: 3751px;
  width: 1px;
}

.vector-168 {
  height: 1px;
  left: 1410px;
  position: absolute;
  top: 3717px;
  width: 1px;
}

.vector-169 {
  height: 1px;
  left: 238px;
  position: absolute;
  top: 3855px;
  width: 1px;
}

.vector-170 {
  height: 1px;
  left: 770px;
  position: absolute;
  top: 3659px;
  width: 1px;
}

.vector-171 {
  height: 1px;
  left: 1138px;
  position: absolute;
  top: 4029px;
  width: 1px;
}

.vector-172 {
  height: 1px;
  left: 1516px;
  position: absolute;
  top: 3659px;
  width: 1px;
}

.group-106 {
  height: 1px;
  left: 425px;
  position: absolute;
  top: 3777px;
  width: 1px;
}

.group-76-1 {
  height: 1px;
  left: 794px;
  position: absolute;
  top: 3776px;
  width: 1px;
}

.group-77-1 {
  height: 1px;
  left: 1171px;
  position: absolute;
  top: 3778px;
  width: 1px;
}

.group-78-1 {
  height: 1px;
  left: 1549px;
  position: absolute;
  top: 3778px;
  width: 1px;
}

.group-81-3 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  height: 97px;
  left: 108px;
  min-width: 390px;
  position: absolute;
  top: 769px;
}

.frame-11-5 {
  align-items: center;
  background-color: var(--desert-storm);
  border-radius: 20px;
  box-shadow: 10px 10px 20px #00000014, -10px -10px 20px #ffffff;
  display: flex;
  height: 97px;
  min-width: 390px;
  padding: 0 97.5px;
}

.invest-today-3 {
  color: var(--orange-peel);
  font-family: var(--font-family-montserrat);
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.14px;
  line-height: 37.4px;
  min-height: 37px;
  min-width: 195px;
  white-space: nowrap;
}

.rectangle-121-3 {
  height: 1px;
  left: 982px;
  position: absolute;
  top: 2968px;
  width: 1px;
}

.overlap-group-container-13 {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 43px;
  box-shadow: 20px 20px 50px #d2d2d2, -20px -20px 50px #ffffff;
  display: flex;
  flex-direction: column;
  left: 1422px;
  min-height: 435px;
  padding: 43px 52px;
  position: absolute;
  top: 2751px;
  width: 573px;
}

.overlap-group17-4 {
  align-items: flex-start;
  align-self: center;
  background-size: 100% 100%;
  display: flex;
  margin-top: 175px;
  min-width: 1px;
}

.overlap-group16-5 {
  height: 75px;
  margin-top: 98px;
  position: relative;
  width: 375px;
}

.ibadan-oyo-state-3 {
  left: 0;
  letter-spacing: 0.2px;
  line-height: 53.4px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.sea-facing-spacious-14 {
  left: 0;
  letter-spacing: 0.66px;
  line-height: 33.1px;
  position: absolute;
  top: 51px;
  white-space: nowrap;
  width: 235px;
}

.overlap-group3-23 {
  background-color: var(--concrete);
  border-radius: 43px;
  box-shadow: 20px 20px 50px #d2d2d2, -20px -20px 50px #ffffff;
  height: 435px;
  left: -30px;
  position: absolute;
  top: 2751px;
  width: 573px;
}

.rectangle-119 {
  width: 100%;
}

.rectangle-120-3 {
  background-color: var(--black-2);
  border-radius: 32px;
  height: 413px;
  left: 10px;
  position: absolute;
  top: 12px;
  width: 556px;
}

.place-38 {
  left: 38px;
  letter-spacing: 0.2px;
  line-height: 53.4px;
  position: absolute;
  top: 317px;
  white-space: nowrap;
  width: 156px;
}

.sea-facing-spacious-15 {
  left: 38px;
  letter-spacing: 0.66px;
  line-height: 33.1px;
  position: absolute;
  top: 368px;
  white-space: nowrap;
  width: 235px;
}

.overlap-group12-10 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 1px;
  left: 982px;
  min-width: 1px;
  position: absolute;
  top: 2969px;
}

.rectangle-124-3 {
  cursor: pointer;
  height: 1px;
  width: 1px;
}

.mowe-ibafo-3 {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 48px;
  font-weight: 700;
  left: 650px;
  letter-spacing: 0.24px;
  line-height: 64px;
  position: absolute;
  top: 3104px;
  white-space: nowrap;
}

.investments-3 {
  left: 98px;
  letter-spacing: 0;
  line-height: 79.5px;
  position: absolute;
  top: 2368px;
  white-space: nowrap;
  width: 433px;
}

.with-real-estate-inv-6 {
  left: 100px;
  letter-spacing: 0.72px;
  line-height: 36.1px;
  position: absolute;
  top: 2480px;
  width: 882px;
}

.sea-facing-spacious-16 {
  left: 650px;
  letter-spacing: 0.72px;
  line-height: 36.1px;
  position: absolute;
  top: 3170px;
  white-space: nowrap;
  width: 255px;
}

.overlap-group8-14 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  left: 11px;
  min-height: 1185px;
  padding: 91px 98px;
  position: absolute;
  top: 6725px;
  width: 1920px;
}

.our {
  letter-spacing: 0;
  line-height: 79.5px;
  min-height: 79px;
  white-space: nowrap;
}

.we-are-committed-to-7 {
  letter-spacing: 0.72px;
  line-height: 36.1px;
  margin-left: 7px;
  margin-top: 37px;
  min-height: 220px;
  width: 691px;
}

.rectangle-51-1 {
  align-self: center;
  height: 1px;
  margin-left: 462px;
  margin-top: 248px;
  width: 1px;
}

.fox-capital-logo-2-28 {
  height: 1px;
  left: 209px;
  object-fit: cover;
  position: absolute;
  top: 171px;
  width: 1px;
}

.group-230-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 89px;
  min-height: 708px;
  position: absolute;
  top: 8040px;
  width: 1599px;
}

.frame-11-6 {
  align-items: center;
  display: flex;
  height: 585px;
  margin-top: 44px;
  min-width: 1597px;
  padding: 0 7px;
}

.frame-7-1 {
  align-items: flex-end;
  background-color: var(--concrete);
  border-radius: 43px;
  box-shadow: 20px 20px 50px #d2d2d2, -20px -20px 50px #ffffff;
  display: flex;
  flex-direction: column;
  min-height: 487px;
  padding: 86px 5px;
  width: 497px;
}

.countryhill-logo-2-3 {
  align-self: center;
  height: 1px;
  margin-left: 28px;
  margin-top: 82px;
  object-fit: cover;
  width: 1px;
}

.countryhill-affordab-1 {
  letter-spacing: 0.18px;
  line-height: 24px;
  margin-top: 107px;
  min-height: 126px;
  width: 459px;
}

.frame-10-1 {
  align-items: flex-end;
  background-color: var(--concrete);
  border-radius: 43px;
  box-shadow: 20px 20px 50px #d2d2d2, -20px -20px 50px #ffffff;
  display: flex;
  flex-direction: column;
  margin-left: 45px;
  min-height: 565px;
  padding: 86px 20.5px;
  width: 498px;
}

.countryhill-logo-2-4 {
  align-self: center;
  height: 1px;
  margin-left: 27px;
  margin-top: 121px;
  object-fit: cover;
  width: 1px;
}

.this-is-the-construc-2 {
  letter-spacing: 0.18px;
  line-height: 24px;
  margin-top: 146px;
  min-height: 126px;
  width: 430px;
}

.frame-11-7 {
  align-items: flex-end;
  background-color: var(--concrete);
  border-radius: 43px;
  box-shadow: 20px 20px 50px #d2d2d2, -20px -20px 50px #ffffff;
  display: flex;
  flex-direction: column;
  margin-left: 45px;
  min-height: 468px;
  padding: 130.2px 6px;
  width: 498px;
}

.countryhill-logo-2-5 {
  align-self: center;
  height: 1px;
  margin-left: 27px;
  object-fit: cover;
  width: 1px;
}

.this-is-the-construc-3 {
  letter-spacing: 0.18px;
  line-height: 24px;
  margin-top: 69px;
  min-height: 126px;
  width: 459px;
}

.frame-container-3 {
  border-radius: 14px;
  height: 99px;
  left: 943px;
  position: absolute;
  top: 1935px;
  width: 876px;
}

.frame-22-3 {
  align-items: center;
  background-color: var(--heavy-metal);
  border-radius: 14px;
  box-shadow: 10px 10px 30px #00000073, -10px -10px 30px #2a2a2a;
  display: flex;
  height: 99px;
  left: 0;
  min-width: 876px;
  padding: 0 89px;
  position: absolute;
  top: 0;
}

.enter-your-e-mail-address-3 {
  letter-spacing: 0.13px;
  line-height: 34.7px;
  min-height: 35px;
  min-width: 354px;
  white-space: nowrap;
}

.frame-23-3 {
  align-items: center;
  background-color: var(--desert-storm);
  border-radius: 15px;
  box-shadow: 10px 10px 20px #00000017;
  display: flex;
  height: 85px;
  left: 563px;
  min-width: 313px;
  padding: 0 52.5px;
  position: absolute;
  top: 7px;
}

.join-our-wait-list-3 {
  letter-spacing: 0.11px;
  line-height: 29.3px;
  min-height: 29px;
  min-width: 208px;
  white-space: nowrap;
}

.i-phone-12-pro-8 {
  height: 1px;
  left: 369px;
  position: absolute;
  top: 1604px;
  width: 1px;
}

.i-phone-12-pro-9 {
  height: 1px;
  left: 637px;
  position: absolute;
  top: 1698px;
  width: 1px;
}
</style>
