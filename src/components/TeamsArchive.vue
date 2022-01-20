<template>
  <div class="container-center-horizontal">
    <div class="teams-archive screen">
      <div class="flex-row-25">
        <router-link to="/home-page"><img class="fox-capital-logo-2-13" :src="foxCapitalLogo2" /></router-link
        ><router-link to="/home-page">
          <div class="place-19 montserrat-bold-storm-dust-14-9px">{{ place1 }}</div>
        </router-link>
        <div class="overlap-group12-2">
          <div class="about-us-16 montserrat-bold-orange-peel-14-9px">{{ aboutUs }}</div>
        </div>
        <router-link to="/services">
          <div class="services-15 montserrat-bold-fuscous-gray-14-9px">{{ services }}</div>
        </router-link>
        <div class="investment-13 montserrat-bold-fuscous-gray-14-9px">{{ investment }}</div>
      </div>
      <div class="group-container-6">
        <div class="overlap-group11-3" :style="{ 'background-image': 'url(' + overlapGroup11 + ')' }">
          <div class="check-out-our-exclus-1">{{ checkOutOurExclus }}</div>
          <p class="we-believe-that-the-1 montserrat-normal-eerie-black-14-3px">{{ weBelieveThatThe }}</p>
        </div>
        <div class="overlap-group10-4">
          <div class="our-team-members-2 montserrat-semi-bold-cape-cod-31px">{{ ourTeamMembers }}</div>
          <p class="at-fox-capital-we-b-2 montserrat-normal-eerie-black-12-4px">{{ atFoxCapitalWeB }}</p>
          <img class="rectangle-64-3" :src="rectangle64" /><img class="group-235-2" :src="group235" /><img
            class="rectangle-165-4"
            :src="rectangle165"
          /><img class="rectangle-169-1" :src="rectangle169" /><img class="group-192-1" :src="group192" /><img
            class="group-191-1"
            :src="group191"
          />
          <div class="group-90-1">
            <div class="overlap-group-35">
              <div class="rectangle-82-1"></div>
              <a href="https://www.linkedin.com/in/adewale-oshinaike-bb591688/" target="_blank">
                <div class="check-profile-6 montserrat-bold-orange-peel-14-8px">{{ checkProfile1 }}</div>
              </a>
              <div class="overlap-group-36" :style="{ 'background-image': 'url(' + overlapGroup1 + ')' }">
                <img class="group-72-6" :src="group721" />
              </div>
            </div>
          </div>
          <group180 :className="group180Props.className" :group73Props="group180Props.group73Props" />
          <div class="group-184-1">
            <div class="overlap-group5-11">
              <a href="https://www.linkedin.com/in/oluwabusayo-adegoke-44b57779/" target="_blank">
                <div class="check-profile-8 montserrat-bold-orange-peel-14-8px">{{ checkProfile2 }}</div> </a
              ><group73
                :group73="group73Props.group73"
                :group72="group73Props.group72"
                :className="group73Props.className"
              />
            </div>
          </div>
          <div class="nerul-navi-mumbai-2 montserrat-normal-eerie-black-17-5px">
            <span class="span-23 montserrat-normal-eerie-black-17-5px">{{ spanText1 }}</span
            ><span class="span-23 montserrat-normal-eerie-black-17-5px">{{ spanText2 }}</span
            ><span class="span-23 montserrat-normal-eerie-black-17-5px">{{ spanText3 }}</span
            ><span class="span-23 montserrat-normal-eerie-black-17-5px">{{ spanText4 }}</span
            ><span class="span-23 montserrat-normal-eerie-black-17-5px">{{ spanText5 }}</span
            ><span class="span-23 montserrat-normal-eerie-black-17-5px">{{ spanText6 }}</span>
          </div>
          <div class="llb-1 montserrat-normal-eerie-black-17-5px">{{ llb }}</div>
          <img class="rectangle-46-3" :src="rectangle46" /><img class="rectangle-166-3" :src="rectangle166" /><img
            class="rectangle-170-2"
            :src="rectangle170"
          /><frame16 :group177="frame16Props.group177" :className="frame16Props.className" />
          <frame15 :name="frame151Props.name" :group181="frame151Props.group181" :className="frame151Props.className" />
          <frame15 :name="frame152Props.name" :group181="frame152Props.group181" :className="frame152Props.className" />
          <div class="mdceo-2 montserrat-semi-bold-orange-peel-14-8px">{{ mdCeo }}</div>
          <div class="place-20 montserrat-semi-bold-orange-peel-14-8px">{{ place2 }}</div>
          <div class="human-resource-manager-2 montserrat-semi-bold-orange-peel-14-8px">{{ humanResourceManager }}</div>
          <img class="rectangle-173-1" :src="rectangle173" /><img class="group-193-1" :src="group193" />
          <div class="group-194-1">
            <div class="overlap-group-35">
              <div class="rectangle-82-1"></div>
              <a href="https://www.linkedin.com/in/johnfadejola/" target="_blank">
                <div class="check-profile-6 montserrat-bold-orange-peel-14-8px">{{ checkProfile3 }}</div>
              </a>
              <div class="overlap-group-37" :style="{ 'background-image': 'url(' + overlapGroup2 + ')' }">
                <img class="group-72-7" :src="group722" />
              </div>
            </div>
          </div>
          <img class="rectangle-174-2" :src="rectangle174" /><frame19
            :group185="frame19Props.group185"
            :className="frame19Props.className"
          />
          <div class="head-media-communication-2 montserrat-semi-bold-orange-peel-14-8px">
            {{ headMediaCommunication }}
          </div>
          <img class="rectangle-163-6" :src="rectangle163" />
          <div class="nerul-navi-mumbai-3 montserrat-normal-eerie-black-15-4px">
            <span class="span-24 montserrat-normal-eerie-black-15-4px">{{ spanText7 }}</span
            ><span class="span-24 montserrat-normal-eerie-black-15-4px">{{ spanText8 }}</span
            ><span class="span-24 montserrat-normal-eerie-black-15-4px">{{ spanText9 }}</span
            ><span class="span-24 montserrat-normal-eerie-black-15-4px">{{ spanText10 }}</span
            ><span class="span-24 montserrat-normal-eerie-black-15-4px">{{ spanText11 }}</span
            ><span class="span-24 montserrat-normal-eerie-black-15-4px">{{ spanText12 }}</span>
          </div>
          <img class="group-188-1" :src="group188" /><img class="rectangle-167-2" :src="rectangle167" /><img
            class="group-189-1"
            :src="group189"
          />
          <div class="group-178-1">
            <div class="overlap-group7-7">
              <a href="https://www.linkedin.com/in/kehinde-osagiede-b9084588/" target="_blank">
                <div class="check-profile-7 montserrat-bold-orange-peel-13px">{{ checkProfile4 }}</div> </a
              ><group733 :group73="group7331Props.group73" :group72="group7331Props.group72" />
            </div>
          </div>
          <group178 :group733Props="group178Props.group733Props" />
          <img class="rectangle-164-6" :src="rectangle164" />
          <div class="frame-14-2">
            <div class="kehinde-osagie-2 montserrat-bold-eerie-black-15-4px">{{ kehindeOsagie }}</div>
            <img class="group-179-2" :src="group179" />
          </div>
          <div class="frame-17-2">
            <div class="omorionola-fawole-2 montserrat-bold-eerie-black-15-4px">{{ omorionolaFawole }}</div>
            <img class="group-183-2" :src="group183" />
          </div>
          <img class="rectangle-175-1" :src="rectangle175" /><img class="group-195-1" :src="group195" />
          <div class="group-196-2">
            <div class="overlap-group9-5">
              <a href="https://www.linkedin.com/in/jeminat-muritala-63a2155b/" target="_blank">
                <div class="check-profile-7 montserrat-bold-orange-peel-13px">{{ checkProfile5 }}</div> </a
              ><group733
                :group73="group7332Props.group73"
                :group72="group7332Props.group72"
                :className="group7332Props.className"
              />
            </div>
          </div>
          <img class="rectangle-176-2" :src="rectangle176" />
          <div class="frame-20-2">
            <div class="jeminat-muritala-2 montserrat-bold-eerie-black-15-4px">{{ jeminatMuritala }}</div>
            <img class="group-185-5" :src="group185" />
          </div>
          <div class="head-tech-department-2 montserrat-semi-bold-orange-peel-13px">{{ headTechDepartment }}</div>
          <p class="surname-16 montserrat-semi-bold-orange-peel-13px">{{ surname }}</p>
          <div class="head-customer-relation-2 montserrat-semi-bold-orange-peel-13px">{{ headCustomerRelation }}</div>
          <img class="rectangle-168-2" :src="rectangle168" />
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
import Group180 from "./Group180";
import Group73 from "./Group73";
import Frame16 from "./Frame16";
import Frame15 from "./Frame15";
import Frame19 from "./Frame19";
import Group733 from "./Group733";
import Group178 from "./Group178";
import Group23432 from "./Group23432";
export default {
  name: "TeamsArchive",
  components: {
    Group180,
    Group73,
    Frame16,
    Frame15,
    Frame19,
    Group733,
    Group178,
    Group23432,
  },
  props: [
    "foxCapitalLogo2",
    "place1",
    "aboutUs",
    "services",
    "investment",
    "overlapGroup11",
    "checkOutOurExclus",
    "weBelieveThatThe",
    "ourTeamMembers",
    "atFoxCapitalWeB",
    "rectangle64",
    "group235",
    "rectangle165",
    "rectangle169",
    "group192",
    "group191",
    "checkProfile1",
    "overlapGroup1",
    "group721",
    "checkProfile2",
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "spanText6",
    "llb",
    "rectangle46",
    "rectangle166",
    "rectangle170",
    "mdCeo",
    "place2",
    "humanResourceManager",
    "rectangle173",
    "group193",
    "checkProfile3",
    "overlapGroup2",
    "group722",
    "rectangle174",
    "headMediaCommunication",
    "rectangle163",
    "spanText7",
    "spanText8",
    "spanText9",
    "spanText10",
    "spanText11",
    "spanText12",
    "group188",
    "rectangle167",
    "group189",
    "checkProfile4",
    "rectangle164",
    "kehindeOsagie",
    "group179",
    "omorionolaFawole",
    "group183",
    "rectangle175",
    "group195",
    "checkProfile5",
    "rectangle176",
    "jeminatMuritala",
    "group185",
    "headTechDepartment",
    "surname",
    "headCustomerRelation",
    "rectangle168",
    "group180Props",
    "group73Props",
    "frame16Props",
    "frame151Props",
    "frame152Props",
    "frame19Props",
    "group7331Props",
    "group178Props",
    "group7332Props",
    "group23432Props",
  ],
};
</script>

