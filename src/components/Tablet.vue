<template>
  <div class="container-center-horizontal">
    <div class="tablet screen">
      <div class="flex-row-23">
        <img class="fox-capital-logo-2-12" :src="foxCapitalLogo2" />
        <div class="frame-35633-2">
          <div class="place-17">{{ place1 }}</div>
        </div>
      </div>
      <div class="flex-row-24">
        <div class="we-help-you-building-2" v-html="weHelpYouBuilding"></div>
        <div class="flex-col-29">
          <router-link to="/tablet22">
            <div class="about-us-15 montserrat-bold-fuscous-gray-17-2px">{{ aboutUs }}</div> </router-link
          ><router-link to="/tablet2-2">
            <div class="services-14 montserrat-bold-fuscous-gray-17-2px">{{ services }}</div> </router-link
          ><router-link to="/tablet2">
            <div class="investment-12 montserrat-bold-fuscous-gray-17-2px">{{ investment }}</div>
          </router-link>
        </div>
      </div>
      <div class="flex-col-30">
        <router-link to="/tablet2">
          <div class="group-81-2">
            <div class="frame-11-4">
              <div class="invest-today-2">{{ investToday }}</div>
            </div>
          </div></router-link
        >
        <div class="overlap-group7-6">
          <img class="rectangle-44-1" :src="rectangle44" /><img class="rectangle-98-1" :src="rectangle98" />
          <div class="get-the-app-2">
            <div class="coming-soon-3">{{ comingSoon }}</div>
            <img class="badges-2" :src="badges" />
          </div>
          <div class="frame-22-2">
            <div class="enter-your-e-mail-address-2">{{ enterYourEMailAddress }}</div>
          </div>
          <div class="frame-23-2">
            <div class="join-our-wait-list-2">{{ joinOurWaitlist }}</div>
          </div>
          <img class="i-phone-12-pro-5" :src="iphone12Pro1" /><img class="i-phone-12-pro-6" :src="iphone12Pro2" />
        </div>
        <div class="investments-2">{{ investments }}</div>
        <div class="with-real-estate-inv-4">{{ withRealEstateInv }}</div>
        <div class="overlap-group5-10">
          <img class="rectangle-121-2" :src="rectangle121" />
          <div class="rectangle-122-2"></div>
          <div class="rectangle-118-2"></div>
          <img class="rectangle-123-2" :src="rectangle123" /><img class="rectangle-11" :src="rectangle116" /><a
            href="#rectangle-117"
            ><img class="rectangle-124-2" :src="rectangle124" /></a
          ><img class="rectangle-11" id="rectangle-117" :src="rectangle117" />
          <div class="mowe-ibafo-2">{{ moweIbafo }}</div>
          <div class="ibadan-oyo-state-2">{{ ibadanOyoState }}</div>
          <div class="sea-facing-spacious-9">{{ seaFacingSpacious1 }}</div>
          <div class="overlap-group2-21">
            <img class="rectangle-119" :src="rectangle119" />
            <div class="rectangle-120-2"></div>
            <div class="place-18">{{ place2 }}</div>
            <div class="sea-facing-spacious-10">{{ seaFacingSpacious2 }}</div>
          </div>
          <div class="sea-facing-spacious-11">{{ seaFacingSpacious3 }}</div>
        </div>
        <div class="overlap-group6-8" :style="{ 'background-image': 'url(' + overlapGroup6 + ')' }">
          <div class="group-82-2">
            <div class="our-latest-news-2 montserrat-medium-eerie-black-43-8px">{{ ourLatestNews }}</div>
          </div>
          <img class="image-6-2" :src="image6" /><img class="group-67-7" :src="group67" />
        </div>
        <div class="what-we-do-2 montserrat-medium-eerie-black-43-8px">{{ whatWeDo }}</div>
        <div class="group-246" :style="{ 'background-image': 'url(' + group246 + ')' }">
          <div class="group-245">
            <div class="overlap-group-32">
              <img class="rectangle-2" :src="rectangle59" /><img class="group-4-5" :src="group4" />
            </div>
          </div>
        </div>
        <div class="investment-management-2 montserrat-bold-eerie-black-20-3px">{{ investmentManagement }}</div>
        <div class="we-present-to-you-s-2 montserrat-normal-eerie-black-24px">{{ wePresentToYouS }}</div>
        <div class="overlap-group4-11">
          <img class="vector-3-5" :src="vector3" />
          <div class="lorem-ipsum-dolor-si-4">{{ loremIpsumDolorSi }}</div>
          <div class="you-dont-just-acqui-2 montserrat-normal-black-24px">{{ youDonTJustAcqui }}</div>
          <div class="wealth-creation-2 montserrat-bold-eerie-black-20-3px">{{ wealthCreation }}</div>
          <div class="sales-marketing-2 montserrat-bold-eerie-black-20-3px">{{ salesMarketing }}</div>
          <div class="group-248" :style="{ 'background-image': 'url(' + group248 + ')' }">
            <div class="group-247">
              <div class="overlap-group-33">
                <img class="rectangle-2" :src="rectangle61" /><img class="group-5-3" :src="group5" />
              </div>
            </div>
          </div>
          <div class="overlap-group1-24">
            <img class="rectangle-62-1" :src="rectangle62" />
            <div class="overlap-group-34">
              <img class="rectangle-2" :src="rectangle63" /><img class="group-6-3" :src="group6" />
            </div>
          </div>
        </div>
        <div class="overlap-group3-9">
          <img class="fox-capital-2-2" :src="foxCapital2" />
          <div class="we-are-committed-to-4">{{ weAreCommittedTo }}</div>
          <div class="overlap-group9-4" :style="{ 'background-image': 'url(' + overlapGroup9 + ')' }">
            <div class="your-name-22 montserrat-light-white-20-3px">{{ yourName }}</div>
          </div>
          <div class="overlap-group8-4" :style="{ 'background-image': 'url(' + overlapGroup8 + ')' }">
            <div class="yourmailaddresspleasemailcom-2 montserrat-light-white-20-3px">
              {{ yourmailaddresspleaseMailCom }}
            </div>
          </div>
          <div class="frame-35635-2"><frame35634 /></div>
        </div>
        <div class="footer-19">
          <div class="frame-35632-17 montserrat-normal-black-9-4px">
            <div class="privacy-policy-17">{{ privacyPolicy }}</div>
            <div class="terms-of-use-17">{{ termsOfUse }}</div>
          </div>
          <p class="x2021-fox-capital-investment-limited-17 montserrat-normal-black-12-5px">
            <span class="montserrat-normal-black-12-5px">{{ spanText1 }}</span
            ><span class="montserrat-normal-black-9-4px">{{ spanText2 }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame35634 from "./Frame35634";
export default {
  name: "Tablet",
  components: {
    Frame35634,
  },
  props: [
    "foxCapitalLogo2",
    "place1",
    "weHelpYouBuilding",
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
    "overlapGroup6",
    "ourLatestNews",
    "image6",
    "group67",
    "whatWeDo",
    "group246",
    "rectangle59",
    "group4",
    "investmentManagement",
    "wePresentToYouS",
    "vector3",
    "loremIpsumDolorSi",
    "youDonTJustAcqui",
    "wealthCreation",
    "salesMarketing",
    "group248",
    "rectangle61",
    "group5",
    "rectangle62",
    "rectangle63",
    "group6",
    "foxCapital2",
    "weAreCommittedTo",
    "overlapGroup9",
    "yourName",
    "overlapGroup8",
    "yourmailaddresspleaseMailCom",
    "privacyPolicy",
    "termsOfUse",
    "spanText1",
    "spanText2",
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
.tablet {
  align-items: center;
  background-color: var(--concrete);
  display: flex;
  flex-direction: column;
  height: 6957px;
  overflow: hidden;
  padding: 87.8px 0;
  width: 750px;
}

.flex-row-23 {
  align-items: flex-start;
  display: flex;
  margin-left: 36.17px;
  min-width: 589px;
}

.fox-capital-logo-2-12 {
  height: 71px;
  object-fit: cover;
  width: 162px;
}

.frame-35633-2 {
  background-color: var(--desert-storm);
  border-radius: 11.74px;
  box-shadow: 7.83px 7.83px 15.65px #00000017, -7.83px -7.83px 15.65px #ffffff;
  display: flex;
  height: 67px;
  margin-left: 277px;
  margin-top: 0.2px;
  width: 150px;
}

.place-17 {
  color: var(--orange-peel);
  font-family: var(--font-family-montserrat);
  font-size: 17.2px;
  font-weight: 700;
  height: 22.69px;
  letter-spacing: 0.09px;
  line-height: 23px;
  margin-left: 47.7px;
  margin-top: 21.9px;
  white-space: nowrap;
  width: 54.78px;
}

.flex-row-24 {
  align-items: flex-start;
  display: flex;
  height: 318px;
  margin-left: 23.91px;
  margin-top: 25px;
  min-width: 585px;
}

.we-help-you-building-2 {
  align-self: flex-end;
  color: var(--cape-cod);
  font-family: var(--font-family-lora);
  font-size: 37.6px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 53.3px;
  min-height: 238px;
  width: 443px;
}

.flex-col-29 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 33px;
  min-height: 134px;
  width: 109px;
}

.about-us-15 {
  cursor: pointer;
  letter-spacing: 0.09px;
  line-height: 23px;
  min-height: 23px;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.about-us-15:hover,
.services-14:hover,
.investment-12:hover {
  color: #5dca22;
}

.services-14 {
  cursor: pointer;
  letter-spacing: 0.09px;
  line-height: 23px;
  margin-left: 3.91px;
  margin-top: 37px;
  min-height: 23px;
  opacity: 0.9;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.investment-12 {
  cursor: pointer;
  letter-spacing: 0.09px;
  line-height: 23px;
  margin-left: 3.91px;
  margin-top: 29px;
  min-height: 23px;
  opacity: 0.9;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.flex-col-30 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  margin-right: -1170px;
  margin-top: 16px;
  min-height: 6429px;
  width: 1938px;
}

.group-81-2 {
  cursor: pointer;
  display: flex;
  height: 76px;
  margin-left: 117px;
  width: 305px;
}

.frame-11-4 {
  align-items: flex-end;
  background-color: var(--desert-storm);
  border-radius: 15.65px;
  box-shadow: 7.83px 7.83px 15.65px #00000014, -7.83px -7.83px 15.65px #ffffff;
  display: flex;
  height: 75.9px;
  justify-content: flex-end;
  min-width: 305.18px;
  padding: 23.5px 76.3px;
}

.invest-today-2 {
  color: var(--orange-peel);
  font-family: var(--font-family-montserrat);
  font-size: 21.9px;
  font-weight: 700;
  letter-spacing: 0.11px;
  line-height: 29.2px;
  min-height: 29px;
  white-space: nowrap;
  width: 153px;
}

.overlap-group7-6 {
  height: 878px;
  margin-top: 131px;
  position: relative;
  width: 788px;
}

.rectangle-44-1 {
  height: 846px;
  left: 33px;
  position: absolute;
  top: 32px;
  width: 755px;
}

.rectangle-98-1 {
  height: 875px;
  left: 0;
  position: absolute;
  top: 0;
  width: 788px;
}

.get-the-app-2 {
  display: flex;
  flex-direction: column;
  height: 689px;
  left: 231px;
  position: absolute;
  top: 30px;
  width: 274px;
}

.coming-soon-3 {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 32.9px;
  font-weight: 700;
  height: 63.38px;
  letter-spacing: 0;
  line-height: 63.2px;
  margin-left: 30.5px;
  margin-top: 0;
  white-space: nowrap;
  width: 241.02px;
}

.badges-2 {
  height: 40.5px;
  margin-left: -0.5px;
  margin-top: 585.8px;
  width: 134px;
}

.frame-22-2 {
  align-items: flex-end;
  background-color: var(--heavy-metal);
  border-radius: 7.33px;
  box-shadow: 5.23px 5.23px 15.7px #00000073, -5.23px -5.23px 15.7px #2a2a2a;
  display: flex;
  height: 52px;
  left: 118px;
  min-width: 459px;
  padding: 16.8px 46.6px;
  position: absolute;
  top: 767px;
}

.enter-your-e-mail-address-2 {
  color: var(--orange-peel);
  font-family: var(--font-family-montserrat);
  font-size: 13.6px;
  font-weight: 700;
  letter-spacing: 0.07px;
  line-height: 18.2px;
  min-height: 18px;
  white-space: nowrap;
  width: 185px;
}

.frame-23-2 {
  background-color: var(--desert-storm);
  border-radius: 7.85px;
  box-shadow: 5.23px 5.23px 10.47px #00000017;
  display: flex;
  height: 44px;
  left: 412px;
  position: absolute;
  top: 771px;
  width: 164px;
}

.join-our-wait-list-2 {
  color: var(--orange-peel);
  font-family: var(--font-family-montserrat);
  font-size: 11.5px;
  font-weight: 700;
  height: 15.18px;
  letter-spacing: 0.06px;
  line-height: 15.4px;
  margin-left: 27.5px;
  margin-top: 14.7px;
  white-space: nowrap;
  width: 108.88px;
}

.i-phone-12-pro-5 {
  height: 519px;
  left: 179px;
  position: absolute;
  top: 140px;
  width: 258px;
}

.i-phone-12-pro-6 {
  height: 492px;
  left: 396px;
  position: absolute;
  top: 228px;
  width: 244px;
}

.investments-2 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 43.8px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 62.2px;
  margin-left: 132.25px;
  margin-top: 68px;
  min-height: 63px;
  white-space: nowrap;
}

.with-real-estate-inv-4 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 18.8px;
  font-weight: 400;
  letter-spacing: 0.56px;
  line-height: 28.2px;
  margin-left: 133.81px;
  margin-top: 24px;
  min-height: 91px;
  width: 581px;
}

.overlap-group5-10 {
  height: 1430px;
  margin-left: 56px;
  margin-top: 53px;
  position: relative;
  width: 712px;
}

.rectangle-121-2 {
  height: 567px;
  left: 0;
  position: absolute;
  top: 438px;
  width: 712px;
}

.rectangle-122-2 {
  background-color: var(--concrete);
  border-radius: 44.34px;
  box-shadow: 20.62px 20.62px 51.55px #d2d2d2, -20.62px -20.62px 51.55px #ffffff;
  height: 449px;
  left: 68px;
  position: absolute;
  top: 981px;
  width: 591px;
}

.rectangle-118-2 {
  background-color: var(--concrete);
  border-radius: 45.57px;
  box-shadow: 21.19px 21.19px 52.99px #d2d2d2, -21.19px -21.19px 52.99px #ffffff;
  height: 461px;
  left: 57px;
  position: absolute;
  top: 0;
  width: 607px;
}

.rectangle-123-2 {
  height: 434px;
  left: 66px;
  position: absolute;
  top: 506px;
  width: 580px;
}

.rectangle-11 {
  height: 427px;
  left: 77px;
  position: absolute;
  top: 993px;
  width: 572px;
}

.rectangle-124-2 {
  cursor: pointer;
  height: 434px;
  left: 66px;
  position: absolute;
  top: 506px;
  width: 580px;
}

.mowe-ibafo-2 {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 37.6px;
  font-weight: 700;
  left: 96px;
  letter-spacing: 0.19px;
  line-height: 50.1px;
  position: absolute;
  top: 828px;
  white-space: nowrap;
  width: 241px;
}

.ibadan-oyo-state-2 {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 41.2px;
  font-weight: 700;
  left: 121px;
  letter-spacing: 0.21px;
  line-height: 55px;
  position: absolute;
  top: 1308px;
  white-space: nowrap;
  width: 387px;
}

.sea-facing-spacious-9 {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 18.8px;
  font-weight: 400;
  left: 96px;
  letter-spacing: 0.56px;
  line-height: 28.2px;
  position: absolute;
  top: 880px;
  white-space: nowrap;
  width: 200px;
}

.overlap-group2-21 {
  border-radius: 33.91px;
  height: 438px;
  left: 67px;
  position: absolute;
  top: 12px;
  width: 586px;
}

.rectangle-119 {
  width: 100%;
}

.rectangle-120-2 {
  background-color: var(--black-2);
  border-radius: 33.91px;
  height: 438px;
  left: 0;
  position: absolute;
  top: 0;
  width: 586px;
}

.place-18 {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 42.4px;
  font-weight: 700;
  left: 30px;
  letter-spacing: 0.21px;
  line-height: 56.5px;
  position: absolute;
  top: 324px;
  white-space: nowrap;
  width: 165px;
}

.sea-facing-spacious-10 {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 23.3px;
  font-weight: 400;
  left: 30px;
  letter-spacing: 0.7px;
  line-height: 35.1px;
  position: absolute;
  top: 378px;
  white-space: nowrap;
  width: 249px;
}

.sea-facing-spacious-11 {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 22.7px;
  font-weight: 400;
  left: 121px;
  letter-spacing: 0.68px;
  line-height: 34.1px;
  position: absolute;
  top: 1361px;
  white-space: nowrap;
  width: 242px;
}

.overlap-group6-8 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  margin-left: 19.98px;
  margin-top: 56px;
  min-height: 661px;
  padding: 46.8px 106.9px;
  width: 747px;
}

.group-82-2 {
  display: flex;
  height: 62px;
  margin-left: 12.37px;
  width: 370px;
}

.our-latest-news-2 {
  height: 61.82px;
  letter-spacing: 0;
  line-height: 62.2px;
  white-space: nowrap;
  width: 367.78px;
}

.image-6-2 {
  align-self: flex-end;
  height: 349px;
  margin-top: 45px;
  width: 521px;
}

.group-67-7 {
  height: 19px;
  margin-left: 11.88px;
  margin-top: 46px;
  width: 167px;
}

.what-we-do-2 {
  letter-spacing: 0;
  line-height: 62.2px;
  margin-left: 122.08px;
  margin-top: 106px;
  min-height: 63px;
  white-space: nowrap;
}

.group-246 {
  background-size: 100% 100%;
  display: flex;
  height: 256px;
  margin-left: 256.47px;
  margin-top: 86px;
  width: 256px;
}

.group-245 {
  align-items: flex-start;
  display: flex;
  height: 167.46px;
  justify-content: flex-end;
  margin-left: 43.8px;
  margin-top: 43.8px;
  min-width: 167.46px;
}

.overlap-group-32 {
  height: 246px;
  margin-top: -23.62px;
  position: relative;
  width: 246px;
}

.rectangle-2 {
  cursor: pointer;
  height: 246px;
  left: 0;
  position: absolute;
  top: 0;
  transition: all 0.2s ease;
  width: 246px;
}

.rectangle-2:hover {
  transform: scale(1.1);
}

.group-4-5 {
  height: 52px;
  left: 96px;
  position: absolute;
  top: 81px;
  width: 22px;
}

.investment-management-2 {
  letter-spacing: 0.1px;
  line-height: 27.1px;
  margin-left: 247px;
  margin-top: 57px;
  min-height: 27px;
  white-space: nowrap;
}

.we-present-to-you-s-2 {
  letter-spacing: 0.72px;
  line-height: 36.1px;
  margin-left: 125px;
  margin-top: 17px;
  min-height: 96px;
  text-align: center;
  width: 537px;
}

.overlap-group4-11 {
  align-self: flex-end;
  height: 1083px;
  margin-top: 6px;
  position: relative;
  width: 1923px;
}

.vector-3-5 {
  height: 1065px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1923px;
}

.lorem-ipsum-dolor-si-4 {
  color: var(--black);
  font-family: var(--font-family-montserrat);
  font-size: 18.8px;
  font-weight: 400;
  left: 174px;
  letter-spacing: 0.56px;
  line-height: 28.2px;
  position: absolute;
  text-align: center;
  top: 987px;
  width: 408px;
}

.you-dont-just-acqui-2 {
  left: 105px;
  letter-spacing: 0.72px;
  line-height: 36.1px;
  position: absolute;
  text-align: center;
  top: 436px;
  width: 546px;
}

.wealth-creation-2 {
  left: 290px;
  letter-spacing: 0.1px;
  line-height: 27.1px;
  position: absolute;
  top: 392px;
  white-space: nowrap;
}

.sales-marketing-2 {
  left: 281px;
  letter-spacing: 0.1px;
  line-height: 27.1px;
  position: absolute;
  top: 943px;
  white-space: nowrap;
}

.group-248 {
  background-size: 100% 100%;
  display: flex;
  height: 256px;
  left: 243px;
  position: absolute;
  top: 79px;
  width: 256px;
}

.group-247 {
  align-items: flex-start;
  display: flex;
  height: 167.46px;
  justify-content: flex-end;
  margin-left: 44px;
  margin-top: 43.8px;
  min-width: 167.46px;
}

.overlap-group-33 {
  height: 246px;
  margin-top: -23.87px;
  position: relative;
  width: 246px;
}

.group-5-3 {
  height: 49px;
  left: 95px;
  position: absolute;
  top: 81px;
  width: 26px;
}

.overlap-group1-24 {
  height: 267px;
  left: 257px;
  position: absolute;
  top: 630px;
  width: 266px;
}

.rectangle-62-1 {
  height: 256px;
  left: 0;
  position: absolute;
  top: 0;
  width: 256px;
}

.overlap-group-34 {
  height: 246px;
  left: 20px;
  position: absolute;
  top: 20px;
  width: 246px;
}

.group-6-3 {
  height: 54px;
  left: 96px;
  position: absolute;
  top: 81px;
  width: 22px;
}

.overlap-group3-9 {
  align-items: center;
  background-color: var(--heavy-metal);
  display: flex;
  flex-direction: column;
  margin-left: 18px;
  margin-top: 180px;
  min-height: 845px;
  padding: 122.9px 96.9px;
  width: 761px;
}

.fox-capital-2-2 {
  align-self: flex-start;
  height: 73px;
  margin-top: 43px;
  width: 186px;
}

.we-are-committed-to-4 {
  color: var(--bon-jour);
  font-family: var(--font-family-montserrat);
  font-size: 18.8px;
  font-weight: 300;
  letter-spacing: 0.56px;
  line-height: 28.2px;
  margin-right: 16.43px;
  margin-top: 49px;
  min-height: 88px;
  width: 488px;
}

.overlap-group9-4 {
  align-items: flex-end;
  background-size: 100% 100%;
  display: flex;
  height: 72px;
  margin-right: 7.04px;
  margin-top: 69px;
  min-width: 496px;
  padding: 22.1px 30.7px;
}

.your-name-22 {
  letter-spacing: 0.61px;
  line-height: 27.1px;
  min-height: 27px;
  white-space: nowrap;
  width: 118px;
}

.overlap-group8-4 {
  align-items: flex-end;
  background-size: 100% 100%;
  display: flex;
  height: 72px;
  margin-right: 7.04px;
  margin-top: 27px;
  min-width: 496px;
  padding: 22.3px 30.7px;
}

.yourmailaddresspleasemailcom-2 {
  letter-spacing: 0.61px;
  line-height: 27.1px;
  min-height: 27px;
  white-space: nowrap;
  width: 364px;
}

.frame-35635-2 {
  align-self: flex-start;
  background-color: var(--heavy-metal);
  border-radius: 10.96px;
  box-shadow: 7.83px 7.83px 23.48px #00000073, -7.83px -7.83px 23.48px #2a2a2a;
  display: flex;
  height: 73px;
  margin-left: 33.1px;
  margin-top: 35px;
  position: relative;
  width: 428px;
}

.footer-19 {
  background-color: var(--concrete);
  display: flex;
  height: 41px;
  margin-left: 50px;
  margin-top: 35px;
  width: 685px;
}

.frame-35632-17 {
  display: flex;
  margin-left: 18.8px;
  margin-top: 14.5px;
  width: 186.24px;
}

.privacy-policy-17 {
  height: 11.74px;
  letter-spacing: 0;
  width: 64.17px;
}

.terms-of-use-17 {
  height: 11.74px;
  letter-spacing: 0;
  margin-left: 18.8px;
  width: 61.04px;
}

.x2021-fox-capital-investment-limited-17 {
  height: 15.65px;
  letter-spacing: 0;
  margin-left: 279.4px;
  margin-top: 12.5px;
  width: 182.33px;
}
</style>
