<template>
  <div class="container-center-horizontal">
    <div class="landthryve screen">
      <div class="flex-row-26">
        <router-link to="/tablet"><img class="fox-capital-logo-2-14" :src="foxCapitalLogo2" /></router-link>
        <div class="flex-col-31">
          <router-link to="/tablet">
            <div class="place-21 montserrat-bold-storm-dust-14-9px">{{ place }}</div> </router-link
          ><router-link to="/tablet2-2">
            <div class="services-16 montserrat-bold-storm-dust-14-9px-2">{{ services }}</div>
          </router-link>
        </div>
        <div class="flex-col-32">
          <router-link to="/tablet22">
            <div class="about-us-17 montserrat-bold-fuscous-gray-14-9px">{{ aboutUs }}</div>
          </router-link>
          <div class="overlap-group3-10">
            <div class="investment-14 montserrat-bold-orange-peel-14-9px-2">{{ investment1 }}</div>
          </div>
        </div>
        <div class="overlap-group5-12">
          <div class="investment-15 montserrat-bold-orange-peel-22px">{{ investment2 }}</div>
        </div>
      </div>
      <div class="flex-row-27">
        <div class="flex-col-33">
          <div class="coming-soon-4 montserrat-bold-eerie-black-24px">{{ comingSoon }}</div>
          <img class="land-thryve-logo-2" :src="landthryveLogo" />
          <p class="landthryve-is-an-app-1 montserrat-normal-eerie-black-14px">{{ landthryveIsAnApp }}</p>
        </div>
        <img class="i-phone-12-pro-7" :src="iphone12Pro" />
      </div>
      <div class="address-5 montserrat-semi-bold-fuscous-gray-24px" v-html="address"></div>
      <div class="overlap-group6-9">
        <img class="group-67-8" :src="group67" />
        <div class="investmentfoxcapitalinvestmentltdcom montserrat-semi-bold-fuscous-gray-24px">
          {{ investmentFoxcapitalinvestmentltdCo }}
        </div>
      </div>
      <div class="location-map-3 montserrat-semi-bold-cape-cod-27-2px">{{ locationMap }}</div>
      <div class="overlap-group4-12">
        <div class="google-maps-views-12">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=1 Emina Street, Off Toyin Street, Ikeja Lagos Nigeria&t=&z=12&ie=UTF8&iwloc=B&output=embed"
          ></iframe>
        </div>
        <div class="overlap-group1-25">
          <div class="rectangle-146-3"></div>
          <div class="group-226-3">
            <div class="group-225-3">
              <div class="line-container-3">
                <img class="line-40-3" :src="line40" /><img class="line-41-3" :src="line41" /><img
                  class="line-42-3"
                  :src="line42"
                /><img class="line-43-3" :src="line43" /><img class="line-44-3" :src="line44" /><img
                  class="line-45-3"
                  :src="line45"
                /><img class="line-46-3" :src="line46" /><img class="line-47-3" :src="line47" /><img
                  class="line-48-3"
                  :src="line48"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <group234
        :overlapGroup="group234Props.overlapGroup"
        :overlapGroup1="group234Props.overlapGroup1"
        :className="group234Props.className"
      />
    </div>
  </div>
</template>

<script>
import Group234 from "./Group234";
export default {
  name: "Landthryve2",
  components: {
    Group234,
  },
  props: [
    "foxCapitalLogo2",
    "place",
    "services",
    "aboutUs",
    "investment1",
    "investment2",
    "comingSoon",
    "landthryveLogo",
    "landthryveIsAnApp",
    "iphone12Pro",
    "address",
    "group67",
    "investmentFoxcapitalinvestmentltdCo",
    "locationMap",
    "line40",
    "line41",
    "line42",
    "line43",
    "line44",
    "line45",
    "line46",
    "line47",
    "line48",
    "group234Props",
  ],
};
</script>

<style>
.landthryve {
  align-items: center;
  background-color: var(--concrete);
  display: flex;
  flex-direction: column;
  height: 1917px;
  overflow: hidden;
  padding: 67.9px 0;
  position: relative;
  width: 750px;
}

.flex-row-26 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  height: 99px;
  margin-right: -378px;
  min-width: 1060px;
}

.fox-capital-logo-2-14 {
  cursor: pointer;
  height: 62px;
  object-fit: cover;
  width: 141px;
}

.flex-col-31 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 235px;
  margin-top: 0.12px;
  min-height: 70px;
  width: 66px;
}

.place-21 {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  min-height: 20px;
  white-space: nowrap;
}

.services-16 {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  margin-top: 30px;
  min-height: 20px;
  white-space: nowrap;
}

.flex-col-32 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 41px;
  margin-top: 0.12px;
  min-height: 87px;
  width: 105px;
}

.about-us-17 {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  margin-right: 14px;
  min-height: 20px;
  min-width: 73px;
  opacity: 0.9;
  white-space: nowrap;
}