<style>
.teams-archive {
  align-items: center;
  background-color: var(--concrete);
  display: flex;
  flex-direction: column;
  height: 2512px;
  overflow: hidden;
  padding: 81.9px 0;
  width: 1200px;
}

.flex-row-25 {
  align-items: center;
  display: flex;
  margin-right: 17.8px;
  min-width: 1045px;
}

.fox-capital-logo-2-13 {
  cursor: pointer;
  height: 62px;
  object-fit: cover;
  width: 141px;
}

.place-19 {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  margin-left: 384px;
  margin-top: 0.53px;
  min-height: 20px;
  white-space: nowrap;
  width: 48px;
}

.overlap-group12-2 {
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

.about-us-16 {
  letter-spacing: 0.07px;
  line-height: 19.9px;
  min-height: 20px;
  opacity: 0.9;
  white-space: nowrap;
}

.services-15 {
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

.investment-13 {
  letter-spacing: 0.07px;
  line-height: 19.9px;
  margin-left: 76px;
  margin-top: 0.53px;
  min-height: 20px;
  white-space: nowrap;
  width: 91px;
}

.group-container-6 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-right: 0;
  margin-top: 89px;
  min-height: 2248px;
  position: relative;
  width: 1238px;
}

.overlap-group11-3 {
  align-items: flex-end;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  min-height: 322px;
  padding: 75.8px 99px;
  width: 1238px;
}

.check-out-our-exclus-1 {
  color: var(--cape-cod);
  font-family: var(--font-family-montserrat);
  font-size: 32.5px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 46.1px;
  margin-top: 20px;
  min-height: 81px;
  text-align: center;
  width: 496px;
}

.we-believe-that-the-1 {
  letter-spacing: 0.43px;
  line-height: 21.5px;
  margin-right: 2.38px;
  margin-top: 30px;
  min-height: 39px;
  text-align: center;
  width: 456px;
}

.overlap-group10-4 {
  height: 1361px;
  margin-right: 29.73px;
  margin-top: 46px;
  position: relative;
  width: 1170px;
}

.our-team-members-2 {
  left: 584px;
  letter-spacing: 0;
  line-height: 44.1px;
  position: absolute;
  text-align: center;
  top: 33px;
  white-space: nowrap;
  width: 575px;
}

.at-fox-capital-we-b-2 {
  left: 603px;
  letter-spacing: 0.37px;
  line-height: 18.7px;
  position: absolute;
  text-align: center;
  top: 80px;
  width: 528px;
}

.rectangle-64-3 {
  height: 357px;
  left: 0;
  position: absolute;
  top: 0;
  width: 626px;
}

.group-235-2 {
  height: 21px;
  left: 339px;
  position: absolute;
  top: 270px;
  width: 167px;
}

.rectangle-165-4 {
  height: 356px;
  left: 0;
  position: absolute;
  top: 335px;
  width: 626px;
}

.rectangle-169-1 {
  height: 356px;
  left: 0;
  position: absolute;
  top: 669px;
  width: 626px;
}

.group-192-1 {
  height: 20px;
  left: 337px;
  position: absolute;
  top: 921px;
  width: 167px;
}

.group-191-1 {
  height: 21px;
  left: 337px;
  position: absolute;
  top: 603px;
  width: 167px;
}

.group-90-1 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  height: 57px;
  left: 327px;
  min-width: 222px;
  position: absolute;
  top: 200px;
  transition: all 0.2s ease;
}

