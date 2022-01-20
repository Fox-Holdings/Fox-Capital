<template>
  <div class="container-center-horizontal">
    <div class="investment-landing-page screen">
      <div class="flex-row-6">
        <router-link to="/home-page" className="align-self-flex-start"
          ><img class="fox-capital-logo-2-3" :src="foxCapitalLogo2" /></router-link
        ><router-link to="/home-page">
          <div class="place-6 montserrat-bold-storm-dust-22px">{{ place }}</div> </router-link
        ><router-link to="/about-us">
          <div class="about-us-4 montserrat-bold-fuscous-gray-22px">{{ aboutUs }}</div> </router-link
        ><router-link to="/services">
          <div class="services-3 montserrat-bold-storm-dust-22px">{{ services }}</div>
        </router-link>
        <div class="overlap-group7-2">
          <div class="investment-3 montserrat-bold-orange-peel-22px">{{ investment }}</div>
        </div>
      </div>
      <div class="overlap-group6-2" :style="{ 'background-image': 'url(' + overlapGroup6 + ')' }">
        <div class="surname-4">{{ surname }}</div>
        <div class="with-real-estate-inv-1">{{ withRealEstateInv }}</div>
      </div>
      <div class="group-282">
        <div class="overlap-group3-2" :style="{ 'background-image': 'url(' + overlapGroup3 + ')' }">
          <div class="search-investment">{{ searchInvestment }}</div>
        </div>
        <div class="group-98" :style="{ 'background-image': 'url(' + group98 + ')' }">
          <div class="group-85">
            <div class="overlap-group-14" :style="{ 'background-image': 'url(' + overlapGroup + ')' }">
              <img class="group-80" :src="group80" />
            </div>
          </div>
        </div>
      </div>
      <div class="overlap-group-container-2">
        <div class="overlap-group4-4">
          <group23432 :group217Props="group23432Props.group217Props" :group217Props2="group23432Props.group217Props2" />
          <img class="rectangle-131" :src="rectangle131" /><img class="rectangle-132" :src="rectangle132" /><img
            class="rectangle-133"
            :src="rectangle133"
          />
          <div class="wondaland montserrat-bold-white-30-6px">{{ wondaland }}</div>
          <div class="sea-facing-spacious-3 montserrat-normal-white-15-3px">{{ seaFacingSpacious }}</div>
          <img class="rectangle-137" :src="rectangle137" /><img class="rectangle-1" :src="rectangle139" /><img
            class="rectangle-1"
            :src="rectangle141"
          />
          <div class="d-adela-suites montserrat-bold-white-31-6px">{{ dadelaSuites }}</div>
          <div class="sea-facing-luxurious">{{ seaFacingLuxurious }}</div>
          <img class="rectangle-163-2" :src="rectangle163" /><img
            class="rectangle-164-2"
            :src="rectangle164"
          /><router-link to="/landthryve-1"><img class="rectangle-165-1" :src="rectangle165" /></router-link>
          <div class="land-thryve montserrat-bold-white-30-7px">{{ landthryve }}</div>
          <div class="save-now-acquire-later montserrat-normal-white-15-4px">{{ saveNowAcquireLater }}</div>
        </div>
        <div class="overlap-group5-3">
          <img class="rectangle-134" :src="rectangle134" /><img class="rectangle-135" :src="rectangle135" /><router-link
            to="/investment-description-page"
            ><img class="rectangle-136" :src="rectangle136"
          /></router-link>
          <div class="country-vest montserrat-bold-white-30-6px">{{ countryvest }}</div>
          <div class="invest-rejoice montserrat-normal-white-15-3px">{{ investRejoice }}</div>
          <img class="rectangle-138" :src="rectangle138" /><img
            class="rectangle-140-4"
            :src="rectangle140"
          /><router-link to="/land-trust"><img class="rectangle-142" :src="rectangle142" /></router-link>
          <div class="land-trust montserrat-bold-white-31-6px">{{ landtrust }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Group23432 from "./Group23432";
export default {
  name: "InvestmentLandingPage",
  components: {
    Group23432,
  },
  props: [
    "foxCapitalLogo2",
    "place",
    "aboutUs",
    "services",
    "investment",
    "overlapGroup6",
    "surname",
    "withRealEstateInv",
    "overlapGroup3",
    "searchInvestment",
    "group98",
    "overlapGroup",
    "group80",
    "rectangle131",
    "rectangle132",
    "rectangle133",
    "wondaland",
    "seaFacingSpacious",
    "rectangle137",
    "rectangle139",
    "rectangle141",
    "dadelaSuites",
    "seaFacingLuxurious",
    "rectangle163",
    "rectangle164",
    "rectangle165",
    "landthryve",
    "saveNowAcquireLater",
    "rectangle134",
    "rectangle135",
    "rectangle136",
    "countryvest",
    "investRejoice",
    "rectangle138",
    "rectangle140",
    "rectangle142",
    "landtrust",
    "group23432Props",
  ],
};
</script>

<style>
.investment-landing-page {
  align-items: center;
  background-color: var(--concrete);
  display: flex;
  flex-direction: column;
  height: 2776px;
  overflow: hidden;
  padding: 81.9px 0;
  width: 1200px;
}

.flex-row-6 {
  align-items: center;
  display: flex;
  margin-right: 3.54px;
  min-width: 1060px;
}

.fox-capital-logo-2-3 {
  align-self: flex-start;
  cursor: pointer;
  height: 62px;
  object-fit: cover;
  width: 141px;
}

.place-6 {
  cursor: pointer;
  letter-spacing: 0.11px;
  line-height: 29.3px;
  margin-left: 149px;
  margin-top: 0.12px;
  min-height: 29px;
  min-width: 70px;
  white-space: nowrap;
}

.about-us-4 {
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

.services-3 {
  cursor: pointer;
  letter-spacing: 0.11px;
  line-height: 29.3px;
  margin-left: 106px;
  margin-top: 0.12px;
  min-height: 29px;
  min-width: 97px;
  white-space: nowrap;
}

.overlap-group7-2 {
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

.investment-3 {
  letter-spacing: 0.11px;
  line-height: 29.3px;
  min-height: 29px;
  opacity: 0.9;
  white-space: nowrap;
}

.overlap-group6-2 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  margin-top: 58px;
  min-height: 405px;
  padding: 47px 40px;
  width: 1200px;
}

.surname-4 {
  color: var(--cape-cod);
  font-family: var(--font-family-montserrat);
  font-size: 42px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 59.6px;
  min-height: 120px;
  text-align: center;
  width: 680px;
}

.with-real-estate-inv-1 {
  color: var(--eerie-black-3);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-m);
  font-weight: 400;
  letter-spacing: 0.72px;
  line-height: 36.1px;
  margin-left: 26px;
  margin-top: 28px;
  min-height: 161px;
  text-align: center;
  width: 669px;
}

.group-282 {
  align-items: flex-start;
  display: flex;
  height: 99px;
  margin-left: 3px;
  margin-top: 81px;
  min-width: 951px;
}

.overlap-group3-2 {
  align-items: flex-end;
  align-self: center;
  background-size: 100% 100%;
  display: flex;
  height: 71px;
  margin-top: 1.6px;
  min-width: 768px;
  padding: 16.3px 45.4px;
}

.search-investment {
  color: var(--nobel);
  font-family: var(--font-family-montserrat);
  font-size: 18.7px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 26.5px;
  min-height: 30px;
  white-space: nowrap;
  width: 403px;
}

.group-98 {
  background-size: 100% 100%;
  display: flex;
  height: 100px;
  margin-left: 82px;
  margin-top: -0.09px;
  width: 100px;
}

.group-85 {
  align-items: flex-start;
  display: flex;
  height: 92.77px;
  justify-content: flex-end;
  margin-left: 3.4px;
  margin-top: 3.4px;
  min-width: 92.77px;
}

.overlap-group-14 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 178px;
  margin-top: -25.89px;
  min-width: 178px;
  padding: 44.6px 44.6px;
}

