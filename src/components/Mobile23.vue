<template>
  <div class="container-center-horizontal">
    <div class="mobile2-2 screen">
      <div class="flex-row-39">
        <router-link to="/mobile"><img class="fox-capital-logo-2-19" :src="foxCapitalLogo2" /></router-link>
        <div class="flex-col-41">
          <router-link to="/tablet">
            <div class="place-28 montserrat-bold-storm-dust-6-4px">{{ place }}</div> </router-link
          ><router-link to="/mobile2">
            <div class="about-us-22 montserrat-bold-fuscous-gray-6-4px">{{ aboutUs }}</div>
          </router-link>
        </div>
      </div>
      <div class="flex-col-42">
        <router-link to="/services">
          <div class="services-21 montserrat-bold-fuscous-gray-6-4px">{{ services }}</div>
        </router-link>
        <div class="frame-35639-7">
          <div class="investment-20 montserrat-bold-orange-peel-6-4px">{{ investment }}</div>
        </div>
        <div class="surname-27 montserrat-semi-bold-cape-cod-26-2px">{{ surname }}</div>
        <div class="overlap-group3-13">
          <group23422 :className="group23422Props.className" />
          <group282 />
          <img class="rectangle-131-6" :src="rectangle131" /><img class="rectangle-13-1" :src="rectangle132" /><img
            class="rectangle-13-1"
            :src="rectangle133"
          />
          <div class="wondaland-3 montserrat-bold-white-16-8px">{{ wondaland }}</div>
          <div class="sea-facing-spacious-12 montserrat-normal-white-8-4px">{{ seaFacingSpacious }}</div>
          <img class="rectangle-137-3" :src="rectangle137" /><img class="rectangle-1-2" :src="rectangle139" /><img
            class="rectangle-1-2"
            :src="rectangle141"
          />
          <div class="d-adela-suites-3 montserrat-bold-white-17-3px">{{ dadelaSuites }}</div>
          <div class="sea-facing-luxurious-3 montserrat-normal-white-8-6px">{{ seaFacingLuxurious }}</div>
          <img class="rectangle-163-9" :src="rectangle163" /><img
            class="rectangle-164-7"
            :src="rectangle164"
          /><router-link to="/landthryve"><img class="rectangle-165-7" :src="rectangle165" /></router-link>
          <div class="land-thryve-5 montserrat-bold-white-16-8px-2">{{ landthryve }}</div>
          <div class="save-now-acquire-later-5 montserrat-normal-white-8-4px-2">{{ saveNowAcquireLater }}</div>
          <img class="rectangle-134-6" :src="rectangle134" /><img
            class="rectangle-135-4"
            :src="rectangle135"
          /><router-link to="/investment-description-page"
            ><img class="rectangle-136-6" :src="rectangle136"
          /></router-link>
          <div class="country-vest-3 montserrat-bold-white-19-2px">{{ countryvest }}</div>
          <div class="invest-rejoice-3 montserrat-normal-white-9-6px">{{ investRejoice }}</div>
          <img class="rectangle-138-5" :src="rectangle138" /><img class="rectangle-140-7" :src="rectangle140" /><img
            class="rectangle-142-3"
            :src="rectangle142"
          />
          <div class="land-trust-4 montserrat-bold-white-19-8px">{{ landtrust }}</div>
        </div>
        <div class="footer-21">
          <div class="frame-35632-19 montserrat-normal-black-3-9px">
            <div class="privacy-policy-19">{{ privacyPolicy }}</div>
            <div class="terms-of-use-19">{{ termsOfUse }}</div>
          </div>
          <p class="x2021-fox-capital-investment-limited-19 montserrat-normal-black-5-2px">
            <span class="montserrat-normal-black-5-2px">{{ spanText1 }}</span
            ><span class="montserrat-normal-black-3-9px">{{ spanText2 }}</span>
          </p>
        </div>
        <img class="vector-3-9" :src="vector3" />
      </div>
    </div>
  </div>
</template>

<script>
import Group23422 from "./Group23422";
import Group282 from "./Group282";
export default {
  name: "Mobile23",
  components: {
    Group23422,
    Group282,
  },
  props: [
    "foxCapitalLogo2",
    "place",
    "aboutUs",
    "services",
    "investment",
    "surname",
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
.mobile2-2 {
  align-items: flex-start;
  background-color: var(--concrete);
  display: flex;
  flex-direction: column;
  height: 1778px;
  overflow: hidden;
  padding: 68px 0;
  width: 320px;
}

.flex-row-39 {
  align-items: flex-end;
  align-self: center;
  display: flex;
  height: 31px;
  margin-left: 10.72px;
  min-width: 273px;
}

.fox-capital-logo-2-19 {
  cursor: pointer;
  height: 27px;
  margin-bottom: 0.19px;
  object-fit: cover;
  width: 60px;
}

.flex-col-41 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 173px;
  min-height: 31px;
  width: 39px;
}

.place-28 {
  cursor: pointer;
  letter-spacing: 0.03px;
  line-height: 8.5px;
  min-height: 8px;
  white-space: nowrap;
}

.about-us-22 {
  cursor: pointer;
  letter-spacing: 0.03px;
  line-height: 8.5px;
  margin-top: 14px;
  min-height: 8px;
  white-space: nowrap;
}

.flex-col-42 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: -3px;
  margin-top: 9px;
  min-height: 5720px;
  width: 1923px;
}

