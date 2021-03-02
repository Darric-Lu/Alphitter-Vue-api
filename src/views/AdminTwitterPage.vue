<template>
  <div class="container-lg">
    <div class="row">
      <div class="col-3">
        <AdminSideBar />
      </div>
      <div class="col-9">
        <AdminTwitterCardTable />
      </div>
    </div>
  </div>
</template>

<style scoped>
.col-3,
.col-9 {
  /* border: 0.2rem black solid;
  background-color: rgb(255, 255, 255); */
  box-sizing: border-box;
  height: 1196px;
}
</style>

<script>
import AdminSideBar from "../components/AdminSideBar";
import AdminTwitterCardTable from "../components/AdminTwitterCardTable";

export default {
  name: "AdminTwitterPage",
  components: {
    AdminSideBar,
    AdminTwitterCardTable,
  },
};
</script>