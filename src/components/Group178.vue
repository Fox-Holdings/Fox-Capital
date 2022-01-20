<template>
  <div class="group-182-1">
    <div class="overlap-group8-5">
      <div class="check-profile-9 montserrat-bold-orange-peel-13px">Check profile</div>
      <group733
        :group73="group733Props.group73"
        :group72="group733Props.group72"
        :className="group733Props.className"
      />
    </div>
  </div>
</template>

<script>
import Group733 from "./Group733";
export default {
  name: "Group178",
  components: {
    Group733,
  },
  props: ["group733Props"],
};
</script>

<style>
.group-182-1 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  height: 50px;
  left: 913px;
  min-width: 196px;
  position: absolute;
  top: 601px;
  transition: all 0.2s ease;
}

.group-182-1:hover {
  transform: scale(1.1);
}

.overlap-group8-5 {
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

.check-profile-9 {
  letter-spacing: 0.06px;
  line-height: 17.3px;
  margin-bottom: 0.89px;
  min-height: 17px;
  white-space: nowrap;
  width: 93px;
}
</style>
