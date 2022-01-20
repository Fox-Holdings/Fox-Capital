<template>
  <div class="container-center-horizontal">
    <div class="tablet22 screen">
      <div class="flex-row-33">
        <router-link to="/tablet" className="align-self-flex-end"
          ><img class="fox-capital-logo-2-17" :src="foxCapitalLogo2" /></router-link
        ><router-link to="/tablet" className="align-self-flex-center">
          <div class="place-25 montserrat-bold-storm-dust-14-9px">{{ place1 }}</div>
        </router-link>
        <div class="frame-35639-6">
          <div class="about-us-20 montserrat-bold-orange-peel-14-9px">{{ aboutUs }}</div>
        </div>
      </div>
      <div class="flex-row-34">
        <router-link to="/tablet2-2">
          <div class="services-19 montserrat-bold-fuscous-gray-14-9px">{{ services }}</div> </router-link
        ><router-link to="/tablet2">
          <div class="investment-18 montserrat-bold-fuscous-gray-14-9px">{{ investment }}</div>
        </router-link>
      </div>
      <img class="group-196-3" :src="group196" />
      <div class="group-199-2">
        <div class="surname-23 lora-bold-orange-peel-31-3px">{{ surname1 }}</div>
        <div class="surname-24">{{ surname2 }}</div>
      </div>
      <div class="overlap-group9-6 montserrat-semi-bold-white-17-7px">
        <div class="stand-for-container-2">
          <div class="what-does-fox-capital-stand-for-2 montserrat-light-white-38-1px">
            {{ whatDoesFoxCapitalStandFor }}
          </div>
          <div class="we-stand-for-2 montserrat-normal-white-16-3px">{{ weStandFor }}</div>
        </div>
        <div class="vector-container-3">
          <img
            class="vector-44"
            src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1f5e7c8a5a94370b7df04/img/vector-16@2x.png"
          />
          <img class="vector-45" :src="vector2" /><img class="vector-46" :src="vector3" />
        </div>
        <div class="flex-row-35">
          <div class="ethics-2">{{ ethics }}</div>
          <div class="innovation-2">{{ innovation }}</div>
          <div class="collaboration-2">{{ collaboration }}</div>
        </div>
        <div class="vector-container-4">
          <img class="vector-47" :src="vector4" /><img class="vector-48" :src="vector5" />
        </div>
        <div class="lity-container-1">
          <div class="quality-comfort-2">{{ qualityComfort }}</div>
          <div class="sustainibility-2">{{ sustainibility }}</div>
        </div>
      </div>
      <div class="group-271-2">
        <div class="overlap-group-container-10">
          <div class="overlap-group-container-11">
            <div class="overlap-group-45">
              <div class="vision-2 montserrat-light-eerie-black-38-1px">{{ vision }}</div>
              <div class="to-redefine-real-es-2 montserrat-semi-bold-cape-cod-17-7px">{{ toRedefineRealEs }}</div>
            </div>
            <div class="overlap-group1-30" :style="{ 'background-image': 'url(' + overlapGroup11 + ')' }">
              <img class="group-201-2" :src="group201" />
            </div>
          </div>
          <div class="overlap-group-container-12">
            <div class="overlap-group-46">
              <div class="place-26 montserrat-light-eerie-black-38-1px">{{ place2 }}</div>
              <div class="to-collaborate-with-2 montserrat-semi-bold-cape-cod-17-7px">{{ toCollaborateWith }}</div>
            </div>
            <div class="overlap-group1-31" :style="{ 'background-image': 'url(' + overlapGroup12 + ')' }">
              <img class="group-228-2" :src="group228" />
            </div>
          </div>
        </div>
        <div class="group-269-2">
          <div class="overlap-group4-15">
            <div class="overlap-group-47" :style="{ 'background-image': 'url(' + overlapGroup + ')' }">
              <img class="group-229-2" :src="group229" />
            </div>
            <div class="goal-2 montserrat-light-eerie-black-38-1px">{{ goal }}</div>
            <div class="establish-ourselve-2 montserrat-semi-bold-cape-cod-17-7px">{{ establishOurselve }}</div>
          </div>
        </div>
      </div>
      <div class="our-partners-2 montserrat-light-eerie-black-38-1px">{{ ourPartners }}</div>
      <div class="group-104-2">
        <img class="rectangle-163-8" :src="rectangle163" /><img class="rectangle-165-6" :src="rectangle165" />
      </div>
      <div class="our-board-2 montserrat-light-eerie-black-24px">{{ ourBoard }}</div>
      <div class="group-274">
        <div class="overlap-group5-15">
          <div class="rectangle-64-5"></div>
          <div class="adewale-oshinaike-5">{{ adewaleOshinaike }}</div>
          <div class="group-managing-director-2">{{ groupManagingDirector }}</div>
          <img class="rectangle-46-5" :src="rectangle46" />
        </div>
      </div>
      <div class="group-277">
        <div class="overlap-group6-12">
          <div class="rectangle-131-5"></div>
          <div class="adeola-elegbede-2">{{ adeolaElegbede }}</div>
          <div class="managing-director-ed-6">{{ managingDirectorEd1 }}</div>
          <img class="rectangle-132-4" :src="rectangle132" />
        </div>
      </div>
      <div class="overlap-group11-4">
        <img class="vector-3-8" :src="vector32" />
        <div class="overlap-group7-10">
          <img class="rectangle-134-5" :src="rectangle134" />
          <div class="name-8 montserrat-bold-eerie-black-19-1px">{{ name }}</div>
          <div class="managing-director-ed-7 montserrat-normal-eerie-black-19-1px">{{ managingDirectorEd2 }}</div>
        </div>
        <div class="overlap-group8-7">
          <img class="rectangle-136-5" :src="rectangle136" />
          <div class="monisola-oshinaike-2 montserrat-bold-eerie-black-20-9px">{{ monisolaOshinaike }}</div>
          <div class="managing-director-ed-8 montserrat-normal-eerie-black-20-9px">{{ managingDirectorEd3 }}</div>
        </div>
      </div>
      <div class="group-281-1">
        <div class="flex-row-36">
          <div class="flex-col-38">
            <div class="client-testimony-2 montserrat-light-eerie-black-24px">{{ clientTestimony }}</div>
            <div class="overlap-group-48">
              <img class="rectangle-138-4" :src="rectangle138" />
              <div class="mrs-lewis-1">{{ mrsLewis }}</div>
              <div class="fmcg-trader-1 montserrat-normal-eerie-black-10-9px">{{ fmcgTrader }}</div>
            </div>
          </div>
          <p class="lorem-ipsum-dolor-si-7 montserrat-normal-eerie-black-10-9px">{{ loremIpsumDolorSi }}</p>
        </div>
        <div class="group-211-2">
          <div class="overlap-group1-32"><img class="arrow-1" :src="arrow8" /></div>
          <div class="overlap-group2-24"><img class="arrow-1" :src="arrow9" /></div>
        </div>
      </div>
      <group212 :className="group212Props.className" />
      <img class="group-20" :src="group" />
      <div class="surname-container">
        <div class="surname-25">{{ surname3 }}</div>
        <p class="surname-26" v-html="surname4"></p>
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
import Group212 from "./Group212";
import Group234 from "./Group234";
export default {
  name: "Tablet23",
  components: {
    Group212,
    Group234,
  },
  props: [
    "foxCapitalLogo2",
    "place1",
    "aboutUs",
    "services",
    "investment",
    "group196",
    "surname1",
    "surname2",
    "whatDoesFoxCapitalStandFor",
    "weStandFor",
    "vector2",
    "vector3",
    "ethics",
    "innovation",
    "collaboration",
    "vector4",
    "vector5",
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
    "overlapGroup",
    "group229",
    "goal",
    "establishOurselve",
    "ourPartners",
    "rectangle163",
    "rectangle165",
    "ourBoard",
    "adewaleOshinaike",
    "groupManagingDirector",
    "rectangle46",
    "adeolaElegbede",
    "managingDirectorEd1",
    "rectangle132",
    "vector32",
    "rectangle134",
    "name",
    "managingDirectorEd2",
    "rectangle136",
    "monisolaOshinaike",
    "managingDirectorEd3",
    "clientTestimony",
    "rectangle138",
    "mrsLewis",
    "fmcgTrader",
    "loremIpsumDolorSi",
    "arrow8",
    "arrow9",
    "group",
    "surname3",
    "surname4",
    "group212Props",
    "group234Props",
  ],
};
</script>

