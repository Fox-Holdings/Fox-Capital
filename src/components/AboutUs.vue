<template>
  <div class="container-center-horizontal">
    <div class="about-us-5 screen">
      <div class="flex-col-6">
        <div class="flex-row-7">
          <router-link to="/home-page"><img class="fox-capital-logo-2-4" :src="foxCapitalLogo2" /></router-link
          ><router-link to="/home-page">
            <div class="place-7 montserrat-bold-storm-dust-14-9px">{{ place1 }}</div>
          </router-link>
          <div class="overlap-group13-1">
            <div class="about-us-6 montserrat-bold-orange-peel-14-9px">{{ aboutUs1 }}</div>
          </div>
          <router-link to="/services">
            <div class="services-4 montserrat-bold-fuscous-gray-14-9px">{{ services1 }}</div>
          </router-link>
          <div class="investment-4 montserrat-bold-fuscous-gray-14-9px">{{ investment }}</div>
        </div>
        <div class="flex-col-7 montserrat-light-eerie-black-38-1px">
          <img class="group-196-1" :src="group196" />
          <div class="group-container-3">
            <div class="group-198">
              <div class="about-us-7">{{ aboutUs2 }}</div>
              <router-link to="/services">
                <div class="services-5">{{ services2 }}</div> </router-link
              ><router-link to="/teams-archive">
                <div class="team">{{ team }}</div>
              </router-link>
            </div>
            <div class="group-197"><img class="line-38" :src="line38" /><img class="line-39" :src="line39" /></div>
          </div>
          <div class="group-199">
            <div class="surname-5 lora-bold-orange-peel-31-3px">{{ surname1 }}</div>
            <div class="surname-6">{{ surname2 }}</div>
          </div>
          <div class="overlap-group5-4">
            <div class="stand-for-container">
              <div class="what-does-fox-capital-stand-for montserrat-light-white-38-1px">
                {{ whatDoesFoxCapitalStandFor }}
              </div>
              <div class="we-stand-for montserrat-normal-white-16-3px">{{ weStandFor }}</div>
            </div>
            <div class="vector-container">
              <img
                class="vector-14"
                src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1f5e7c8a5a94370b7df04/img/vector-6@2x.png"
              />
              <img class="vector-15" :src="vector2" /><img class="vector-16" :src="vector3" /><img
                class="vector-17"
                :src="vector4"
              /><img class="vector-18" :src="vector5" />
            </div>
            <div class="flex-row-8 montserrat-semi-bold-white-17-7px">
              <div class="ethics">{{ ethics }}</div>
              <div class="innovation">{{ innovation }}</div>
              <div class="collaboration">{{ collaboration }}</div>
              <div class="quality-comfort">{{ qualityComfort }}</div>
              <div class="sustainibility">{{ sustainibility }}</div>
            </div>
          </div>
          <div class="group-270">
            <div class="overlap-group-container-3">
              <div class="overlap-group-container-4">
                <div class="overlap-group-16">
                  <div class="vision montserrat-light-eerie-black-38-1px">{{ vision }}</div>
                  <div class="to-redefine-real-es montserrat-semi-bold-cape-cod-17-7px">{{ toRedefineRealEs }}</div>
                </div>
                <div class="overlap-group1-20" :style="{ 'background-image': 'url(' + overlapGroup11 + ')' }">
                  <img class="group-201" :src="group201" />
                </div>
              </div>
              <div class="overlap-group-container-5">
                <div class="overlap-group-23">
                  <div class="place-8 montserrat-light-eerie-black-38-1px">{{ place2 }}</div>
                  <div class="to-collaborate-with montserrat-semi-bold-cape-cod-17-7px">{{ toCollaborateWith }}</div>
                </div>
                <div class="overlap-group1-21" :style="{ 'background-image': 'url(' + overlapGroup12 + ')' }">
                  <img class="group-228" :src="group228" />
                </div>
              </div>
            </div>
            <div class="group-269">
              <div class="overlap-group4-5">
                <div class="overlap-group-24" :style="{ 'background-image': 'url(' + overlapGroup1 + ')' }">
                  <img class="group-229" :src="group229" />
                </div>
                <div class="goal montserrat-light-eerie-black-38-1px">{{ goal }}</div>
                <div class="establish-ourselve montserrat-semi-bold-cape-cod-17-7px">{{ establishOurselve }}</div>
              </div>
            </div>
          </div>
          <div class="surname-7">{{ surname3 }}</div>
          <div class="frame-35636">
            <div class="group-273" :style="{ 'background-image': 'url(' + group273 + ')' }">
              <img class="vector-19" :src="vector6" />
            </div>
            <div class="making-real-estate-i montserrat-normal-eerie-black-16-3px">{{ makingRealEstateI }}</div>
          </div>
          <div class="frame-3563">
            <div class="group-272" :style="{ 'background-image': 'url(' + group272 + ')' }">
              <img class="vector-20" :src="vector7" />
            </div>
            <div class="establishing-the-fir montserrat-normal-eerie-black-16-3px">{{ establishingTheFir }}</div>
          </div>
          <div class="frame-3563">
            <div class="group-271" :style="{ 'background-image': 'url(' + group271 + ')' }">
              <img class="vector-21" :src="vector8" />
            </div>
            <div class="we-believe-in-long-t montserrat-normal-eerie-black-16-3px">{{ weBelieveInLongT }}</div>
          </div>
          <div class="overlap-group8-2">
            <div class="our-partners montserrat-light-eerie-black-38-1px">{{ ourPartners }}</div>
            <div class="group-104">
              <img class="rectangle-163-3" :src="rectangle163" />
              <div class="overlap-group-25" :style="{ 'background-image': 'url(' + overlapGroup2 + ')' }">
                <img class="rectangle-164-3" :src="rectangle164" />
              </div>
              <img class="rectangle-167-1" :src="rectangle167" /><img class="rectangle-166-2" :src="rectangle166" />
            </div>
          </div>
          <div class="our-board">{{ ourBoard }}</div>
        </div>
      </div>
      <div class="flex-row-9">
        <div class="overlap-group10-2">
          <div class="rectangle-64-2"></div>
          <div class="rectangle-133-1"></div>
          <div class="adewale-oshinaike-3">{{ adewaleOshinaike }}</div>
          <div class="name-6 montserrat-bold-eerie-black-19-1px">{{ name }}</div>
          <div class="group-managing-director">{{ groupManagingDirector }}</div>
          <div class="managing-director-ed montserrat-normal-eerie-black-19-1px">{{ managingDirectorEd1 }}</div>
          <img class="rectangle-46-2" :src="rectangle46" /><img class="rectangle-134-1" :src="rectangle134" />
        </div>
        <div class="overlap-group-container-6">
          <div class="overlap-group16">
            <div class="rectangle-131-1"></div>
            <div class="adeola-elegbede montserrat-bold-eerie-black-19-1px">{{ adeolaElegbede }}</div>
            <div class="managing-director-ed-1 montserrat-normal-eerie-black-17-7px">{{ managingDirectorEd2 }}</div>
            <img class="rectangle-132-1" :src="rectangle132" />
          </div>
          <div class="overlap-group9-2">
            <img class="rectangle-136-1" :src="rectangle136" />
            <div class="monisola-oshinaike montserrat-bold-eerie-black-20-9px">{{ monisolaOshinaike }}</div>
            <div class="managing-director-ed-2 montserrat-normal-eerie-black-20-9px">{{ managingDirectorEd3 }}</div>
          </div>
        </div>
      </div>
      <div class="flex-col-8">
        <div class="overlap-group6-3" :style="{ 'background-image': 'url(' + overlapGroup6 + ')' }">
          <div class="surname-8 montserrat-light-eerie-black-38-1px">{{ surname4 }}</div>
          <div class="for-the-first-time montserrat-semi-bold-cape-cod-17-7px">{{ forTheFirstTime }}</div>
        </div>
        <div class="client-testimony montserrat-light-eerie-black-38-1px">{{ clientTestimony }}</div>
        <div class="flex-row-10">
          <div class="overlap-group11-1">
            <img class="rectangle-138-1" :src="rectangle138" />
            <div class="mrs-lewis">{{ mrsLewis }}</div>
            <div class="fmcg-trader montserrat-normal-eerie-black-17-7px">{{ fmcgTrader }}</div>
          </div>
          <div class="lorem-ipsum-dolor-si-1 montserrat-normal-eerie-black-17-7px">{{ loremIpsumDolorSi }}</div>
        </div>
        <div class="overlap-group7-3">
          <div class="group-211">
            <div class="group-209"></div>
            <div class="group-210"></div>
          </div>
          <img class="arrow-8" :src="arrow8" /><img class="arrow-9" :src="arrow9" />
        </div>
        <div class="group-container-4">
          <group212 />
          <div class="overlap-group12"><img class="group-9" :src="group" /></div>
        </div>
        <div class="overlap-group14">
          <img class="rectangle-54" :src="rectangle54" />
          <div class="rectangle-99-1"></div>
          <p class="surname-9" v-html="surname5"></p>
          <div class="surname-10">{{ surname6 }}</div>
        </div>
        <div class="group-234-19">
          <div class="do-we-have-everythin-15 montserrat-bold-eerie-black-40-8px">{{ doWeHaveEverythin }}</div>
          <div class="drop-us-your-contact-16 montserrat-normal-eerie-black-23-8px">{{ dropUsYourContact }}</div>
          <group217
            :overlapGroup2="group217Props.overlapGroup2"
            :overlapGroup1="group217Props.overlapGroup1"
            :className="group217Props.className"
          />
          <x-footer :className="xFooterProps.className" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Group212 from "./Group212";
