<template>
  <div class="container-center-horizontal">
    <div class="tab-team screen">
      <div class="flex-row">
        <router-link to="/tablet" className="align-self-flex-end"
          ><img class="fox-capital-logo-2" :src="foxCapitalLogo2" /></router-link
        ><router-link to="/tablet" className="align-self-flex-center">
          <div class="place montserrat-bold-storm-dust-14-9px">{{ place1 }}</div>
        </router-link>
        <div class="frame-35639">
          <div class="about-us montserrat-bold-orange-peel-14-9px">{{ aboutUs }}</div>
        </div>
      </div>
      <div class="flex-row-1">
        <router-link to="/tablet2-2">
          <div class="services montserrat-bold-fuscous-gray-14-9px">{{ services }}</div> </router-link
        ><router-link to="/tablet2">
          <div class="investment montserrat-bold-fuscous-gray-14-9px">{{ investment }}</div>
        </router-link>
      </div>
      <div class="overlap-group9" :style="{ 'background-image': 'url(' + overlapGroup9 + ')' }">
        <div class="check-out-our-exclus montserrat-semi-bold-cape-cod-24px">{{ checkOutOurExclus }}</div>
        <p class="we-believe-that-the montserrat-normal-eerie-black-14-3px">{{ weBelieveThatThe }}</p>
      </div>
      <div class="overlap-group10">
        <div class="our-team-members montserrat-semi-bold-cape-cod-31px">{{ ourTeamMembers }}</div>
        <p class="at-fox-capital-we-b montserrat-normal-eerie-black-12-4px">{{ atFoxCapitalWeB }}</p>
      </div>
      <div class="overlap-group8">
        <img class="rectangle-64" :src="rectangle64" /><img class="group-235" :src="group235" />
        <div class="group-90">
          <div class="overlap-group">
            <div class="rectangle-82"></div>
            <a href="https://www.linkedin.com/in/adewale-oshinaike-bb591688/" target="_blank">
              <div class="check-profile montserrat-bold-orange-peel-14-8px">{{ checkProfile1 }}</div>
            </a>
            <div class="overlap-group-1" :style="{ 'background-image': 'url(' + overlapGroup1 + ')' }">
              <img class="group-72" :src="group721" />
            </div>
          </div>
        </div>
        <div class="nerul-navi-mumbai montserrat-normal-eerie-black-17-5px">
          <span class="span montserrat-normal-eerie-black-17-5px">{{ spanText1 }}</span
          ><span class="span montserrat-normal-eerie-black-17-5px">{{ spanText2 }}</span
          ><span class="span montserrat-normal-eerie-black-17-5px">{{ spanText3 }}</span
          ><span class="span montserrat-normal-eerie-black-17-5px">{{ spanText4 }}</span
          ><span class="span montserrat-normal-eerie-black-17-5px">{{ spanText5 }}</span
          ><span class="span montserrat-normal-eerie-black-17-5px">{{ spanText6 }}</span>
        </div>
        <img class="rectangle-46" :src="rectangle46" /><frame16 :group177="frame16Props.group177" />
        <div class="mdceo montserrat-semi-bold-orange-peel-14-8px">{{ mdCeo }}</div>
        <img class="rectangle-165" :src="rectangle165" /><img class="rectangle-169" :src="rectangle169" /><img
          class="group-192"
          :src="group192"
        /><img class="group-191" :src="group191" /><group180 :group73Props="group180Props.group73Props" />
        <div class="group-184">
          <div class="overlap-group">
            <div class="rectangle-82"></div>
            <a href="https://www.linkedin.com/in/oluwabusayo-adegoke-44b57779/" target="_blank">
              <div class="check-profile montserrat-bold-orange-peel-14-8px">{{ checkProfile2 }}</div>
            </a>
            <div class="overlap-group-2" :style="{ 'background-image': 'url(' + overlapGroup2 + ')' }">
              <img class="group-72-1" :src="group722" />
            </div>
          </div>
        </div>
        <div class="llb montserrat-normal-eerie-black-17-5px">{{ llb }}</div>
        <img class="rectangle-166" :src="rectangle166" /><img class="rectangle-170" :src="rectangle170" /><frame15
          :name="frame151Props.name"
          :group181="frame151Props.group181"
        />
        <frame15 :name="frame152Props.name" :group181="frame152Props.group181" :className="frame152Props.className" />
        <div class="place-1 montserrat-semi-bold-orange-peel-14-8px">{{ place2 }}</div>
        <div class="human-resource-manager montserrat-semi-bold-orange-peel-14-8px">{{ humanResourceManager }}</div>
        <img class="rectangle-173" :src="rectangle173" /><img class="group-193" :src="group193" />
        <div class="group-194">
          <div class="overlap-group4">
            <a href="https://www.linkedin.com/in/johnfadejola/" target="_blank">
              <div class="check-profile-2 montserrat-bold-orange-peel-14-8px">{{ checkProfile3 }}</div> </a
            ><group73
              :group73="group73Props.group73"
              :group72="group73Props.group72"
              :className="group73Props.className"
            />
          </div>
        </div>
        <img class="rectangle-174" :src="rectangle174" /><frame19 :group185="frame19Props.group185" />
        <div class="head-media-communication montserrat-semi-bold-orange-peel-14-8px">{{ headMediaCommunication }}</div>
        <img class="rectangle-163" :src="rectangle163" />
        <div class="nerul-navi-mumbai-1 montserrat-normal-eerie-black-15-4px">
          <span class="span-1 montserrat-normal-eerie-black-15-4px">{{ spanText7 }}</span
          ><span class="span-1 montserrat-normal-eerie-black-15-4px">{{ spanText8 }}</span
          ><span class="span-1 montserrat-normal-eerie-black-15-4px">{{ spanText9 }}</span
          ><span class="span-1 montserrat-normal-eerie-black-15-4px">{{ spanText10 }}</span
          ><span class="span-1 montserrat-normal-eerie-black-15-4px">{{ spanText11 }}</span
          ><span class="span-1 montserrat-normal-eerie-black-15-4px">{{ spanText12 }}</span>
        </div>
        <img class="group-188" :src="group188" /><img class="rectangle-167" :src="rectangle167" /><img
          class="group-189"
          :src="group189"
        />
        <div class="group-178">
          <div class="overlap-group5">
            <a href="https://www.linkedin.com/in/kehinde-osagiede-b9084588/" target="_blank">
              <div class="check-profile-1 montserrat-bold-orange-peel-13px">{{ checkProfile4 }}</div>
            </a>
            <div class="overlap-group-3" :style="{ 'background-image': 'url(' + overlapGroup3 + ')' }">
              <img class="group-72-2" :src="group723" />
            </div>
          </div>
        </div>
        <group182 :group732Props="group182Props.group732Props" />
        <img class="rectangle-164" :src="rectangle164" /><frame14 :group179="frame14Props.group179" />
        <frame17 />
        <img class="rectangle-175" :src="rectangle175" /><img class="group-195" :src="group195" />
        <div class="group-196">
          <div class="overlap-group7">
            <a href="https://www.linkedin.com/in/jeminat-muritala-63a2155b/" target="_blank">
              <div class="check-profile-1 montserrat-bold-orange-peel-13px">{{ checkProfile5 }}</div> </a
            ><group732
              :group73="group732Props.group73"
              :group72="group732Props.group72"
              :className="group732Props.className"
            />
          </div>
        </div>
        <img class="rectangle-176" :src="rectangle176" /><frame20 />
        <div class="head-tech-department montserrat-semi-bold-orange-peel-13px">{{ headTechDepartment }}</div>
        <p class="surname montserrat-semi-bold-orange-peel-13px">{{ surname }}</p>
        <div class="head-customer-relation montserrat-semi-bold-orange-peel-13px">{{ headCustomerRelation }}</div>
        <img class="rectangle-168" :src="rectangle168" />
      </div>
      <group234 :overlapGroup="group234Props.overlapGroup" :overlapGroup1="group234Props.overlapGroup1" />
    </div>
  </div>
