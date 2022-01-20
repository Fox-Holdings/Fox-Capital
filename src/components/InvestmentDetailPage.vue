<template>
  <div class="container-center-horizontal">
    <div class="investment-detail-page screen">
      <div class="flex-row-45">
        <router-link to="/home-page" className="align-self-flex-end"
          ><img class="fox-capital-logo-2-22" :src="foxCapitalLogo2"
        /></router-link>
        <div class="place-container">
          <div class="place-31 montserrat-bold-white-22px">{{ place1 }}</div>
          <router-link to="/home-page">
            <div class="link montserrat-bold-storm-dust-22px">{{ place2 }}</div>
          </router-link>
        </div>
        <div class="overlap-group3-16">
          <div class="projects montserrat-bold-white-22px">{{ projects }}</div>
          <router-link to="/about-us">
            <div class="about-us-25 montserrat-bold-fuscous-gray-22px">{{ aboutUs }}</div>
          </router-link>
        </div>
        <div class="overlap-group10-6">
          <div class="localities montserrat-bold-white-22px">{{ localities }}</div>
          <router-link to="/services">
            <div class="link montserrat-bold-storm-dust-22px">{{ services }}</div>
          </router-link>
        </div>
        <div class="overlap-group9-8">
          <div class="developers montserrat-bold-white-22px">{{ developers }}</div>
          <div class="rectangle-126"></div>
          <router-link to="/investment-landing-page">
            <div class="investment-23 montserrat-bold-orange-peel-22px">{{ investment }}</div>
          </router-link>
        </div>
      </div>
      <div class="flex-row-46">
        <div class="flex-col-47">
          <img class="landvest-logo-2" :src="landvestLogo" />
          <div class="lorem-ipsum-dolor-si-11 montserrat-normal-eerie-black-24px">{{ loremIpsumDolorSi1 }}</div>
        </div>
        <div class="overlap-group11-6" :style="{ 'background-image': 'url(' + overlapGroup11 + ')' }">
          <img
            class="rectangle-192-2"
            src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61df88314388a308927f0baf/img/rectangle-192-1@1x.svg"
          />
          <div class="x40-roi-2 montserrat-extra-bold-lima-36px">{{ x40Roi }}</div>
          <div class="in-12months-2 montserrat-semi-bold-lima-24px">{{ in12Months }}</div>
        </div>
      </div>
      <div class="flex-col-48">
        <div class="overlap-group18">
          <h1 class="title montserrat-semi-bold-orange-peel-60px">{{ title }}</h1>
          <div class="overlap-group5-19">
            <img
              class="group-159-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/group-159@2x.svg"
            />
            <img
              class="rectangle-241-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61df88314388a308927f0baf/img/rectangle-241-1@2x.svg"
            />
            <img
              class="rectangle-242-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61df88314388a308927f0baf/img/rectangle-242-1@2x.svg"
            />
            <img
              class="rectangle-127-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61df88314388a308927f0baf/img/rectangle-127-1@2x.svg"
            />
            <img
              class="rectangle-128-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61df88314388a308927f0baf/img/rectangle-128-1@2x.svg"
            />
            <img
              class="checkout-our-investment-plans-catelog-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/checkout-our-investment-plans-catelog@2x.svg"
            />
            <img
              class="acquired-at-n600000-per-unit-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/acquired-at-n600-000-per-unit@2x.svg"
            />
            <img
              class="select-unit-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/select-unit@2x.svg"
            />
            <img
              class="roi-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/roi@2x.svg"
            />
            <img
              class="group-31"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61df88314388a308927f0baf/img/group-20@2x.svg"
            />
            <img
              class="group-32"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61df88314388a308927f0baf/img/group-21@2x.svg"
            />
            <img
              class="group-33"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61df88314388a308927f0baf/img/group-22@2x.svg"
            />
            <img
              class="group-34"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61cbf868a8a140ea0b5758fc/img/group-3@2x.svg"
            />
            <img
              class="group-35"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61cbf868a8a140ea0b5758fc/img/group-4@2x.svg"
            />
            <img
              class="vector-65"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/vector-26@2x.svg"
            />
            <img
              class="vector-66"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/vector-27@2x.svg"
            />
            <img
              class="vector-67"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/vector-28@2x.svg"
            />
            <img
              class="vector-68"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/vector-4@2x.svg"
            />
            <img
              class="vector-69"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61cbf868a8a140ea0b5758fc/img/vector-29@2x.svg"
            />
            <img
              class="vector-70"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/vector-31@2x.svg"
            />
            <img
              class="vector-71"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/vector-32@2x.svg"
            />
            <img
              class="vector-72"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61cbf868a8a140ea0b5758fc/img/vector-32@2x.svg"
            />
            <img
              class="vector-73"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/vector-34@2x.svg"
            />
            <img
              class="vector-74"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/vector-10@2x.svg"
            />
            <img
              class="vector-75"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/vector-11@2x.svg"
            />
            <img
              class="vector-76"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/vector-37@2x.svg"
            />
            <img
              class="vector-77"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/vector-38@2x.svg"
            />
            <img
              class="vector-78"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/vector-39@2x.svg"
            />
            <img
              class="group-36"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/group-9@2x.svg"
            />
            <img
              class="group-231-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61df88314388a308927f0baf/img/group-231-1@2x.svg"
            />
            <img
              class="group-233-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61df88314388a308927f0baf/img/group-233-1@2x.svg"
            />
          </div>
          <div class="overlap-group12-4">
            <img
              class="select-amount-of-unit-to-be-invested-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/select-amount-of-unit-to-be-invested@2x.svg"
            />
            <img
              class="group-37"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61cbf868a8a140ea0b5758fc/img/group-18@2x.svg"
            />
          </div>
          <div class="overlap-group6-15">
            <img
              class="get-a-40-roi-in-12-m-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/get-a-40--roi-in-12-months-with-no-hidden-charges@2x.svg"
            />
            <img
              class="group-38"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61cbf868a8a140ea0b5758fc/img/group-20@2x.svg"
            />
          </div>
          <img
            class="explore-3"
            src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/explore-1@2x.svg"
          />
          <img
            class="invest-3"
            src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/invest-1@2x.svg"
          />
          <div class="group-container-11">
            <img
              class="group-39"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61cbf868a8a140ea0b5758fc/img/group-7@2x.svg"
            />
            <img
              class="group-232-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61df88314388a308927f0baf/img/group-232-1@2x.svg"
            />
          </div>
        </div>
        <div class="overlap-group19">
          <div class="investment-table-2 montserrat-semi-bold-orange-peel-60px">{{ investmentTable }}</div>
          <div class="overlap-group13-2">
            <img
              class="vector-79"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/vector-25@2x.svg"
            />
            <img class="image-3-2" :src="image3" />
          </div>
        </div>
        <img class="image-4-2" :src="image4" />
        <div class="ready-to-invest-rea montserrat-bold-eerie-black-36px">{{ readyToInvestRea }}</div>
        <div class="frame-21-1">
          <table-header-default :children="tableHeaderDefault1Props.children" />
          <table-header-default
            :children="tableHeaderDefault2Props.children"
            :className="tableHeaderDefault2Props.className"
          />
          <table-header-default
            :children="tableHeaderDefault3Props.children"
            :className="tableHeaderDefault3Props.className"
          />
        </div>
        <div class="overlap-group10-7">
          <div class="hello-there inter-bold-shark-16px">{{ helloThere1 }}</div>
          <div class="amycloud-africacom inter-regular-normal-sonic-silver-14px">{{ amyCloudAfricaCom1 }}</div>
        </div>
        <div class="overlap-group9-9">
          <div class="hello-there inter-bold-shark-16px">{{ helloThere2 }}</div>
          <div class="amycloud-africacom-1 inter-regular-normal-sonic-silver-14px">{{ amyCloudAfricaCom2 }}</div>
        </div>
        <div class="overlap-group7-13">
          <div class="hello-there inter-bold-shark-16px">{{ helloThere3 }}</div>
          <div class="amycloud-africacom-2 inter-regular-normal-sonic-silver-14px">{{ amyCloudAfricaCom3 }}</div>
        </div>
        <div class="overlap-group3-17">
          <div class="hello-there inter-bold-shark-16px">{{ helloThere4 }}</div>
          <div class="amycloud-africacom-3 inter-regular-normal-sonic-silver-14px">{{ amyCloudAfricaCom4 }}</div>
        </div>
        <div class="address-8 montserrat-semi-bold-fuscous-gray-24px" v-html="address"></div>
        <div class="infofoxcapitalinvestmentplccom-2 montserrat-semi-bold-fuscous-gray-24px">
          {{ infoFoxcapitalinvestmentplcCom }}
        </div>
        <img
          class="group-67-11"
          src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61e1debc0eedab0725bf28a2/img/group-67-4@2x.svg"
        />
        <div class="location-map-5 montserrat-semi-bold-cape-cod-60px">{{ locationMap }}</div>
        <div class="overlap-group4-19">
          <div class="rectangle-194"></div>
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
          <div class="overlap-group2-26">
            <div class="rectangle-146-5"></div>
            <div class="group-226-5">
              <img
                class="line-4"
                src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/line-40@2x.svg"
              />
              <div class="line-container-5">
                <img
                  class="line-4-1"
                  src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/line-41@2x.svg"
                />
                <img
                  class="line-4-2"
                  src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/line-42@2x.svg"
                />
                <img
                  class="line-4-3"
                  src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/line-43@2x.svg"
                />
                <img
                  class="line-44-5"
                  src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/line-44@2x.svg"
                />
              </div>
              <img
                class="line-4"
                src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/line-45@2x.svg"
              />
              <div class="line-container-6">
                <img
                  class="line-4-1"
                  src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/line-46@2x.svg"
                />
                <img
                  class="line-4-2"
                  src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/line-47@2x.svg"
                />
                <img
                  class="line-4-3"
                  src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/line-48@2x.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="overlap-group8-9">
          <div class="overlap-group15-1">
            <img
              class="vector-80"
              src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/vector-24@1x.svg"
            />
            <div class="group-172">
              <div class="flex-col-49">
                <div class="rectangle-195"></div>
                <div class="rectangle-19"></div>
                <div class="rectangle-19"></div>
              </div>
              <div class="flex-col-50">
                <div class="pros montserrat-semi-bold-white-60px">{{ pros }}</div>
                <div class="lorem-ipsum-dolor-si-12 montserrat-normal-white-24px">{{ loremIpsumDolorSi2 }}</div>
                <div class="lorem-ipsum-dolor-si-10 montserrat-normal-white-24px">{{ loremIpsumDolorSi3 }}</div>
                <div class="lorem-ipsum-dolor-si-10 montserrat-normal-white-24px">{{ loremIpsumDolorSi4 }}</div>
              </div>
            </div>
          </div>
          <div class="flex-col-51">
            <div class="rectangle-198"></div>
            <div class="rectangle-3"></div>
            <div class="rectangle-3"></div>
          </div>
          <div class="flex-col-52 montserrat-normal-white-24px">
            <div class="overlap-group17">
              <div class="overlap-group16-1">
                <img
                  class="group-171"
                  src="https://anima-uploads.s3.amazonaws.com/projects/61c70ba5eb36a4b9d303179c/releases/61c70c674c7868f85cfa7614/img/group-171@2x.svg"
                />
                <div class="lorem-ipsum-dolor-si-13 montserrat-normal-white-24px">{{ loremIpsumDolorSi5 }}</div>
              </div>
              <div class="cons montserrat-semi-bold-white-60px">{{ cons }}</div>
            </div>
            <div class="lorem-ipsum-dolor-si-14">{{ loremIpsumDolorSi6 }}</div>
            <div class="lorem-ipsum-dolor-si-10">{{ loremIpsumDolorSi7 }}</div>
          </div>
        </div>
        <group23452
          :group217Props22="group23452Props.group217Props22"
          :group217Props222="group23452Props.group217Props222"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TableHeaderDefault from "./TableHeaderDefault";