.services-21 {
  cursor: pointer;
  letter-spacing: 0.03px;
  line-height: 8.5px;
  margin-left: 265.83px;
  min-height: 8px;
  opacity: 0.9;
  white-space: nowrap;
}

.frame-35639-7 {
  background-color: var(--desert-storm);
  border-radius: 4.35px;
  box-shadow: 2.9px 2.9px 5.8px #00000017, -2.9px -2.9px 5.8px #ffffff;
  display: flex;
  height: 25px;
  margin-left: 251.75px;
  margin-top: 14px;
  width: 64px;
}

.investment-20 {
  height: 9px;
  letter-spacing: 0.03px;
  line-height: 8.5px;
  margin-left: 12.4px;
  margin-top: 8.1px;
  opacity: 0.9;
  white-space: nowrap;
  width: 39px;
}

.surname-27 {
  letter-spacing: 0;
  line-height: 37.2px;
  margin-left: 30px;
  margin-top: 1px;
  min-height: 162px;
  width: 242px;
}

.overlap-group3-13 {
  height: 1369px;
  margin-left: 3px;
  margin-top: 17px;
  position: relative;
  width: 326px;
}

.rectangle-131-6 {
  height: 243px;
  left: 12px;
  position: absolute;
  top: 24px;
  width: 309px;
}

.rectangle-13-1 {
  height: 194px;
  left: 37px;
  position: absolute;
  top: 54px;
  width: 259px;
}

.wondaland-3 {
  left: 53px;
  letter-spacing: 0.08px;
  line-height: 22.4px;
  position: absolute;
  top: 198px;
  width: 259px;
}

.sea-facing-spacious-12 {
  left: 53px;
  letter-spacing: 0.25px;
  line-height: 12.6px;
  position: absolute;
  top: 218px;
  width: 259px;
}

.rectangle-137-3 {
  height: 245px;
  left: 11px;
  position: absolute;
  top: 242px;
  width: 310px;
}

.rectangle-1-2 {
  height: 194px;
  left: 37px;
  position: absolute;
  top: 273px;
  width: 259px;
}

.d-adela-suites-3 {
  left: 53px;
  letter-spacing: 0.09px;
  line-height: 23.1px;
  position: absolute;
  top: 422px;
  width: 259px;
}

.sea-facing-luxurious-3 {
  left: 53px;
  letter-spacing: 0.26px;
  line-height: 13px;
  position: absolute;
  top: 445px;
  width: 259px;
}

.rectangle-163-9 {
  height: 243px;
  left: 12px;
  position: absolute;
  top: 462px;
  width: 309px;
}

.rectangle-164-7 {
  height: 194px;
  left: 37px;
  position: absolute;
  top: 492px;
  width: 259px;
}

.rectangle-165-7 {
  cursor: pointer;
  height: 194px;
  left: 37px;
  position: absolute;
  top: 492px;
  width: 259px;
}

.land-thryve-5 {
  left: 53px;
  letter-spacing: 0.08px;
  line-height: 22.4px;
  position: absolute;
  top: 636px;
  width: 259px;
}

.save-now-acquire-later-5 {
  left: 53px;
  letter-spacing: 0.25px;
  line-height: 12.6px;
  position: absolute;
  top: 659px;
  width: 259px;
}

.rectangle-134-6 {
  height: 271px;
  left: 0;
  position: absolute;
  top: 676px;
  width: 324px;
}

.rectangle-135-4 {
  height: 202px;
  left: 34px;
  position: absolute;
  top: 711px;
  width: 256px;
}

.rectangle-136-6 {
  cursor: pointer;
  height: 203px;
  left: 34px;
  position: absolute;
  top: 710px;
  width: 256px;
}

.country-vest-3 {
  left: 48px;
  letter-spacing: 0.1px;
  line-height: 25.7px;
  position: absolute;
  top: 861px;
  white-space: nowrap;
}

.invest-rejoice-3 {
  left: 47px;
  letter-spacing: 0.29px;
  line-height: 14.5px;
  position: absolute;
  top: 885px;
  white-space: nowrap;
  width: 88px;
}

.rectangle-138-5 {
  height: 261px;
  left: 13px;
  position: absolute;
  top: 909px;
  width: 313px;
}

.rectangle-140-7 {
  height: 203px;
  left: 42px;
  position: absolute;
  top: 938px;
  width: 255px;
}

.rectangle-142-3 {
  height: 203px;
  left: 41px;
  position: absolute;
  top: 938px;
  width: 256px;
}

.land-trust-4 {
  left: 57px;
  letter-spacing: 0.1px;
  line-height: 26.5px;
  position: absolute;
  top: 1083px;
  width: 256px;
}

.footer-21 {
  background-color: var(--concrete);
  display: flex;
  height: 17px;
  margin-left: 12px;
  margin-top: 28px;
  width: 287px;
}

.frame-35632-19 {
  display: flex;
  margin-left: 7.9px;
  margin-top: 6.1px;
  width: 77.87px;
}

.privacy-policy-19 {
  height: 4.91px;
  letter-spacing: 0;
  width: 26.83px;
}

.terms-of-use-19 {
  height: 4.91px;
  letter-spacing: 0;
  margin-left: 7.9px;
  width: 25.52px;
}

.x2021-fox-capital-investment-limited-19 {
  height: 6.54px;
  letter-spacing: 0;
  margin-left: 116.8px;
  margin-top: 5.2px;
  width: 76.23px;
}

.vector-3-9 {
  height: 1065px;
  margin-top: 3013px;
  width: 1923px;
}
</style>