</template>

<script>
import Frame16 from "./Frame16";
import Group180 from "./Group180";
import Frame15 from "./Frame15";
import Group73 from "./Group73";
import Frame19 from "./Frame19";
import Group182 from "./Group182";
import Frame14 from "./Frame14";
import Frame17 from "./Frame17";
import Group732 from "./Group732";
import Frame20 from "./Frame20";
import Group234 from "./Group234";
export default {
  name: "TabTeam",
  components: {
    Frame16,
    Group180,
    Frame15,
    Group73,
    Frame19,
    Group182,
    Frame14,
    Frame17,
    Group732,
    Frame20,
    Group234,
  },
  props: [
    "foxCapitalLogo2",
    "place1",
    "aboutUs",
    "services",
    "investment",
    "overlapGroup9",
    "checkOutOurExclus",
    "weBelieveThatThe",
    "ourTeamMembers",
    "atFoxCapitalWeB",
    "rectangle64",
    "group235",
    "checkProfile1",
    "overlapGroup1",
    "group721",
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "spanText6",
    "rectangle46",
    "mdCeo",
    "rectangle165",
    "rectangle169",
    "group192",
    "group191",
    "checkProfile2",
    "overlapGroup2",
    "group722",
    "llb",
    "rectangle166",
    "rectangle170",
    "place2",
    "humanResourceManager",
    "rectangle173",
    "group193",
    "checkProfile3",
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
    "overlapGroup3",
    "group723",
    "rectangle164",
    "rectangle175",
    "group195",
    "checkProfile5",
    "rectangle176",
    "headTechDepartment",
    "surname",
    "headCustomerRelation",
    "rectangle168",
    "frame16Props",
    "group180Props",
    "frame151Props",
    "frame152Props",
    "group73Props",
    "frame19Props",
    "group182Props",
    "frame14Props",
    "group732Props",
    "group234Props",
  ],
};
</script>

