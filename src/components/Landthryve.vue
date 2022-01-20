<template>
  <div class="container-center-horizontal">
    <div class="landthryve-1 screen">
      <div class="flex-row-19">
        <router-link to="/home-page" className="align-self-flex-start"
          ><img class="fox-capital-logo-2-9" :src="foxCapitalLogo2" /></router-link
        ><router-link to="/home-page">
          <div class="place-13 montserrat-bold-storm-dust-22px">{{ place }}</div> </router-link
        ><router-link to="/about-us">
          <div class="about-us-12 montserrat-bold-fuscous-gray-22px">{{ aboutUs }}</div> </router-link
        ><router-link to="/services">
          <div class="services-11 montserrat-bold-storm-dust-22px">{{ services }}</div>
        </router-link>
        <div class="overlap-group5-8">
          <div class="investment-9 montserrat-bold-orange-peel-22px">{{ investment }}</div>
        </div>
      </div>
      <div class="flex-row-20">
        <div class="flex-col-22">
          <div class="coming-soon-1 montserrat-bold-eerie-black-24px">{{ comingSoon }}</div>
          <img class="land-thryve-logo-1" :src="landthryveLogo" />
          <div class="landthryve-is-an-app montserrat-normal-eerie-black-19-8px">{{ landthryveIsAnApp }}</div>
        </div>
        <img class="i-phone-12-pro-2" :src="iphone12Pro" />
      </div>
      <div class="flex-col-23">
        <div class="also-users-have-acc montserrat-normal-eerie-black-19-8px">{{ alsoUsersHaveAcc }}</div>
        <div class="address-4 montserrat-semi-bold-fuscous-gray-24px" v-html="address"></div>
        <div class="overlap-group4-9">
          <img class="group-67-5" :src="group67" />
          <div class="landthryvefoxcapitalinvestmentltdcom-1 montserrat-semi-bold-fuscous-gray-24px">
            {{ landthryveFoxcapitalinvestmentltdCo }}
          </div>
        </div>
        <div class="location-map-2 montserrat-semi-bold-cape-cod-27-2px">{{ locationMap }}</div>
        <div class="overlap-group6-6">
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
          <div class="overlap-group3-6">
            <div class="rectangle-146-2"></div>
            <div class="group-226-2">
              <div class="group-225-2">
                <div class="line-container-2">
                  <img class="line-40-2" :src="line40" /><img class="line-41-2" :src="line41" /><img
                    class="line-42-2"
                    :src="line42"
                  /><img class="line-43-2" :src="line43" /><img class="line-44-2" :src="line44" /><img
                    class="line-45-2"
                    :src="line45"
                  /><img class="line-46-2" :src="line46" /><img class="line-47-2" :src="line47" /><img
                    class="line-48-2"
                    :src="line48"
                  />
                </div>
              </div>
            </div>
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
  name: "Landthryve",
  components: {
    Group23432,
  },
  props: [
    "foxCapitalLogo2",
    "place",
    "aboutUs",
    "services",
    "investment",
    "comingSoon",
    "landthryveLogo",
    "landthryveIsAnApp",
    "iphone12Pro",
    "alsoUsersHaveAcc",
    "address",
    "group67",
    "landthryveFoxcapitalinvestmentltdCo",
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
    "group23432Props",
  ],
};
</script>

<style>
.landthryve-1 {
  align-items: flex-start;
  background-color: var(--concrete);
  display: flex;
  flex-direction: column;
  height: 2390px;
  overflow: hidden;
  padding: 81.9px 0;
  width: 1200px;
}

.flex-row-19 {
  align-items: center;
  align-self: center;
  display: flex;
  margin-right: 3.54px;
  min-width: 1060px;
}

.fox-capital-logo-2-9 {
  align-self: flex-start;
  cursor: pointer;
  height: 62px;
  object-fit: cover;
  width: 141px;
}

.place-13 {
  cursor: pointer;
  letter-spacing: 0.11px;
  line-height: 29.3px;
  margin-left: 149px;
  margin-top: 0.12px;
  min-height: 29px;
  min-width: 70px;
  white-space: nowrap;
}

