<template>
  <div class="container-lg">
    <div class="row">
      <div class="col-3">
        <adminSideBar :sideBarActive="sideBarActive" />
      </div>
      <div class="col-9">AdminTwitterPage</div>
    </div>
  </div>
</template>

<style scoped>
.col-3,
.col-9 {
  border: 0.2rem black solid;
  background-color: rgb(255, 255, 255);
  height: 1196px;
}
</style>

<script>
import adminSideBar from "../components/AdminSideBar";
export default {
  name: "AdminTwitterPage",
  components: {
    adminSideBar,
  },
};
</script>