<style>
.tab-team {
  align-items: center;
  background-color: var(--concrete);
  display: flex;
  flex-direction: column;
  height: 3079px;
  overflow: hidden;
  padding: 42px 0;
  position: relative;
  width: 750px;
}

.flex-row {
  align-items: flex-start;
  display: flex;
  height: 64px;
  margin-right: 0.54px;
  min-width: 613px;
}

.fox-capital-logo-2 {
  align-self: flex-end;
  cursor: pointer;
  height: 62px;
  object-fit: cover;
  width: 141px;
}

.place {
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

.frame-35639 {
  background-color: var(--desert-storm);
  border-radius: 10.19px;
  box-shadow: 6.8px 6.8px 13.59px #00000017, -6.8px -6.8px 13.59px #ffffff;
  display: flex;
  height: 58px;
  margin-left: 84px;
  width: 131px;
}

.about-us {
  height: 20px;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  margin-left: 29px;
  margin-top: 19px;
  opacity: 0.9;
  white-space: nowrap;
  width: 73px;
}

.flex-row-1 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  height: 20px;
  margin-right: 82.94px;
  margin-top: 28px;
  min-width: 249px;
}

.services {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  min-height: 20px;
  opacity: 0.9;
  white-space: nowrap;
  width: 66px;
}

.investment {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 19.9px;
  margin-left: 92px;
  min-height: 20px;
  white-space: nowrap;
}

.overlap-group9 {
  align-items: flex-end;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  margin-top: 41px;
  min-height: 244px;
  padding: 52px 48px;
  width: 755px;
}

.check-out-our-exclus {
  letter-spacing: 0;
  line-height: 34.1px;
  margin-top: 10px;
  min-height: 81px;
  text-align: center;
  width: 318px;
}

.we-believe-that-the {
  letter-spacing: 0.43px;
  line-height: 21.5px;
  margin-right: 23px;
  margin-top: 10px;
  min-height: 39px;
  text-align: center;
  width: 289px;
}

.overlap-group10 {
  height: 109px;
  margin-left: 17.35px;
  margin-top: 36px;
  position: relative;
  width: 575px;
}

.our-team-members {
  left: 0;
  letter-spacing: 0;
  line-height: 44.1px;
  position: absolute;
  text-align: center;
  top: 0;
  white-space: nowrap;
  width: 575px;
}

.at-fox-capital-we-b {
  left: 19px;
  letter-spacing: 0.37px;
  line-height: 18.7px;
  position: absolute;
  text-align: center;
  top: 48px;
  width: 528px;
}