.group-90-1:hover,
.group-184-1:hover,
.group-194-1:hover,
.group-178-1:hover,
.group-196-2:hover {
  transform: scale(1.1);
}

.overlap-group-35 {
  height: 58px;
  margin-top: -0.43px;
  position: relative;
  width: 221px;
}

.rectangle-82-1 {
  background-color: var(--desert-storm);
  border-radius: 28.57px;
  box-shadow: 6.72px 6.72px 13.44px #00000014, -6.72px -6.72px 13.44px #ffffff;
  height: 57px;
  left: 0;
  position: absolute;
  top: 0;
  width: 220px;
}

.check-profile-6 {
  cursor: pointer;
  left: 36px;
  letter-spacing: 0.07px;
  line-height: 19.7px;
  position: absolute;
  text-decoration: underline;
  top: 19px;
  white-space: nowrap;
  width: 106px;
}

.overlap-group-36 {
  align-items: flex-end;
  background-size: 100% 100%;
  display: flex;
  height: 58px;
  left: 163px;
  min-width: 58px;
  padding: 15.2px 20.9px;
  position: absolute;
  top: 0;
}

.group-72-6 {
  height: 18px;
  width: 15px;
}

.group-184-1 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  height: 57px;
  left: 326px;
  min-width: 222px;
  position: absolute;
  top: 844px;
  transition: all 0.2s ease;
}

