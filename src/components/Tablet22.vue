<template>
  <div class="container-center-horizontal">
    <div class="tablet2-2 screen">
      <div class="flex-row-30">
        <router-link to="/tablet"><img class="fox-capital-logo-2-16" :src="foxCapitalLogo2" /></router-link>
        <div class="flex-col-36">
          <div class="flex-row-31">
            <router-link to="/tablet">
              <div class="place-24 montserrat-bold-storm-dust-14-9px">{{ place }}</div> </router-link
            ><router-link to="/tablet22">
              <div class="about-us-19 montserrat-bold-fuscous-gray-14-9px">{{ aboutUs }}</div>
            </router-link>
          </div>
          <div class="flex-row-32">
            <div class="frame-35639-5">
              <div class="services-18 montserrat-bold-orange-peel-14-9px">{{ services }}</div>
            </div>
            <router-link to="/tablet2">
              <div class="investment-17 montserrat-bold-fuscous-gray-14-9px">{{ investment }}</div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="flex-col-37">
        <div class="overlap-group8-6">
          <img class="rectangle-162" :src="rectangle162" />
          <div class="check-out-our-servic-1 montserrat-semi-bold-cape-cod-24px">{{ checkOutOurServic }}</div>
          <p class="we-have-range-of-ser-1 montserrat-normal-eerie-black-14px">{{ weHaveRangeOfSer }}</p>
        </div>
        <div class="our-services-1">{{ ourServices }}</div>
        <div class="just-as-diverse-as-t-1 montserrat-normal-black-18px">{{ justAsDiverseAsT }}</div>
        <div class="group-container-7">
          <div class="group-23" :style="{ 'background-image': 'url(' + group235 + ')' }">
            <div class="overlap-group4-14" :style="{ 'background-image': 'url(' + overlapGroup4 + ')' }">
              <img class="group-4-6" :src="group41" />
            </div>
          </div>
          <div class="group-236-1" :style="{ 'background-image': 'url(' + group236 + ')' }">
            <div class="overlap-group3-11" :style="{ 'background-image': 'url(' + overlapGroup3 + ')' }">
              <img
                class="vector-43"
                src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e2bba90eedab0725bf2d98/img/vector@2x.png"
              />
            </div>
          </div>
        </div>
        <div class="frame-container">
          <div class="frame-35640">
            <div class="real-estate-investment-services-1 montserrat-bold-eerie-black-15-5px">
              {{ realEstateInvestmentServices }}
            </div>
            <p class="with-years-of-experi-1 montserrat-normal-black-10-7px">{{ withYearsOfExperi }}</p>
          </div>
          <div class="frame-35641">
            <div class="joint-ventures-1 montserrat-bold-eerie-black-15-5px">{{ jointVentures }}</div>
            <p class="at-fox-capital-inves-1 montserrat-normal-black-10-7px">{{ atFoxCapitalInves }}</p>
          </div>
        </div>
        <div class="group-container-8">
          <div class="group-23" :style="{ 'background-image': 'url(' + group237 + ')' }">
            <div class="overlap-group5-14" :style="{ 'background-image': 'url(' + overlapGroup5 + ')' }">
              <img class="group-6-4" :src="group61" />
            </div>
          </div>
          <img class="group-4-7" :src="group42" />
        </div>
        <div class="frame-container-1">
          <div class="frame-35642">
            <div class="investment-advisory-services-1 montserrat-bold-eerie-black-15-5px">
              {{ investmentAdvisoryServices }}
            </div>
            <p class="surname-22 montserrat-normal-black-10-7px">{{ surname }}</p>
          </div>
          <div class="frame-35643">
            <div class="venture-capital-funding-1 montserrat-bold-eerie-black-15-2px">{{ ventureCapitalFunding }}</div>
            <p class="with-our-growing-inv-1 montserrat-normal-black-10-5px">{{ withOurGrowingInv }}</p>
          </div>
        </div>
        <div class="group-container-9">
          <div class="group-239-1" :style="{ 'background-image': 'url(' + group239 + ')' }">
            <div class="overlap-group6-11" :style="{ 'background-image': 'url(' + overlapGroup6 + ')' }">
              <img class="group-5-4" :src="group5" />
            </div>
          </div>
          <div class="group-240-1">
            <div class="overlap-group7-9">
              <img class="rectangle-62-2" :src="rectangle62" /><img class="rectangle-63-1" :src="rectangle63" /><img
                class="group-6-5"
                :src="group62"
              />
            </div>
          </div>
        </div>
        <div class="frame-container-2">
          <div class="frame-35644">
            <div class="construction-1 montserrat-bold-eerie-black-15-2px">{{ construction }}</div>
            <p class="in-order-to-maintain-1 montserrat-normal-black-10-5px">{{ inOrderToMaintain }}</p>
          </div>
          <div class="frame-35645">
            <div class="advertising-1 montserrat-bold-eerie-black-15-2px">{{ advertising }}</div>
            <p class="lorem-ipsum-dolor-si-6 montserrat-normal-black-10-5px">{{ loremIpsumDolorSi }}</p>
          </div>
        </div>
        <group234
          :overlapGroup="group234Props.overlapGroup"
          :overlapGroup1="group234Props.overlapGroup1"
          :className="group234Props.className"
        />
        <img class="vector-3-7" :src="vector3" />
      </div>
    </div>
  </div>
