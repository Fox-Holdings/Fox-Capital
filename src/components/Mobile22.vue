<template>
  <div class="container-center-horizontal">
    <div class="mobile2 screen">
      <div class="flex-row-28">
        <router-link to="/mobile"><img class="fox-capital-logo-2-15" :src="foxCapitalLogo2" /></router-link>
        <div class="flex-col-34">
          <router-link to="/mobile">
            <div class="place-22 montserrat-bold-storm-dust-6-4px">{{ place1 }}</div>
          </router-link>
          <div class="frame-35639-4">
            <div class="about-us-18 montserrat-bold-orange-peel-6-4px">{{ aboutUs }}</div>
          </div>
        </div>
      </div>
      <div class="flex-col-35">
        <router-link to="/mobile22">
          <div class="services-17 montserrat-bold-fuscous-gray-6-4px">{{ services }}</div> </router-link
        ><router-link to="/mobile2-1">
          <div class="investment-16 montserrat-bold-fuscous-gray-6-4px">{{ investment }}</div>
        </router-link>
        <div class="group-199-1">
          <div class="surname-17">{{ surname1 }}</div>
          <p class="surname-18">{{ surname2 }}</p>
        </div>
        <div class="overlap-group5-13 montserrat-semi-bold-white-10px">
          <div class="stand-for-container-1">
            <div class="what-does-fox-capital-stand-for-1">{{ whatDoesFoxCapitalStandFor }}</div>
            <div class="we-stand-for-1">{{ weStandFor }}</div>
          </div>
          <div class="vector-container-1">
            <img
              class="vector-38"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1f5e7c8a5a94370b7df04/img/vector-21@2x.png"
            />
            <img class="vector-39" :src="vector2" /><img class="vector-40" :src="vector3" />
          </div>
          <div class="flex-row-29">
            <div class="ethics-1">{{ ethics }}</div>
            <div class="innovation-1">{{ innovation }}</div>
            <div class="collaboration-1">{{ collaboration }}</div>
          </div>
          <div class="vector-container-2">
            <img class="vector-41" :src="vector4" /><img class="vector-42" :src="vector5" />
          </div>
          <div class="lity-container">
            <div class="quality-comfort-1">{{ qualityComfort }}</div>
            <div class="sustainibility-1">{{ sustainibility }}</div>
          </div>
        </div>
        <div class="group-271-1">
          <div class="overlap-group-container-7">
            <div class="overlap-group-container-8">
              <div class="overlap-group-39">
                <div class="vision-1 montserrat-light-eerie-black-14-3px">{{ vision }}</div>
                <p class="to-redefine-real-es-1 montserrat-semi-bold-cape-cod-6-6px">{{ toRedefineRealEs }}</p>
              </div>
              <div class="overlap-group1-26" :style="{ 'background-image': 'url(' + overlapGroup11 + ')' }">
                <img class="group-201-1" :src="group201" />
              </div>
            </div>
            <div class="overlap-group-container-9">
              <div class="overlap-group-40">
                <div class="place-23 montserrat-light-eerie-black-14-3px">{{ place2 }}</div>
                <p class="to-collaborate-with-1 montserrat-semi-bold-cape-cod-6-6px">{{ toCollaborateWith }}</p>
              </div>
              <div class="overlap-group1-27" :style="{ 'background-image': 'url(' + overlapGroup12 + ')' }">
                <img class="group-228-1" :src="group228" />
              </div>
            </div>
          </div>
          <div class="group-269-1">
            <div class="overlap-group4-13">
              <div class="overlap-group-41" :style="{ 'background-image': 'url(' + overlapGroup1 + ')' }">
                <img class="group-229-1" :src="group229" />
              </div>
              <div class="goal-1 montserrat-light-eerie-black-14-3px">{{ goal }}</div>
              <p class="establish-ourselve-1 montserrat-semi-bold-cape-cod-6-6px">{{ establishOurselve }}</p>
            </div>
          </div>
        </div>
        <div class="our-partners-1 montserrat-light-eerie-black-18px">{{ ourPartners }}</div>
        <div class="group-104-1">
          <img class="rectangle-163-7" :src="rectangle163" /><img class="rectangle-165-5" :src="rectangle165" />
        </div>
        <div class="our-board-1 montserrat-light-eerie-black-18px">{{ ourBoard }}</div>
        <div class="overlap-group-42">
          <div class="rectangle-64-4"></div>
          <div class="adewale-oshinaike-4">{{ adewaleOshinaike }}</div>
          <div class="group-managing-director-1">{{ groupManagingDirector }}</div>
          <img class="rectangle-46-4" :src="rectangle46" />
        </div>
        <div class="overlap-group-38">
          <div class="rectangle-131-4"></div>
          <div class="adeola-elegbede-1 montserrat-bold-eerie-black-8-1px">{{ adeolaElegbede }}</div>
          <div class="managing-director-ed-3">{{ managingDirectorEd1 }}</div>
          <img class="rectangle-132-3" :src="rectangle132" />
        </div>
        <div class="overlap-group2-22">
          <img class="rectangle-134-4" :src="rectangle134" />
          <div class="name-7 montserrat-bold-eerie-black-8-1px">{{ name }}</div>
          <div class="managing-director-ed-4">{{ managingDirectorEd2 }}</div>
        </div>
        <div class="overlap-group-38">
          <div class="rectangle-135-3"></div>
          <div class="monisola-oshinaike-1">{{ monisolaOshinaike }}</div>
          <img class="rectangle-136-4" :src="rectangle136" />
          <div class="managing-director-ed-5">{{ managingDirectorEd3 }}</div>
        </div>
        <div class="group-281">
          <div class="client-testimony-1 montserrat-light-eerie-black-18px">{{ clientTestimony }}</div>
          <p class="lorem-ipsum-dolor-si-5 montserrat-normal-eerie-black-12px">{{ loremIpsumDolorSi }}</p>
          <div class="group-211-1">
            <div class="overlap-group1-28"><img class="arrow" :src="arrow8" /></div>
            <div class="overlap-group-43"><img class="arrow" :src="arrow9" /></div>
          </div>
        </div>
        <div class="group-212-2">
          <div class="where-are-we-located-2">{{ whereAreWeLocated }}</div>
          <p class="surname-19 montserrat-normal-eerie-black-12px" v-html="surname3"></p>
          <p class="address-6" v-html="address"></p>
          <img class="group-67-9" :src="group67" />
        </div>
        <div class="overlap-group6-10">
          <img class="group-19" :src="group" />
          <p class="surname-20">{{ surname4 }}</p>
        </div>
        <div class="overlap-group7-8">
          <p class="surname-21" v-html="surname5"></p>
        </div>
        <div class="group-234-20">
          <p class="do-we-have-everythin-16 montserrat-bold-eerie-black-10-9px">{{ doWeHaveEverythin }}</p>
          <p class="drop-us-your-contact-17 montserrat-normal-eerie-black-10px">{{ dropUsYourContact }}</p>
          <div class="group-217-12">
            <div class="overlap-group1-29" :style="{ 'background-image': 'url(' + overlapGroup13 + ')' }">
              <div class="your-name-23 montserrat-medium-cape-cod-10px">{{ yourName }}</div>
            </div>
            <div class="overlap-group-44" :style="{ 'background-image': 'url(' + overlapGroup2 + ')' }">
              <div class="your-email-address-20 montserrat-medium-cape-cod-10px">{{ yourEmailAddress }}</div>
            </div>
            <div class="overlap-group2-23">
              <div class="get-in-touch-20 montserrat-medium-orange-peel-10px">{{ getInTouch }}</div>
            </div>
          </div>
        </div>
        <div class="footer-20">
          <div class="frame-35632-18 montserrat-normal-black-3-9px">
            <div class="privacy-policy-18">{{ privacyPolicy }}</div>
            <div class="terms-of-use-18">{{ termsOfUse }}</div>
          </div>
          <p class="x2021-fox-capital-investment-limited-18 montserrat-normal-black-5-2px">
            <span class="montserrat-normal-black-5-2px">{{ spanText1 }}</span
            ><span class="montserrat-normal-black-3-9px">{{ spanText2 }}</span>
          </p>
        </div>
        <img class="vector-3-6" :src="vector32" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mobile22",
  props: [
    "foxCapitalLogo2",
    "place1",
    "aboutUs",
    "services",
    "investment",
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
    "overlapGroup1",
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
    "rectangle134",
    "name",
    "managingDirectorEd2",
    "monisolaOshinaike",
    "rectangle136",
    "managingDirectorEd3",
    "clientTestimony",
    "loremIpsumDolorSi",
    "arrow8",
    "arrow9",
    "whereAreWeLocated",
    "surname3",
    "address",
    "group67",
    "group",
    "surname4",
    "surname5",
    "doWeHaveEverythin",
    "dropUsYourContact",
    "overlapGroup13",
    "yourName",
    "overlapGroup2",
    "yourEmailAddress",
    "getInTouch",
    "privacyPolicy",
    "termsOfUse",
    "spanText1",
    "spanText2",
    "vector32",
  ],
};
</script>