.overlap-group5-11 {
  align-items: center;
  background-color: var(--desert-storm);
  border-radius: 28.57px;
  box-shadow: 6.72px 6.72px 13.44px #00000014, -6.72px -6.72px 13.44px #ffffff;
  display: flex;
  height: 57px;
  justify-content: flex-end;
  min-width: 220px;
  position: relative;
}

.check-profile-8 {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 19.7px;
  margin-bottom: 0.98px;
  min-height: 19px;
  text-decoration: underline;
  white-space: nowrap;
  width: 106px;
}

.nerul-navi-mumbai-2 {
  left: 327px;
  letter-spacing: 0.96px;
  line-height: 23.3px;
  position: absolute;
  top: 127px;
  white-space: nowrap;
  width: 190px;
}

.span-23 {
  letter-spacing: 0.17px;
}

.llb-1 {
  left: 326px;
  letter-spacing: 0.96px;
  line-height: 23.3px;
  position: absolute;
  top: 446px;
  white-space: nowrap;
  width: 190px;
}

.rectangle-46-3 {
  height: 261px;
  left: 48px;
  position: absolute;
  top: 47px;
  width: 262px;
}

.rectangle-166-3 {
  height: 256px;
  left: 48px;
  position: absolute;
  top: 388px;
  width: 262px;
}