<style>
.tablet22 {
  align-items: center;
  background-color: var(--concrete);
  display: flex;
  flex-direction: column;
  height: 8959px;
  overflow: hidden;
  padding: 42px 0;
  position: relative;
  width: 750px;
}

.flex-row-33 {
  align-items: flex-start;
  display: flex;
  height: 64px;
  margin-right: 0.54px;
  min-width: 613px;
}

.fox-capital-logo-2-17 {
  align-self: flex-end;
  cursor: pointer;
  height: 62px;
  object-fit: cover;
  width: 141px;
}

.place-25 {
  align-self: center;
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  margin-bottom: 6.17px;
  margin-left: 209px;
  min-height: 20px;
  white-space: nowrap;
  width: 48px;
}

.frame-35639-6 {
  background-color: var(--desert-storm);
  border-radius: 10.19px;
  box-shadow: 6.8px 6.8px 13.59px #00000017, -6.8px -6.8px 13.59px #ffffff;
  display: flex;
  height: 58px;
  margin-left: 84px;
  width: 131px;
}

.about-us-20 {
  height: 20px;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  margin-left: 29px;
  margin-top: 19px;
  opacity: 0.9;
  white-space: nowrap;
  width: 73px;
}

.flex-row-34 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  height: 20px;
  margin-right: 82.94px;
  margin-top: 28px;
  min-width: 249px;
}