.group-80 {
  height: 52px;
  width: 52px;
}

.overlap-group-container-2 {
  height: 1900px;
  margin-left: 4px;
  margin-top: 37px;
  position: relative;
  width: 1204px;
}

.overlap-group4-4 {
  height: 1900px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1204px;
}

.rectangle-131 {
  height: 443px;
  left: 13px;
  position: absolute;
  top: 0;
  width: 563px;
}

.rectangle-132 {
  height: 354px;
  left: 67px;
  position: absolute;
  top: 55px;
  width: 474px;
}

.rectangle-133 {
  height: 354px;
  left: 66px;
  position: absolute;
  top: 55px;
  width: 474px;
}

.wondaland {
  left: 91px;
  letter-spacing: 0.15px;
  line-height: 40.9px;
  position: absolute;
  top: 318px;
  width: 473px;
}

.sea-facing-spacious-3 {
  left: 91px;
  letter-spacing: 0.46px;
  line-height: 23px;
  position: absolute;
  top: 360px;
  width: 473px;
}

.rectangle-137 {
  height: 447px;
  left: 9px;
  position: absolute;
  top: 398px;
  width: 567px;
}

.rectangle-1 {
  height: 354px;
  left: 65px;
  position: absolute;
  top: 455px;
  width: 474px;
}

