<template>
  <div class="container-center-horizontal">
    <div class="mobile22 screen">
      <div class="flex-row-40">
        <router-link to="/mobile" className="align-self-flex-end"
          ><img class="fox-capital-logo-2-20" :src="foxCapitalLogo2"
        /></router-link>
        <div class="flex-col-43">
          <router-link to="/home-page">
            <div class="place-29 montserrat-bold-storm-dust-6-4px">{{ place }}</div> </router-link
          ><router-link to="/mobile2">
            <div class="about-us-23 montserrat-bold-fuscous-gray-6-4px">{{ aboutUs }}</div>
          </router-link>
        </div>
      </div>
      <div class="flex-col-44">
        <div class="frame-35639-8">
          <router-link to="/mobile2">
            <div class="services-22 montserrat-bold-orange-peel-6-4px">{{ services }}</div>
          </router-link>
        </div>
        <div class="flex-row-41">
          <div class="check-out-our-servic-2">{{ checkOutOurServic }}</div>
          <router-link to="/mobile2-1">
            <div class="investment-21 montserrat-bold-fuscous-gray-6-4px">{{ investment }}</div>
          </router-link>
        </div>
        <p class="we-have-range-of-ser-2">{{ weHaveRangeOfSer }}</p>
        <div class="our-services-2">{{ ourServices }}</div>
        <p class="just-as-diverse-as-t-2 montserrat-normal-black-12px">{{ justAsDiverseAsT }}</p>
        <div class="group-235-3" :style="{ 'background-image': 'url(' + group235 + ')' }">
          <div class="overlap-group2-25" :style="{ 'background-image': 'url(' + overlapGroup2 + ')' }">
            <img class="group-4-8" :src="group41" />
          </div>
        </div>
        <div class="frame-35640-1">
          <div class="real-estate-investment-services-2">{{ realEstateInvestmentServices }}</div>
          <p class="with-years-of-experi-2">{{ withYearsOfExperi }}</p>
        </div>
        <div class="group-236-2" :style="{ 'background-image': 'url(' + group236 + ')' }">
          <div class="overlap-group3-14" :style="{ 'background-image': 'url(' + overlapGroup3 + ')' }">
            <img
              class="vector-64"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e2bba90eedab0725bf2d98/img/vector-1@2x.png"
            />
          </div>
        </div>
        <div class="frame-35641-1">
          <div class="joint-ventures-2">{{ jointVentures }}</div>
          <p class="at-fox-capital-inves-2">{{ atFoxCapitalInves }}</p>
        </div>
        <div class="group-237-1" :style="{ 'background-image': 'url(' + group237 + ')' }">
          <div class="overlap-group4-17" :style="{ 'background-image': 'url(' + overlapGroup4 + ')' }">
            <img class="group-6-6" :src="group61" />
          </div>
        </div>
        <div class="frame-35642-1">
          <div class="investment-advisory-services-2">{{ investmentAdvisoryServices }}</div>
          <p class="surname-28">{{ surname }}</p>
        </div>
        <div class="overlap-group7-12">
          <div class="frame-35643-1">
            <div class="venture-capital-funding-2">{{ ventureCapitalFunding }}</div>
            <p class="with-our-growing-inv-2">{{ withOurGrowingInv }}</p>
          </div>
          <img class="group-4-9" :src="group42" />
        </div>
        <div class="group-239-2" :style="{ 'background-image': 'url(' + group239 + ')' }">
          <div class="overlap-group5-17" :style="{ 'background-image': 'url(' + overlapGroup5 + ')' }">
            <img class="group-5-5" :src="group5" />
          </div>
        </div>
        <div class="frame-35644-1">
          <div class="construction-2">{{ construction }}</div>
          <p class="in-order-to-maintain-2">{{ inOrderToMaintain }}</p>
        </div>
        <div class="group-240-2" :style="{ 'background-image': 'url(' + group240 + ')' }">
          <div class="overlap-group6-13" :style="{ 'background-image': 'url(' + overlapGroup6 + ')' }">
            <img class="group-6-6" :src="group62" />
          </div>
        </div>
        <div class="frame-35645-1">
          <div class="advertising-2">{{ advertising }}</div>
          <p class="lorem-ipsum-dolor-si-9">{{ loremIpsumDolorSi }}</p>
        </div>
        <group23422 :className="group23422Props.className" />
        <div class="footer-22">
          <div class="frame-35632-20 montserrat-normal-black-3-9px">
            <div class="privacy-policy-20">{{ privacyPolicy }}</div>
            <div class="terms-of-use-20">{{ termsOfUse }}</div>
          </div>
          <p class="x2021-fox-capital-investment-limited-20 montserrat-normal-black-5-2px">
            <span class="montserrat-normal-black-5-2px">{{ spanText1 }}</span
            ><span class="montserrat-normal-black-3-9px">{{ spanText2 }}</span>
          </p>
        </div>
        <img class="vector-3-10" :src="vector3" />
      </div>
    </div>
  </div>