</template>

<script>
import Group234 from "./Group234";
export default {
  name: "Tablet22",
  components: {
    Group234,
  },
  props: [
    "foxCapitalLogo2",
    "place",
    "aboutUs",
    "services",
    "investment",
    "rectangle162",
    "checkOutOurServic",
    "weHaveRangeOfSer",
    "ourServices",
    "justAsDiverseAsT",
    "group235",
    "overlapGroup4",
    "group41",
    "group236",
    "overlapGroup3",
    "realEstateInvestmentServices",
    "withYearsOfExperi",
    "jointVentures",
    "atFoxCapitalInves",
    "group237",
    "overlapGroup5",
    "group61",
    "group42",
    "investmentAdvisoryServices",
    "surname",
    "ventureCapitalFunding",
    "withOurGrowingInv",
    "group239",
    "overlapGroup6",
    "group5",
    "rectangle62",
    "rectangle63",
    "group62",
    "construction",
    "inOrderToMaintain",
    "advertising",
    "loremIpsumDolorSi",
    "vector3",
    "group234Props",
  ],
};
</script>

<style>
.tablet2-2 {
  align-items: flex-start;
  background-color: var(--concrete);
  display: flex;
  flex-direction: column;
  height: 2247px;
  overflow: hidden;
  padding: 81.9px 0;
  width: 750px;
}

.flex-row-30 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  height: 111px;
  margin-right: 25.48px;
  min-width: 588px;
}

.fox-capital-logo-2-16 {
  cursor: pointer;
  height: 62px;
  object-fit: cover;
  width: 141px;
}

.flex-col-36 {
  align-items: center;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  margin-left: 206px;
  min-height: 111px;
  width: 241px;
}

.flex-row-31 {
  align-items: flex-start;
  display: flex;
  height: 20px;
  margin-left: 5.94px;
  min-width: 189px;
}

.place-24 {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  min-height: 20px;
  white-space: nowrap;
  width: 48px;
}

.about-us-19 {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  margin-left: 68px;
  min-height: 20px;
  opacity: 0.9;
  white-space: nowrap;
}

.flex-row-32 {
  align-items: center;
  display: flex;
  margin-top: 33px;
  min-width: 241px;
}

.frame-35639-5 {
  background-color: var(--desert-storm);
  border-radius: 10.19px;
  box-shadow: 6.8px 6.8px 13.59px #00000017, -6.8px -6.8px 13.59px #ffffff;
  display: flex;
  height: 58px;
  width: 124px;
}

.services-18 {
  height: 20px;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  margin-left: 29px;
  margin-top: 19px;
  opacity: 0.9;
  white-space: nowrap;
  width: 66px;
}