.about-us-12 {
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

.services-11 {
  cursor: pointer;
  letter-spacing: 0.11px;
  line-height: 29.3px;
  margin-left: 106px;
  margin-top: 0.12px;
  min-height: 29px;
  min-width: 97px;
  white-space: nowrap;
}

.overlap-group5-8 {
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

.investment-9 {
  letter-spacing: 0.11px;
  line-height: 29.3px;
  min-height: 29px;
  opacity: 0.9;
  white-space: nowrap;
}

.flex-row-20 {
  align-items: center;
  display: flex;
  margin-left: 84px;
  margin-top: 174px;
  min-width: 827px;
}

.flex-col-22 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-bottom: 105.55px;
  min-height: 261px;
  width: 482px;
}

.coming-soon-1 {
  letter-spacing: 0.72px;
  line-height: 36.1px;
  min-height: 36px;
  white-space: nowrap;
}

.land-thryve-logo-1 {
  height: 60px;
  margin-top: 23px;
  object-fit: cover;
  width: 333px;
}

.landthryve-is-an-app {
  letter-spacing: 0.59px;
  line-height: 29.7px;
  margin-top: 17px;
  min-height: 126px;
  width: 482px;
}

.i-phone-12-pro-2 {
  height: 491px;
  margin-left: 102px;
  width: 243px;
}

.flex-col-23 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 44px;
  min-height: 1468px;
  position: relative;
  width: 1204px;
}

.also-users-have-acc {
  align-self: center;
  letter-spacing: 0.59px;
  line-height: 29.7px;
  margin-right: 70px;
  min-height: 94px;
  width: 966px;
}

.address-4 {
  letter-spacing: 0.72px;
  line-height: 36.1px;
  margin-left: 84px;
  margin-top: 97px;
  min-height: 70px;
  width: 631px;
}

.overlap-group4-9 {
  height: 95px;
  margin-left: 84px;
  margin-top: 15px;
  position: relative;
  width: 631px;
}

.group-67-5 {
  height: 30px;
  left: 6px;
  position: absolute;
  top: 65px;
  width: 332px;
}

.landthryvefoxcapitalinvestmentltdcom-1 {
  left: 0;
  letter-spacing: 0.72px;
  line-height: 36.1px;
  position: absolute;
  top: 0;
  width: 631px;
}

.location-map-2 {
  letter-spacing: 0.14px;
  line-height: 40px;
  margin-left: 154px;
  margin-top: 97px;
  min-height: 40px;
  white-space: nowrap;
}

.overlap-group6-6 {
  align-self: center;
  background-color: var(--concrete);
  border-radius: 31.3px;
  box-shadow: 9.34px 9.34px 23.36px #d2d2d2, -9.34px -9.34px 23.36px #ffffff;
  height: 415px;
  margin-right: 107px;
  margin-top: 36px;
  position: relative;
  width: 803px;
}

.google-maps-views-12 {
  border-radius: 30.37px;
  height: 383px;
  left: 13px;
  position: absolute;
  top: 17px;
  width: 778px;
}

.overlap-group3-6 {
  height: 373px;
  left: 32px;
  position: absolute;
  top: 21px;
  width: 17px;
}

.rectangle-146-2 {
  background-color: var(--teal-blue);
  height: 3px;
  left: -178px;
  position: absolute;
  top: 185px;
  transform: rotate(-90deg);
  width: 373px;
}

.group-226-2 {
  background-color: var(--teal-blue);
  border-radius: 15.18px;
  display: flex;
  height: 50px;
  left: 0;
  position: absolute;
  top: 157px;
  width: 17px;
}

.group-225-2 {
  align-items: flex-start;
  display: flex;
  height: 37.39px;
  justify-content: flex-end;
  margin-left: 5.5px;
  margin-top: 6.2px;
  min-width: 6.83px;
}

.line-container-2 {
  height: 38px;
  margin-top: -0.42px;
  position: relative;
  width: 7px;
}

.line-40-2 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 0;
  width: 7px;
}

.line-41-2 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 4px;
  width: 7px;
}

.line-42-2 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 8px;
  width: 7px;
}

.line-43-2 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 13px;
  width: 7px;
}

.line-44-2 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 17px;
  width: 7px;
}

.line-45-2 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 21px;
  width: 7px;
}

.line-46-2 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 26px;
  width: 7px;
}

.line-47-2 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 30px;
  width: 7px;
}

.line-48-2 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 34px;
  width: 7px;
}
</style>
