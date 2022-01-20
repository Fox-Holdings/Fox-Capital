<template>
  <div class="container-center-horizontal">
    <div class="tablet2 screen">
      <div class="flex-row-11">
        <router-link to="/tablet"><img class="fox-capital-logo-2-5" :src="foxCapitalLogo2" /></router-link>
        <div class="flex-col-9">
          <div class="flex-row-12">
            <router-link to="/tablet">
              <div class="place-9 montserrat-bold-storm-dust-14-9px">{{ place }}</div> </router-link
            ><router-link to="/tablet22">
              <div class="about-us-8 montserrat-bold-fuscous-gray-14-9px">{{ aboutUs }}</div>
            </router-link>
          </div>
          <div class="flex-row-13">
            <router-link to="/tablet2-2">
              <div class="services-6 montserrat-bold-storm-dust-14-9px-2">{{ services }}</div>
            </router-link>
            <div class="overlap-group6-4">
              <div class="investment-5 montserrat-bold-orange-peel-14-9px-2">{{ investment }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-col-10">
        <div class="overlap-group4-6" :style="{ 'background-image': 'url(' + overlapGroup4 + ')' }">
          <div class="surname-13 montserrat-semi-bold-cape-cod-26-2px">{{ surname }}</div>
          <p class="with-real-estate-inv-2 montserrat-normal-eerie-black-15px">{{ withRealEstateInv }}</p>
        </div>
        <div class="group-282-1">
          <div class="overlap-group3-3" :style="{ 'background-image': 'url(' + overlapGroup3 + ')' }">
            <div class="search-investment-1 montserrat-medium-nobel-12-9px">{{ searchInvestment }}</div>
          </div>
          <div class="group-98-1" :style="{ 'background-image': 'url(' + group98 + ')' }">
            <div class="group-85-1">
              <div class="overlap-group-26" :style="{ 'background-image': 'url(' + overlapGroup + ')' }">
                <img class="group-80-1" :src="group80" />
              </div>
            </div>
          </div>
        </div>
        <div class="overlap-group5-5">
          <img class="rectangle-131-2" :src="rectangle131" /><img class="rectangle-134-2" :src="rectangle134" /><img
            class="rectangle-132-2"
            :src="rectangle132"
          /><img class="rectangle-135-1" :src="rectangle135" /><img class="rectangle-133-2" :src="rectangle133" />
          <div class="wondaland-1 montserrat-bold-white-19-2px">{{ wondaland }}</div>
          <div class="sea-facing-spacious-4 montserrat-normal-white-9-6px">{{ seaFacingSpacious }}</div>
          <router-link to="/investment-description-page"
            ><img class="rectangle-136-2" :src="rectangle136"
          /></router-link>
          <div class="country-vest-1 montserrat-bold-white-19-2px">{{ countryvest }}</div>
          <div class="invest-rejoice-1 montserrat-normal-white-9-6px">{{ investRejoice }}</div>
          <img class="rectangle-137-1" :src="rectangle137" /><img class="rectangle-138-2" :src="rectangle138" /><img
            class="rectangle-139"
            :src="rectangle139"
          /><img class="rectangle-140-5" :src="rectangle140" /><img
            class="rectangle-141"
            :src="rectangle141"
          /><router-link to="/land-trust"><img class="rectangle-142-1" :src="rectangle142" /></router-link>
          <div class="d-adela-suites-1 montserrat-bold-white-19-8px">{{ dadelaSuites }}</div>
          <div class="land-trust-1 montserrat-bold-white-19-8px">{{ landtrust }}</div>
          <div class="sea-facing-luxurious-1 montserrat-normal-white-9-9px">{{ seaFacingLuxurious }}</div>
          <img class="rectangle-163-4" :src="rectangle163" /><img
            class="rectangle-164-4"
            :src="rectangle164"
          /><router-link to="/landthryve"><img class="rectangle-165-2" :src="rectangle165" /></router-link>
          <div class="land-thryve-1 montserrat-bold-white-19-3px">{{ landthryve }}</div>
          <div class="save-now-acquire-later-1 montserrat-normal-white-9-6px-2">{{ saveNowAcquireLater }}</div>
        </div>
        <group234
          :overlapGroup="group234Props.overlapGroup"
          :overlapGroup1="group234Props.overlapGroup1"
          :className="group234Props.className"
        />
        <img class="vector-3-2" :src="vector3" />
      </div>
    </div>
  </div>
</template>

<script>
import Group234 from "./Group234";
export default {
  name: "Tablet2",
  components: {
    Group234,
  },
  props: [
    "foxCapitalLogo2",
    "place",
    "aboutUs",
    "services",
    "investment",
    "overlapGroup4",
    "surname",
    "withRealEstateInv",
    "overlapGroup3",
    "searchInvestment",
    "group98",
    "overlapGroup",
    "group80",
    "rectangle131",
    "rectangle134",
    "rectangle132",
    "rectangle135",
    "rectangle133",
    "wondaland",
    "seaFacingSpacious",
    "rectangle136",
    "countryvest",
    "investRejoice",
    "rectangle137",
    "rectangle138",
    "rectangle139",
    "rectangle140",
    "rectangle141",
    "rectangle142",
    "dadelaSuites",
    "landtrust",
    "seaFacingLuxurious",
    "rectangle163",
    "rectangle164",
    "rectangle165",
    "landthryve",
    "saveNowAcquireLater",
    "vector3",
    "group234Props",
  ],
};
</script>

<style>
.tablet2 {
  align-items: flex-start;
  background-color: var(--concrete);
  display: flex;
  flex-direction: column;
  height: 1878px;
  overflow: hidden;
  padding: 81.9px 0;
  width: 750px;
}

.flex-row-11 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  height: 87px;
  margin-right: 25.54px;
  min-width: 588px;
}