.services-19 {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  min-height: 20px;
  opacity: 0.9;
  white-space: nowrap;
  width: 66px;
}

.investment-18 {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  margin-left: 92px;
  min-height: 20px;
  white-space: nowrap;
}

.group-196-3 {
  height: 316px;
  margin-right: 0.37px;
  margin-top: 72px;
  width: 668px;
}

.group-199-2 {
  display: flex;
  flex-direction: column;
  height: 223px;
  margin-right: 94.79px;
  margin-top: 76px;
  width: 535px;
}

.surname-23 {
  height: 44px;
  letter-spacing: 0;
  line-height: 44.4px;
  white-space: nowrap;
  width: 345px;
}

.surname-24 {
  color: var(--cape-cod);
  font-family: var(--font-family-lora);
  font-size: var(--font-size-m);
  font-weight: 400;
  height: 175px;
  letter-spacing: 0;
  line-height: 34.1px;
  margin-left: 0.2px;
  margin-top: 4.2px;
  width: 531px;
}

.overlap-group9-6 {
  align-items: center;
  background-color: var(--eerie-black-2);
  display: flex;
  flex-direction: column;
  margin-top: 97px;
  min-height: 556px;
  padding: 54px 66px;
  width: 750px;
}

.stand-for-container-2 {
  align-self: flex-start;
  height: 112px;
  position: relative;
  width: 610px;
}

.what-does-fox-capital-stand-for-2 {
  left: 0;
  letter-spacing: 0;
  line-height: 54px;
  position: absolute;
  top: 0;
  width: 610px;
}

.we-stand-for-2 {
  left: 0;
  letter-spacing: 0.49px;
  line-height: 24.5px;
  position: absolute;
  top: 67px;
  width: 599px;
}

.vector-container-3 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  height: 57px;
  margin-left: 13.46px;
  margin-top: 39px;
  min-width: 562px;
}

.vector-44 {
  align-self: flex-end;
  height: 52px;
  width: 52px;
}

.vector-45 {
  height: 56px;
  margin-left: 211px;
  margin-top: 0.02px;
  width: 44px;
}

.vector-46 {
  height: 46px;
  margin-left: 195px;
  width: 60px;
}

.flex-row-35 {
  align-items: flex-end;
  display: flex;
  height: 35px;
  margin-left: 5.17px;
  margin-top: 29px;
  min-width: 601px;
}

.ethics-2 {
  letter-spacing: 0.09px;
  line-height: 23.6px;
  min-height: 24px;
  min-width: 57px;
  white-space: nowrap;
}

.innovation-2 {
  letter-spacing: 0.09px;
  line-height: 23.6px;
  margin-bottom: 0.17px;
  margin-left: 183px;
  min-height: 24px;
  min-width: 99px;
  white-space: nowrap;
}

.collaboration-2 {
  align-self: flex-start;
  letter-spacing: 0.09px;
  line-height: 23.6px;
  margin-left: 138px;
  min-height: 24px;
  white-space: nowrap;
}