.overlap-group8 {
  height: 2070px;
  margin-right: 7.67px;
  margin-top: 5px;
  position: relative;
  width: 630px;
}

.rectangle-64 {
  height: 357px;
  left: 4px;
  position: absolute;
  top: 0;
  width: 626px;
}

.group-235 {
  height: 21px;
  left: 343px;
  position: absolute;
  top: 270px;
  width: 167px;
}

.group-90 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  height: 57px;
  left: 331px;
  min-width: 222px;
  position: absolute;
  top: 200px;
  transition: all 0.2s ease;
}

.group-90:hover,
.group-184:hover,
.group-194:hover,
.group-178:hover,
.group-196:hover {
  transform: scale(1.1);
}

.overlap-group {
  height: 58px;
  margin-top: -0.43px;
  position: relative;
  width: 221px;
}

.rectangle-82 {
  background-color: var(--desert-storm);
  border-radius: 28.57px;
  box-shadow: 6.72px 6.72px 13.44px #00000014, -6.72px -6.72px 13.44px #ffffff;
  height: 57px;
  left: 0;
  position: absolute;
  top: 0;
  width: 220px;
}

.check-profile {
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

.overlap-group-1 {
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

.group-72 {
  height: 18px;
  width: 15px;
}

.nerul-navi-mumbai {
  left: 331px;
  letter-spacing: 0.96px;
  line-height: 23.3px;
  position: absolute;
  top: 127px;
  white-space: nowrap;
  width: 190px;
}

.span {
  letter-spacing: 0.17px;
}

.rectangle-46 {
  height: 261px;
  left: 52px;
  position: absolute;
  top: 47px;
  width: 262px;
}

.mdceo {
  left: 331px;
  letter-spacing: 0.07px;
  line-height: 19.7px;
  position: absolute;
  top: 167px;
  white-space: nowrap;
  width: 65px;
}

.rectangle-165 {
  height: 357px;
  left: 0;
  position: absolute;
  top: 292px;
  width: 626px;
}

.rectangle-169 {
  height: 356px;
  left: 0;
  position: absolute;
  top: 588px;
  width: 626px;
}

.group-192 {
  height: 20px;
  left: 337px;
  position: absolute;
  top: 840px;
  width: 167px;
}

.group-191 {
  height: 20px;
  left: 337px;
  position: absolute;
  top: 561px;
  width: 167px;
}

.group-184 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  height: 57px;
  left: 326px;
  min-width: 222px;
  position: absolute;
  top: 763px;
  transition: all 0.2s ease;
}

.overlap-group-2 {
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

.group-72-1 {
  height: 18px;
  width: 16px;
}

.llb {
  left: 326px;
  letter-spacing: 0.96px;
  line-height: 23.3px;
  position: absolute;
  top: 404px;
  white-space: nowrap;
  width: 190px;
}

.rectangle-166 {
  height: 256px;
  left: 48px;
  position: absolute;
  top: 346px;
  width: 262px;
}

.rectangle-170 {
  height: 262px;
  left: 48px;
  position: absolute;
  top: 635px;
  width: 262px;
}

.place-1 {
  left: 326px;
  letter-spacing: 0.07px;
  line-height: 19.7px;
  position: absolute;
  top: 443px;
  width: 129px;
}

.human-resource-manager {
  left: 326px;
  letter-spacing: 0.07px;
  line-height: 19.7px;
  position: absolute;
  top: 718px;
  white-space: nowrap;
  width: 206px;
}

.rectangle-173 {
  height: 356px;
  left: 0;
  position: absolute;
  top: 881px;
  width: 626px;
}

.group-193 {
  height: 21px;
  left: 337px;
  position: absolute;
  top: 1133px;
  width: 167px;
}

.group-194 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  height: 57px;
  left: 326px;
  min-width: 222px;
  position: absolute;
  top: 1057px;
  transition: all 0.2s ease;
}

.overlap-group4 {
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

.check-profile-2 {
  cursor: pointer;
  letter-spacing: 0.07px;
  line-height: 19.7px;
  margin-bottom: 0.98px;
  min-height: 19px;
  text-decoration: underline;
  white-space: nowrap;
  width: 106px;
}

.rectangle-174 {
  height: 262px;
  left: 48px;
  position: absolute;
  top: 928px;
  width: 262px;
}

.head-media-communication {
  left: 326px;
  letter-spacing: 0.07px;
  line-height: 19.7px;
  position: absolute;
  top: 1011px;
  white-space: nowrap;
  width: 239px;
}

.rectangle-163 {
  height: 314px;
  left: 18px;
  position: absolute;
  top: 1178px;
  width: 588px;
}

.nerul-navi-mumbai-1 {
  left: 332px;
  letter-spacing: 0.84px;
  line-height: 20.5px;
  position: absolute;
  top: 1287px;
  white-space: nowrap;
  width: 181px;
}

.span-1 {
  letter-spacing: 0.13px;
}

.group-188 {
  height: 18px;
  left: 350px;
  position: absolute;
  top: 1411px;
  width: 159px;
}

.rectangle-167 {
  height: 313px;
  left: 18px;
  position: absolute;
  top: 1473px;
  width: 588px;
}

.group-189 {
  height: 18px;
  left: 339px;
  position: absolute;
  top: 1707px;
  width: 159px;
}

.group-178 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  height: 50px;
  left: 328px;
  min-width: 212px;
  position: absolute;
  top: 1342px;
  transition: all 0.2s ease;
}

.overlap-group5 {
  align-items: center;
  background-color: var(--desert-storm);
  border-radius: 25.1px;
  box-shadow: 5.91px 5.91px 11.81px #00000014, -5.91px -5.91px 11.81px #ffffff;
  display: flex;
  justify-content: flex-end;
  min-width: 210px;
}

.check-profile-1 {
  cursor: pointer;
  letter-spacing: 0.06px;
  line-height: 17.3px;
  margin-bottom: 0.89px;
  min-height: 17px;
  text-decoration: underline;
  white-space: nowrap;
  width: 100px;
}

.overlap-group-3 {
  align-items: flex-end;
  align-self: flex-end;
  background-size: 100% 100%;
  display: flex;
  height: 50px;
  margin-bottom: -0.3px;
  margin-left: 20px;
  min-width: 55px;
  padding: 13.1px 20.4px;
}

.group-72-2 {
  height: 16px;
  width: 14px;
}

.rectangle-164 {
  height: 230px;
  left: 60px;
  position: absolute;
  top: 1220px;
  width: 249px;
}

.rectangle-175 {
  height: 314px;
  left: 19px;
  position: absolute;
  top: 1756px;
  width: 588px;
}

.group-195 {
  height: 18px;
  left: 336px;
  position: absolute;
  top: 1978px;
  width: 159px;
}

.group-196 {
  align-items: flex-end;
  cursor: pointer;
  display: flex;
  height: 50px;
  left: 325px;
  min-width: 212px;
  position: absolute;
  top: 1911px;
  transition: all 0.2s ease;
}

.overlap-group7 {
  align-items: center;
  background-color: var(--desert-storm);
  border-radius: 25.1px;
  box-shadow: 5.91px 5.91px 11.81px #00000014, -5.91px -5.91px 11.81px #ffffff;
  display: flex;
  height: 50px;
  justify-content: flex-end;
  min-width: 210px;
  position: relative;
}

.rectangle-176 {
  height: 230px;
  left: 61px;
  position: absolute;
  top: 1798px;
  width: 252px;
}

.head-tech-department {
  left: 325px;
  letter-spacing: 0.06px;
  line-height: 17.3px;
  position: absolute;
  top: 1871px;
  white-space: nowrap;
  width: 175px;
}

.surname {
  left: 332px;
  letter-spacing: 0.06px;
  line-height: 17.3px;
  position: absolute;
  top: 1316px;
  white-space: nowrap;
  width: 228px;
}

.head-customer-relation {
  left: 332px;
  letter-spacing: 0.06px;
  line-height: 17.3px;
  position: absolute;
  top: 1583px;
  white-space: nowrap;
  width: 183px;
}

.rectangle-168 {
  height: 229px;
  left: 64px;
  position: absolute;
  top: 1515px;
  width: 248px;
}
</style>