.d-adela-suites {
  left: 90px;
  letter-spacing: 0.16px;
  line-height: 42.2px;
  position: absolute;
  top: 726px;
  width: 473px;
}

.sea-facing-luxurious {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 15.8px;
  font-weight: 400;
  left: 90px;
  letter-spacing: 0.47px;
  line-height: 23.8px;
  position: absolute;
  top: 770px;
  width: 473px;
}

.rectangle-163-2 {
  height: 443px;
  left: 11px;
  position: absolute;
  top: 800px;
  width: 563px;
}

.rectangle-164-2 {
  height: 354px;
  left: 64px;
  position: absolute;
  top: 855px;
  width: 474px;
}

.rectangle-165-1 {
  cursor: pointer;
  height: 354px;
  left: 64px;
  position: absolute;
  top: 855px;
  width: 475px;
}

.land-thryve {
  left: 90px;
  letter-spacing: 0.15px;
  line-height: 41px;
  position: absolute;
  top: 1118px;
  width: 473px;
}

.save-now-acquire-later {
  left: 90px;
  letter-spacing: 0.46px;
  line-height: 23.1px;
  position: absolute;
  top: 1160px;
  width: 473px;
}

.overlap-group5-3 {
  height: 1079px;
  left: 576px;
  position: absolute;
  top: 0;
  width: 581px;
}

.rectangle-134 {
  height: 462px;
  left: 0;
  position: absolute;
  top: 0;
  width: 581px;
}

.rectangle-135 {
  height: 354px;
  left: 54px;
  position: absolute;
  top: 55px;
  width: 474px;
}

.rectangle-136 {
  cursor: pointer;
  height: 354px;
  left: 53px;
  position: absolute;
  top: 54px;
  width: 474px;
}

.country-vest {
  left: 78px;
  letter-spacing: 0.15px;
  line-height: 40.9px;
  position: absolute;
  top: 318px;
  white-space: nowrap;
  width: 215px;
}

.invest-rejoice {
  left: 78px;
  letter-spacing: 0.46px;
  line-height: 23px;
  position: absolute;
  top: 360px;
  white-space: nowrap;
  width: 163px;
}

.rectangle-138 {
  height: 447px;
  left: 14px;
  position: absolute;
  top: 398px;
  width: 567px;
}

.rectangle-140-4 {
  height: 354px;
  left: 70px;
  position: absolute;
  top: 445px;
  width: 474px;
}

.rectangle-142 {
  cursor: pointer;
  height: 353px;
  left: 69px;
  position: absolute;
  top: 445px;
  width: 473px;
}

.land-trust {
  left: 95px;
  letter-spacing: 0.16px;
  line-height: 42.2px;
  position: absolute;
  top: 726px;
  width: 473px;
}
</style>