<style>
.mobile2 {
  align-items: flex-start;
  background-color: var(--concrete);
  display: flex;
  flex-direction: column;
  height: 3771px;
  overflow: hidden;
  padding: 35.8px 0;
  width: 320px;
}

.flex-row-28 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  height: 41px;
  margin-left: 12.65px;
  min-width: 277px;
}

.fox-capital-logo-2-15 {
  cursor: pointer;
  height: 26px;
  object-fit: cover;
  width: 60px;
}

.flex-col-34 {
  align-items: center;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  margin-left: 161px;
  min-height: 41px;
  width: 56px;
}

.place-22 {
  cursor: pointer;
  letter-spacing: 0.03px;
  line-height: 8.5px;
  margin-right: 7.44px;
  min-height: 8px;
  white-space: nowrap;
  width: 20px;
}

.frame-35639-4 {
  background-color: var(--desert-storm);
  border-radius: 4.35px;
  box-shadow: 2.9px 2.9px 5.8px #00000017, -2.9px -2.9px 5.8px #ffffff;
  display: flex;
  height: 25px;
  margin-top: 7px;
  width: 56px;
}

.about-us-18 {
  height: 8.53px;
  letter-spacing: 0.03px;
  line-height: 8.5px;
  margin-left: 12.4px;
  margin-top: 8.1px;
  opacity: 0.9;
  white-space: nowrap;
  width: 31.15px;
}