.rectangle-170-2 {
  height: 262px;
  left: 48px;
  position: absolute;
  top: 716px;
  width: 262px;
}

.mdceo-2 {
  left: 327px;
  letter-spacing: 0.07px;
  line-height: 19.7px;
  position: absolute;
  top: 167px;
  white-space: nowrap;
  width: 65px;
}

.place-20 {
  left: 326px;
  letter-spacing: 0.07px;
  line-height: 19.7px;
  position: absolute;
  top: 485px;
  width: 129px;
}

.human-resource-manager-2 {
  left: 326px;
  letter-spacing: 0.07px;
  line-height: 19.7px;
  position: absolute;
  top: 799px;
  white-space: nowrap;
  width: 206px;
}

.rectangle-173-1 {
  height: 357px;
  left: 0;
  position: absolute;
  top: 1004px;
  width: 626px;
}

.group-193-1 {
  height: 20px;
  left: 337px;
  position: absolute;
  top: 1256px;
  width: 167px;
}

.group-194-1 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  height: 57px;
  left: 326px;
  min-width: 222px;
  position: absolute;
  top: 1180px;
  transition: all 0.2s ease;
}

.overlap-group-37 {
  align-items: flex-end;
  background-size: 100% 100%;
  display: flex;
  height: 58px;
  left: 163px;
  min-width: 58px;
  padding: 15.2px 20.7px;
  position: absolute;
  top: 0;
}

.group-72-7 {
  height: 18px;
  width: 16px;
}

.rectangle-174-2 {
  height: 262px;
  left: 48px;
  position: absolute;
  top: 1051px;
  width: 262px;
}

.head-media-communication-2 {
  left: 326px;
  letter-spacing: 0.07px;
  line-height: 19.7px;
  position: absolute;
  top: 1134px;
  white-space: nowrap;
  width: 239px;
}

.rectangle-163-6 {
  height: 314px;
  left: 620px;
  position: absolute;
  top: 148px;
  width: 550px;
}

.nerul-navi-mumbai-3 {
  left: 913px;
  letter-spacing: 0.84px;
  line-height: 20.5px;
  position: absolute;
  top: 257px;
  white-space: nowrap;
  width: 167px;
}

.span-24 {
  letter-spacing: 0.13px;
}

.group-188-1 {
  height: 18px;
  left: 930px;
  position: absolute;
  top: 381px;
  width: 147px;
}

.rectangle-167-2 {
  height: 313px;
  left: 620px;
  position: absolute;
  top: 443px;
  width: 550px;
}

.group-189-1 {
  height: 18px;
  left: 920px;
  position: absolute;
  top: 677px;
  width: 147px;
}

.group-178-1 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  height: 50px;
  left: 909px;
  min-width: 196px;
  position: absolute;
  top: 312px;
  transition: all 0.2s ease;
}