import Group217 from "./Group217";
import XFooter from "./XFooter";
export default {
  name: "AboutUs",
  components: {
    Group212,
    Group217,
    XFooter,
  },
  props: [
    "foxCapitalLogo2",
    "place1",
    "aboutUs1",
    "services1",
    "investment",
    "group196",
    "aboutUs2",
    "services2",
    "team",
    "line38",
    "line39",
    "surname1",
    "surname2",
    "whatDoesFoxCapitalStandFor",
    "weStandFor",
    "vector2",
    "vector3",
    "vector4",
    "vector5",
    "ethics",
    "innovation",
    "collaboration",
    "qualityComfort",
    "sustainibility",
    "vision",
    "toRedefineRealEs",
    "overlapGroup11",
    "group201",
    "place2",
    "toCollaborateWith",
    "overlapGroup12",
    "group228",
    "overlapGroup1",
    "group229",
    "goal",
    "establishOurselve",
    "surname3",
    "group273",
    "vector6",
    "makingRealEstateI",
    "group272",
    "vector7",
    "establishingTheFir",
    "group271",
    "vector8",
    "weBelieveInLongT",
    "ourPartners",
    "rectangle163",
    "overlapGroup2",
    "rectangle164",
    "rectangle167",
    "rectangle166",
    "ourBoard",
    "adewaleOshinaike",
    "name",
    "groupManagingDirector",
    "managingDirectorEd1",
    "rectangle46",
    "rectangle134",
    "adeolaElegbede",
    "managingDirectorEd2",
    "rectangle132",
    "rectangle136",
    "monisolaOshinaike",
    "managingDirectorEd3",
    "overlapGroup6",
    "surname4",
    "forTheFirstTime",
    "clientTestimony",
    "rectangle138",
    "mrsLewis",
    "fmcgTrader",
    "loremIpsumDolorSi",
    "arrow8",
    "arrow9",
    "group",
    "rectangle54",
    "surname5",
    "surname6",
    "doWeHaveEverythin",
    "dropUsYourContact",
    "group217Props",
    "xFooterProps",
  ],
};
</script>