.flex-col-35 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: -3px;
  margin-top: 5px;
  min-height: 5747px;
  width: 1923px;
}

.services-17 {
  cursor: pointer;
  letter-spacing: 0.03px;
  line-height: 8.5px;
  margin-left: 266.08px;
  min-height: 8px;
  opacity: 0.9;
  white-space: nowrap;
}

.investment-16 {
  cursor: pointer;
  letter-spacing: 0.03px;
  line-height: 8.5px;
  margin-left: 266.08px;
  margin-top: 9px;
  min-height: 8px;
  white-space: nowrap;
}

.group-199-1 {
  display: flex;
  flex-direction: column;
  height: 130px;
  margin-left: 29px;
  margin-top: 31px;
  width: 283px;
}

.surname-17 {
  color: var(--orange-peel);
  font-family: var(--font-family-lora);
  font-size: var(--font-size-xxxxs);
  font-weight: 700;
  height: 20px;
  letter-spacing: 0;
  line-height: 19.9px;
  white-space: nowrap;
  width: 155px;
}

.surname-18 {
  color: var(--cape-cod);
  font-family: var(--font-family-lora);
  font-size: var(--font-size-xxxxxs);
  font-weight: 400;
  height: 105px;
  letter-spacing: 0;
  line-height: 17px;
  margin-top: 5px;
  width: 279px;
}

.overlap-group5-13 {
  align-items: flex-start;
  background-color: var(--eerie-black-2);
  display: flex;
  flex-direction: column;
  margin-left: 3px;
  margin-top: 4px;
  min-height: 237px;
  padding: 20.2px 28px;
  width: 320px;
}

.stand-for-container-1 {
  height: 48px;
  margin-left: 0.16px;
  margin-top: 3px;
  position: relative;
  width: 260px;
}

.what-does-fox-capital-stand-for-1 {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 16.2px;
  font-weight: 300;
  left: 0;
  letter-spacing: 0;
  line-height: 23px;
  position: absolute;
  top: 0;
  width: 260px;
}

.we-stand-for-1 {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 7px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0.21px;
  line-height: 10.5px;
  position: absolute;
  top: 29px;
  width: 256px;
}

.vector-container-1 {
  align-items: flex-start;
  display: flex;
  height: 29px;
  margin-left: 3.93px;
  min-width: 209px;
}

