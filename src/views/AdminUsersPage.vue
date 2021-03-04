<template>
  <div class="container-xxl">
    <div class="row">
      <div class="col-2">
        <AdminSideBar />
      </div>
      <div class="col-10">
        <AdminUsersCardTable />
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
import AdminUsersCardTable from "../components/AdminUsersCardTable";

export default {
  name: "AdminUserPage",
  components: {
    AdminSideBar,
    AdminUsersCardTable,
  },
};
</script>