</template>

<script>
import Group23422 from "./Group23422";
export default {
  name: "Mobile24",
  components: {
    Group23422,
  },
  props: [
    "foxCapitalLogo2",
    "place",
    "aboutUs",
    "services",
    "checkOutOurServic",
    "investment",
    "weHaveRangeOfSer",
    "ourServices",
    "justAsDiverseAsT",
    "group235",
    "overlapGroup2",
    "group41",
    "realEstateInvestmentServices",
    "withYearsOfExperi",
    "group236",
    "overlapGroup3",
    "jointVentures",
    "atFoxCapitalInves",
    "group237",
    "overlapGroup4",
    "group61",
    "investmentAdvisoryServices",
    "surname",
    "ventureCapitalFunding",
    "withOurGrowingInv",
    "group42",
    "group239",
    "overlapGroup5",
    "group5",
    "construction",
    "inOrderToMaintain",
    "group240",
    "overlapGroup6",
    "group62",
    "advertising",
    "loremIpsumDolorSi",
    "privacyPolicy",
    "termsOfUse",
    "spanText1",
    "spanText2",
    "vector3",
    "group23422Props",
  ],
};
</script>

<style>
.mobile22 {
  align-items: flex-start;
  background-color: var(--concrete);
  display: flex;
  flex-direction: column;
  height: 2287px;
  overflow: hidden;
  padding: 51px 0;
  width: 320px;
}

.flex-row-40 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  height: 28px;
  margin-left: 2.04px;
  min-width: 264px;
}

.fox-capital-logo-2-20 {
  align-self: flex-end;
  cursor: pointer;
  height: 27px;
  object-fit: cover;
  width: 60px;
}

.flex-col-43 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 171px;
  min-height: 22px;
  width: 32px;
}

.place-29 {
  cursor: pointer;
  letter-spacing: 0.03px;
  line-height: 8.5px;
  margin-left: 1.83px;
  min-height: 8px;
  white-space: nowrap;
}

.about-us-23 {
  cursor: pointer;
  letter-spacing: 0.03px;
  line-height: 8.5px;
  margin-top: 5px;
  min-height: 9px;
  opacity: 0.9;
  white-space: nowrap;
}

.flex-col-44 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: -3px;
  margin-top: 3px;
  min-height: 5746px;
  position: relative;
  width: 1923px;
}

.frame-35639-8 {
  background-color: var(--desert-storm);
  border-radius: 4.35px;
  box-shadow: 2.9px 2.9px 5.8px #00000017, -2.9px -2.9px 5.8px #ffffff;
  display: flex;
  height: 25px;
  margin-left: 251.75px;
  width: 56px;
}

.services-22 {
  cursor: pointer;
  height: 8.53px;
  letter-spacing: 0.03px;
  line-height: 8.5px;
  margin-left: 12.4px;
  margin-top: 8.1px;
  opacity: 0.9;
  white-space: nowrap;
  width: 31.15px;
}

.flex-row-41 {
  align-items: flex-start;
  display: flex;
  height: 78px;
  margin-left: 30px;
  margin-top: 7px;
  min-width: 275px;
}

.check-out-our-servic-2 {
  align-self: flex-end;
  color: var(--cape-cod);
  font-family: var(--font-family-montserrat);
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 25.5px;
  min-height: 75px;
  width: 230px;
}

.investment-21 {
  cursor: pointer;
  letter-spacing: 0.03px;
  line-height: 8.5px;
  margin-left: 6px;
  min-height: 8px;
  white-space: nowrap;
}