.investment-17 {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  margin-bottom: 10.29px;
  margin-left: 26px;
  min-height: 20px;
  white-space: nowrap;
  width: 91px;
}

.flex-col-37 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: -3px;
  margin-top: 10px;
  min-height: 5625px;
  position: relative;
  width: 1923px;
}

.overlap-group8-6 {
  height: 242px;
  margin-left: 3px;
  position: relative;
  width: 766px;
}

.rectangle-162 {
  height: 242px;
  left: 0;
  position: absolute;
  top: 0;
  width: 750px;
}

.check-out-our-servic-1 {
  left: 316px;
  letter-spacing: 0;
  line-height: 34.1px;
  position: absolute;
  text-align: center;
  top: 85px;
  width: 450px;
}

.we-have-range-of-ser-1 {
  left: 366px;
  letter-spacing: 0.42px;
  line-height: 21.1px;
  position: absolute;
  text-align: center;
  top: 161px;
  width: 346px;
}

.our-services-1 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 38px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 53.9px;
  margin-left: 261px;
  margin-top: 37px;
  min-height: 54px;
  white-space: nowrap;
}

.just-as-diverse-as-t-1 {
  letter-spacing: 0.54px;
  line-height: 27.1px;
  margin-left: 88px;
  margin-top: 17px;
  min-height: 66px;
  text-align: center;
  width: 580px;
}

.group-container-7 {
  align-items: flex-start;
  display: flex;
  margin-left: 95.22px;
  margin-top: 75px;
  min-width: 568px;
}

.group-23 {
  align-items: flex-end;
  background-size: 100% 100%;
  cursor: pointer;
  display: flex;
  height: 195px;
  justify-content: flex-end;
  min-width: 195px;
  transition: all 0.5s ease-out;
}

.group-23:hover,
.group-236-1:hover,
.group-4-7:hover,
.group-239-1:hover,
.group-240-1:hover {
  transform: scale(1.1);
}

.overlap-group4-14 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 188px;
  margin-bottom: -7.93px;
  min-width: 188px;
  padding: 61.4px 60.6px;
}

.group-4-6 {
  height: 41px;
  width: 43px;
}

.group-236-1 {
  align-items: flex-end;
  background-size: 100% 100%;
  cursor: pointer;
  display: flex;
  height: 195px;
  justify-content: flex-end;
  margin-left: 178px;
  min-width: 195px;
  transition: all 0.5s ease-out;
}

.overlap-group3-11 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 188px;
  margin-bottom: -7.93px;
  min-width: 188px;
  padding: 61.2px 50.7px;
}

.vector-43 {
  height: 40px;
  width: 58px;
}

.frame-container {
  align-items: flex-start;
  display: flex;
  height: 111px;
  margin-left: 37px;
  margin-top: 29px;
  min-width: 682px;
}

.frame-35640 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 111px;
  width: 317px;
}

.real-estate-investment-services-1 {
  letter-spacing: 0.08px;
  line-height: 20.7px;
  min-height: 21px;
  white-space: nowrap;
  width: 263px;
}

.with-years-of-experi-1 {
  letter-spacing: 0.32px;
  line-height: 16.2px;
  margin-top: 5px;
  min-height: 85px;
  text-align: center;
  width: 317px;
}

.frame-35641 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 42px;
  min-height: 99px;
  width: 323px;
}

.joint-ventures-1 {
  letter-spacing: 0.08px;
  line-height: 20.7px;
  min-height: 21px;
  white-space: nowrap;
  width: 119px;
}

.at-fox-capital-inves-1 {
  letter-spacing: 0.32px;
  line-height: 16.2px;
  margin-top: 5px;
  min-height: 73px;
  text-align: center;
  width: 323px;
}

.group-container-8 {
  align-items: flex-start;
  display: flex;
  margin-left: 109.75px;
  margin-top: 35px;
  min-width: 532px;
}