.vector-container-4 {
  align-items: flex-start;
  display: flex;
  height: 63px;
  margin-right: 51.31px;
  margin-top: 39px;
  min-width: 347px;
}

.vector-47 {
  align-self: flex-end;
  height: 58px;
  width: 50px;
}

.vector-48 {
  height: 51px;
  margin-left: 239px;
  width: 58px;
}

.lity-container-1 {
  align-items: flex-start;
  display: flex;
  height: 36px;
  margin-right: 70px;
  margin-top: 28px;
  min-width: 434px;
}

.quality-comfort-2 {
  align-self: flex-end;
  letter-spacing: 0.09px;
  line-height: 23.6px;
  min-height: 24px;
  min-width: 165px;
  white-space: nowrap;
}

.sustainibility-2 {
  letter-spacing: 0.09px;
  line-height: 23.6px;
  margin-left: 150px;
  min-height: 24px;
  white-space: nowrap;
}

.group-271-2 {
  display: flex;
  flex-direction: column;
  height: 1538px;
  margin-left: 2px;
  margin-top: 67px;
  width: 560px;
}

.overlap-group-container-10 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 1018.69px;
}

.overlap-group-container-11 {
  border-radius: 29.22px;
  height: 457px;
  position: relative;
  width: 560px;
}

.overlap-group-45 {
  align-items: flex-end;
  background-color: var(--concrete);
  border-radius: 29.22px;
  box-shadow: 13.59px 13.59px 33.98px #d2d2d2, -13.59px -13.59px 33.98px #ffffff;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 457px;
  padding: 51.5px 44.5px;
  position: absolute;
  top: 0;
  width: 560px;
}

.vision-2 {
  align-self: center;
  letter-spacing: 0;
  line-height: 54px;
  margin-left: 1.09px;
  margin-top: 176px;
  min-height: 54px;
  white-space: nowrap;
  width: 123px;
}

.to-redefine-real-es-2 {
  letter-spacing: -0.71px;
  line-height: 29.1px;
  margin-top: 7px;
  min-height: 117px;
  text-align: center;
  width: 471px;
}

.overlap-group1-30 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 180px;
  left: 190px;
  min-width: 180px;
  padding: 10.7px 32.4px;
  position: absolute;
  top: 31px;
}

.group-201-2 {
  height: 108px;
  width: 106px;
}

.overlap-group-container-12 {
  border-radius: 29.22px;
  height: 495px;
  margin-top: 67px;
  position: relative;
  width: 560px;
}

.overlap-group-46 {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 29.22px;
  box-shadow: 13.59px 13.59px 33.98px #d2d2d2, -13.59px -13.59px 33.98px #ffffff;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 495px;
  padding: 21.6px 50.2px;
  position: absolute;
  top: 0;
  width: 560px;
}

.place-26 {
  align-self: center;
  letter-spacing: 0;
  line-height: 54px;
  margin-top: 219px;
  min-height: 54px;
  min-width: 142px;
  white-space: nowrap;
}

.to-collaborate-with-2 {
  letter-spacing: 0;
  line-height: 29.1px;
  margin-top: 6px;
  min-height: 172px;
  text-align: center;
  width: 460px;
}

.overlap-group1-31 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 180px;
  justify-content: flex-end;
  left: 190px;
  min-width: 180px;
  padding: 44.8px 49.5px;
  position: absolute;
  top: 25px;
}

.group-228-2 {
  height: 86px;
  width: 80px;
}

.group-269-2 {
  align-items: flex-start;
  display: flex;
  height: 457px;
  margin-top: 62.3px;
  min-width: 564px;
}

.overlap-group4-15 {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 29.22px;
  box-shadow: 13.59px 13.59px 33.98px #d2d2d2, -13.59px -13.59px 33.98px #ffffff;
  display: flex;
  flex-direction: column;
  min-height: 457px;
  padding: 0 29px;
  width: 560px;
}

.overlap-group-47 {
  align-items: flex-end;
  background-size: 100% 100%;
  display: flex;
  height: 180px;
  justify-content: flex-end;
  margin-right: 0.61px;
  margin-top: 25px;
  min-width: 180px;
  padding: 37.7px 30.8px;
}

.group-229-2 {
  height: 102px;
  width: 92px;
}