<style>
.about-us-5 {
  align-items: flex-start;
  background-color: var(--concrete);
  display: flex;
  flex-direction: column;
  height: 8102px;
  overflow: hidden;
  padding: 81.9px 0;
  width: 1200px;
}

.flex-col-6 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 3115px;
  width: 1237px;
}

.flex-row-7 {
  align-items: center;
  display: flex;
  margin-right: 54.53px;
  min-width: 1045px;
}

.fox-capital-logo-2-4 {
  cursor: pointer;
  height: 62px;
  object-fit: cover;
  width: 141px;
}

.place-7 {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  margin-left: 384px;
  margin-top: 0.53px;
  min-height: 20px;
  white-space: nowrap;
  width: 48px;
}

.overlap-group13-1 {
  align-items: flex-start;
  background-color: var(--desert-storm);
  border-radius: 10.19px;
  box-shadow: 6.8px 6.8px 13.59px #00000017, -6.8px -6.8px 13.59px #ffffff;
  display: flex;
  height: 58px;
  justify-content: flex-end;
  margin-left: 60px;
  margin-top: 0.53px;
  min-width: 130px;
  padding: 19px 28.5px;
}

.about-us-6 {
  letter-spacing: 0.07px;
  line-height: 19.9px;
  min-height: 20px;
  opacity: 0.9;
  white-space: nowrap;
}