import Group23452 from "./Group23452";
export default {
  name: "InvestmentDetailPage",
  components: {
    TableHeaderDefault,
    Group23452,
  },
  props: [
    "foxCapitalLogo2",
    "place1",
    "place2",
    "projects",
    "aboutUs",
    "localities",
    "services",
    "developers",
    "investment",
    "landvestLogo",
    "loremIpsumDolorSi1",
    "overlapGroup11",
    "x40Roi",
    "in12Months",
    "title",
    "investmentTable",
    "image3",
    "image4",
    "readyToInvestRea",
    "helloThere1",
    "amyCloudAfricaCom1",
    "helloThere2",
    "amyCloudAfricaCom2",
    "helloThere3",
    "amyCloudAfricaCom3",
    "helloThere4",
    "amyCloudAfricaCom4",
    "address",
    "infoFoxcapitalinvestmentplcCom",
    "locationMap",
    "pros",
    "loremIpsumDolorSi2",
    "loremIpsumDolorSi3",
    "loremIpsumDolorSi4",
    "loremIpsumDolorSi5",
    "cons",
    "loremIpsumDolorSi6",
    "loremIpsumDolorSi7",
    "tableHeaderDefault1Props",
    "tableHeaderDefault2Props",
    "tableHeaderDefault3Props",
    "group23452Props",
  ],
};
</script>