.we-have-range-of-ser-2 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 8.1px;
  font-weight: 400;
  letter-spacing: 0.24px;
  line-height: 12.2px;
  margin-left: 32px;
  margin-top: 4px;
  min-height: 47px;
  width: 201px;
}

.our-services-2 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 22.7px;
  margin-left: 114px;
  margin-top: 31px;
  min-height: 23px;
  white-space: nowrap;
}

.just-as-diverse-as-t-2 {
  letter-spacing: 0.36px;
  line-height: 18px;
  margin-left: 37px;
  margin-top: 8px;
  min-height: 66px;
  text-align: center;
  width: 253px;
}

.group-235-3 {
  align-items: flex-end;
  background-size: 100% 100%;
  cursor: pointer;
  display: flex;
  height: 140px;
  justify-content: flex-end;
  margin-left: 88.93px;
  margin-top: 48px;
  min-width: 140px;
  transition: all 0.5s ease-out;
}

.group-235-3:hover,
.group-236-2:hover,
.group-237-1:hover,
.group-4-9:hover,
.group-239-2:hover,
.group-240-2:hover {
  transform: scale(1.1);
}

.overlap-group2-25 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 142px;
  margin-bottom: -10.57px;
  min-width: 142px;
  padding: 46.2px 45.6px;
}

.group-4-8 {
  height: 30px;
  width: 31px;
}

.frame-35640-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 31px;
  margin-top: 1px;
  min-height: 92px;
  width: 263px;
}

.real-estate-investment-services-2 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 12.9px;
  font-weight: 700;
  letter-spacing: 0.06px;
  line-height: 17.1px;
  min-height: 17px;
  white-space: nowrap;
  width: 218px;
}

.with-years-of-experi-2 {
  color: var(--black);
  font-family: var(--font-family-montserrat);
  font-size: 8.9px;
  font-weight: 400;
  letter-spacing: 0.27px;
  line-height: 13.4px;
  margin-top: 4px;
  min-height: 70px;
  text-align: center;
  width: 263px;
}

.group-236-2 {
  align-items: flex-end;
  background-size: 100% 100%;
  cursor: pointer;
  display: flex;
  height: 140px;
  justify-content: flex-end;
  margin-left: 88.93px;
  margin-top: 9px;
  min-width: 140px;
  transition: all 0.5s ease-out;
}

.overlap-group3-14 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 138px;
  margin-bottom: -8.12px;
  min-width: 138px;
  padding: 45.4px 37.3px;
}

.vector-64 {
  height: 28px;
  width: 42px;
}

.frame-35641-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 38px;
  margin-top: 17px;
  min-height: 76px;
  width: 248px;
}

.joint-ventures-2 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 11.9px;
  font-weight: 700;
  letter-spacing: 0.06px;
  line-height: 15.9px;
  margin-left: 0;
  min-height: 16px;
  white-space: nowrap;
  width: 92px;
}

.at-fox-capital-inves-2 {
  color: var(--black);
  font-family: var(--font-family-montserrat);
  font-size: 8.3px;
  font-weight: 400;
  letter-spacing: 0.25px;
  line-height: 12.4px;
  margin-right: 0;
  margin-top: 4px;
  min-height: 56px;
  text-align: center;
  width: 248px;
}

.group-237-1 {
  align-items: flex-end;
  background-size: 100% 100%;
  cursor: pointer;
  display: flex;
  height: 140px;
  justify-content: flex-end;
  margin-left: 88.93px;
  margin-top: 30px;
  min-width: 140px;
  transition: all 0.5s ease-out;
}

.overlap-group4-17 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 136px;
  margin-bottom: -6.04px;
  min-width: 136px;
  padding: 44.3px 43px;
}

.group-6-6 {
  height: 30px;
  width: 32px;
}

.frame-35642-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 39px;
  margin-top: 7px;
  min-height: 73px;
  width: 248px;
}

.investment-advisory-services-2 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 11.2px;
  font-weight: 700;
  letter-spacing: 0.06px;
  line-height: 14.9px;
  min-height: 15px;
  white-space: nowrap;
  width: 175px;
}