.fox-capital-logo-2-5 {
  cursor: pointer;
  height: 62px;
  object-fit: cover;
  width: 141px;
}

.flex-col-9 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  margin-left: 235px;
  min-height: 87px;
  width: 212px;
}

.flex-row-12 {
  align-items: flex-start;
  display: flex;
  height: 20px;
  min-width: 189px;
}

.place-9 {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  min-height: 20px;
  white-space: nowrap;
  width: 48px;
}

.about-us-8 {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  margin-left: 68px;
  min-height: 20px;
  opacity: 0.9;
  white-space: nowrap;
}

.flex-row-13 {
  align-items: center;
  display: flex;
  margin-top: 20px;
  min-width: 212px;
}

.services-6 {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  margin-bottom: 7.16px;
  min-height: 20px;
  min-width: 66px;
  white-space: nowrap;
}

.overlap-group6-4 {
  align-items: flex-start;
  background-color: var(--desert-storm);
  border-radius: 8.2px;
  box-shadow: 5.47px 5.47px 10.94px #00000017, -5.47px -5.47px 10.94px #ffffff;
  display: flex;
  height: 46px;
  margin-left: 41px;
  min-width: 105px;
  padding: 12.9px 4.2px;
}

.investment-5 {
  letter-spacing: 0.07px;
  line-height: 19.9px;
  min-height: 20px;
  opacity: 0.9;
  white-space: nowrap;
}

.flex-col-10 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: -3px;
  margin-top: 21px;
  min-height: 5638px;
  position: relative;
  width: 1923px;
}

.overlap-group4-6 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  margin-left: 3px;
  min-height: 254px;
  padding: 29.8px 25px;
  width: 750px;
}

.surname-13 {
  letter-spacing: 0;
  line-height: 37.2px;
  min-height: 75px;
  text-align: center;
  width: 425px;
}

.with-real-estate-inv-2 {
  letter-spacing: 0.45px;
  line-height: 22.6px;
  margin-left: 16.25px;
  margin-top: 18px;
  min-height: 101px;
  text-align: center;
  width: 418px;
}

.group-282-1 {
  align-items: flex-start;
  display: flex;
  margin-left: 50px;
  margin-top: 37px;
  min-width: 658px;
}

.overlap-group3-3 {
  align-items: flex-end;
  align-self: center;
  background-size: 100% 100%;
  display: flex;
  height: 50px;
  margin-top: 1.1px;
  min-width: 531px;
  padding: 11.8px 31.4px;
}

.search-investment-1 {
  letter-spacing: 0;
  line-height: 18.3px;
  min-height: 21px;
  white-space: nowrap;
  width: 279px;
}

.group-98-1 {
  background-size: 100% 100%;
  display: flex;
  height: 69px;
  margin-left: 56px;
  margin-top: -0.17px;
  width: 69px;
}

.group-85-1 {
  align-items: flex-start;
  display: flex;
  height: 64.13px;
  justify-content: flex-end;
  margin-left: 2.3px;
  margin-top: 2.3px;
  min-width: 64.13px;
}