.vector-38 {
  align-self: flex-end;
  height: 22px;
  width: 22px;
}

.vector-39 {
  height: 24px;
  margin-left: 62px;
  margin-top: 0.07px;
  width: 19px;
}

.vector-40 {
  height: 20px;
  margin-left: 80px;
  width: 26px;
}

.flex-row-29 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  height: 16px;
  margin-right: 3px;
  margin-top: 14px;
  min-width: 253px;
}

.ethics-1 {
  align-self: flex-end;
  letter-spacing: 0.05px;
  line-height: 13.3px;
  min-height: 13px;
  min-width: 32px;
  white-space: nowrap;
}

.innovation-1 {
  letter-spacing: 0.05px;
  line-height: 13.3px;
  margin-left: 52px;
  min-height: 13px;
  min-width: 56px;
  white-space: nowrap;
}

.collaboration-1 {
  letter-spacing: 0.05px;
  line-height: 13.3px;
  margin-left: 43px;
  min-height: 13px;
  white-space: nowrap;
}

.vector-container-2 {
  align-items: flex-end;
  align-self: center;
  display: flex;
  margin-right: 49.45px;
  margin-top: 36px;
  min-width: 143px;
}

.vector-41 {
  height: 24px;
  width: 22px;
}

.vector-42 {
  height: 22px;
  margin-bottom: 0.55px;
  margin-left: 96px;
  width: 25px;
}

.lity-container {
  align-items: flex-start;
  display: flex;
  height: 19px;
  margin-top: 8px;
  min-width: 221px;
}

.quality-comfort-1 {
  align-self: flex-end;
  letter-spacing: 0.05px;
  line-height: 13.3px;
  min-height: 13px;
  min-width: 94px;
  white-space: nowrap;
}

.sustainibility-1 {
  letter-spacing: 0.05px;
  line-height: 13.3px;
  margin-left: 59px;
  min-height: 13px;
  white-space: nowrap;
}

.group-271-1 {
  display: flex;
  flex-direction: column;
  height: 577px;
  margin-left: 58px;
  margin-top: 43px;
  width: 210px;
}

.overlap-group-container-7 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 382.01px;
}

.overlap-group-container-8 {
  border-radius: 10.96px;
  height: 171px;
  position: relative;
  width: 210px;
}

.overlap-group-39 {
  align-items: flex-end;
  background-color: var(--concrete);
  border-radius: 10.96px;
  box-shadow: 5.1px 5.1px 12.74px #d2d2d2, -5.1px -5.1px 12.74px #ffffff;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 171px;
  padding: 19.3px 16.7px;
  position: absolute;
  top: 0;
  width: 210px;
}

.vision-1 {
  align-self: center;
  letter-spacing: 0;
  line-height: 20.2px;
  margin-left: 0.41px;
  margin-top: 66px;
  min-height: 20px;
  white-space: nowrap;
  width: 46px;
}

.to-redefine-real-es-1 {
  letter-spacing: -0.27px;
  line-height: 10.9px;
  margin-top: 3px;
  min-height: 44px;
  text-align: center;
  width: 177px;
}

.overlap-group1-26 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 68px;
  left: 71px;
  min-width: 68px;
  padding: 3.8px 12.1px;
  position: absolute;
  top: 12px;
}

.group-201-1 {
  height: 41px;
  width: 40px;
}

.overlap-group-container-9 {
  border-radius: 10.96px;
  height: 186px;
  margin-top: 25px;
  position: relative;
  width: 210px;
}

.overlap-group-40 {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 10.96px;
  box-shadow: 5.1px 5.1px 12.74px #d2d2d2, -5.1px -5.1px 12.74px #ffffff;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 186px;
  padding: 8.1px 18.8px;
  position: absolute;
  top: 0;
  width: 210px;
}

.place-23 {
  align-self: center;
  letter-spacing: 0;
  line-height: 20.2px;
  margin-top: 82px;
  min-height: 20px;
  white-space: nowrap;
  width: 53px;
}

.to-collaborate-with-1 {
  letter-spacing: 0;
  line-height: 10.9px;
  margin-top: 2px;
  min-height: 64px;
  text-align: center;
  width: 172px;
}

