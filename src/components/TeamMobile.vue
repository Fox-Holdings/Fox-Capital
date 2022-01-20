<template>
  <div class="container-center-horizontal">
    <div class="team-mobile screen">
      <div class="flex-col-3">
        <router-link to="/tablet"><img class="fox-capital-logo-2-2" :src="foxCapitalLogo2" /></router-link>
        <div class="our-team-members-1 montserrat-semi-bold-cape-cod-24px">{{ ourTeamMembers }}</div>
        <div class="overlap-group5-2">
          <p class="at-fox-capital-we-b-1 montserrat-normal-eerie-black-12-4px">{{ atFoxCapitalWeB }}</p>
          <img class="rectangle-64-1" :src="rectangle64" /><img class="rectangle-46-1" :src="rectangle46" /><frame16
            :group177="frame16Props.group177"
            :className="frame16Props.className"
          />
          <div class="mdceo-1 montserrat-semi-bold-orange-peel-14-8px">{{ mdCeo }}</div>
          <div class="overlap-group-9" :style="{ 'background-image': 'url(' + overlapGroup + ')' }">
            <img class="rectangle-166-1" :src="rectangle166" /><frame15
              :name="frame151Props.name"
              :group181="frame151Props.group181"
              :className="frame151Props.className"
            />
            <div class="place-4 montserrat-semi-bold-orange-peel-14-8px">{{ place1 }}</div>
          </div>
        </div>
        <div class="overlap-group-container-1">
          <div class="overlap-group2-8" :style="{ 'background-image': 'url(' + overlapGroup2 + ')' }">
            <img class="rectangle-174-1" :src="rectangle174" /><frame19
              :group185="frame19Props.group185"
              :className="frame19Props.className"
            />
            <div class="head-media-communication-1 montserrat-semi-bold-orange-peel-14-8px">
              {{ headMediaCommunication }}
            </div>
          </div>
          <div class="overlap-group4-3" :style="{ 'background-image': 'url(' + overlapGroup4 + ')' }">
            <img class="rectangle-176-1" :src="rectangle176" /><frame20 :className="frame20Props.className" />
            <div class="head-tech-department-1 montserrat-semi-bold-orange-peel-13px">{{ headTechDepartment }}</div>
          </div>
          <div class="overlap-group6-1">
            <div class="overlap-group1-6" :style="{ 'background-image': 'url(' + overlapGroup1 + ')' }">
              <img class="rectangle-170-1" :src="rectangle170" /><frame15
                :name="frame152Props.name"
                :group181="frame152Props.group181"
                :className="frame152Props.className"
              />
              <div class="human-resource-manager-1 montserrat-semi-bold-orange-peel-14-8px">
                {{ humanResourceManager }}
              </div>
            </div>
            <img class="rectangle-163-1" :src="rectangle163" /><img
              class="rectangle-164-1"
              :src="rectangle164"
            /><frame14 :group179="frame14Props.group179" :className="frame14Props.className" />
            <p class="surname-3 montserrat-semi-bold-orange-peel-13px">{{ surname }}</p>
            <div class="overlap-group3-1" :style="{ 'background-image': 'url(' + overlapGroup3 + ')' }">
              <img class="rectangle-168-1" :src="rectangle168" /><frame17 :className="frame17Props.className" />
              <div class="head-customer-relation-1 montserrat-semi-bold-orange-peel-13px">
                {{ headCustomerRelation }}
              </div>
            </div>
          </div>
        </div>
        <group23422 />
        <div class="footer-6">
          <div class="frame-35632-6 montserrat-normal-black-3-9px">
            <div class="privacy-policy-6">{{ privacyPolicy }}</div>
            <div class="terms-of-use-6">{{ termsOfUse }}</div>
          </div>
          <p class="x2021-fox-capital-investment-limited-6 montserrat-normal-black-5-2px">
            <span class="montserrat-normal-black-5-2px">{{ spanText1 }}</span
            ><span class="montserrat-normal-black-3-9px">{{ spanText2 }}</span>
          </p>
        </div>
      </div>
      <div class="flex-col-4">
        <router-link to="/tablet">
          <div class="place-5 montserrat-bold-storm-dust-14-9px">{{ place2 }}</div> </router-link
        ><router-link to="/tablet2-2">
          <div class="services-2 montserrat-bold-fuscous-gray-14-9px">{{ services }}</div>
        </router-link>
      </div>
      <div class="flex-col-5">
        <div class="frame-35639-1">
          <div class="about-us-3 montserrat-bold-orange-peel-14-9px">{{ aboutUs }}</div>
        </div>
        <router-link to="/tablet2">
          <div class="investment-2 montserrat-bold-fuscous-gray-14-9px">{{ investment }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Frame16 from "./Frame16";
import Frame15 from "./Frame15";
import Frame19 from "./Frame19";
import Frame20 from "./Frame20";
import Frame14 from "./Frame14";
import Frame17 from "./Frame17";
import Group23422 from "./Group23422";
export default {
  name: "TeamMobile",
  components: {
    Frame16,
    Frame15,
    Frame19,
    Frame20,
    Frame14,
    Frame17,
    Group23422,
  },
  props: [
    "foxCapitalLogo2",
    "ourTeamMembers",
    "atFoxCapitalWeB",
    "rectangle64",
    "rectangle46",
    "mdCeo",
    "overlapGroup",
    "rectangle166",
    "place1",
    "overlapGroup2",
    "rectangle174",
    "headMediaCommunication",
    "overlapGroup4",
    "rectangle176",
    "headTechDepartment",
    "overlapGroup1",
    "rectangle170",
    "humanResourceManager",
    "rectangle163",
    "rectangle164",
    "surname",
    "overlapGroup3",
    "rectangle168",
    "headCustomerRelation",
    "privacyPolicy",
    "termsOfUse",
    "spanText1",
    "spanText2",
    "place2",
    "services",
    "aboutUs",
    "investment",
    "frame16Props",
    "frame151Props",
    "frame19Props",
    "frame20Props",
    "frame152Props",
    "frame14Props",
    "frame17Props",
  ],
};
</script>

<style>
.team-mobile {
  align-items: flex-start;
  background-color: var(--concrete);
  display: flex;
  height: 3235px;
  overflow: hidden;
  width: 350px;
}

.flex-col-3 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: -11px;
  margin-top: 43.88px;
  min-height: 3171px;
  position: relative;
  width: 363px;
}

