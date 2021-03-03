<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-2 left-col">
        <!-- Sidebar -->
        <Sidebar />
      </div>
      <div class="col-lg-6 mid-col">
        <!-- UserNavbar -->
        <UserNavbar />
        <div class="user-profile">
          <!-- Userprofile -->
          <UserProfile />
        </div>
        <div class="mid-down">
          <!-- twitterCardTable -->
          <twitterCardTable />
        </div>
      </div>
      <div class="col-lg-3 right-col">
        <!-- Recommendationtable -->
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import twitterCardTable from "../components/twitterCardTable";
import UserNavbar from "../components/UserNavbar";
import UserProfile from "../components/UserProfile";

export default {
  name: "Userself",
  components: {
    Sidebar,
    twitterCardTable,
    UserNavbar,
    UserProfile,
  },
};
</script>

<style scoped>
.container {
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
}
.row {
  display: flex;
  border: 1px solid crimson;
}
.left-col {
  border: 1px solid blue;
  width: 235px;
  height: 1196px;
}
.mid-col {
  display: flex;
  flex-flow: column wrap;
  border: 1px solid blue;
  margin-right: auto;
  margin-left: auto;
  width: 600px;
  height: 1202px;
}
.right-col {
  border: 1px solid blue;
  width: 350px;
  height: 517px;
}
.user-profile {
  border: 1px solid green;
  width: 100%;
  height: 375px;
}
.mid-down {
  border: 1px solid black;
  margin-top: 10px;
  width: 100%;
  height: 600px;
}
</style>