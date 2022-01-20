<template>
  <div class="container-center-horizontal">
    <div class="home-page screen">
      <div class="flex-row-2">
        <div class="flex-col">
          <img class="fox-capital-logo-2-1" :src="foxCapitalLogo2" />
          <div class="we-help-you-building" v-html="weHelpYouBuilding"></div>
          <router-link to="/investment-landing-page">
            <div class="group-81">
              <div class="frame-11">
                <div class="invest-today">{{ investToday }}</div>
              </div>
            </div></router-link
          >
        </div>
        <div class="overlap-group13" :style="{ 'background-image': 'url(' + overlapGroup13 + ')' }">
          <img class="rectangle-115" :src="rectangle115" />
        </div>
      </div>
      <div class="flex-col-1">
        <div class="flex-row-3">
          <div class="frame-35633">
            <div class="place-2 montserrat-bold-orange-peel-14px">{{ place1 }}</div>
          </div>
          <router-link to="/about-us">
            <div class="about-us-1 montserrat-bold-fuscous-gray-14px">{{ aboutUs1 }}</div> </router-link
          ><router-link to="/services">
            <div class="services-1 montserrat-bold-fuscous-gray-14px">{{ services }}</div> </router-link
          ><router-link to="/investment-landing-page">
            <div class="investment-1 montserrat-bold-fuscous-gray-14px">{{ investment }}</div>
          </router-link>
        </div>
        <div class="overlap-group10-1" :style="{ 'background-image': 'url(' + overlapGroup10 + ')' }">
          <div class="overlap-group2-7">
            <div class="frame-35646">
              <div class="get-the-app">
                <div class="overlap-group-8">
                  <div class="grow-your-investment-funds">{{ growYourInvestmentFunds }}</div>
                  <p class="asset-acquisition-ju montserrat-normal-white-15-2px" v-html="assetAcquisitionJu"></p>
                </div>
                <div class="coming-soon">{{ comingSoon }}</div>
                <img class="badges" :src="badges" />
              </div>
            </div>
            <img class="i-phone-12-pro" :src="iphone12Pro1" /><img class="i-phone-12-pro-1" :src="iphone12Pro2" />
          </div>
          <div class="frame-22">
            <div class="enter-your-e-mail-address montserrat-bold-orange-peel-16-5px">{{ enterYourEMailAddress }}</div>
          </div>
          <div class="frame-23">
            <div class="join-our-wait-list montserrat-bold-orange-peel-14px">{{ joinOurWaitlist }}</div>
          </div>
        </div>
        <div class="investments montserrat-light-eerie-black-35-6px">{{ investments }}</div>
        <p class="with-real-estate-inv montserrat-normal-eerie-black-15-2px">{{ withRealEstateInv }}</p>
        <div class="overlap-group9-1">
          <div class="how-it-works montserrat-light-eerie-black-35-6px">{{ howItWorks }}</div>
          <img class="rectangle-121" :src="rectangle121" />
          <div class="rectangle-122"></div>
          <div class="rectangle-118"></div>
          <img class="rectangle-123" :src="rectangle123" /><img class="rectangle-116" :src="rectangle116" /><img
            class="rectangle-124"
            :src="rectangle124"
          /><img class="rectangle-117" :src="rectangle117" />
          <div class="mowe-ibafo">{{ moweIbafo }}</div>
          <div class="ibadan-oyo-state montserrat-bold-white-25-4px">{{ ibadanOyoState }}</div>
          <div class="sea-facing-spacious montserrat-normal-white-15-2px">{{ seaFacingSpacious1 }}</div>
          <div class="overlap-group1-5">
            <img class="rectangle-119" :src="rectangle119" />
            <div class="rectangle-120"></div>
            <div class="place-3 montserrat-bold-white-25-4px">{{ place2 }}</div>
            <div class="sea-facing-spacious-1 montserrat-normal-white-14px">{{ seaFacingSpacious2 }}</div>
          </div>
          <div class="sea-facing-spacious-2 montserrat-normal-white-14px">{{ seaFacingSpacious3 }}</div>
        </div>
        <p class="we-are-committed-to montserrat-normal-eerie-black-15-2px">{{ weAreCommittedTo1 }}</p>
        <div class="group-261">
          <div class="overlap-group3">
            <img
              class="rectangle-111"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1e15c99b20f3d6937c75f/img/rectangle-111-2@2x.svg"
            />
            <img
              class="rectangle-112"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1e15c99b20f3d6937c75f/img/rectangle-112-2@2x.svg"
            />
            <img
              class="rectangle-113"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1e15c99b20f3d6937c75f/img/rectangle-113-2@2x.svg"
            />
            <img
              class="rectangle-114"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1e15c99b20f3d6937c75f/img/rectangle-114-2@2x.svg"
            />
            <img
              class="take-a-look-at-our-various-projects"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/take-a-look-at-our-various-projects--1@2x.svg"
            />
            <img
              class="book-a-site-inspection"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/book-a-site-inspection-1@2x.svg"
            />
            <img
              class="select-a-property"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/select-a-property-1@2x.svg"
            />
            <img
              class="invest"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/invest-4@2x.svg"
            />
            <img
              class="group"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/group-37@2x.svg"
            />
            <img
              class="group-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/group-38@2x.svg"
            />
            <img
              class="group-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e53750422bdc268e340d7f/img/group-2@2x.svg"
            />
            <img
              class="group-3"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/group-40@2x.svg"
            />
            <img
              class="group-4"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/group-41@2x.svg"
            />
            <img
              class="vector"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/vector-72@2x.svg"
            />
            <img
              class="vector-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/vector-73@2x.svg"
            />
            <img
              class="vector-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/vector-74@2x.svg"
            />
            <img
              class="vector-3"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/vector-75@2x.svg"
            />
            <img
              class="vector-4"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/vector-76@2x.svg"
            />
            <img
              class="vector-5"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/vector-77@2x.svg"
            />
            <img
              class="vector-6"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/vector-78@2x.svg"
            />
            <img
              class="vector-7"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/vector-79@2x.svg"
            />
            <img
              class="vector-8"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/vector-80@2x.svg"
            />
            <img
              class="vector-9"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/vector-81@2x.svg"
            />
            <img
              class="vector-10"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/vector-82@2x.svg"
            />
            <img
              class="vector-11"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/vector-83@2x.svg"
            />
            <img
              class="vector-12"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/vector-84@2x.svg"
            />
            <img
              class="vector-13"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/vector-85@2x.svg"
            />
            <img
              class="group-5"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/group-45@2x.svg"
            />
            <img
              class="group-76"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/group-76-1@2x.svg"
            />
            <img
              class="group-78"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/group-78-1@2x.svg"
            />
          </div>
          <div class="overlap-group5-1">
            <img
              class="select-a-property-of"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/select-a-property-of-your-choice-to-invest-in-1@2x.svg"
            />
            <img
              class="group-6"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/group-42@2x.svg"
            />
          </div>
          <div class="overlap-group4-2">
            <img
              class="invest-your-money"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/invest-your-money-1@2x.svg"
            />
            <img
              class="group-7"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/group-44@2x.svg"
            />
          </div>
          <img
            class="explore"
            src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/explore-4@2x.svg"
          />
          <img
            class="book-visitation"
            src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/book-visitation-1@2x.svg"
          />
          <div class="group-container">
            <img
              class="group-8"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/group-43@2x.svg"
            />
            <img
              class="group-77"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/group-77-1@2x.svg"
            />
          </div>
        </div>
        <div class="group-container-1" :style="{ 'background-image': 'url(' + groupContainer1 + ')' }">
          <img class="group-67" :src="group67" />
          <div class="overlap-group15">
            <img class="image-6" :src="image6" /><img class="rectangle-99" :src="rectangle99" />
            <div class="group-82">
              <div class="flex-col-2">
                <div class="about-us-2">{{ aboutUs2 }}</div>
                <div class="surname-1 montserrat-light-white-22-2px">
                  <span class="montserrat-light-white-22-2px">{{ spanText1 }}</span
                  ><span class="montserrat-light-white-22-2px">{{ spanText2 }}</span>
                </div>
                <p class="surname-2" v-html="surname"></p>
              </div>
              <div class="our-latest-news">{{ ourLatestNews }}</div>
            </div>
          </div>
        </div>
        <div class="what-we-do montserrat-light-eerie-black-35-6px">{{ whatWeDo }}</div>
        <div class="overlap-group-container">
          <div class="overlap-group8-1" :style="{ 'background-image': 'url(' + overlapGroup8 + ')' }">
            <img class="rectangle-59" :src="rectangle59" /><img class="group-4-1" :src="group42" />
          </div>
          <div class="group-container-2" :style="{ 'background-image': 'url(' + groupContainer2 + ')' }">
            <div class="group-258"><img class="rectangle-61" :src="rectangle61" /></div>
            <img class="group-257" :src="group257" />
          </div>
          <div class="overlap-group11">
            <img class="rectangle-62" :src="rectangle62" /><img class="rectangle-63" :src="rectangle63" /><img
              class="group-5-1"
              :src="group52"
            />
          </div>
        </div>
        <div class="flex-row-4 montserrat-bold-eerie-black-22px">
          <div class="investment-management">{{ investmentManagement }}</div>
          <div class="wealth-creation">{{ wealthCreation }}</div>
          <div class="sales-marketing">{{ salesMarketing }}</div>
        </div>
        <div class="flex-row-5">
          <p class="we-present-to-you-s">{{ wePresentToYouS }}</p>
          <p class="you-dont-just-acqui montserrat-normal-black-16px">{{ youDonTJustAcqui }}</p>
          <p class="lorem-ipsum-dolor-si montserrat-normal-black-16px">{{ loremIpsumDolorSi }}</p>
        </div>
        <div class="overlap-group7-1">
          <img class="vector-3-1" :src="vector32" />
          <div class="rectangle-73"></div>
          <div class="frame-35635"><frame35634 /></div>
          <img class="rectangle-77" :src="rectangle77" /><img class="rectangle-78" :src="rectangle78" />
          <div class="get-in-touch-with-us montserrat-bold-orange-peel-16-5px">{{ getInTouchWithUs }}</div>
          <p class="we-are-committed-to-1">{{ weAreCommittedTo2 }}</p>
          <div class="yourmailaddresspleasemailcom montserrat-light-white-16-5px">
            {{ yourmailaddresspleaseMailCom }}
          </div>
          <div class="your-name-6 montserrat-light-white-16-5px">{{ yourName }}</div>
          <div class="rectangle-52"></div>
          <img class="rectangle-51" :src="rectangle51" />
          <div class="check-our-recent-project montserrat-light-eerie-black-35-6px">{{ checkOurRecentProject }}</div>
          <p class="we-are-committed-to-2" v-html="weAreCommittedTo3"></p>
          <img class="rectangle-74" :src="rectangle74" /><img class="fox-capital-2" :src="foxCapital2" />
          <div class="group-230">
            <div class="our-subsidiaries montserrat-light-eerie-black-35-6px">{{ ourSubsidiaries }}</div>
            <div class="frame-11-1">
              <div class="frame-7">
                <div class="frame-4">
                  <div class="frame-12">
                    <img class="countryhill-logo-2" :src="countryhillLogo21" />
                    <p class="countryhill-affordab montserrat-normal-black-11-4px">{{ countryhillAffordab }}</p>
                  </div>
                </div>
              </div>
              <div class="frame-10">
                <div class="frame-4">
                  <div class="frame-12-1">
                    <img class="countryhill-logo-2-1" :src="countryhillLogo22" />
                    <p class="this-is-the-construc montserrat-normal-black-11-4px">{{ thisIsTheConstruc1 }}</p>
                  </div>
                </div>
              </div>
              <div class="frame-11-2">
                <div class="frame-4">
                  <div class="frame-12-2">
                    <img class="countryhill-logo-2-2" :src="countryhillLogo23" />
                    <p class="this-is-the-construc-1 montserrat-normal-black-11-4px">{{ thisIsTheConstruc2 }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-5">
          <div class="frame-35632-5 montserrat-normal-black-7-6px">
            <div class="privacy-policy-5">{{ privacyPolicy }}</div>
            <div class="terms-of-use-5">{{ termsOfUse }}</div>
          </div>
          <p class="x2021-fox-capital-investment-limited-5 montserrat-normal-black-10-2px">
            <span class="montserrat-normal-black-10-2px">{{ spanText3 }}</span
            ><span class="montserrat-normal-black-7-6px">{{ spanText4 }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame35634 from "./Frame35634";
export default {
  name: "HomePage",
  components: {
    Frame35634,
  },
  props: [
    "foxCapitalLogo2",
    "weHelpYouBuilding",
    "investToday",
    "overlapGroup13",
    "rectangle115",
    "place1",
    "aboutUs1",
    "services",
    "investment",
    "overlapGroup10",
    "growYourInvestmentFunds",
    "assetAcquisitionJu",
    "comingSoon",
    "badges",
    "iphone12Pro1",
    "iphone12Pro2",
    "enterYourEMailAddress",
    "joinOurWaitlist",
    "investments",
    "withRealEstateInv",
    "howItWorks",
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
    "weAreCommittedTo1",
    "groupContainer1",
    "group67",
    "image6",
    "rectangle99",
    "aboutUs2",
    "spanText1",
    "spanText2",
    "surname",
    "ourLatestNews",
    "whatWeDo",
    "overlapGroup8",
    "rectangle59",
    "group42",
    "groupContainer2",
    "rectangle61",
    "group257",
    "rectangle62",
    "rectangle63",
    "group52",
    "investmentManagement",
    "wealthCreation",
    "salesMarketing",
    "wePresentToYouS",
    "youDonTJustAcqui",
    "loremIpsumDolorSi",
    "vector32",
    "rectangle77",
    "rectangle78",
    "getInTouchWithUs",
    "weAreCommittedTo2",
    "yourmailaddresspleaseMailCom",
    "yourName",
    "rectangle51",
    "checkOurRecentProject",
    "weAreCommittedTo3",
    "rectangle74",
    "foxCapital2",
    "ourSubsidiaries",
    "countryhillLogo21",
    "countryhillAffordab",
    "countryhillLogo22",
    "thisIsTheConstruc1",
    "countryhillLogo23",
    "thisIsTheConstruc2",
    "privacyPolicy",
    "termsOfUse",
    "spanText3",
    "spanText4",
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
.home-page {
  align-items: flex-end;
  background-color: var(--concrete);
  display: flex;
  flex-direction: column;
  height: 6373px;
  overflow: hidden;
  width: 1200px;
}

.flex-row-2 {
  align-items: flex-end;
  display: flex;
  margin-right: -8.2px;
  min-width: 1155px;
}

.flex-col {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-bottom: 3.21px;
  min-height: 470px;
  width: 359px;
}

.fox-capital-logo-2-1 {
  height: 58px;
  margin-left: 2.88px;
  object-fit: cover;
  width: 132px;
}

.we-help-you-building {
  color: var(--cape-cod);
  font-family: var(--font-family-lora);
  font-size: 34.3px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 48.6px;
  margin-top: 85px;
  min-height: 193px;
  width: 359px;
}

.group-81 {
  cursor: pointer;
  display: flex;
  height: 62px;
  margin-left: 4.44px;
  margin-top: 72px;
  width: 248px;
}

.frame-11 {
  align-items: center;
  background-color: var(--desert-storm);
  border-radius: 12.7px;
  box-shadow: 6.35px 6.35px 12.7px #00000014, -6.35px -6.35px 12.7px #ffffff;
  display: flex;
  height: 61.58px;
  min-width: 247.58px;
  padding: 0 61.9px;
}

.invest-today {
  color: var(--orange-peel);
  font-family: var(--font-family-montserrat);
  font-size: 17.8px;
  font-weight: 700;
  letter-spacing: 0.09px;
  line-height: 23.7px;
  min-height: 23px;
  white-space: nowrap;
  width: 124px;
}

.overlap-group13 {
  align-items: flex-end;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  margin-left: 26px;
  min-width: 770px;
}

.rectangle-115 {
  height: 553px;
  margin-bottom: -0.03px;
  width: 762px;
}

.flex-col-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-right: -720px;
  margin-top: 41px;
  min-height: 5772px;
  width: 1950px;
}

.flex-row-3 {
  align-items: center;
  align-self: center;
  display: flex;
  margin-right: 260.1px;
  min-width: 621px;
}

.frame-35633 {
  background-color: var(--desert-storm);
  border-radius: 9.52px;
  box-shadow: 6.35px 6.35px 12.7px #00000017, -6.35px -6.35px 12.7px #ffffff;
  display: flex;
  height: 54px;
  width: 122px;
}

.place-2 {
  height: 18.41px;
  letter-spacing: 0.07px;
  line-height: 18.6px;
  margin-left: 38.7px;
  margin-top: 17.8px;
  white-space: nowrap;
  width: 44.44px;
}

.about-us-1 {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 18.6px;
  margin-left: 96px;
  margin-top: 0;
  min-height: 18px;
  transition: all 0.2s ease;
  white-space: nowrap;
  width: 69px;
}

.about-us-1:hover,
.services-1:hover,
.investment-1:hover {
  color: #5dca22;
}

.services-1 {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 18.6px;
  margin-left: 95px;
  margin-top: 0;
  min-height: 18px;
  opacity: 0.9;
  transition: all 0.2s ease;
  white-space: nowrap;
  width: 62px;
}

.investment-1 {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 18.6px;
  margin-left: 93px;
  margin-top: 0;
  min-height: 18px;
  opacity: 0.9;
  transition: all 0.2s ease;
  white-space: nowrap;
  width: 85px;
}

.overlap-group10-1 {
  background-size: 100% 100%;
  height: 687px;
  margin-left: 18.98px;
  margin-top: 58px;
  position: relative;
  width: 1219px;
}

.overlap-group2-7 {
  height: 686px;
  left: 0;
  position: absolute;
  top: 1px;
  width: 1211px;
}

.frame-35646 {
  background-color: #000000cc;
  display: flex;
  height: 686px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1211px;
}

.get-the-app {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 591.2px;
  margin-top: 218.4px;
  min-height: 254.56px;
  width: 414.83px;
}

.overlap-group-8 {
  height: 124px;
  position: relative;
  width: 409px;
}

.grow-your-investment-funds {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 26.7px;
  font-weight: 700;
  left: 0;
  letter-spacing: 0;
  line-height: 51.3px;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 406px;
}

.asset-acquisition-ju {
  left: 0;
  letter-spacing: 0;
  line-height: 25.6px;
  position: absolute;
  top: 48px;
  width: 409px;
}

.coming-soon {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 14.4px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 22.4px;
  margin-top: 56px;
  min-height: 23px;
  white-space: nowrap;
}

.badges {
  height: 32px;
  margin-left: -0.29px;
  margin-top: 19px;
  width: 108px;
}

.i-phone-12-pro {
  height: 420px;
  left: 131px;
  position: absolute;
  top: 102px;
  width: 208px;
}

.i-phone-12-pro-1 {
  height: 398px;
  left: 306px;
  position: absolute;
  top: 173px;
  width: 197px;
}

.frame-22 {
  align-items: flex-end;
  background-color: var(--heavy-metal);
  border-radius: 8.89px;
  box-shadow: 6.35px 6.35px 19.04px #00000073, -6.35px -6.35px 19.04px #2a2a2a;
  display: flex;
  height: 63px;
  left: 599px;
  min-width: 556px;
  padding: 20.3px 56.5px;
  position: absolute;
  top: 525px;
}

.enter-your-e-mail-address {
  letter-spacing: 0.08px;
  line-height: 22px;
  min-height: 22px;
  white-space: nowrap;
  width: 225px;
}

.frame-23 {
  background-color: var(--desert-storm);
  border-radius: 9.52px;
  box-shadow: 6.35px 6.35px 12.7px #00000017;
  display: flex;
  height: 54px;
  left: 956px;
  position: absolute;
  top: 530px;
  width: 199px;
}

.join-our-wait-list {
  height: 18.41px;
  letter-spacing: 0.07px;
  line-height: 18.6px;
  margin-left: 33.3px;
  margin-top: 17.8px;
  white-space: nowrap;
  width: 132.04px;
}

.investments {
  letter-spacing: 0;
  line-height: 50.4px;
  margin-left: 81.26px;
  margin-top: 111px;
  min-height: 51px;
  white-space: nowrap;
}

.with-real-estate-inv {
  letter-spacing: 0.46px;
  line-height: 22.9px;
  margin-left: 82.53px;
  margin-top: 20px;
  min-height: 74px;
  width: 560px;
}

.overlap-group9-1 {
  height: 492px;
  margin-top: 6px;
  position: relative;
  width: 1286px;
}

.how-it-works {
  left: 81px;
  letter-spacing: 0;
  line-height: 50.4px;
  position: absolute;
  top: 440px;
  white-space: nowrap;
  width: 481px;
}

.rectangle-121 {
  height: 460px;
  left: 354px;
  position: absolute;
  top: 0;
  width: 578px;
}

.rectangle-122 {
  background-color: var(--concrete);
  border-radius: 27.3px;
  box-shadow: 12.7px 12.7px 31.74px #d2d2d2, -12.7px -12.7px 31.74px #ffffff;
  height: 276px;
  left: 922px;
  position: absolute;
  top: 92px;
  width: 364px;
}

.rectangle-118 {
  background-color: var(--concrete);
  border-radius: 27.3px;
  box-shadow: 12.7px 12.7px 31.74px #d2d2d2, -12.7px -12.7px 31.74px #ffffff;
  height: 276px;
  left: 0;
  position: absolute;
  top: 92px;
  width: 364px;
}

.rectangle-123 {
  height: 352px;
  left: 408px;
  position: absolute;
  top: 55px;
  width: 470px;
}

.rectangle-116 {
  height: 262px;
  left: 928px;
  position: absolute;
  top: 99px;
  width: 352px;
}

.rectangle-124 {
  height: 352px;
  left: 407px;
  position: absolute;
  top: 55px;
  width: 471px;
}

.rectangle-117 {
  height: 263px;
  left: 928px;
  position: absolute;
  top: 99px;
  width: 352px;
}

.mowe-ibafo {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 30.5px;
  font-weight: 700;
  left: 432px;
  letter-spacing: 0.15px;
  line-height: 40.6px;
  position: absolute;
  top: 316px;
  white-space: nowrap;
  width: 196px;
}

.ibadan-oyo-state {
  left: 955px;
  letter-spacing: 0.13px;
  line-height: 33.9px;
  position: absolute;
  top: 293px;
  white-space: nowrap;
  width: 238px;
}

.sea-facing-spacious {
  left: 432px;
  letter-spacing: 0.46px;
  line-height: 22.9px;
  position: absolute;
  top: 358px;
  white-space: nowrap;
  width: 162px;
}

.overlap-group1-5 {
  height: 262px;
  left: 6px;
  position: absolute;
  top: 99px;
  width: 354px;
}

.rectangle-119 {
  width: 100%;
}

.rectangle-120 {
  background-color: var(--black-2);
  border-radius: 20.31px;
  height: 262px;
  left: 0;
  position: absolute;
  top: 0;
  width: 353px;
}

.place-3 {
  left: 46px;
  letter-spacing: 0.13px;
  line-height: 33.9px;
  position: absolute;
  top: 194px;
  white-space: nowrap;
  width: 99px;
}

.sea-facing-spacious-1 {
  left: 46px;
  letter-spacing: 0.42px;
  line-height: 21px;
  position: absolute;
  top: 226px;
  white-space: nowrap;
  width: 149px;
}

.sea-facing-spacious-2 {
  left: 955px;
  letter-spacing: 0.42px;
  line-height: 21px;
  position: absolute;
  top: 326px;
  white-space: nowrap;
  width: 149px;
}

.we-are-committed-to {
  letter-spacing: 0.46px;
  line-height: 22.9px;
  margin-left: 81.89px;
  margin-top: 25px;
  min-height: 42px;
  width: 560px;
}

.group-261 {
  height: 308px;
  margin-left: 111px;
  margin-top: 58px;
  position: relative;
  width: 1055px;
}

.overlap-group3 {
  height: 309px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1040px;
}

.rectangle-111 {
  height: 87px;
  left: 0;
  position: absolute;
  top: 85px;
  width: 87px;
}

.rectangle-112 {
  height: 88px;
  left: 562px;
  position: absolute;
  top: 221px;
  width: 87px;
}

.rectangle-113 {
  height: 87px;
  left: 314px;
  position: absolute;
  top: 0;
  width: 87px;
}

.rectangle-114 {
  height: 87px;
  left: 813px;
  position: absolute;
  top: 0;
  width: 88px;
}

.take-a-look-at-our-various-projects {
  height: 64px;
  left: 104px;
  position: absolute;
  top: 164px;
  width: 116px;
}

.book-a-site-inspection {
  height: 40px;
  left: 622px;
  position: absolute;
  top: 179px;
  width: 91px;
}

.select-a-property {
  height: 18px;
  left: 326px;
  position: absolute;
  top: 143px;
  width: 165px;
}

.invest {
  height: 14px;
  left: 887px;
  position: absolute;
  top: 151px;
  width: 57px;
}

.group {
  height: 31px;
  left: 24px;
  position: absolute;
  top: 118px;
  width: 34px;
}

.group-1 {
  height: 31px;
  left: 336px;
  position: absolute;
  top: 28px;
  width: 42px;
}

.group-2 {
  height: 31px;
  left: 584px;
  position: absolute;
  top: 253px;
  width: 42px;
}

.group-3 {
  height: 31px;
  left: 835px;
  position: absolute;
  top: 28px;
  width: 43px;
}

.group-4 {
  height: 86px;
  left: 51px;
  position: absolute;
  top: 35px;
  width: 230px;
}

.vector {
  height: 129px;
  left: 35px;
  position: absolute;
  top: 164px;
  width: 254px;
}

.vector-1 {
  height: 86px;
  left: 284px;
  position: absolute;
  top: 82px;
  width: 34px;
}

.vector-2 {
  height: 130px;
  left: 395px;
  position: absolute;
  top: 38px;
  width: 144px;
}

.vector-3 {
  height: 21px;
  left: 310px;
  position: absolute;
  top: 70px;
  width: 21px;
}

.vector-4 {
  height: 85px;
  left: 535px;
  position: absolute;
  top: 164px;
  width: 33px;
}

.vector-5 {
  height: 129px;
  left: 642px;
  position: absolute;
  top: 164px;
  width: 147px;
}

.vector-6 {
  height: 21px;
  left: 561px;
  position: absolute;
  top: 241px;
  width: 21px;
}

.vector-7 {
  height: 86px;
  left: 785px;
  position: absolute;
  top: 82px;
  width: 34px;
}

.vector-8 {
  height: 130px;
  left: 896px;
  position: absolute;
  top: 38px;
  width: 144px;
}

.vector-9 {
  height: 21px;
  left: 811px;
  position: absolute;
  top: 70px;
  width: 21px;
}

.vector-10 {
  height: 13px;
  left: 30px;
  position: absolute;
  top: 166px;
  width: 13px;
}

.vector-11 {
  height: 13px;
  left: 386px;
  position: absolute;
  top: 35px;
  width: 13px;
}

.vector-12 {
  height: 12px;
  left: 633px;
  position: absolute;
  top: 283px;
  width: 13px;
}

.vector-13 {
  height: 13px;
  left: 886px;
  position: absolute;
  top: 35px;
  width: 13px;
}

.group-5 {
  height: 26px;
  left: 148px;
  position: absolute;
  top: 107px;
  width: 27px;
}

.group-76 {
  height: 28px;
  left: 392px;
  position: absolute;
  top: 106px;
  width: 35px;
}

.group-78 {
  height: 32px;
  left: 897px;
  position: absolute;
  top: 105px;
  width: 38px;
}

.overlap-group5-1 {
  height: 92px;
  left: 292px;
  position: absolute;
  top: 202px;
  width: 239px;
}

.select-a-property-of {
  height: 61px;
  left: 48px;
  position: absolute;
  top: 0;
  width: 144px;
}

.group-6 {
  height: 85px;
  left: 0;
  position: absolute;
  top: 7px;
  width: 239px;
}

.overlap-group4-2 {
  height: 110px;
  left: 793px;
  position: absolute;
  top: 184px;
  width: 239px;
}

.invest-your-money {
  height: 39px;
  left: 73px;
  position: absolute;
  top: 0;
  width: 92px;
}

.group-7 {
  height: 85px;
  left: 0;
  position: absolute;
  top: 25px;
  width: 239px;
}

.explore {
  height: 18px;
  left: 126px;
  position: absolute;
  top: 144px;
  width: 71px;
}

.book-visitation {
  height: 15px;
  left: 584px;
  position: absolute;
  top: 147px;
  width: 145px;
}

.group-container {
  height: 102px;
  left: 543px;
  position: absolute;
  top: 35px;
  width: 238px;
}

.group-8 {
  height: 85px;
  left: 0;
  position: absolute;
  top: 0;
  width: 238px;
}

.group-77 {
  height: 32px;
  left: 103px;
  position: absolute;
  top: 70px;
  width: 32px;
}

.group-container-1 {
  background-size: 100% 100%;
  height: 687px;
  margin-left: 18.16px;
  margin-top: 177px;
  position: relative;
  width: 1220px;
}

.group-67 {
  height: 15px;
  left: 659px;
  position: absolute;
  top: 576px;
  width: 132px;
}

.overlap-group15 {
  height: 685px;
  left: 14px;
  position: absolute;
  top: 1px;
  width: 1073px;
}

.image-6 {
  height: 361px;
  left: 645px;
  position: absolute;
  top: 177px;
  width: 428px;
}

.rectangle-99 {
  height: 685px;
  left: 0;
  position: absolute;
  top: 0;
  width: 598px;
}

.group-82 {
  align-items: flex-start;
  display: flex;
  height: 455px;
  left: 94px;
  min-width: 857px;
  position: absolute;
  top: 60px;
}

.flex-col-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 455px;
  width: 388px;
}

.about-us-2 {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 35.6px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 50.4px;
  margin-left: 0;
  min-height: 50px;
  white-space: nowrap;
}

.surname-1 {
  letter-spacing: 0;
  line-height: 40.9px;
  margin-top: 67px;
  min-height: 31px;
  white-space: nowrap;
}

.surname-2 {
  color: var(--concrete);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-xxxxs);
  font-weight: 400;
  letter-spacing: 0.42px;
  line-height: 21px;
  margin-top: 30px;
  min-height: 277px;
  width: 388px;
}

.our-latest-news {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 35.6px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 50.4px;
  margin-left: 163px;
  margin-top: 38.09px;
  min-height: 50px;
  white-space: nowrap;
}

.what-we-do {
  letter-spacing: 0;
  line-height: 50.4px;
  margin-left: 75.54px;
  margin-top: 145px;
  min-height: 51px;
  white-space: nowrap;
}

.overlap-group-container {
  align-items: flex-start;
  display: flex;
  margin-left: 137.48px;
  margin-top: 90px;
  min-width: 976px;
}

.overlap-group8-1 {
  background-size: 100% 100%;
  height: 208px;
  position: relative;
  width: 208px;
}

.rectangle-59 {
  cursor: pointer;
  height: 200px;
  left: 16px;
  position: absolute;
  top: 16px;
  transition: all 0.2s ease;
  width: 200px;
}

.rectangle-59:hover,
.rectangle-61:hover,
.rectangle-63:hover {
  transform: scale(1.1);
}

.group-4-1 {
  height: 43px;
  left: 89px;
  position: absolute;
  top: 83px;
  width: 28px;
}

.group-container-2 {
  background-size: 100% 100%;
  height: 208px;
  margin-left: 174px;
  position: relative;
  width: 208px;
}

.group-258 {
  display: flex;
  height: 136px;
  left: 36px;
  position: absolute;
  top: 36px;
  width: 136px;
}

.rectangle-61 {
  cursor: pointer;
  height: 200px;
  margin-left: -19.4px;
  margin-top: -19.4px;
  transition: all 0.2s ease;
  width: 200px;
}

.group-257 {
  height: 44px;
  left: 92px;
  position: absolute;
  top: 74px;
  width: 29px;
}

.overlap-group11 {
  height: 215px;
  margin-left: 171px;
  position: relative;
  width: 216px;
}

.rectangle-62 {
  height: 208px;
  left: 0;
  position: absolute;
  top: 0;
  width: 208px;
}

.rectangle-63 {
  cursor: pointer;
  height: 200px;
  left: 16px;
  position: absolute;
  top: 15px;
  transition: all 0.2s ease;
  width: 200px;
}

.group-5-1 {
  height: 40px;
  left: 87px;
  position: absolute;
  top: 79px;
  width: 34px;
}

.flex-row-4 {
  align-items: flex-start;
  display: flex;
  height: 29px;
  margin-left: 87px;
  margin-top: 33px;
  min-width: 1024px;
}

.investment-management {
  letter-spacing: 0.11px;
  line-height: 29.3px;
  min-height: 29px;
  min-width: 296px;
  white-space: nowrap;
}

.wealth-creation {
  letter-spacing: 0.11px;
  line-height: 29.3px;
  margin-left: 150px;
  min-height: 29px;
  min-width: 190px;
  white-space: nowrap;
}

.sales-marketing {
  letter-spacing: 0.11px;
  line-height: 29.3px;
  margin-left: 179px;
  min-height: 29px;
  white-space: nowrap;
}

.flex-row-5 {
  align-items: flex-start;
  display: flex;
  height: 77px;
  margin-left: 75.54px;
  margin-top: 13px;
  min-width: 1101px;
}

.we-present-to-you-s {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.48px;
  line-height: 24.1px;
  min-height: 77px;
  text-align: center;
  width: 331px;
}

.you-dont-just-acqui {
  letter-spacing: 0.48px;
  line-height: 24.1px;
  margin-left: 43px;
  min-height: 77px;
  text-align: center;
  width: 359px;
}

.lorem-ipsum-dolor-si {
  letter-spacing: 0.48px;
  line-height: 24.1px;
  margin-left: 28px;
  min-height: 77px;
  text-align: center;
  width: 341px;
}

.overlap-group7-1 {
  align-self: flex-end;
  height: 2025px;
  margin-top: 172px;
  position: relative;
  width: 1931px;
}

.vector-3-1 {
  height: 1065px;
  left: 8px;
  position: absolute;
  top: 494px;
  width: 1923px;
}

.rectangle-73 {
  background-color: var(--heavy-metal);
  height: 686px;
  left: 0;
  position: absolute;
  top: 1339px;
  width: 1219px;
}

.frame-35635 {
  background-color: var(--heavy-metal);
  border-radius: 10.96px;
  box-shadow: 7.83px 7.83px 23.48px #00000073, -7.83px -7.83px 23.48px #2a2a2a;
  display: flex;
  height: 73px;
  left: 752px;
  position: absolute;
  top: 1885px;
  width: 403px;
}

.rectangle-77 {
  height: 58px;
  left: 752px;
  position: absolute;
  top: 1699px;
  width: 403px;
}

.rectangle-78 {
  height: 58px;
  left: 752px;
  position: absolute;
  top: 1779px;
  width: 403px;
}

.get-in-touch-with-us {
  left: 489px;
  letter-spacing: 0.08px;
  line-height: 22px;
  position: absolute;
  top: 1891px;
  white-space: nowrap;
  width: 119px;
}

.we-are-committed-to-1 {
  color: var(--bon-jour);
  font-family: var(--font-family-montserrat);
  font-size: 15.2px;
  font-weight: 300;
  left: 752px;
  letter-spacing: 0.46px;
  line-height: 22.9px;
  position: absolute;
  top: 1572px;
  width: 396px;
}

.yourmailaddresspleasemailcom {
  left: 777px;
  letter-spacing: 0.5px;
  line-height: 22px;
  position: absolute;
  top: 1797px;
  white-space: nowrap;
  width: 295px;
}

.your-name-6 {
  left: 777px;
  letter-spacing: 0.5px;
  line-height: 22px;
  position: absolute;
  top: 1717px;
  white-space: nowrap;
  width: 96px;
}

.rectangle-52 {
  background-color: var(--white);
  height: 752px;
  left: 7px;
  position: absolute;
  top: 0;
  width: 1219px;
}

.rectangle-51 {
  height: 595px;
  left: 235px;
  position: absolute;
  top: 131px;
  width: 1056px;
}

.check-our-recent-project {
  left: 70px;
  letter-spacing: 0;
  line-height: 50.4px;
  position: absolute;
  top: 58px;
  white-space: nowrap;
  width: 456px;
}

.we-are-committed-to-2 {
  color: var(--black);
  font-family: var(--font-family-montserrat);
  font-size: 15.2px;
  font-weight: 400;
  left: 74px;
  letter-spacing: 0.46px;
  line-height: 22.9px;
  position: absolute;
  top: 131px;
  width: 439px;
}

.rectangle-74 {
  height: 686px;
  left: 0;
  position: absolute;
  top: 1339px;
  width: 682px;
}

.fox-capital-2 {
  height: 60px;
  left: 726px;
  position: absolute;
  top: 1473px;
  width: 152px;
}

.group-230 {
  display: flex;
  flex-direction: column;
  height: 449px;
  left: 57px;
  position: absolute;
  top: 835px;
  width: 1016px;
}

.our-subsidiaries {
  height: 50.15px;
  letter-spacing: 0;
  line-height: 50.4px;
  white-space: nowrap;
  width: 287.58px;
}

.frame-11-1 {
  display: flex;
  height: 371.37px;
  margin-top: 27.9px;
  width: 1013.81px;
}

.frame-7 {
  background-color: var(--concrete);
  border-radius: 27.3px;
  box-shadow: 12.7px 12.7px 31.74px #d2d2d2, -12.7px -12.7px 31.74px #ffffff;
  display: flex;
  height: 309.16px;
  margin-left: 4.4px;
  margin-top: 31.1px;
  width: 315.51px;
}

.frame-4 {
  display: flex;
  margin-left: 17.1px;
  margin-top: 48.2px;
  width: 299px;
}

.frame-12 {
  display: flex;
  flex-direction: column;
  height: 212.67px;
  margin-left: 0.6px;
  width: 297.73px;
}

.countryhill-logo-2 {
  height: 104.5px;
  margin-left: 30.9px;
  margin-top: 6.2px;
  object-fit: cover;
  width: 236px;
}

.countryhill-affordab {
  height: 79.99px;
  letter-spacing: 0.11px;
  line-height: 15.2px;
  margin-left: 3.2px;
  margin-top: 15.7px;
  width: 291.38px;
}

.frame-10 {
  background-color: var(--concrete);
  border-radius: 27.3px;
  box-shadow: 12.7px 12.7px 31.74px #d2d2d2, -12.7px -12.7px 31.74px #ffffff;
  display: flex;
  height: 358.68px;
  margin-left: 28.6px;
  margin-top: 6.3px;
  width: 316.14px;
}

.frame-12-1 {
  display: flex;
  flex-direction: column;
  height: 262.18px;
  margin-left: 0.6px;
  width: 297.73px;
}

.countryhill-logo-2-1 {
  height: 154px;
  margin-left: 21.6px;
  margin-top: 6.2px;
  object-fit: cover;
  width: 254.5px;
}

.this-is-the-construc {
  height: 79.99px;
  letter-spacing: 0.11px;
  line-height: 15.2px;
  margin-left: 12.4px;
  margin-top: 15.7px;
  width: 272.97px;
}

.frame-11-2 {
  background-color: var(--concrete);
  border-radius: 27.3px;
  box-shadow: 12.7px 12.7px 31.74px #d2d2d2, -12.7px -12.7px 31.74px #ffffff;
  display: flex;
  height: 297.1px;
  margin-left: 28.6px;
  margin-top: 37.1px;
  width: 316.14px;
}

.frame-12-2 {
  display: flex;
  flex-direction: column;
  height: 165.05px;
  margin-left: 0.6px;
  width: 297.73px;
}

.countryhill-logo-2-2 {
  height: 57px;
  margin-left: 13.9px;
  margin-top: 6.1px;
  object-fit: cover;
  width: 270px;
}

.this-is-the-construc-1 {
  height: 79.99px;
  letter-spacing: 0.11px;
  line-height: 15.2px;
  margin-left: 3.2px;
  margin-top: 15.6px;
  width: 291.38px;
}

.footer-5 {
  background-color: var(--concrete);
  display: flex;
  height: 33px;
  margin-left: 19.04px;
  margin-top: 39px;
  width: 1219px;
}

.frame-35632-5 {
  display: flex;
  margin-left: 57.8px;
  margin-top: 11.7px;
  width: 384.07px;
}

.privacy-policy-5 {
  height: 9.52px;
  letter-spacing: 0;
  width: 52.06px;
}

.terms-of-use-5 {
  height: 9.52px;
  letter-spacing: 0;
  margin-left: 15.2px;
  width: 49.52px;
}

.x2021-fox-capital-investment-limited-5 {
  height: 12.7px;
  letter-spacing: 0;
  margin-left: 571.3px;
  margin-top: 10.2px;
  width: 147.91px;
}
</style>
