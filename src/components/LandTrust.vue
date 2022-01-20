<template>
  <div class="container-center-horizontal">
    <div class="land-trust-2 screen">
      <div class="flex-row-17">
        <router-link to="/home-page" className="align-self-flex-start"
          ><img class="fox-capital-logo-2-8" :src="foxCapitalLogo2" /></router-link
        ><router-link to="/home-page">
          <div class="place-12 montserrat-bold-storm-dust-22px">{{ place }}</div> </router-link
        ><router-link to="/about-us">
          <div class="about-us-11 montserrat-bold-fuscous-gray-22px">{{ aboutUs }}</div> </router-link
        ><router-link to="/services">
          <div class="services-10 montserrat-bold-storm-dust-22px">{{ services }}</div>
        </router-link>
        <div class="overlap-group6-5">
          <div class="investment-8 montserrat-bold-orange-peel-22px">{{ investment }}</div>
        </div>
      </div>
      <div class="flex-row-18">
        <div class="flex-col-20">
          <img class="land-thryve-logo" :src="landthryveLogo" />
          <div class="is-a-real-estate-lan montserrat-normal-eerie-black-19-8px">{{ isARealEstateLan }}</div>
        </div>
        <img class="landstr-1" :src="landstr1" />
      </div>
      <div class="flex-col-21">
        <div class="it-is-a-viable-risk montserrat-normal-eerie-black-19-8px" v-html="itIsAViableRisk"></div>
        <div class="address-3 montserrat-semi-bold-fuscous-gray-24px" v-html="address"></div>
        <div class="overlap-group5-7">
          <img class="group-67-4" :src="group67" />
          <div class="landthryvefoxcapitalinvestmentltdcom montserrat-semi-bold-fuscous-gray-24px">
            {{ landthryveFoxcapitalinvestmentltdCo }}
          </div>
        </div>
        <div class="location-map-1 montserrat-semi-bold-cape-cod-27-2px">{{ locationMap }}</div>
        <div class="overlap-group4-8">
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
          <div class="overlap-group3-5">
            <div class="rectangle-146-1"></div>
            <div class="group-226-1">
              <div class="group-225-1">
                <div class="line-container-1">
                  <img class="line-40-1" :src="line40" /><img class="line-41-1" :src="line41" /><img
                    class="line-42-1"
                    :src="line42"
                  /><img class="line-43-1" :src="line43" /><img class="line-44-1" :src="line44" /><img
                    class="line-45-1"
                    :src="line45"
                  /><img class="line-46-1" :src="line46" /><img class="line-47-1" :src="line47" /><img
                    class="line-48-1"
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
  name: "LandTrust",
  components: {
    Group23432,
  },
  props: [
    "foxCapitalLogo2",
    "place",
    "aboutUs",
    "services",
    "investment",
    "landthryveLogo",
    "isARealEstateLan",
    "landstr1",
    "itIsAViableRisk",
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
.land-trust-2 {
  align-items: center;
  background-color: var(--concrete);
  display: flex;
  flex-direction: column;
  height: 2390px;
  overflow: hidden;
  padding: 81.9px 0;
  width: 1200px;
}

.flex-row-17 {
  align-items: center;
  display: flex;
  margin-right: 3.54px;
  min-width: 1060px;
}

.fox-capital-logo-2-8 {
  align-self: flex-start;
  cursor: pointer;
  height: 62px;
  object-fit: cover;
  width: 141px;
}

.place-12 {
  cursor: pointer;
  letter-spacing: 0.11px;
  line-height: 29.3px;
  margin-left: 149px;
  margin-top: 0.12px;
  min-height: 29px;
  min-width: 70px;
  white-space: nowrap;
}

.about-us-11 {
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

.services-10 {
  cursor: pointer;
  letter-spacing: 0.11px;
  line-height: 29.3px;
  margin-left: 106px;
  margin-top: 0.12px;
  min-height: 29px;
  min-width: 97px;
  white-space: nowrap;
}

.overlap-group6-5 {
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

.investment-8 {
  letter-spacing: 0.11px;
  line-height: 29.3px;
  min-height: 29px;
  opacity: 0.9;
  white-space: nowrap;
}

.flex-row-18 {
  align-items: center;
  display: flex;
  margin-left: 18px;
  margin-top: 81px;
  min-width: 1038px;
}

.flex-col-20 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  min-height: 242px;
  width: 476px;
}

.land-thryve-logo {
  height: 72px;
  margin-left: 3px;
  object-fit: cover;
  width: 300px;
}

.is-a-real-estate-lan {
  letter-spacing: 0.59px;
  line-height: 29.7px;
  margin-top: 45px;
  min-height: 125px;
  width: 476px;
}

.landstr-1 {
  height: 448px;
  margin-left: 50px;
  object-fit: cover;
  width: 512px;
}

.flex-col-21 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 4px;
  margin-top: 34px;
  min-height: 1614px;
  position: relative;
  width: 1204px;
}

.it-is-a-viable-risk {
  align-self: center;
  letter-spacing: 0.59px;
  line-height: 29.7px;
  margin-right: 58px;
  min-height: 223px;
  width: 966px;
}

.address-3 {
  letter-spacing: 0.72px;
  line-height: 36.1px;
  margin-left: 84px;
  margin-top: 114px;
  min-height: 70px;
  width: 631px;
}

.overlap-group5-7 {
  height: 95px;
  margin-left: 84px;
  margin-top: 15px;
  position: relative;
  width: 631px;
}

.group-67-4 {
  height: 30px;
  left: 6px;
  position: absolute;
  top: 65px;
  width: 332px;
}

.landthryvefoxcapitalinvestmentltdcom {
  left: 0;
  letter-spacing: 0.72px;
  line-height: 36.1px;
  position: absolute;
  top: 0;
  width: 631px;
}

.location-map-1 {
  letter-spacing: 0.14px;
  line-height: 40px;
  margin-left: 154px;
  margin-top: 97px;
  min-height: 40px;
  white-space: nowrap;
}

.overlap-group4-8 {
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

.overlap-group3-5 {
  height: 373px;
  left: 32px;
  position: absolute;
  top: 21px;
  width: 17px;
}

.rectangle-146-1 {
  background-color: var(--teal-blue);
  height: 3px;
  left: -178px;
  position: absolute;
  top: 185px;
  transform: rotate(-90deg);
  width: 373px;
}

.group-226-1 {
  background-color: var(--teal-blue);
  border-radius: 15.18px;
  display: flex;
  height: 50px;
  left: 0;
  position: absolute;
  top: 157px;
  width: 17px;
}

.group-225-1 {
  align-items: flex-start;
  display: flex;
  height: 37.39px;
  justify-content: flex-end;
  margin-left: 5.5px;
  margin-top: 6.2px;
  min-width: 6.83px;
}

.line-container-1 {
  height: 38px;
  margin-top: -0.42px;
  position: relative;
  width: 7px;
}

.line-40-1 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 0;
  width: 7px;
}

.line-41-1 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 4px;
  width: 7px;
}

.line-42-1 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 8px;
  width: 7px;
}

.line-43-1 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 13px;
  width: 7px;
}

.line-44-1 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 17px;
  width: 7px;
}

.line-45-1 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 21px;
  width: 7px;
}

.line-46-1 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 26px;
  width: 7px;
}

.line-47-1 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 30px;
  width: 7px;
}

.line-48-1 {
  height: 4px;
  left: 0;
  position: absolute;
  top: 34px;
  width: 7px;
}
</style>
