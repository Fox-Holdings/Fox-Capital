<template>
  <div class="group-182">
    <div class="overlap-group6">
      <div class="check-profile-5 montserrat-bold-orange-peel-13px">Check profile</div>
      <group732 :group73="group732Props.group73" :group72="group732Props.group72" />
    </div>
  </div>
</template>

<script>
import Group732 from "./Group732";
export default {
  name: "Group182",
  components: {
    Group732,
  },
  props: ["group732Props"],
};
</script>

<style>
.group-182 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  height: 50px;
  left: 332px;
  min-width: 212px;
  position: absolute;
  top: 1631px;
  transition: all 0.2s ease;
}

.group-182:hover {
  transform: scale(1.1);
}

.overlap-group6 {
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

.check-profile-5 {
  letter-spacing: 0.06px;
  line-height: 17.3px;
  margin-bottom: 0.89px;
  min-height: 17px;
  white-space: nowrap;
  width: 100px;
}
</style>