.goal-2 {
  letter-spacing: 0;
  line-height: 54px;
  margin-right: 0.94px;
  margin-top: 35px;
  min-height: 55px;
  white-space: nowrap;
  width: 91px;
}

.establish-ourselve-2 {
  align-self: flex-end;
  letter-spacing: 0;
  line-height: 30.3px;
  margin-top: 5px;
  min-height: 157px;
  text-align: center;
  width: 497px;
}

.our-partners-2 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 54px;
  margin-left: 74px;
  margin-top: 73px;
  min-height: 54px;
  white-space: nowrap;
}

.group-104-2 {
  display: flex;
  margin-right: 30px;
  margin-top: 39px;
  width: 572px;
}

.rectangle-163-8 {
  height: 77px;
  margin-top: 14px;
  object-fit: cover;
  width: 264px;
}

.rectangle-165-6 {
  height: 105px;
  margin-left: 42px;
  object-fit: cover;
  width: 266px;
}

.our-board-2 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 34.1px;
  margin-left: 87px;
  margin-top: 67px;
  min-height: 56px;
  width: 219px;
}

.group-274 {
  align-items: flex-start;
  display: flex;
  margin-right: 13px;
  margin-top: 13px;
  min-width: 477px;
}

.overlap-group5-15 {
  height: 596px;
  margin-top: -0.2px;
  position: relative;
  width: 473px;
}

.rectangle-64-5 {
  background-color: var(--concrete);
  border-radius: 39.43px;
  box-shadow: 18.34px 18.34px 45.85px #d2d2d2, -18.34px -18.34px 45.85px #ffffff;
  height: 591px;
  left: 0;
  position: absolute;
  top: 5px;
  width: 473px;
}

.adewale-oshinaike-5 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 23.8px;
  font-weight: 700;
  left: 43px;
  letter-spacing: 0.12px;
  line-height: 31.8px;
  position: absolute;
  top: 458px;
  white-space: nowrap;
  width: 253px;
}

.group-managing-director-2 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 23.8px;
  font-weight: 400;
  left: 36px;
  letter-spacing: 1.31px;
  line-height: 31.8px;
  position: absolute;
  top: 500px;
  white-space: nowrap;
  width: 352px;
}

.rectangle-46-5 {
  height: 434px;
  left: 0;
  position: absolute;
  top: 0;
  width: 473px;
}

.group-277 {
  align-items: flex-start;
  display: flex;
  margin-right: 31px;
  margin-top: 25px;
  min-width: 477px;
}

.overlap-group6-12 {
  height: 631px;
  margin-top: -0.13px;
  position: relative;
  width: 473px;
}

.rectangle-131-5 {
  background-color: var(--concrete);
  border-radius: 43.64px;
  box-shadow: 20.3px 20.3px 50.75px #d2d2d2, -20.3px -20.3px 50.75px #ffffff;
  height: 595px;
  left: 0;
  position: absolute;
  top: 36px;
  width: 473px;
}

.adeola-elegbede-2 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 28.5px;
  font-weight: 700;
  left: 42px;
  letter-spacing: 0.14px;
  line-height: 38px;
  position: absolute;
  top: 500px;
  white-space: nowrap;
}

.managing-director-ed-6 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 26.4px;
  font-weight: 400;
  left: 42px;
  letter-spacing: 1.45px;
  line-height: 35.2px;
  position: absolute;
  top: 546px;
  white-space: nowrap;
}

.rectangle-132-4 {
  height: 468px;
  left: 0;
  position: absolute;
  top: 0;
  width: 473px;
}

.overlap-group11-4 {
  align-self: flex-start;
  height: 1307px;
  margin-left: -3px;
  margin-top: 5px;
  position: relative;
  width: 1923px;
}

.vector-3-8 {
  height: 1065px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1923px;
}

.overlap-group7-10 {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 31.53px;
  box-shadow: 14.67px 14.67px 36.66px #d2d2d2, -14.67px -14.67px 36.66px #ffffff;
  display: flex;
  flex-direction: column;
  left: 133px;
  min-height: 595px;
  position: absolute;
  top: 56px;
  width: 473px;
}

.rectangle-134-5 {
  height: 424px;
  margin-left: 0.08px;
  width: 473px;
}

.name-8 {
  letter-spacing: 0.1px;
  line-height: 25.4px;
  margin-left: 21.9px;
  margin-top: 43px;
  min-height: 33px;
  width: 216px;
}