.services-4 {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  margin-left: 50px;
  margin-top: 0.53px;
  min-height: 20px;
  opacity: 0.9;
  white-space: nowrap;
  width: 66px;
}

.investment-4 {
  letter-spacing: 0.07px;
  line-height: 19.9px;
  margin-left: 76px;
  margin-top: 0.53px;
  min-height: 20px;
  white-space: nowrap;
  width: 91px;
}

.flex-col-7 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 83px;
  min-height: 2969px;
  width: 1237px;
}

.group-196-1 {
  height: 419px;
  margin-right: 36.24px;
  width: 884px;
}

.group-container-3 {
  align-self: flex-end;
  background-color: var(--concrete);
  border-radius: 20.39px;
  box-shadow: 6.8px 6.8px 13.59px #00000017, -6.8px -6.8px 13.59px #ffffff;
  height: 94px;
  margin-top: 65px;
  position: relative;
  width: 1168px;
}

.group-198 {
  align-items: flex-start;
  display: flex;
  height: 24px;
  left: 141px;
  min-width: 787px;
  position: absolute;
  top: 35px;
}

.about-us-7 {
  color: var(--orange-peel);
  font-family: var(--font-family-montserrat);
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.09px;
  line-height: 24px;
  min-height: 24px;
  min-width: 88px;
  white-space: nowrap;
}

.services-5 {
  color: var(--storm-dust);
  cursor: pointer;
  font-family: var(--font-family-montserrat);
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.09px;
  line-height: 24px;
  margin-left: 265px;
  min-height: 24px;
  min-width: 80px;
  white-space: nowrap;
}

.team {
  color: var(--storm-dust);
  cursor: pointer;
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-xxs);
  font-weight: 700;
  letter-spacing: 0.09px;
  line-height: 23.6px;
  margin-left: 276px;
  min-height: 20px;
  white-space: nowrap;
}

.group-197 {
  display: flex;
  height: 33px;
  left: 400px;
  position: absolute;
  top: 32px;
  width: 368px;
}

.line-38 {
  height: 34px;
  margin-left: -1.2px;
  margin-top: -0.4px;
  width: 2.5px;
}

.line-39 {
  height: 34px;
  margin-left: 364.9px;
  margin-top: -0.4px;
  width: 3px;
}

.group-199 {
  display: flex;
  flex-direction: column;
  height: 237px;
  margin-left: 70.27px;
  margin-top: 62px;
  width: 943px;
}

.surname-5 {
  height: 44px;
  letter-spacing: 0;
  line-height: 44.4px;
  margin-left: 1px;
  white-space: nowrap;
  width: 345px;
}

.surname-6 {
  color: var(--cape-cod);
  font-family: var(--font-family-lora);
  font-size: 31.3px;
  font-weight: 400;
  height: 182px;
  letter-spacing: 0;
  line-height: 44.4px;
  margin-top: 11px;
  width: 939px;
}

.overlap-group5-4 {
  align-items: center;
  align-self: flex-start;
  background-color: var(--eerie-black-2);
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  min-height: 460px;
  padding: 51.8px 65.9px;
  width: 1199px;
}

.stand-for-container {
  align-self: flex-start;
  height: 127px;
  position: relative;
  width: 610px;
}

.what-does-fox-capital-stand-for {
  left: 0;
  letter-spacing: 0;
  line-height: 54px;
  position: absolute;
  top: 0;
  width: 610px;
}

.we-stand-for {
  left: 0;
  letter-spacing: 0.49px;
  line-height: 24.5px;
  position: absolute;
  top: 82px;
  width: 599px;
}

.vector-container {
  align-items: flex-end;
  display: flex;
  margin-right: 22px;
  margin-top: 92px;
  min-width: 870px;
}

.vector-14 {
  height: 51px;
  margin-bottom: 0.31px;
  width: 52px;
}

.vector-15 {
  align-self: center;
  height: 56px;
  margin-left: 138px;
  margin-top: 0.64px;
  width: 44px;
}