.overlap-group1-27 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 68px;
  justify-content: flex-end;
  left: 71px;
  min-width: 68px;
  padding: 17px 18.9px;
  position: absolute;
  top: 9px;
}

.group-228-1 {
  height: 32px;
  width: 30px;
}

.group-269-1 {
  align-items: flex-start;
  display: flex;
  height: 171.38px;
  margin-top: 23.4px;
  min-width: 214px;
}

.overlap-group4-13 {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 10.96px;
  box-shadow: 5.1px 5.1px 12.74px #d2d2d2, -5.1px -5.1px 12.74px #ffffff;
  display: flex;
  flex-direction: column;
  min-height: 171px;
  padding: 0 10.9px;
  width: 210px;
}

.overlap-group-41 {
  align-items: flex-end;
  background-size: 100% 100%;
  display: flex;
  height: 68px;
  justify-content: flex-end;
  margin-right: 0.23px;
  margin-top: 9px;
  min-width: 68px;
  padding: 14.4px 11.9px;
}

.group-229-1 {
  height: 38px;
  width: 34px;
}

.goal-1 {
  letter-spacing: 0;
  line-height: 20.2px;
  margin-right: 0.35px;
  margin-top: 13px;
  min-height: 21px;
  white-space: nowrap;
  width: 34px;
}

.establish-ourselve-1 {
  align-self: flex-end;
  letter-spacing: 0;
  line-height: 11.4px;
  margin-top: 2px;
  min-height: 59px;
  text-align: center;
  width: 186px;
}

.our-partners-1 {
  letter-spacing: 0;
  line-height: 25.5px;
  margin-left: 34.57px;
  margin-top: 96px;
  min-height: 26px;
  white-space: nowrap;
}

.group-104-1 {
  display: flex;
  margin-left: 40px;
  margin-top: 16px;
  width: 256px;
}

.rectangle-163-7 {
  height: 40px;
  object-fit: cover;
  width: 138px;
}

.rectangle-165-5 {
  height: 35px;
  margin-left: 10px;
  margin-top: 5px;
  object-fit: cover;
  width: 108px;
}

.our-board-1 {
  letter-spacing: 0;
  line-height: 25.5px;
  margin-left: 40.12px;
  margin-top: 40px;
  min-height: 24px;
  white-space: nowrap;
}

.overlap-group-42 {
  height: 195px;
  margin-left: 90.02px;
  margin-top: 26px;
  position: relative;
  width: 156px;
}

.rectangle-64-4 {
  background-color: var(--concrete);
  border-radius: 12.93px;
  box-shadow: 6.01px 6.01px 15.04px #d2d2d2, -6.01px -6.01px 15.04px #ffffff;
  height: 194px;
  left: 0;
  position: absolute;
  top: 2px;
  width: 155px;
}

.adewale-oshinaike-4 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 7.8px;
  font-weight: 700;
  left: 15px;
  letter-spacing: 0.04px;
  line-height: 10.4px;
  position: absolute;
  top: 150px;
  white-space: nowrap;
  width: 83px;
}

.group-managing-director-1 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 7.8px;
  font-weight: 400;
  left: 12px;
  letter-spacing: 0.43px;
  line-height: 10.4px;
  position: absolute;
  top: 164px;
  white-space: nowrap;
  width: 115px;
}

.rectangle-46-4 {
  height: 142px;
  left: 0;
  position: absolute;
  top: 0;
  width: 156px;
}

.overlap-group-38 {
  height: 194px;
  margin-left: 90.02px;
  margin-top: 19px;
  position: relative;
  width: 156px;
}

.rectangle-131-4 {
  background-color: var(--concrete);
  border-radius: 12.47px;
  box-shadow: 5.8px 5.8px 14.5px #d2d2d2, -5.8px -5.8px 14.5px #ffffff;
  height: 194px;
  left: 0;
  position: absolute;
  top: 0;
  width: 155px;
}

.adeola-elegbede-1 {
  left: 14px;
  letter-spacing: 0.04px;
  line-height: 10.9px;
  position: absolute;
  top: 151px;
  white-space: nowrap;
  width: 83px;
}

.managing-director-ed-3 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 7.5px;
  font-weight: 400;
  left: 14px;
  letter-spacing: 0.41px;
  line-height: 10.1px;
  position: absolute;
  top: 166px;
  white-space: nowrap;
  width: 109px;
}