.fox-capital-logo-2-2 {
  cursor: pointer;
  height: 62px;
  margin-right: 63.08px;
  object-fit: cover;
  width: 141px;
}

.our-team-members-1 {
  letter-spacing: 0;
  line-height: 34.1px;
  margin-right: 14px;
  margin-top: 48px;
  min-height: 34px;
  min-width: 245px;
  text-align: center;
  white-space: nowrap;
}

.overlap-group5-2 {
  height: 918px;
  margin-top: 21px;
  position: relative;
  width: 363px;
}

.at-fox-capital-we-b-1 {
  left: 56px;
  letter-spacing: 0.37px;
  line-height: 18.7px;
  position: absolute;
  text-align: center;
  top: 0;
  width: 260px;
}

.rectangle-64-1 {
  height: 453px;
  left: 0;
  position: absolute;
  top: 138px;
  width: 363px;
}

.rectangle-46-1 {
  height: 261px;
  left: 48px;
  position: absolute;
  top: 186px;
  width: 262px;
}

.mdceo-1 {
  left: 71px;
  letter-spacing: 0.07px;
  line-height: 19.7px;
  position: absolute;
  top: 486px;
  white-space: nowrap;
}

.overlap-group-9 {
  align-items: center;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  left: 5px;
  min-height: 453px;
  padding: 48px 0;
  position: absolute;
  top: 513px;
  width: 363px;
}

.rectangle-166-1 {
  height: 261px;
  width: 267px;
}

.place-4 {
  align-self: flex-start;
  letter-spacing: 0.07px;
  line-height: 19.7px;
  margin-left: 61px;
  margin-top: 5px;
  min-height: 24px;
  width: 60px;
}

.overlap-group-container-1 {
  height: 1826px;
  margin-left: 6px;
  margin-top: 20px;
  position: relative;
  width: 367px;
}

.overlap-group2-8 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 453px;
  padding: 48px;
  position: absolute;
  top: 1021px;
  width: 363px;
}

.rectangle-174-1 {
  height: 262px;
  width: 262px;
}