.vector-16 {
  height: 45px;
  margin-bottom: 0.37px;
  margin-left: 160px;
  width: 60px;
}

.vector-17 {
  height: 58px;
  margin-left: 160px;
  width: 50px;
}

.vector-18 {
  height: 51px;
  margin-bottom: 0.31px;
  margin-left: 148px;
  width: 58px;
}

.flex-row-8 {
  align-items: flex-start;
  display: flex;
  height: 24px;
  margin-left: 10px;
  margin-top: 40px;
  min-width: 906px;
}

.ethics {
  letter-spacing: 0.09px;
  line-height: 23.6px;
  min-height: 24px;
  min-width: 57px;
  white-space: nowrap;
}

.innovation {
  letter-spacing: 0.09px;
  line-height: 23.6px;
  margin-left: 110px;
  min-height: 24px;
  min-width: 99px;
  white-space: nowrap;
}

.collaboration {
  letter-spacing: 0.09px;
  line-height: 23.6px;
  margin-left: 103px;
  min-height: 24px;
  min-width: 124px;
  white-space: nowrap;
}

.quality-comfort {
  letter-spacing: 0.09px;
  line-height: 23.6px;
  margin-left: 70px;
  min-height: 24px;
  min-width: 165px;
  white-space: nowrap;
}

.sustainibility {
  letter-spacing: 0.09px;
  line-height: 23.6px;
  margin-left: 59px;
  min-height: 24px;
  white-space: nowrap;
}

.group-270 {
  display: flex;
  height: 495px;
  margin-right: 37.01px;
  margin-top: 81px;
  width: 1078px;
}

.overlap-group-container-3 {
  align-items: flex-start;
  display: flex;
  height: 494.69px;
  min-width: 690.4px;
}

.overlap-group-container-4 {
  border-radius: 29.22px;
  height: 457px;
  position: relative;
  width: 303px;
}

.overlap-group-16 {
  align-items: flex-end;
  background-color: var(--concrete);
  border-radius: 29.22px;
  box-shadow: 13.59px 13.59px 33.98px #d2d2d2, -13.59px -13.59px 33.98px #ffffff;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 457px;
  padding: 62.5px 23.8px;
  position: absolute;
  top: 0;
  width: 303px;
}

.vision {
  align-self: center;
  letter-spacing: 0;
  line-height: 54px;
  margin-right: 0;
  margin-top: 156px;
  min-height: 55px;
  white-space: nowrap;
  width: 113px;
}

.to-redefine-real-es {
  letter-spacing: -0.71px;
  line-height: 29.1px;
  margin-top: 4px;
  min-height: 117px;
  text-align: center;
  width: 255px;
}

.overlap-group1-20 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 180px;
  left: 62px;
  min-width: 180px;
  padding: 10.9px 32.7px;
  position: absolute;
  top: 25px;
}

.group-201 {
  height: 108px;
  width: 106px;
}

.overlap-group-container-5 {
  border-radius: 29.22px;
  height: 495px;
  margin-left: 84px;
  position: relative;
  width: 303px;
}

.overlap-group-23 {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 29.22px;
  box-shadow: 13.59px 13.59px 33.98px #d2d2d2, -13.59px -13.59px 33.98px #ffffff;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 495px;
  padding: 47.6px 27.2px;
  position: absolute;
  top: 0;
  width: 303px;
}

.place-8 {
  align-self: center;
  letter-spacing: 0;
  line-height: 54px;
  margin-right: 0;
  margin-top: 171px;
  min-height: 55px;
  white-space: nowrap;
  width: 145px;
}

.to-collaborate-with {
  letter-spacing: 0;
  line-height: 29.1px;
  margin-top: 1px;
  min-height: 172px;
  text-align: center;
  width: 249px;
}

.overlap-group1-21 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 180px;
  justify-content: flex-end;
  left: 62px;
  min-width: 180px;
  padding: 45px 49.8px;
  position: absolute;
  top: 25px;
}

.group-228 {
  height: 86px;
  width: 80px;
}

.group-269 {
  align-items: flex-start;
  display: flex;
  height: 457.32px;
  margin-left: 84.3px;
  min-width: 307.07px;
}

