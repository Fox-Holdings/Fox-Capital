<template>
  <div class="container-center-horizontal">
    <div class="services-7 screen">
      <div class="number montserrat-normal-black-10-7px">{{ number }}</div>
      <div class="flex-col-11">
        <div class="flex-row-14">
          <router-link to="/home-page"><img class="fox-capital-logo-2-6" :src="foxCapitalLogo2" /></router-link
          ><router-link to="/home-page">
            <div class="place-10 montserrat-bold-storm-dust-14-9px">{{ place }}</div> </router-link
          ><router-link to="/about-us">
            <div class="about-us-9 montserrat-bold-fuscous-gray-14-9px">{{ aboutUs }}</div>
          </router-link>
          <div class="frame-35639-2">
            <div class="services-8 montserrat-bold-orange-peel-14-9px">{{ services }}</div>
          </div>
          <router-link to="/investment-landing-page">
            <div class="investment-6 montserrat-bold-fuscous-gray-14-9px">{{ investment }}</div>
          </router-link>
        </div>
        <div class="ser-container" :style="{ 'background-image': 'url(' + serContainer + ')' }">
          <div class="check-out-our-servic">{{ checkOutOurServic }}</div>
          <div class="we-have-range-of-ser">{{ weHaveRangeOfSer }}</div>
        </div>
        <div class="our-services montserrat-light-eerie-black-56px">{{ ourServices }}</div>
        <div class="just-as-diverse-as-t montserrat-normal-black-24px">{{ justAsDiverseAsT }}</div>
        <div class="group-213">
          <div class="flex-col-12">
            <div class="group-235-1" :style="{ 'background-image': 'url(' + group235 + ')' }">
              <div class="overlap-group1-22" :style="{ 'background-image': 'url(' + overlapGroup1 + ')' }">
                <img class="group-4-2" :src="group41" />
              </div>
            </div>
            <div class="real-estate-investment-services montserrat-bold-eerie-black-15-5px">
              {{ realEstateInvestmentServices }}
            </div>
            <p class="with-years-of-experi montserrat-normal-black-10-7px">{{ withYearsOfExperi }}</p>
          </div>
          <div class="flex-col-13">
            <div class="group-236" :style="{ 'background-image': 'url(' + group236 + ')' }">
              <div class="overlap-group-28" :style="{ 'background-image': 'url(' + overlapGroup + ')' }">
                <img
                  class="vector-22"
                  src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e2bba90eedab0725bf2d98/img/vector-2@2x.png"
                />
              </div>
            </div>
            <div class="joint-ventures montserrat-bold-eerie-black-15-5px">{{ jointVentures }}</div>
            <p class="at-fox-capital-inves montserrat-normal-black-10-7px">{{ atFoxCapitalInves }}</p>
          </div>
          <div class="flex-col-14">
            <div class="group-237" :style="{ 'background-image': 'url(' + group237 + ')' }">
              <div class="overlap-group2-10" :style="{ 'background-image': 'url(' + overlapGroup2 + ')' }">
                <img class="group-6-1" :src="group61" />
              </div>
            </div>
            <div class="investment-advisory-services montserrat-bold-eerie-black-15-5px">
              {{ investmentAdvisoryServices }}
            </div>
            <p class="surname-14 montserrat-normal-black-10-7px">{{ surname }}</p>
          </div>
        </div>
        <div class="group-214">
          <div class="flex-col-15">
            <img class="group-4-3" :src="group42" />
            <div class="venture-capital-funding montserrat-bold-eerie-black-15-2px">{{ ventureCapitalFunding }}</div>
            <p class="with-our-growing-inv montserrat-normal-black-10-5px">{{ withOurGrowingInv }}</p>
          </div>
          <div class="flex-col-16">
            <div class="group-239">
              <div class="overlap-group-27">
                <img class="rectangle-6" :src="rectangle60" /><img class="rectangle-6-1" :src="rectangle61" /><img
                  class="group-5-2"
                  :src="group5"
                />
              </div>
            </div>
            <div class="construction montserrat-bold-eerie-black-15-2px">{{ construction }}</div>
            <p class="in-order-to-maintain montserrat-normal-black-10-5px">{{ inOrderToMaintain }}</p>
          </div>
          <div class="flex-col-17">
            <div class="group-240">
              <div class="overlap-group-27">
                <img class="rectangle-6" :src="rectangle62" /><img class="rectangle-6-1" :src="rectangle63" /><img
                  class="group-6-2"
                  :src="group62"
                />
              </div>
            </div>
            <div class="advertising montserrat-bold-eerie-black-15-2px">{{ advertising }}</div>
            <p class="lorem-ipsum-dolor-si-2 montserrat-normal-black-10-5px">{{ loremIpsumDolorSi }}</p>
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
  name: "Services",
  components: {
    Group23432,
  },
  props: [
    "number",
    "foxCapitalLogo2",
    "place",
    "aboutUs",
    "services",
    "investment",
    "serContainer",
    "checkOutOurServic",
    "weHaveRangeOfSer",
    "ourServices",
    "justAsDiverseAsT",
    "group235",
    "overlapGroup1",
    "group41",
    "realEstateInvestmentServices",
    "withYearsOfExperi",
    "group236",
    "overlapGroup",
    "jointVentures",
    "atFoxCapitalInves",
    "group237",
    "overlapGroup2",
    "group61",
    "investmentAdvisoryServices",
    "surname",
    "group42",
    "ventureCapitalFunding",
    "withOurGrowingInv",
    "rectangle60",
    "rectangle61",
    "group5",
    "construction",
    "inOrderToMaintain",
    "rectangle62",
    "rectangle63",
    "group62",
    "advertising",
    "loremIpsumDolorSi",
    "group23432Props",
  ],
};
</script>