.overlap-group-26 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 124px;
  margin-top: -17.95px;
  min-width: 123px;
  padding: 30.9px 30.7px;
}

.group-80-1 {
  height: 36px;
  width: 36px;
}

.overlap-group5-5 {
  height: 950px;
  margin-left: 20.95px;
  margin-top: 37px;
  position: relative;
  width: 720px;
}

.rectangle-131-2 {
  height: 278px;
  left: 2px;
  position: absolute;
  top: 0;
  width: 354px;
}

.rectangle-134-2 {
  height: 290px;
  left: 355px;
  position: absolute;
  top: 0;
  width: 365px;
}

.rectangle-132-2 {
  height: 222px;
  left: 36px;
  position: absolute;
  top: 34px;
  width: 298px;
}

.rectangle-135-1 {
  height: 222px;
  left: 389px;
  position: absolute;
  top: 34px;
  width: 298px;
}

.rectangle-133-2 {
  height: 223px;
  left: 35px;
  position: absolute;
  top: 34px;
  width: 298px;
}

.wondaland-1 {
  left: 51px;
  letter-spacing: 0.1px;
  line-height: 25.7px;
  position: absolute;
  top: 199px;
  width: 297px;
}

.sea-facing-spacious-4 {
  left: 51px;
  letter-spacing: 0.29px;
  line-height: 14.5px;
  position: absolute;
  top: 222px;
  width: 297px;
}

.rectangle-136-2 {
  cursor: pointer;
  height: 222px;
  left: 389px;
  position: absolute;
  top: 34px;
  width: 298px;
}

.country-vest-1 {
  left: 405px;
  letter-spacing: 0.1px;
  line-height: 25.7px;
  position: absolute;
  top: 199px;
  white-space: nowrap;
  width: 135px;
}

.invest-rejoice-1 {
  left: 405px;
  letter-spacing: 0.29px;
  line-height: 14.5px;
  position: absolute;
  top: 226px;
  white-space: nowrap;
  width: 102px;
}

.rectangle-137-1 {
  height: 280px;
  left: 0;
  position: absolute;
  top: 250px;
  width: 355px;
}

.rectangle-138-2 {
  height: 280px;
  left: 364px;
  position: absolute;
  top: 250px;
  width: 356px;
}

.rectangle-139 {
  height: 222px;
  left: 35px;
  position: absolute;
  top: 286px;
  width: 298px;
}

.rectangle-140-5 {
  height: 222px;
  left: 399px;
  position: absolute;
  top: 279px;
  width: 298px;
}

.rectangle-141 {
  height: 223px;
  left: 34px;
  position: absolute;
  top: 285px;
  width: 298px;
}

.rectangle-142-1 {
  cursor: pointer;
  height: 222px;
  left: 398px;
  position: absolute;
  top: 279px;
  width: 298px;
}

.d-adela-suites-1 {
  left: 51px;
  letter-spacing: 0.1px;
  line-height: 26.5px;
  position: absolute;
  top: 456px;
  width: 297px;
}

.land-trust-1 {
  left: 415px;
  letter-spacing: 0.1px;
  line-height: 26.5px;
  position: absolute;
  top: 456px;
  width: 297px;
}

.sea-facing-luxurious-1 {
  left: 51px;
  letter-spacing: 0.3px;
  line-height: 14.9px;
  position: absolute;
  top: 483px;
  width: 297px;
}

.rectangle-163-4 {
  height: 278px;
  left: 0;
  position: absolute;
  top: 502px;
  width: 355px;
}

.rectangle-164-4 {
  height: 222px;
  left: 34px;
  position: absolute;
  top: 537px;
  width: 298px;
}

.rectangle-165-2 {
  cursor: pointer;
  height: 223px;
  left: 34px;
  position: absolute;
  top: 536px;
  width: 298px;
}

.land-thryve-1 {
  left: 50px;
  letter-spacing: 0.1px;
  line-height: 25.7px;
  position: absolute;
  top: 702px;
  width: 297px;
}

.save-now-acquire-later-1 {
  left: 50px;
  letter-spacing: 0.29px;
  line-height: 14.5px;
  position: absolute;
  top: 728px;
  width: 297px;
}

.vector-3-2 {
  height: 1065px;
  margin-top: 2935px;
  width: 1923px;
}
</style>