.overlap-group4-5 {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 29.22px;
  box-shadow: 13.59px 13.59px 33.98px #d2d2d2, -13.59px -13.59px 33.98px #ffffff;
  display: flex;
  flex-direction: column;
  min-height: 457px;
  padding: 19px 28.5px;
  width: 303px;
}

.overlap-group-24 {
  align-items: flex-end;
  background-size: 100% 100%;
  display: flex;
  height: 180px;
  justify-content: flex-end;
  margin-right: 0;
  margin-top: 6px;
  min-width: 180px;
  padding: 38px 31.1px;
}

.group-229 {
  height: 101px;
  width: 92px;
}

.goal {
  letter-spacing: 0;
  line-height: 54px;
  margin-left: 0;
  margin-top: 14px;
  min-height: 55px;
  white-space: nowrap;
  width: 91px;
}

.establish-ourselve {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 30.3px;
  margin-top: 7px;
  min-height: 157px;
  text-align: center;
  width: 245px;
}

.surname-7 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 54px;
  margin-left: 65.91px;
  margin-top: 98px;
  min-height: 54px;
  white-space: nowrap;
}

.frame-35636 {
  display: flex;
  height: 98px;
  margin-right: 71.8px;
  margin-top: 48px;
  width: 1013px;
}

.group-273 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 98px;
  min-width: 98px;
  padding: 21.5px 18.6px;
}

.vector-19 {
  height: 53px;
  width: 53px;
}

.making-real-estate-i {
  height: 52.32px;
  letter-spacing: 0.49px;
  line-height: 24.5px;
  margin-left: 64.9px;
  margin-top: 22.8px;
  width: 850.08px;
}

.frame-3563 {
  display: flex;
  height: 98px;
  margin-right: 126.84px;
  margin-top: 27px;
  width: 958px;
}

.group-272 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 98px;
  min-width: 98px;
  padding: 16.1px 25.4px;
}

.vector-20 {
  height: 65px;
  width: 46px;
}

.establishing-the-fir {
  height: 74.75px;
  letter-spacing: 0.49px;
  line-height: 24.5px;
  margin-left: 64.9px;
  margin-top: 11.6px;
  width: 795.04px;
}

.group-271 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 98px;
  justify-content: flex-end;
  min-width: 98px;
  padding: 22.3px 19.9px;
}

.vector-21 {
  height: 46px;
  width: 58px;
}

.we-believe-in-long-t {
  height: 59.12px;
  letter-spacing: 0.49px;
  line-height: 24.5px;
  margin-left: 64.9px;
  margin-top: 19.4px;
  width: 795.04px;
}

.overlap-group8-2 {
  height: 218px;
  margin-right: 32.68px;
  margin-top: 113px;
  position: relative;
  width: 1060px;
}

.our-partners {
  left: 0;
  letter-spacing: 0;
  line-height: 54px;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 243px;
}

.group-104 {
  align-items: flex-end;
  display: flex;
  height: 164px;
  justify-content: flex-end;
  left: 2px;
  min-width: 1058px;
  padding: 25.3px 0;
  position: absolute;
  top: 53px;
}

.rectangle-163-3 {
  height: 56px;
  margin-bottom: 0.57px;
  object-fit: cover;
  width: 173px;
}

.overlap-group-25 {
  align-items: flex-start;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  height: 57px;
  justify-content: flex-end;
  margin-bottom: 0;
  margin-left: 85px;
  min-width: 217px;
  padding: 0 81.8px;
}

.rectangle-164-3 {
  height: 1px;
  width: 1px;
}

.rectangle-167-1 {
  height: 57px;
  margin-bottom: 0;
  margin-left: 97px;
  object-fit: cover;
  width: 173px;
}

.rectangle-166-2 {
  height: 57px;
  margin-left: 96px;
  object-fit: cover;
  width: 218px;
}

.our-board {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 54px;
  margin-left: 72.03px;
  margin-top: 72px;
  min-height: 56px;
  white-space: nowrap;
}

.flex-row-9 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  margin-left: 57.8px;
  margin-top: 82px;
  min-width: 870px;
}

.overlap-group10-2 {
  height: 1003px;
  position: relative;
  width: 364px;
}

.rectangle-64-2 {
  background-color: var(--concrete);
  border-radius: 30.31px;
  box-shadow: 14.1px 14.1px 35.24px #d2d2d2, -14.1px -14.1px 35.24px #ffffff;
  height: 455px;
  left: 1px;
  position: absolute;
  top: 4px;
  width: 364px;
}