.overlap-group5-14 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 188px;
  margin-bottom: -7.93px;
  min-width: 188px;
  padding: 61.1px 59.6px;
}

.group-6-4 {
  height: 42px;
  width: 44px;
}

.group-4-7 {
  align-self: flex-end;
  cursor: pointer;
  height: 199px;
  margin-left: 137px;
  transition: all 0.5s ease-out;
  width: 200px;
}

.frame-container-1 {
  align-items: center;
  display: flex;
  height: 101px;
  margin-left: 37px;
  margin-top: 25px;
  min-width: 664px;
}

.frame-35642 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 101px;
  width: 344px;
}

.investment-advisory-services-1 {
  letter-spacing: 0.08px;
  line-height: 20.7px;
  min-height: 21px;
  white-space: nowrap;
  width: 243px;
}

.surname-22 {
  letter-spacing: 0.32px;
  line-height: 16.2px;
  margin-top: 7px;
  min-height: 73px;
  text-align: center;
  width: 344px;
}

.frame-35643 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.23px;
  margin-left: 32px;
  min-height: 78px;
  width: 288px;
}

.venture-capital-funding-1 {
  letter-spacing: 0.08px;
  line-height: 20.3px;
  min-height: 20px;
  white-space: nowrap;
  width: 197px;
}

.with-our-growing-inv-1 {
  letter-spacing: 0.32px;
  line-height: 15.8px;
  min-height: 58px;
  text-align: center;
  width: 288px;
}

.group-container-9 {
  align-items: center;
  display: flex;
  margin-left: 107.95px;
  margin-top: 47px;
  min-width: 539px;
}

.group-239-1 {
  align-items: flex-end;
  background-size: 100% 100%;
  cursor: pointer;
  display: flex;
  height: 190px;
  justify-content: flex-end;
  min-width: 190px;
  transition: all 0.5s ease-out;
}

.overlap-group6-11 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 184px;
  margin-bottom: -8.38px;
  min-width: 184px;
  padding: 61.8px 55px;
}

.group-5-4 {
  height: 37px;
  width: 50px;
}

.group-240-1 {
  align-items: flex-end;
  cursor: pointer;
  display: flex;
  height: 190px;
  justify-content: flex-end;
  margin-left: 158px;
  min-width: 190px;
  transition: all 0.5s ease-out;
}

.overlap-group7-9 {
  height: 199px;
  margin-bottom: -8.48px;
  position: relative;
  width: 199px;
}

.rectangle-62-2 {
  height: 190px;
  left: 0;
  position: absolute;
  top: 0;
  width: 191px;
}

.rectangle-63-1 {
  height: 184px;
  left: 15px;
  position: absolute;
  top: 15px;
  width: 184px;
}

.group-6-5 {
  height: 41px;
  left: 74px;
  position: absolute;
  top: 75px;
  width: 43px;
}

.frame-container-2 {
  align-items: flex-start;
  display: flex;
  height: 99px;
  margin-left: 55px;
  margin-top: 30px;
  min-width: 653px;
}

.frame-35644 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 99px;
  width: 290px;
}

.construction-1 {
  letter-spacing: 0.08px;
  line-height: 20.3px;
  min-height: 17px;
  white-space: nowrap;
  width: 113px;
}

.in-order-to-maintain-1 {
  letter-spacing: 0.32px;
  line-height: 15.8px;
  margin-top: 11px;
  min-height: 71px;
  text-align: center;
  width: 290px;
}

.frame-35645 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 79px;
  min-height: 99px;
  width: 284px;
}

.advertising-1 {
  letter-spacing: 0.08px;
  line-height: 20.3px;
  min-height: 20px;
  white-space: nowrap;
  width: 93px;
}

.lorem-ipsum-dolor-si-6 {
  letter-spacing: 0.32px;
  line-height: 15.8px;
  margin-top: 8px;
  min-height: 71px;
  text-align: center;
  width: 284px;
}

.vector-3-7 {
  height: 1065px;
  margin-top: 2577px;
  width: 1923px;
}
</style>
