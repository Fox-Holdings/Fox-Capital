import Vue from "vue";
import Router from "vue-router";
import TabTeam from "./components/TabTeam";
import HomePage from "./components/HomePage";
import TeamMobile from "./components/TeamMobile";
import InvestmentLandingPage from "./components/InvestmentLandingPage";
import AboutUs from "./components/AboutUs";
import Tablet2 from "./components/Tablet2";
import Services from "./components/Services";
import InvestmentDescriptionPage from "./components/InvestmentDescriptionPage";
import LandTrust from "./components/LandTrust";
import Landthryve from "./components/Landthryve";
import Mobile2 from "./components/Mobile2";
import Mobile from "./components/Mobile";
import Tablet from "./components/Tablet";
import TeamsArchive from "./components/TeamsArchive";
import Landthryve2 from "./components/Landthryve2";
import Mobile22 from "./components/Mobile22";
import Tablet22 from "./components/Tablet22";
import Tablet23 from "./components/Tablet23";
import InvestmentDescriptionPage2 from "./components/InvestmentDescriptionPage2";
import Mobile23 from "./components/Mobile23";
import Mobile24 from "./components/Mobile24";
import Tablet24 from "./components/Tablet24";
import InvestmentDetailPage from "./components/InvestmentDetailPage";
import InvestmentDescriptionPage3 from "./components/InvestmentDescriptionPage3";
import InvestmentDescriptionPage4 from "./components/InvestmentDescriptionPage4";
import InvestmentDescriptionPage5 from "./components/InvestmentDescriptionPage5";
import AboutUs2 from "./components/AboutUs2";
import InvestmentDescriptionPage6 from "./components/InvestmentDescriptionPage6";
import HomePage2 from "./components/HomePage2";
import {
  tabTeamData,
  homePageData,
  teamMobileData,
  investmentLandingPageData,
  aboutUsData,
  tablet2Data,
  servicesData,
  investmentDescriptionPageData,
  landTrustData,
  landthryveData,
  mobile2Data,
  mobileData,
  tabletData,
  teamsArchiveData,
  landthryve2Data,
  mobile22Data,
  tablet22Data,
  tablet23Data,
  investmentDescriptionPage2Data,
  mobile23Data,
  mobile24Data,
  tablet24Data,
  investmentDetailPageData,
  investmentDescriptionPage3Data,
  investmentDescriptionPage4Data,
  investmentDescriptionPage5Data,
  aboutUs2Data,
  investmentDescriptionPage6Data,
  homePage2Data,
} from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/tab-team",
      component: TabTeam,
      props: { ...tabTeamData },
    },
    {
      path: "/",
      component: HomePage,
      props: { ...homePageData },
    },
    {
      path: "/team-mobile",
      component: TeamMobile,
      props: { ...teamMobileData },
    },
    {
      path: "/investment-landing-page",
      component: InvestmentLandingPage,
      props: { ...investmentLandingPageData },
    },
    {
      path: "/about-us",
      component: AboutUs,
      props: { ...aboutUsData },
    },
    {
      path: "/tablet2",
      component: Tablet2,
      props: { ...tablet2Data },
    },
    {
      path: "/services",
      component: Services,
      props: { ...servicesData },
    },
    {
      path: "/investment-description-page",
      component: InvestmentDescriptionPage,
      props: { ...investmentDescriptionPageData },
    },
    {
      path: "/land-trust",
      component: LandTrust,
      props: { ...landTrustData },
    },
    {
      path: "/landthryve-1",
      component: Landthryve,
      props: { ...landthryveData },
    },
    {
      path: "/mobile2-1",
      component: Mobile2,
      props: { ...mobile2Data },
    },
    {
      path: "/mobile",
      component: Mobile,
      props: { ...mobileData },
    },
    {
      path: "/tablet",
      component: Tablet,
      props: { ...tabletData },
    },
    {
      path: "/teams-archive",
      component: TeamsArchive,
      props: { ...teamsArchiveData },
    },
    {
      path: "/landthryve",
      component: Landthryve2,
      props: { ...landthryve2Data },
    },
    {
      path: "/mobile2",
      component: Mobile22,
      props: { ...mobile22Data },
    },
    {
      path: "/tablet2-2",
      component: Tablet22,
      props: { ...tablet22Data },
    },
    {
      path: "/tablet22",
      component: Tablet23,
      props: { ...tablet23Data },
    },
    {
      path: "/investment-description-page-1",
      component: InvestmentDescriptionPage2,
      props: { ...investmentDescriptionPage2Data },
    },
    {
      path: "/mobile2-2",
      component: Mobile23,
      props: { ...mobile23Data },
    },
    {
      path: "/mobile22",
      component: Mobile24,
      props: { ...mobile24Data },
    },
    {
      path: "/tablet2-1",
      component: Tablet24,
      props: { ...tablet24Data },
    },
    {
      path: "/investment-detail-page",
      component: InvestmentDetailPage,
      props: { ...investmentDetailPageData },
    },
    {
      path: "/investment-description-page-3",
      component: InvestmentDescriptionPage3,
      props: { ...investmentDescriptionPage3Data },
    },
    {
      path: "/investment-description-page2",
      component: InvestmentDescriptionPage4,
      props: { ...investmentDescriptionPage4Data },
    },
    {
      path: "/investment-description-page3",
      component: InvestmentDescriptionPage5,
      props: { ...investmentDescriptionPage5Data },
    },
    {
      path: "/about-us-1",
      component: AboutUs2,
      props: { ...aboutUs2Data },
    },
    {
      path: "/investment-description-page-2",
      component: InvestmentDescriptionPage6,
      props: { ...investmentDescriptionPage6Data },
    },
    {
      path: "*",
      component: HomePage2,
      props: { ...homePage2Data },
    },
  ],
});