.rectangle-133-1 {
  background-color: var(--concrete);
  border-radius: 31.53px;
  box-shadow: 14.67px 14.67px 36.66px #d2d2d2, -14.67px -14.67px 36.66px #ffffff;
  height: 455px;
  left: 0;
  position: absolute;
  top: 548px;
  width: 364px;
}

.adewale-oshinaike-3 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 18.3px;
  font-weight: 700;
  left: 21px;
  letter-spacing: 0.09px;
  line-height: 24.4px;
  position: absolute;
  top: 357px;
  white-space: nowrap;
  width: 194px;
}

.name-6 {
  left: 17px;
  letter-spacing: 0.1px;
  line-height: 25.4px;
  position: absolute;
  top: 905px;
  white-space: nowrap;
}

.group-managing-director {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 18.3px;
  font-weight: 400;
  left: 15px;
  letter-spacing: 1.01px;
  line-height: 24.4px;
  position: absolute;
  top: 390px;
  white-space: nowrap;
  width: 271px;
}

.managing-director-ed {
  left: 17px;
  letter-spacing: 1.05px;
  line-height: 25.4px;
  position: absolute;
  top: 939px;
  white-space: nowrap;
}

.rectangle-46-2 {
  height: 334px;
  left: 0;
  position: absolute;
  top: 0;
  width: 364px;
}

.rectangle-134-1 {
  height: 480px;
  left: 0;
  position: absolute;
  top: 393px;
  width: 364px;
}

.overlap-group-container-6 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 142px;
  margin-top: 0.05px;
  min-height: 982px;
  width: 364px;
}

.overlap-group16 {
  height: 458px;
  position: relative;
  width: 364px;
}

.rectangle-131-1 {
  background-color: var(--concrete);
  border-radius: 29.22px;
  box-shadow: 13.59px 13.59px 33.98px #d2d2d2, -13.59px -13.59px 33.98px #ffffff;
  height: 455px;
  left: 0;
  position: absolute;
  top: 4px;
  width: 364px;
}

.adeola-elegbede {
  left: 32px;
  letter-spacing: 0.1px;
  line-height: 25.4px;
  position: absolute;
  top: 358px;
  white-space: nowrap;
  width: 196px;
}

.managing-director-ed-1 {
  left: 32px;
  letter-spacing: 0.97px;
  line-height: 23.6px;
  position: absolute;
  top: 393px;
  white-space: nowrap;
  width: 256px;
}

.rectangle-132-1 {
  height: 334px;
  left: 0;
  position: absolute;
  top: 0;
  width: 363px;
}

.overlap-group9-2 {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 34.5px;
  box-shadow: 16.05px 16.05px 40.12px #d2d2d2, -16.05px -16.05px 40.12px #ffffff;
  display: flex;
  flex-direction: column;
  margin-top: 69px;
  min-height: 455px;
  width: 364px;
}

.rectangle-136-1 {
  height: 346px;
  width: 364px;
}

.monisola-oshinaike {
  letter-spacing: 0.1px;
  line-height: 27.8px;
  margin-left: 33.37px;
  margin-top: 21px;
  min-height: 28px;
  white-space: nowrap;
}

.managing-director-ed-2 {
  align-self: center;
  letter-spacing: 1.15px;
  line-height: 27.8px;
  margin-right: 32.81px;
  margin-top: 6px;
  min-height: 28px;
  min-width: 264px;
  white-space: nowrap;
}

.flex-col-8 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 82px;
  min-height: 3716px;
  width: 1204px;
}

.overlap-group6-3 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  margin-right: 4px;
  min-height: 911px;
  padding: 31.8px 72px;
  width: 1200px;
}

.surname-8 {
  letter-spacing: 0;
  line-height: 54px;
  min-height: 102px;
  width: 652px;
}

.for-the-first-time {
  align-self: flex-end;
  letter-spacing: 0;
  line-height: 30.3px;
  margin-right: 8.97px;
  margin-top: 496px;
  min-height: 165px;
  width: 444px;
}

.client-testimony {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 54px;
  margin-left: 122px;
  margin-top: 41px;
  min-height: 50px;
  white-space: nowrap;
}

