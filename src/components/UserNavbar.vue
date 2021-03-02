<template>
  <div class="row userNav">
    <div class="col-lg-1 arrow">
      <font-awesome-icon icon="arrow-left" />
    </div>
    <div class="col-lg-11">
      <span class="name-text">
        <span>Name</span>
        <span>@account</span>
      </span>
    </div>
  </div>
</template>


<style scoped>
.userNav {
  width: 100%;
  margin-left: 15px;
  margin-right: 15px;
}
.arrow {
  display: flex;
  align-items: center;
}
.name-text {
  display: flex;
  flex-direction: column;
}
</style>