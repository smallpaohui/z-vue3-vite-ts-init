<script setup lang="ts"></script>

<template><router-view /></template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
/* 加载条的样式 */
#nprogress .bar {
  background-image: linear-gradient(
    to right,
    #09f1b8,
    #00a2ff,
    #ff00d2,
    #fed90f
  ) !important;
}
</style>
<!-- 
<script setup lang="ts"></script>

<template></template>

<style lang="less" scoped></style> 
-->
