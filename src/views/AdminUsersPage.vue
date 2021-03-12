<template>
  <div class="container-xxl">
    <div class="row">
      <div class="col-2">
        <AdminSideBar :active="active" />
      </div>
      <div class="col-10">
        <AdminUsersCardTable :users="users" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.col-3,
.col-9 {
  box-sizing: border-box;
  height: 1196px;
}
</style>

<script>
import AdminSideBar from "../components/AdminSideBar";
import AdminUsersCardTable from "../components/AdminUsersCardTable";
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";

export default {
  name: "AdminUserPage",
  components: {
    AdminSideBar,
    AdminUsersCardTable,
  },
  data() {
    return {
      active: {
        twitterContent: "row",
        userContent: "active",
      },
      users: [],
    };
  },
  created() {
    this.fetchAdminUsers();
  },
  methods: {
    async fetchAdminUsers() {
      try {
        const response = await adminAPI.getAdminUsers();
        // console.log(response)
        this.users = response.data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "現在無法取得使用者資料，請稍後再試喔～",
        });
      }
    },
  },
};
</script>