.rectangle-132-3 {
  height: 141px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 156px;
}

.overlap-group2-22 {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 13.45px;
  box-shadow: 6.26px 6.26px 15.64px #d2d2d2, -6.26px -6.26px 15.64px #ffffff;
  display: flex;
  flex-direction: column;
  margin-left: 90.47px;
  margin-top: 19px;
  min-height: 194px;
  padding: 0 0px;
  width: 155px;
}

.rectangle-134-4 {
  height: 139px;
  margin-left: 0.05px;
  width: 155px;
}

.name-7 {
  letter-spacing: 0.04px;
  line-height: 10.9px;
  margin-left: 7.15px;
  margin-top: 14px;
  min-height: 11px;
  white-space: nowrap;
}

.managing-director-ed-4 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 8.1px;
  font-weight: 400;
  letter-spacing: 0.45px;
  line-height: 10.9px;
  margin-left: 7.15px;
  margin-top: 4px;
  min-height: 11px;
  white-space: nowrap;
}

.rectangle-135-3 {
  background-color: var(--concrete);
  border-radius: 14.72px;
  box-shadow: 6.85px 6.85px 17.12px #d2d2d2, -6.85px -6.85px 17.12px #ffffff;
  height: 194px;
  left: 0;
  position: absolute;
  top: 0;
  width: 155px;
}

.monisola-oshinaike-1 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 8.9px;
  font-weight: 700;
  left: 15px;
  letter-spacing: 0.04px;
  line-height: 11.9px;
  position: absolute;
  top: 157px;
  white-space: nowrap;
  width: 92px;
}

.rectangle-136-4 {
  height: 148px;
  left: 0;
  position: absolute;
  top: 0;
  width: 156px;
}

.managing-director-ed-5 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 8.9px;
  font-weight: 400;
  left: 15px;
  letter-spacing: 0.49px;
  line-height: 11.9px;
  position: absolute;
  top: 171px;
  white-space: nowrap;
  width: 113px;
}

.group-281 {
  display: flex;
  flex-direction: column;
  height: 179px;
  margin-left: 41.83px;
  margin-top: 42px;
  width: 259px;
}

.client-testimony-1 {
  height: 26px;
  letter-spacing: 0;
  line-height: 25.5px;
  white-space: nowrap;
  width: 150px;
}

.lorem-ipsum-dolor-si-5 {
  height: 84px;
  letter-spacing: 0.12px;
  line-height: 20.8px;
  margin-left: 4.2px;
  margin-top: 14.4px;
  width: 228px;
}

.group-211-1 {
  align-items: flex-start;
  display: flex;
  height: 22.37px;
  margin-left: 202.5px;
  margin-top: 32px;
  min-width: 52.11px;
}

.overlap-group1-28 {
  align-items: flex-end;
  background-color: var(--concrete);
  border-radius: 5.37px;
  box-shadow: 1.79px 1.79px 3.58px #00000017, -1.79px -1.79px 3.58px #ffffff;
  display: flex;
  height: 22px;
  justify-content: flex-end;
  min-width: 22px;
  padding: 8px 6.6px;
}

.arrow {
  height: 6px;
  width: 8px;
}

.overlap-group-43 {
  align-items: flex-end;
  background-color: var(--concrete);
  border-radius: 5.37px;
  box-shadow: 1.79px 1.79px 3.58px #00000017, -1.79px -1.79px 3.58px #ffffff;
  display: flex;
  height: 22px;
  justify-content: flex-end;
  margin-left: 7px;
  min-width: 22px;
  padding: 8.4px 7.1px;
}

.group-212-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 46px;
  margin-top: 43px;
  min-height: 328px;
  width: 257px;
}

.where-are-we-located-2 {
  color: var(--eerie-black);
  font-family: var(--font-family-montserrat);
  font-size: 16.2px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 23px;
  min-height: 21px;
  white-space: nowrap;
}

.surname-19 {
  letter-spacing: 0.12px;
  line-height: 20.8px;
  margin-left: 1px;
  margin-top: 6px;
  min-height: 89px;
  width: 250px;
}

.address-6 {
  color: var(--fuscous-gray);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-xxxxxs);
  font-weight: 600;
  letter-spacing: 0.36px;
  line-height: 18px;
  margin-left: 1px;
  margin-top: 131px;
  min-height: 20px;
  white-space: nowrap;
}