.overlap-group7-7 {
  align-items: center;
  background-color: var(--desert-storm);
  border-radius: 25.1px;
  box-shadow: 5.91px 5.91px 11.81px #00000014, -5.91px -5.91px 11.81px #ffffff;
  display: flex;
  height: 50px;
  justify-content: flex-end;
  min-width: 194px;
  position: relative;
}

.check-profile-7 {
  cursor: pointer;
  letter-spacing: 0.06px;
  line-height: 17.3px;
  margin-bottom: 0.89px;
  min-height: 17px;
  text-decoration: underline;
  white-space: nowrap;
  width: 93px;
}

.rectangle-164-6 {
  height: 230px;
  left: 662px;
  position: absolute;
  top: 190px;
  width: 230px;
}

.frame-14-2 {
  align-items: center;
  display: flex;
  height: 21px;
  left: 913px;
  min-width: 165px;
  position: absolute;
  top: 230px;
}

.kehinde-osagie-2 {
  letter-spacing: 0.08px;
  line-height: 20.5px;
  min-height: 21px;
  white-space: nowrap;
  width: 128px;
}

.group-179-2 {
  height: 19px;
  margin-left: 17px;
  width: 20px;
}

.frame-17-2 {
  align-items: center;
  display: flex;
  height: 21px;
  left: 913px;
  min-width: 190px;
  position: absolute;
  top: 522px;
}

.omorionola-fawole-2 {
  letter-spacing: 0.08px;
  line-height: 20.5px;
  min-height: 21px;
  white-space: nowrap;
  width: 159px;
}

.group-183-2 {
  height: 20px;
  margin-left: 12px;
  width: 20px;
}

.rectangle-175-1 {
  height: 314px;
  left: 621px;
  position: absolute;
  top: 726px;
  width: 549px;
}

.group-195-1 {
  height: 18px;
  left: 917px;
  position: absolute;
  top: 948px;
  width: 147px;
}

.group-196-2 {
  align-items: flex-end;
  cursor: pointer;
  display: flex;
  height: 50px;
  left: 907px;
  min-width: 196px;
  position: absolute;
  top: 881px;
  transition: all 0.2s ease;
}

.overlap-group9-5 {
  align-items: center;
  background-color: var(--desert-storm);
  border-radius: 25.1px;
  box-shadow: 5.91px 5.91px 11.81px #00000014, -5.91px -5.91px 11.81px #ffffff;
  display: flex;
  height: 50px;
  justify-content: flex-end;
  margin-bottom: 0;
  min-width: 194px;
  position: relative;
}

.rectangle-176-2 {
  height: 230px;
  left: 662px;
  position: absolute;
  top: 768px;
  width: 233px;
}

.frame-20-2 {
  align-items: center;
  display: flex;
  height: 21px;
  left: 908px;
  min-width: 187px;
  position: absolute;
  top: 808px;
}

.jeminat-muritala-2 {
  letter-spacing: 0.08px;
  line-height: 20.5px;
  min-height: 21px;
  white-space: nowrap;
  width: 138px;
}

.group-185-5 {
  height: 20px;
  margin-left: 30px;
  width: 19px;
}

.head-tech-department-2 {
  left: 907px;
  letter-spacing: 0.06px;
  line-height: 17.3px;
  position: absolute;
  top: 841px;
  white-space: nowrap;
  width: 162px;
}

.surname-16 {
  left: 913px;
  letter-spacing: 0.06px;
  line-height: 17.3px;
  position: absolute;
  top: 285px;
  white-space: nowrap;
  width: 210px;
}

.head-customer-relation-2 {
  left: 913px;
  letter-spacing: 0.06px;
  line-height: 17.3px;
  position: absolute;
  top: 553px;
  white-space: nowrap;
  width: 169px;
}

.rectangle-168-2 {
  height: 230px;
  left: 665px;
  position: absolute;
  top: 484px;
  width: 230px;
}
</style>