<style>
.services-7 {
  align-items: flex-start;
  background-color: var(--concrete);
  display: flex;
  height: 2472px;
  overflow: hidden;
  width: 1200px;
}

.number {
  letter-spacing: 0.32px;
  line-height: 16.2px;
  margin-left: -22px;
  margin-top: 345px;
  min-height: 16px;
  min-width: 14px;
  text-align: center;
  white-space: nowrap;
}

.flex-col-11 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  margin-top: 83.88px;
  min-height: 2353px;
  position: relative;
  width: 1204px;
}

.flex-row-14 {
  align-items: center;
  display: flex;
  margin-right: 21.8px;
  min-width: 1045px;
}

.fox-capital-logo-2-6 {
  cursor: pointer;
  height: 62px;
  object-fit: cover;
  width: 141px;
}

.place-10 {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  margin-left: 384px;
  margin-top: 0.53px;
  min-height: 20px;
  white-space: nowrap;
  width: 48px;
}

.about-us-9 {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  margin-left: 76px;
  margin-top: 0.25px;
  min-height: 20px;
  min-width: 73px;
  opacity: 0.9;
  white-space: nowrap;
}

.frame-35639-2 {
  align-self: flex-start;
  background-color: var(--desert-storm);
  border-radius: 10.19px;
  box-shadow: 6.8px 6.8px 13.59px #00000017, -6.8px -6.8px 13.59px #ffffff;
  display: flex;
  height: 58px;
  margin-left: 53px;
  margin-top: 0.12px;
  width: 124px;
}

.services-8 {
  height: 20px;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  margin-left: 29px;
  margin-top: 19px;
  opacity: 0.9;
  white-space: nowrap;
  width: 66px;
}

.investment-6 {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  margin-left: 56px;
  margin-top: 0.53px;
  min-height: 20px;
  white-space: nowrap;
  width: 91px;
}

.ser-container {
  align-items: flex-end;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  margin-right: 4px;
  margin-top: 61px;
  min-height: 500px;
  padding: 170.3px 72px;
  width: 1200px;
}

.check-out-our-servic {
  color: var(--cape-cod);
  font-family: var(--font-family-montserrat);
  font-size: 32.5px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 46.1px;
  margin-top: 1px;
  min-height: 99px;
  text-align: center;
  width: 549px;
}

.we-have-range-of-ser {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 17.3px;
  font-weight: 400;
  letter-spacing: 0.52px;
  line-height: 26px;
  margin-right: 23.08px;
  margin-top: 12px;
  min-height: 48px;
  text-align: center;
  width: 503px;
}

.our-services {
  letter-spacing: 0;
  line-height: 79.5px;
  margin-left: 7px;
  margin-top: 65px;
  min-height: 79px;
  min-width: 347px;
  white-space: nowrap;
}

.just-as-diverse-as-t {
  letter-spacing: 0.72px;
  line-height: 36.1px;
  margin-left: 7px;
  margin-top: 17px;
  min-height: 66px;
  text-align: center;
  width: 1045px;
}

.group-213 {
  align-items: flex-start;
  display: flex;
  height: 355px;
  margin-left: 8.01px;
  margin-top: 120px;
  min-width: 1040px;
}

.flex-col-12 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: -0.25px;
  min-height: 355px;
  width: 317px;
}

.group-235-1 {
  align-items: flex-end;
  background-size: 100% 100%;
  cursor: pointer;
  display: flex;
  height: 195px;
  justify-content: flex-end;
  margin-right: 5.97px;
  min-width: 195px;
  transition: all 0.5s ease-out;
}

.group-235-1:hover,
.group-236:hover,
.group-237:hover,
.group-4-3:hover,
.group-239:hover,
.group-240:hover {
  transform: scale(1.1);
}

.overlap-group1-22 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 188px;
  margin-bottom: -7.93px;
  min-width: 188px;
  padding: 61.4px 60.6px;
}

.group-4-2 {
  height: 41px;
  width: 43px;
}

.real-estate-investment-services {
  letter-spacing: 0.08px;
  line-height: 20.7px;
  margin-right: 6.56px;
  margin-top: 45px;
  min-height: 21px;
  white-space: nowrap;
  width: 263px;
}

.with-years-of-experi {
  letter-spacing: 0.32px;
  line-height: 16.2px;
  margin-top: 10px;
  min-height: 85px;
  text-align: center;
  width: 317px;
}