.overlap-group3-10 {
  align-items: flex-start;
  background-color: var(--desert-storm);
  border-radius: 8.2px;
  box-shadow: 5.47px 5.47px 10.94px #00000017, -5.47px -5.47px 10.94px #ffffff;
  display: flex;
  height: 46px;
  margin-top: 20px;
  min-width: 105px;
  padding: 12.9px 4.2px;
}

.investment-14 {
  letter-spacing: 0.07px;
  line-height: 19.9px;
  min-height: 20px;
  opacity: 0.9;
  white-space: nowrap;
}

.overlap-group5-12 {
  align-items: flex-start;
  align-self: flex-end;
  background-color: var(--desert-storm);
  border-radius: 15px;
  box-shadow: 10px 10px 20px #00000017, -10px -10px 20px #ffffff;
  display: flex;
  height: 85px;
  margin-left: 280px;
  min-width: 192px;
  padding: 23px;
}

.investment-15 {
  letter-spacing: 0.11px;
  line-height: 29.3px;
  min-height: 29px;
  opacity: 0.9;
  white-space: nowrap;
}

.flex-row-27 {
  align-items: flex-start;
  display: flex;
  margin-right: 16.2px;
  margin-top: 74px;
  min-width: 598px;
}

.flex-col-33 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 44.23px;
  min-height: 247px;
  width: 300px;
}

.coming-soon-4 {
  letter-spacing: 0.72px;
  line-height: 36.1px;
  margin-left: 1px;
  min-height: 36px;
  white-space: nowrap;
}

.land-thryve-logo-2 {
  height: 43px;
  margin-left: 1px;
  margin-top: 21px;
  object-fit: cover;
  width: 240px;
}

.landthryve-is-an-app-1 {
  letter-spacing: 0.42px;
  line-height: 21.1px;
  margin-top: 21px;
  min-height: 126px;
  width: 300px;
}

.i-phone-12-pro-7 {
  height: 491px;
  margin-left: 55px;
  width: 243px;
}

.address-5 {
  letter-spacing: 0.72px;
  line-height: 36.1px;
  margin-left: 39px;
  margin-top: 221px;
  min-height: 70px;
  width: 631px;
}

.overlap-group6-9 {
  height: 79px;
  margin-left: 39px;
  margin-top: 15px;
  position: relative;
  width: 631px;
}

.group-67-8 {
  height: 22px;
  left: 0;
  position: absolute;
  top: 57px;
  width: 208px;
}

.investmentfoxcapitalinvestmentltdcom {
  left: 0;
  letter-spacing: 0.72px;
  line-height: 36.1px;
  position: absolute;
  top: 0;
  width: 631px;
}

.location-map-3 {
  align-self: flex-start;
  letter-spacing: 0.14px;
  line-height: 40px;
  margin-left: 78.88px;
  margin-top: 50px;
  min-height: 40px;
  white-space: nowrap;
}

.overlap-group4-12 {
  background-color: var(--concrete);
  border-radius: 31.3px;
  box-shadow: 9.34px 9.34px 23.36px #d2d2d2, -9.34px -9.34px 23.36px #ffffff;
  height: 290px;
  margin-right: 57px;
  margin-top: 37px;
  position: relative;
  width: 561px;
}

.google-maps-views-12 {
  border-radius: 30.37px;
  height: 267px;
  left: 9px;
  position: absolute;
  top: 12px;
  width: 543px;
}

.overlap-group1-25 {
  height: 261px;
  left: 22px;
  position: absolute;
  top: 15px;
  width: 12px;
}

.rectangle-146-3 {
  background-color: var(--teal-blue);
  height: 2px;
  left: -124px;
  position: absolute;
  top: 129px;
  transform: rotate(-90deg);
  width: 261px;
}

.group-226-3 {
  background-color: var(--teal-blue);
  border-radius: 15.18px;
  display: flex;
  height: 35px;
  left: 0;
  position: absolute;
  top: 110px;
  width: 12px;
}

.group-225-3 {
  align-items: flex-start;
  display: flex;
  height: 26.12px;
  margin-left: 3.8px;
  margin-top: 4.3px;
  min-width: 4.77px;
}

.line-container-3 {
  height: 27px;
  margin-top: -0.22px;
  position: relative;
  width: 6px;
}

.line-40-3 {
  height: 3px;
  left: 0;
  position: absolute;
  top: 0;
  width: 6px;
}

.line-41-3 {
  height: 3px;
  left: 0;
  position: absolute;
  top: 3px;
  width: 6px;
}

.line-42-3 {
  height: 3px;
  left: 0;
  position: absolute;
  top: 6px;
  width: 6px;
}

.line-43-3 {
  height: 3px;
  left: 0;
  position: absolute;
  top: 9px;
  width: 6px;
}

.line-44-3 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 12px;
  width: 6px;
}

.line-45-3 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 14px;
  width: 6px;
}

.line-46-3 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 17px;
  width: 6px;
}

.line-47-3 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 20px;
  width: 6px;
}

.line-48-3 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 23px;
  width: 6px;
}
</style>