.surname-28 {
  color: var(--black);
  font-family: var(--font-family-montserrat);
  font-size: 7.7px;
  font-weight: 400;
  letter-spacing: 0.23px;
  line-height: 11.7px;
  margin-right: 0;
  margin-top: 5px;
  min-height: 53px;
  text-align: center;
  width: 248px;
}

.overlap-group7-12 {
  height: 210px;
  margin-left: 45px;
  margin-top: 42px;
  position: relative;
  width: 234px;
}

.frame-35643-1 {
  height: 64px;
  left: 0;
  position: absolute;
  top: 146px;
  width: 234px;
}

.venture-capital-funding-2 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 12.3px;
  font-weight: 700;
  left: 37px;
  letter-spacing: 0.06px;
  line-height: 16.5px;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 160px;
}

.with-our-growing-inv-2 {
  color: var(--black);
  font-family: var(--font-family-montserrat);
  font-size: 8.5px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0.26px;
  line-height: 12.9px;
  position: absolute;
  text-align: center;
  top: 17px;
  width: 234px;
}

.group-4-9 {
  cursor: pointer;
  height: 150px;
  left: 44px;
  position: absolute;
  top: 0;
  transition: all 0.5s ease-out;
  width: 150px;
}

.group-239-2 {
  align-items: flex-end;
  background-size: 100% 100%;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  margin-left: 88.93px;
  margin-top: 56px;
  min-width: 140px;
  transition: all 0.5s ease-out;
}

.overlap-group5-17 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 140px;
  margin-bottom: -8.82px;
  min-width: 140px;
  padding: 46.3px 41.2px;
}

.group-5-5 {
  height: 28px;
  width: 38px;
}

.frame-35644-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 37px;
  margin-top: 13px;
  min-height: 86px;
  width: 251px;
}

.construction-2 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 13.1px;
  font-weight: 700;
  letter-spacing: 0.07px;
  line-height: 17.5px;
  margin-left: 0;
  min-height: 15px;
  white-space: nowrap;
  width: 98px;
}

.in-order-to-maintain-2 {
  color: var(--black);
  font-family: var(--font-family-montserrat);
  font-size: 9.1px;
  font-weight: 400;
  letter-spacing: 0.27px;
  line-height: 13.7px;
  margin-top: 10px;
  min-height: 61px;
  text-align: center;
  width: 251px;
}

.group-240-2 {
  align-items: flex-end;
  background-size: 100% 100%;
  cursor: pointer;
  display: flex;
  height: 140px;
  justify-content: flex-end;
  margin-left: 88.93px;
  margin-top: 71px;
  min-width: 140px;
  transition: all 0.5s ease-out;
}

.overlap-group6-13 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 151px;
  margin-bottom: -16.86px;
  min-width: 151px;
  padding: 49px 47.7px;
}

.frame-35645-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 45px;
  margin-top: 7px;
  min-height: 82px;
  width: 235px;
}

.advertising-2 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 12.6px;
  font-weight: 700;
  letter-spacing: 0.06px;
  line-height: 16.8px;
  margin-right: 0;
  min-height: 17px;
  white-space: nowrap;
  width: 77px;
}

.lorem-ipsum-dolor-si-9 {
  color: var(--black);
  font-family: var(--font-family-montserrat);
  font-size: 8.7px;
  font-weight: 400;
  letter-spacing: 0.26px;
  line-height: 13.1px;
  margin-top: 7px;
  min-height: 59px;
  text-align: center;
  width: 235px;
}

.footer-22 {
  background-color: var(--concrete);
  display: flex;
  height: 17px;
  margin-left: 13px;
  margin-top: 28px;
  width: 287px;
}

.frame-35632-20 {
  display: flex;
  margin-left: 7.9px;
  margin-top: 6.1px;
  width: 77.87px;
}

.privacy-policy-20 {
  height: 4.91px;
  letter-spacing: 0;
  width: 26.83px;
}

.terms-of-use-20 {
  height: 4.91px;
  letter-spacing: 0;
  margin-left: 7.9px;
  width: 25.52px;
}

.x2021-fox-capital-investment-limited-20 {
  height: 6.54px;
  letter-spacing: 0;
  margin-left: 116.8px;
  margin-top: 5.2px;
  width: 76.23px;
}

.vector-3-10 {
  height: 1065px;
  margin-top: 2520px;
  width: 1923px;
}
</style>
