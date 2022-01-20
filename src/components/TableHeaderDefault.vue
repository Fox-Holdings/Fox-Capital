<template>
  <div :class="[`header`, className || ``]">
    <div class="column-label valign-text-middle inter-semi-bold-sonic-silver-14px">{{ children }}</div>
  </div>
</template>

<script>
export default {
  name: "TableHeaderDefault",
  props: ["children", "className"],
};
</script>

<style>
.header {
  align-items: center;
  background-color: var(--black-haze);
  display: flex;
  height: 40px;
  min-width: 280px;
  padding: 0 16px;
}

.column-label {
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  min-width: 40px;
  white-space: nowrap;
}

.header.header-1,
.header.header-4,
.header.header-7 {
  min-width: 316px;
}

.header.header-1 .column-label,
.header.header-4 .column-label,
.header.header-7 .column-label {
  min-width: 97px;
}

.header.header-2,
.header.header-5,
.header.header-8 {
  min-width: 199px;
}

.header.header-2 .column-label,
.header.header-5 .column-label,
.header.header-8 .column-label {
  min-width: 101px;
}

.header.header-9 {
  align-items: unset;
  min-width: unset;
  padding: unset;
  width: 280px;
}

.header.header-9 .column-label {
  margin-left: 16px;
  margin-top: 8px;
  min-width: unset;
  width: 40px;
}

.header.header-10 {
  align-items: unset;
  min-width: unset;
  padding: unset;
  width: 316px;
}

.header.header-10 .column-label {
  margin-left: 16px;
  margin-top: 8px;
  min-width: unset;
  width: 97px;
}

.header.header-11 {
  align-items: unset;
  min-width: unset;
  padding: unset;
  width: 199px;
}

.header.header-11 .column-label {
  margin-left: 16px;
  margin-top: 8px;
  min-width: unset;
  width: 101px;
}
</style>