.managing-director-ed-7 {
  letter-spacing: 1.05px;
  line-height: 25.4px;
  margin-left: 21.9px;
  margin-top: 11px;
  min-height: 33px;
  width: 314px;
}

.overlap-group8-7 {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 34.5px;
  box-shadow: 16.05px 16.05px 40.12px #d2d2d2, -16.05px -16.05px 40.12px #ffffff;
  display: flex;
  flex-direction: column;
  left: 124px;
  min-height: 595px;
  position: absolute;
  top: 712px;
  width: 473px;
}

.rectangle-136-5 {
  height: 452px;
  width: 473px;
}

.monisola-oshinaike-2 {
  letter-spacing: 0.1px;
  line-height: 27.8px;
  margin-left: 43.12px;
  margin-top: 28px;
  min-height: 37px;
  width: 281px;
}

.managing-director-ed-8 {
  align-self: center;
  letter-spacing: 1.15px;
  line-height: 27.8px;
  margin-right: 43.28px;
  margin-top: 7px;
  min-height: 37px;
  width: 343px;
}

.group-281-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 32.69px;
  margin-top: 207px;
  min-height: 419px;
  width: 601px;
}

.flex-row-36 {
  align-items: center;
  display: flex;
  height: 341px;
  min-width: 548px;
}

.flex-col-38 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 341px;
  width: 200px;
}

.client-testimony-2 {
  letter-spacing: 0;
  line-height: 34.1px;
  min-height: 31px;
  white-space: nowrap;
}

.overlap-group-48 {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 18.03px;
  box-shadow: 8.39px 8.39px 20.97px #d2d2d2, -8.39px -8.39px 20.97px #ffffff;
  display: flex;
  flex-direction: column;
  margin-left: 3.09px;
  margin-top: 62px;
  min-height: 248px;
  width: 180px;
}

.rectangle-138-4 {
  height: 180px;
  width: 180px;
}

.mrs-lewis-1 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 10.9px;
  font-weight: 700;
  letter-spacing: 0.05px;
  line-height: 14.5px;
  margin-left: 7.87px;
  margin-top: 14px;
  min-height: 12px;
  white-space: nowrap;
}

.fmcg-trader-1 {
  letter-spacing: 0.6px;
  line-height: 14.5px;
  margin-left: 7.87px;
  margin-top: 7px;
  min-height: 13px;
  white-space: nowrap;
}

.lorem-ipsum-dolor-si-7 {
  letter-spacing: 0.11px;
  line-height: 18.9px;
  margin-left: 50px;
  margin-top: 92.15px;
  min-height: 150px;
  width: 298px;
}

.group-211-2 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  margin-right: 4px;
  margin-top: 26px;
  min-width: 122px;
}

.overlap-group1-32 {
  align-items: flex-end;
  background-color: var(--concrete);
  border-radius: 12.58px;
  box-shadow: 4.19px 4.19px 8.39px #00000017, -4.19px -4.19px 8.39px #ffffff;
  display: flex;
  height: 52px;
  justify-content: flex-end;
  min-width: 52px;
  padding: 19.2px 15.7px;
}

.arrow-1 {
  height: 12px;
  width: 17px;
}

.overlap-group2-24 {
  align-items: flex-end;
  background-color: var(--concrete);
  border-radius: 12.58px;
  box-shadow: 4.19px 4.19px 8.39px #00000017, -4.19px -4.19px 8.39px #ffffff;
  display: flex;
  height: 52px;
  justify-content: flex-end;
  margin-left: 17px;
  min-width: 52px;
  padding: 20.2px 17px;
}

.group-20 {
  height: 547px;
  margin-right: 84px;
  margin-top: 60px;
  width: 504px;
}

.surname-container {
  align-items: flex-end;
  background-color: var(--eerie-black-2);
  display: flex;
  flex-direction: column;
  margin-right: 44px;
  margin-top: 76px;
  min-height: 629px;
  padding: 47.2px 23.3px;
  width: 548px;
}

.surname-25 {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 18.6px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 31.9px;
  margin-top: 63px;
  min-height: 65px;
  width: 450px;
}

.surname-26 {
  align-self: center;
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 12.8px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 22px;
  margin-right: 0;
  margin-top: 25px;
  min-height: 381px;
  width: 399px;
}
</style>
