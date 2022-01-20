<template>
  <div :class="[`group-180`, className || ``]">
    <div class="overlap-group2">
      <div class="check-profile-3 montserrat-bold-orange-peel-14-8px">Check profile</div>
      <group73 :group73="group73Props.group73" :group72="group73Props.group72" :className="group73Props.className" />
    </div>
  </div>
</template>

<script>
import Group73 from "./Group73";
export default {
  name: "Group180",
  components: {
    Group73,
  },
  props: ["className", "group73Props"],
};
</script>

<style>
.group-180 {
  align-items: flex-end;
  cursor: pointer;
  display: flex;
  height: 57px;
  left: 323px;
  min-width: 222px;
  padding: 0px 0;
  position: absolute;
  top: 484px;
  transition: all 0.2s ease;
}

.group-180:hover {
  transform: scale(1.1);
}

.overlap-group2 {
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

.check-profile-3 {
  letter-spacing: 0.07px;
  line-height: 19.7px;
  margin-bottom: 0.98px;
  min-height: 19px;
  white-space: nowrap;
  width: 106px;
}

.group-180.group-180-1 {
  top: 526px;
}
</style>