.group-67-9 {
  height: 12px;
  margin-left: 0.75px;
  margin-top: 48px;
  width: 114px;
}

.overlap-group6-10 {
  height: 234px;
  margin-left: 37.33px;
  margin-top: 34px;
  position: relative;
  width: 223px;
}

.group-19 {
  height: 234px;
  left: 0;
  position: absolute;
  top: 0;
  width: 216px;
}

.surname-20 {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: 8px;
  font-weight: 600;
  left: 31px;
  letter-spacing: 0;
  line-height: 13.6px;
  position: absolute;
  top: 179px;
  width: 192px;
}

.overlap-group7-8 {
  align-items: flex-start;
  background-color: var(--eerie-black-2);
  display: flex;
  height: 427px;
  margin-left: 21px;
  margin-top: 32px;
  min-width: 284px;
  padding: 17px 19px;
}

.surname-21 {
  color: var(--white);
  font-family: var(--font-family-montserrat);
  font-size: var(--font-size-xxxxxs);
  font-weight: 400;
  letter-spacing: 0;
  line-height: 20.6px;
  min-height: 387px;
  width: 231px;
}

.group-234-20 {
  display: flex;
  flex-direction: column;
  height: 103px;
  margin-left: 20.33px;
  margin-top: 46px;
  width: 293px;
}

.do-we-have-everythin-16 {
  height: 15.47px;
  letter-spacing: 0;
  line-height: 15.4px;
  margin-left: 21.9px;
  white-space: nowrap;
  width: 241.6px;
}

.drop-us-your-contact-17 {
  height: 19px;
  letter-spacing: 0;
  line-height: 16.2px;
  margin-left: 48.7px;
  margin-top: 9.5px;
  text-align: center;
  white-space: nowrap;
  width: 189px;
}

.group-217-12 {
  align-items: flex-start;
  display: flex;
  height: 23.11px;
  margin-top: 35.9px;
  min-width: 295.41px;
}

.overlap-group1-29 {
  align-items: flex-end;
  background-size: 100% 100%;
  display: flex;
  height: 24px;
  margin-top: -0.42px;
  min-width: 86px;
  padding: 2.8px 7.9px;
}

.your-name-23 {
  letter-spacing: 0;
  line-height: 17.1px;
  min-height: 17px;
  min-width: 57px;
  white-space: nowrap;
}

.overlap-group-44 {
  align-items: flex-end;
  align-self: flex-end;
  background-size: 100% 100%;
  display: flex;
  height: 23px;
  justify-content: flex-end;
  margin-left: 9px;
  min-width: 109px;
  padding: 2.9px 2.8px;
}

.your-email-address-20 {
  letter-spacing: 0;
  line-height: 17.1px;
  min-height: 17px;
  min-width: 99px;
  white-space: nowrap;
}

.overlap-group2-23 {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 2.72px;
  box-shadow: 1.81px 1.81px 3.62px #00000017, -1.81px -1.81px 3.62px #ffffff;
  display: flex;
  height: 23px;
  justify-content: flex-end;
  min-width: 86px;
  padding: 4.2px 8.2px;
}

.get-in-touch-20 {
  letter-spacing: 0.05px;
  line-height: 13.3px;
  min-height: 13px;
  opacity: 0.9;
  white-space: nowrap;
}

.footer-20 {
  background-color: var(--concrete);
  display: flex;
  height: 17px;
  margin-left: 21px;
  margin-top: 28px;
  width: 287px;
}

.frame-35632-18 {
  display: flex;
  margin-left: 7.9px;
  margin-top: 6.1px;
  width: 77.87px;
}

.privacy-policy-18 {
  height: 4.91px;
  letter-spacing: 0;
  width: 26.83px;
}

.terms-of-use-18 {
  height: 4.91px;
  letter-spacing: 0;
  margin-left: 7.9px;
  width: 25.52px;
}

.x2021-fox-capital-investment-limited-18 {
  height: 6.54px;
  letter-spacing: 0;
  margin-left: 116.8px;
  margin-top: 5.2px;
  width: 76.23px;
}

.vector-3-6 {
  height: 1065px;
  margin-top: 1017px;
  width: 1923px;
}
</style>