.head-media-communication-1 {
  align-self: center;
  letter-spacing: 0.07px;
  line-height: 19.7px;
  margin-left: 7.62px;
  margin-top: 7px;
  min-height: 19px;
  white-space: nowrap;
  width: 239px;
}

.overlap-group4-3 {
  align-items: center;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  left: 3px;
  min-height: 415px;
  padding: 35px 0;
  position: absolute;
  top: 1411px;
  width: 364px;
}

.rectangle-176-1 {
  height: 243px;
  width: 280px;
}

.head-tech-department-1 {
  letter-spacing: 0.06px;
  line-height: 17.3px;
  margin-right: 37px;
  margin-top: 10px;
  min-height: 17px;
  white-space: nowrap;
  width: 175px;
}

.overlap-group6-1 {
  height: 1049px;
  left: 6px;
  position: absolute;
  top: 0;
  width: 351px;
}

.overlap-group1-6 {
  align-items: center;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  left: -7px;
  min-height: 453px;
  padding: 47.8px 0;
  position: absolute;
  top: -48px;
  width: 363px;
}

.rectangle-170-1 {
  height: 255px;
  width: 267px;
}

.human-resource-manager-1 {
  letter-spacing: 0.07px;
  line-height: 19.7px;
  margin-right: 35.32px;
  margin-top: 5px;
  min-height: 19px;
  white-space: nowrap;
  width: 206px;
}

.rectangle-163-1 {
  height: 411px;
  left: 0;
  position: absolute;
  top: 335px;
  width: 351px;
}

.rectangle-164-1 {
  height: 230px;
  left: 42px;
  position: absolute;
  top: 377px;
  width: 267px;
}

.surname-3 {
  left: 62px;
  letter-spacing: 0.06px;
  line-height: 17.3px;
  position: absolute;
  top: 662px;
  white-space: nowrap;
  width: 228px;
}

.overlap-group3-1 {
  align-items: center;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  left: 13px;
  min-height: 409px;
  padding: 42px 0;
  position: absolute;
  top: 682px;
  width: 332px;
}

.rectangle-168-1 {
  height: 229px;
  width: 248px;
}

.head-customer-relation-1 {
  letter-spacing: 0.06px;
  line-height: 17.3px;
  margin-right: 23px;
  margin-top: 8px;
  min-height: 17px;
  white-space: nowrap;
  width: 183px;
}

.footer-6 {
  background-color: var(--concrete);
  display: flex;
  height: 17px;
  margin-left: 7.61px;
  margin-top: 28px;
  width: 287px;
}

.frame-35632-6 {
  display: flex;
  margin-left: 7.9px;
  margin-top: 6.1px;
  width: 77.87px;
}

.privacy-policy-6 {
  height: 4.91px;
  letter-spacing: 0;
  width: 26.83px;
}

.terms-of-use-6 {
  height: 4.91px;
  letter-spacing: 0;
  margin-left: 7.9px;
  width: 25.52px;
}

.x2021-fox-capital-investment-limited-6 {
  height: 6.54px;
  letter-spacing: 0;
  margin-left: 116.8px;
  margin-top: 5.2px;
  width: 76.23px;
}

.flex-col-4 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 66px;
  margin-top: 61px;
  min-height: 93px;
  width: 66px;
}

.place-5 {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  min-height: 20px;
  white-space: nowrap;
}

.services-2 {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  margin-top: 53px;
  min-height: 20px;
  opacity: 0.9;
  white-space: nowrap;
}

.flex-col-5 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 66px;
  margin-top: 42px;
  min-height: 112px;
  width: 131px;
}

.frame-35639-1 {
  background-color: var(--desert-storm);
  border-radius: 10.19px;
  box-shadow: 6.8px 6.8px 13.59px #00000017, -6.8px -6.8px 13.59px #ffffff;
  display: flex;
  height: 58px;
  width: 131px;
}

.about-us-3 {
  height: 20px;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  margin-left: 29px;
  margin-top: 19px;
  opacity: 0.9;
  white-space: nowrap;
  width: 73px;
}

.investment-2 {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  margin-left: 12.06px;
  margin-top: 34px;
  min-height: 20px;
  white-space: nowrap;
  width: 91px;
}
</style>