.flex-row-10 {
  align-items: center;
  display: flex;
  height: 402px;
  margin-right: 67.3px;
  margin-top: 100px;
  min-width: 883px;
}

.overlap-group11-1 {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 29.22px;
  box-shadow: 13.59px 13.59px 33.98px #d2d2d2, -13.59px -13.59px 33.98px #ffffff;
  display: flex;
  flex-direction: column;
  min-height: 402px;
  width: 292px;
}

.rectangle-138-1 {
  height: 292px;
  width: 292px;
}

.mrs-lewis {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-xxs);
  font-weight: 700;
  letter-spacing: 0.09px;
  line-height: 23.6px;
  margin-left: 12.76px;
  margin-top: 23px;
  min-height: 20px;
  white-space: nowrap;
}

.fmcg-trader {
  letter-spacing: 0.97px;
  line-height: 23.6px;
  margin-left: 12.76px;
  margin-top: 12px;
  min-height: 21px;
  white-space: nowrap;
}

.lorem-ipsum-dolor-si-1 {
  letter-spacing: 0.18px;
  line-height: 30.7px;
  margin-bottom: 0.68px;
  margin-left: 107px;
  min-height: 243px;
  width: 483px;
}

.overlap-group7-3 {
  align-self: flex-end;
  height: 85px;
  margin-right: 115.09px;
  margin-top: 42px;
  position: relative;
  width: 198px;
}

.group-211 {
  display: flex;
  height: 85px;
  left: 0;
  position: absolute;
  top: 0;
  width: 198px;
}

.group-209 {
  background-color: var(--concrete);
  border-radius: 20.39px;
  box-shadow: 6.8px 6.8px 13.59px #00000017, -6.8px -6.8px 13.59px #ffffff;
  height: 84.94px;
  width: 84.94px;
}

.group-210 {
  background-color: var(--concrete);
  border-radius: 20.39px;
  box-shadow: 6.8px 6.8px 13.59px #00000017, -6.8px -6.8px 13.59px #ffffff;
  height: 84.94px;
  margin-left: 28px;
  width: 84.94px;
}

.arrow-8 {
  height: 16px;
  left: 28px;
  position: absolute;
  top: 35px;
  width: 28px;
}

.arrow-9 {
  height: 16px;
  left: 141px;
  position: absolute;
  top: 35px;
  width: 28px;
}

.group-container-4 {
  align-items: center;
  display: flex;
  margin-right: 22px;
  margin-top: 119px;
  min-width: 996px;
  position: relative;
}

.overlap-group12 {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 45.53px;
  box-shadow: 13.59px 13.59px 33.98px #d2d2d2, -13.59px -13.59px 33.98px #ffffff;
  display: flex;
  height: 593px;
  justify-content: flex-end;
  margin-left: 27px;
  min-width: 471px;
  padding: 11.9px 7.2px;
}

.group-9 {
  height: 569px;
  width: 448px;
}

.overlap-group14 {
  height: 734px;
  margin-left: 2px;
  margin-top: 151px;
  position: relative;
  width: 1194px;
}

.rectangle-54 {
  height: 733px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1194px;
}

.rectangle-99-1 {
  background-color: var(--eerie-black-2);
  height: 734px;
  left: 0;
  position: absolute;
  top: 0;
  width: 639px;
}

.surname-9 {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-xxxs);
  font-weight: 400;
  left: 87px;
  letter-spacing: 0;
  line-height: 25.6px;
  position: absolute;
  top: 234px;
  width: 465px;
}

.surname-10 {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 21.7px;
  font-weight: 600;
  left: 87px;
  letter-spacing: 0;
  line-height: 37.3px;
  position: absolute;
  top: 129px;
  width: 525px;
}

.group-234-19 {
  display: flex;
  flex-direction: column;
  height: 386px;
  margin-top: 103px;
  position: relative;
  width: 1204px;
}

.do-we-have-everythin-15 {
  height: 58px;
  letter-spacing: 0;
  line-height: 57.9px;
  margin-left: 147px;
  white-space: nowrap;
  width: 906px;
}

.drop-us-your-contact-16 {
  height: 68.63px;
  letter-spacing: 0;
  line-height: 38.5px;
  margin-left: 323px;
  margin-top: 26.3px;
  text-align: center;
  width: 553.12px;
}
</style>