<style>
.investment-detail-page {
  align-items: center;
  background-color: var(--concrete);
  display: flex;
  flex-direction: column;
  height: 8106px;
  overflow: hidden;
  padding: 120px 0;
  width: 1920px;
}

.flex-row-45 {
  align-items: center;
  display: flex;
  height: 91px;
  margin-right: 176px;
  min-width: 1542px;
}

.fox-capital-logo-2-22 {
  align-self: flex-end;
  cursor: pointer;
  height: 90px;
  object-fit: cover;
  width: 207px;
}

.place-container {
  height: 29px;
  margin-bottom: 6.36px;
  margin-left: 565px;
  position: relative;
  width: 70px;
}

.place-31 {
  left: 0;
  letter-spacing: 0.11px;
  line-height: 29.3px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.link {
  cursor: pointer;
  left: 0;
  letter-spacing: 0.11px;
  line-height: 29.3px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.overlap-group3-16 {
  height: 29px;
  margin-bottom: 6.36px;
  margin-left: 106px;
  position: relative;
  width: 121px;
}

.projects {
  left: 25px;
  letter-spacing: 0.11px;
  line-height: 29.3px;
  opacity: 0.9;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.about-us-25 {
  cursor: pointer;
  left: 0;
  letter-spacing: 0.11px;
  line-height: 29.3px;
  opacity: 0.9;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.overlap-group10-6 {
  height: 29px;
  margin-bottom: 6.36px;
  margin-left: 93px;
  position: relative;
  width: 130px;
}

.localities {
  left: 19px;
  letter-spacing: 0.11px;
  line-height: 29.3px;
  opacity: 0.9;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.overlap-group9-8 {
  align-self: flex-start;
  border-radius: 15px;
  height: 85px;
  margin-left: 58px;
  position: relative;
  width: 192px;
}

.developers {
  left: 54px;
  letter-spacing: 0.11px;
  line-height: 29.3px;
  position: absolute;
  top: 28px;
  white-space: nowrap;
}

.rectangle-126 {
  background-color: var(--desert-storm);
  border-radius: 15px;
  box-shadow: 10px 10px 20px #00000017, -10px -10px 20px #ffffff;
  height: 85px;
  left: 0;
  position: absolute;
  top: 0;
  width: 192px;
}

.investment-23 {
  cursor: pointer;
  left: 23px;
  letter-spacing: 0.11px;
  line-height: 29.3px;
  opacity: 0.9;
  position: absolute;
  top: 23px;
  white-space: nowrap;
}

.flex-row-46 {
  align-items: center;
  display: flex;
  margin-right: 4px;
  margin-top: 101px;
  min-width: 1722px;
}

.flex-col-47 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 79px;
  min-height: 245px;
  width: 509px;
}

.landvest-logo-2 {
  height: 83px;
  object-fit: cover;
  width: 492px;
}

.lorem-ipsum-dolor-si-11 {
  letter-spacing: 0.72px;
  line-height: 36.1px;
  margin-left: 4px;
  margin-top: 58px;
  min-height: 104px;
  width: 505px;
}

.overlap-group11-6 {
  background-size: 100% 100%;
  height: 598px;
  margin-left: 337px;
  position: relative;
  width: 876px;
}

.rectangle-192-2 {
  height: 598px;
  left: 0;
  position: absolute;
  top: 0;
  width: 876px;
}

.x40-roi-2 {
  left: 61px;
  letter-spacing: 0.18px;
  line-height: 52.9px;
  position: absolute;
  top: 381px;
  white-space: nowrap;
  width: 173px;
}

.in-12months-2 {
  left: 72px;
  letter-spacing: 0.12px;
  line-height: 35.3px;
  position: absolute;
  top: 435px;
  white-space: nowrap;
}

.flex-col-48 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 4px;
  margin-top: 205px;
  min-height: 6905px;
  position: relative;
  width: 1924px;
}

.overlap-group18 {
  align-self: flex-end;
  height: 600px;
  margin-right: 2.64px;
  position: relative;
  width: 1801px;
}

.title {
  left: 632px;
  letter-spacing: 0.3px;
  line-height: 88.1px;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 417px;
}

.overlap-group5-19 {
  height: 597px;
  left: 0;
  position: absolute;
  top: 3px;
  width: 1801px;
}

.group-159-2 {
  height: 323px;
  left: 1504px;
  position: absolute;
  top: 0;
  width: 297px;
}

.rectangle-241-2 {
  height: 129px;
  left: 0;
  position: absolute;
  top: 264px;
  width: 129px;
}

.rectangle-242-2 {
  height: 129px;
  left: 839px;
  position: absolute;
  top: 468px;
  width: 129px;
}

.rectangle-127-2 {
  height: 129px;
  left: 469px;
  position: absolute;
  top: 137px;
  width: 129px;
}

.rectangle-128-2 {
  height: 129px;
  left: 1214px;
  position: absolute;
  top: 137px;
  width: 129px;
}

.checkout-our-investment-plans-catelog-2 {
  height: 95px;
  left: 133px;
  position: absolute;
  top: 400px;
  width: 221px;
}

.acquired-at-n600000-per-unit-2 {
  height: 92px;
  left: 908px;
  position: absolute;
  top: 408px;
  width: 173px;
}

.select-unit-2 {
  height: 23px;
  left: 532px;
  position: absolute;
  top: 348px;
  width: 156px;
}

.roi-2 {
  height: 20px;
  left: 1342px;
  position: absolute;
  top: 362px;
  width: 48px;
}

.group-31 {
  height: 45px;
  left: 35px;
  position: absolute;
  top: 313px;
  width: 51px;
}

.group-32 {
  height: 45px;
  left: 502px;
  position: absolute;
  top: 180px;
  width: 62px;
}

.group-33 {
  height: 46px;
  left: 874px;
  position: absolute;
  top: 515px;
  width: 62px;
}

.group-34 {
  height: 45px;
  left: 1246px;
  position: absolute;
  top: 180px;
  width: 63px;
}

.group-35 {
  height: 127px;
  left: 77px;
  position: absolute;
  top: 190px;
  width: 341px;
}

.vector-65 {
  height: 192px;
  left: 52px;
  position: absolute;
  top: 382px;
  width: 377px;
}

.vector-66 {
  height: 127px;
  left: 424px;
  position: absolute;
  top: 260px;
  width: 50px;
}

.vector-67 {
  height: 193px;
  left: 590px;
  position: absolute;
  top: 194px;
  width: 213px;
}

.vector-68 {
  height: 31px;
  left: 463px;
  position: absolute;
  top: 241px;
  width: 31px;
}

.vector-69 {
  height: 126px;
  left: 798px;
  position: absolute;
  top: 382px;
  width: 50px;
}

.vector-70 {
  height: 192px;
  left: 959px;
  position: absolute;
  top: 382px;
  width: 218px;
}

.vector-71 {
  height: 30px;
  left: 837px;
  position: absolute;
  top: 495px;
  width: 31px;
}

.vector-72 {
  height: 127px;
  left: 1172px;
  position: absolute;
  top: 260px;
  width: 49px;
}

.vector-73 {
  height: 193px;
  left: 1336px;
  position: absolute;
  top: 194px;
  width: 214px;
}

.vector-74 {
  height: 31px;
  left: 1210px;
  position: absolute;
  top: 241px;
  width: 31px;
}

.vector-75 {
  height: 19px;
  left: 45px;
  position: absolute;
  top: 385px;
  width: 18px;
}

.vector-76 {
  height: 19px;
  left: 576px;
  position: absolute;
  top: 189px;
  width: 19px;
}

.vector-77 {
  height: 18px;
  left: 944px;
  position: absolute;
  top: 557px;
  width: 18px;
}

.vector-78 {
  height: 19px;
  left: 1322px;
  position: absolute;
  top: 189px;
  width: 19px;
}

.group-36 {
  height: 39px;
  left: 222px;
  position: absolute;
  top: 297px;
  width: 39px;
}

.group-231-2 {
  height: 41px;
  left: 585px;
  position: absolute;
  top: 295px;
  width: 51px;
}

.group-233-2 {
  height: 48px;
  left: 1338px;
  position: absolute;
  top: 293px;
  width: 56px;
}

.overlap-group12-4 {
  height: 162px;
  left: 436px;
  position: absolute;
  top: 416px;
  width: 355px;
}

.select-amount-of-unit-to-be-invested-2 {
  height: 91px;
  left: 73px;
  position: absolute;
  top: 0;
  width: 187px;
}

.group-37 {
  height: 126px;
  left: 0;
  position: absolute;
  top: 36px;
  width: 355px;
}

.overlap-group6-15 {
  height: 158px;
  left: 1183px;
  position: absolute;
  top: 420px;
  width: 356px;
}

.get-a-40-roi-in-12-m-2 {
  height: 94px;
  left: 34px;
  position: absolute;
  top: 0;
  width: 294px;
}

.group-38 {
  height: 126px;
  left: 0;
  position: absolute;
  top: 32px;
  width: 356px;
}

.explore-3 {
  height: 27px;
  left: 192px;
  position: absolute;
  top: 350px;
  width: 105px;
}

.invest-3 {
  height: 20px;
  left: 940px;
  position: absolute;
  top: 353px;
  width: 85px;
}

.group-container-11 {
  height: 151px;
  left: 810px;
  position: absolute;
  top: 193px;
  width: 355px;
}

.group-39 {
  height: 125px;
  left: 0;
  position: absolute;
  top: 0;
  width: 355px;
}

.group-232-2 {
  height: 47px;
  left: 154px;
  position: absolute;
  top: 104px;
  width: 46px;
}

.overlap-group19 {
  height: 1226px;
  margin-left: 1px;
  margin-top: 171px;
  position: relative;
  width: 1704px;
}

.investment-table-2 {
  left: 688px;
  letter-spacing: 0.3px;
  line-height: 88.1px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.overlap-group13-2 {
  height: 1226px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1704px;
}

.vector-79 {
  height: 369px;
  left: 0;
  position: absolute;
  top: 0;
  width: 352px;
}

.image-3-2 {
  height: 1118px;
  left: 214px;
  object-fit: cover;
  position: absolute;
  top: 108px;
  width: 1490px;
}

.image-4-2 {
  align-self: center;
  height: 598px;
  margin-right: 4px;
  margin-top: 172px;
  width: 956px;
}

.ready-to-invest-rea {
  letter-spacing: 0;
  line-height: 51.1px;
  margin-left: 215px;
  margin-top: 161px;
  min-height: 51px;
  white-space: nowrap;
}

.frame-21-1 {
  align-items: flex-start;
  display: flex;
  height: 40px;
  margin-left: 215px;
  margin-top: 18px;
  min-width: 795px;
  position: relative;
}

.overlap-group10-7 {
  height: 25px;
  margin-left: 231px;
  margin-top: 14px;
  position: relative;
  width: 438px;
}

.hello-there {
  left: 0;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 284px;
}

.amycloud-africacom {
  left: 280px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  top: 1px;
  white-space: nowrap;
  width: 158px;
}

.overlap-group9-9 {
  height: 24px;
  margin-left: 231px;
  margin-top: 27px;
  position: relative;
  width: 436px;
}

.amycloud-africacom-1 {
  left: 278px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 158px;
}

.overlap-group7-13 {
  height: 24px;
  margin-left: 231px;
  margin-top: 28px;
  position: relative;
  width: 438px;
}

.amycloud-africacom-2 {
  left: 280px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 158px;
}

.overlap-group3-17 {
  height: 25px;
  margin-left: 231px;
  margin-top: 28px;
  position: relative;
  width: 436px;
}

.amycloud-africacom-3 {
  left: 278px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  top: 1px;
  white-space: nowrap;
  width: 158px;
}

.address-8 {
  letter-spacing: 0.72px;
  line-height: 36.1px;
  margin-left: 195px;
  margin-top: 209px;
  min-height: 70px;
  width: 631px;
}

.infofoxcapitalinvestmentplccom-2 {
  letter-spacing: 0.72px;
  line-height: 36.1px;
  margin-left: 195px;
  margin-top: 15px;
  min-height: 70px;
  width: 631px;
}

.group-67-11 {
  height: 31px;
  margin-left: 201px;
  margin-top: 16px;
  width: 332px;
}

.location-map-5 {
  letter-spacing: 0.3px;
  line-height: 88.1px;
  margin-left: 101px;
  margin-top: 222px;
  min-height: 88px;
  white-space: nowrap;
}

.overlap-group4-19 {
  align-self: center;
  height: 889px;
  margin-left: 9px;
  margin-top: 93px;
  position: relative;
  width: 1731px;
}

.rectangle-194 {
  background-color: var(--concrete);
  border-radius: 67px;
  box-shadow: 20px 20px 50px #d2d2d2, -20px -20px 50px #ffffff;
  height: 889px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1719px;
}

.google-maps-views-12 {
  border-radius: 67px;
  height: 844px;
  left: 15px;
  position: absolute;
  top: 25px;
  width: 1716px;
}

.overlap-group2-26 {
  height: 848px;
  left: 160px;
  position: absolute;
  top: 21px;
  width: 39px;
}

.rectangle-146-5 {
  background-color: var(--teal-blue);
  height: 7px;
  left: -404px;
  position: absolute;
  top: 420px;
  transform: rotate(-90deg);
  width: 848px;
}

.group-226-5 {
  align-items: flex-end;
  background-color: var(--teal-blue);
  border-radius: 34.5px;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 114px;
  padding: 13.7px 10.3px;
  position: absolute;
  top: 357px;
  width: 39px;
}

.line-4 {
  height: 9px;
  width: 17px;
}

.line-container-5 {
  height: 39px;
  position: relative;
  width: 17px;
}

.line-4-1 {
  height: 10px;
  left: 0;
  position: absolute;
  top: 0;
  width: 17px;
}

.line-4-2 {
  height: 10px;
  left: 0;
  position: absolute;
  top: 10px;
  width: 17px;
}

.line-4-3 {
  height: 10px;
  left: 0;
  position: absolute;
  top: 19px;
  width: 17px;
}

.line-44-5 {
  height: 10px;
  left: 0;
  position: absolute;
  top: 29px;
  width: 17px;
}

.line-container-6 {
  height: 29px;
  position: relative;
  width: 17px;
}

.overlap-group8-9 {
  align-items: flex-start;
  background-color: var(--heavy-metal);
  display: flex;
  margin-top: 294px;
  min-width: 1920px;
}

.overlap-group15-1 {
  align-self: flex-end;
  height: 786px;
  margin-bottom: -0.21px;
  position: relative;
  width: 830px;
}

.vector-80 {
  height: 786px;
  left: 0;
  position: absolute;
  top: 0;
  width: 750px;
}

.group-172 {
  align-items: center;
  display: flex;
  height: 501px;
  left: 244px;
  min-width: 586px;
  position: absolute;
  top: 143px;
}

.flex-col-49 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  min-height: 283px;
  width: 27px;
}

.rectangle-195 {
  background-color: var(--java);
  border-radius: 47.5px;
  box-shadow: 10px 10px 30px #262626, -10px -10px 30px #2d2d2d;
  height: 27px;
  width: 27px;
}

.rectangle-19 {
  background-color: var(--java);
  border-radius: 47.5px;
  box-shadow: 10px 10px 30px #262626, -10px -10px 30px #2d2d2d;
  height: 27px;
  margin-top: 101px;
  width: 27px;
}

.flex-col-50 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 47px;
  min-height: 501px;
  width: 504px;
}

.pros {
  letter-spacing: 0.3px;
  line-height: 88.1px;
  min-height: 84px;
  white-space: nowrap;
}

.lorem-ipsum-dolor-si-12 {
  letter-spacing: 0.72px;
  line-height: 36.1px;
  margin-top: 57px;
  min-height: 104px;
  width: 504px;
}

.lorem-ipsum-dolor-si-10 {
  letter-spacing: 0.72px;
  line-height: 36.1px;
  margin-top: 24px;
  min-height: 104px;
  width: 504px;
}

.flex-col-51 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-left: 269px;
  margin-top: 91.43px;
  min-height: 283px;
  width: 27px;
}

.rectangle-198 {
  background-color: var(--rose);
  border-radius: 47.5px;
  box-shadow: 10px 10px 30px #262626, -10px -10px 30px #2d2d2d;
  height: 27px;
  width: 27px;
}

.rectangle-3 {
  background-color: var(--rose);
  border-radius: 47.5px;
  box-shadow: 10px 10px 30px #262626, -10px -10px 30px #2d2d2d;
  height: 27px;
  margin-top: 101px;
  width: 27px;
}

.flex-col-52 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 47px;
  min-height: 644px;
  width: 747px;
}

.overlap-group17 {
  height: 394px;
  position: relative;
  width: 747px;
}

.overlap-group16-1 {
  height: 394px;
  left: 0;
  position: absolute;
  top: 0;
  width: 747px;
}

.group-171 {
  height: 394px;
  left: 386px;
  position: absolute;
  top: 0;
  width: 361px;
}

.lorem-ipsum-dolor-si-13 {
  left: 0;
  letter-spacing: 0.72px;
  line-height: 36.1px;
  position: absolute;
  top: 284px;
  width: 504px;
}

.cons {
  left: 0;
  letter-spacing: 0.3px;
  line-height: 88.1px;
  position: absolute;
  top: 143px;
  white-space: nowrap;
  width: 166px;
}

.lorem-ipsum-dolor-si-14 {
  letter-spacing: 0.72px;
  line-height: 36.1px;
  margin-top: 18px;
  min-height: 104px;
  width: 504px;
}
</style>