.flex-col-13 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 27px;
  margin-top: -0.25px;
  min-height: 343px;
  width: 323px;
}

.group-236 {
  align-items: flex-end;
  background-size: 100% 100%;
  cursor: pointer;
  display: flex;
  height: 195px;
  justify-content: flex-end;
  margin-left: 16.11px;
  min-width: 195px;
  transition: all 0.5s ease-out;
}

.overlap-group-28 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 188px;
  margin-bottom: -7.93px;
  min-width: 188px;
  padding: 61.2px 50.4px;
}

.vector-22 {
  height: 40px;
  width: 58px;
}

.joint-ventures {
  letter-spacing: 0.08px;
  line-height: 20.7px;
  margin-left: 16.11px;
  margin-top: 45px;
  min-height: 21px;
  white-space: nowrap;
  width: 119px;
}

.at-fox-capital-inves {
  letter-spacing: 0.32px;
  line-height: 16.2px;
  margin-top: 10px;
  min-height: 73px;
  text-align: center;
  width: 323px;
}

.flex-col-14 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 17px;
  margin-top: -0.25px;
  min-height: 343px;
  width: 344px;
}

.group-237 {
  align-items: flex-end;
  background-size: 100% 100%;
  cursor: pointer;
  display: flex;
  height: 195px;
  justify-content: flex-end;
  margin-left: 28.64px;
  min-width: 195px;
  transition: all 0.5s ease-out;
}

.overlap-group2-10 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 188px;
  margin-bottom: -7.93px;
  min-width: 188px;
  padding: 61.1px 60.1px;
}

.group-6-1 {
  height: 42px;
  width: 44px;
}

.investment-advisory-services {
  letter-spacing: 0.08px;
  line-height: 20.7px;
  margin-left: 19.69px;
  margin-top: 45px;
  min-height: 21px;
  white-space: nowrap;
  width: 243px;
}

.surname-14 {
  letter-spacing: 0.32px;
  line-height: 16.2px;
  margin-top: 10px;
  min-height: 73px;
  text-align: center;
  width: 344px;
}

.group-214 {
  align-items: flex-end;
  display: flex;
  height: 338px;
  margin-left: 8px;
  margin-top: 82px;
  min-width: 1016px;
}

.flex-col-15 {
  align-items: center;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: -0.21px;
  min-height: 324px;
  width: 338px;
}

.group-4-3 {
  cursor: pointer;
  height: 199px;
  margin-right: 24.53px;
  transition: all 0.5s ease-out;
  width: 199px;
}

.venture-capital-funding {
  letter-spacing: 0.08px;
  line-height: 20.3px;
  margin-right: 33.29px;
  margin-top: 40px;
  min-height: 20px;
  white-space: nowrap;
  width: 197px;
}

.with-our-growing-inv {
  letter-spacing: 0.32px;
  line-height: 15.8px;
  margin-top: 7px;
  min-height: 58px;
  text-align: center;
  width: 338px;
}

.flex-col-16 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  margin-left: 13px;
  min-height: 338px;
  width: 319px;
}

.group-239 {
  align-items: flex-end;
  cursor: pointer;
  display: flex;
  height: 190px;
  justify-content: flex-end;
  margin-right: 14.02px;
  min-width: 190px;
  transition: all 0.5s ease-out;
}

.overlap-group-27 {
  height: 199px;
  margin-bottom: -8.48px;
  position: relative;
  width: 199px;
}

.rectangle-6 {
  height: 190px;
  left: 0;
  position: absolute;
  top: 0;
  width: 191px;
}

.rectangle-6-1 {
  height: 184px;
  left: 15px;
  position: absolute;
  top: 15px;
  width: 184px;
}

.group-5-2 {
  height: 37px;
  left: 70px;
  position: absolute;
  top: 77px;
  width: 50px;
}

.construction {
  letter-spacing: 0.08px;
  line-height: 20.3px;
  margin-right: 14.02px;
  margin-top: 48px;
  min-height: 17px;
  white-space: nowrap;
  width: 113px;
}

.in-order-to-maintain {
  letter-spacing: 0.32px;
  line-height: 15.8px;
  margin-top: 11px;
  min-height: 71px;
  text-align: center;
  width: 319px;
}

.flex-col-17 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  margin-left: 30px;
  min-height: 338px;
  width: 304px;
}

.group-240 {
  align-items: flex-end;
  cursor: pointer;
  display: flex;
  height: 190px;
  justify-content: flex-end;
  margin-left: 0.58px;
  min-width: 190px;
  transition: all 0.5s ease-out;
}

.group-6-2 {
  height: 41px;
  left: 74px;
  position: absolute;
  top: 75px;
  width: 43px;
}

.advertising {
  letter-spacing: 0.08px;
  line-height: 20.3px;
  margin-left: 7.59px;
  margin-top: 48px;
  min-height: 20px;
  white-space: nowrap;
  width: 93px;
}

.lorem-ipsum-dolor-si-2 {
  letter-spacing: 0.32px;
  line-height: 15.8px;
  margin-top: 7px;
  min-height: 71px;
  text-align: center;
  width: 304px;
}
</style>
