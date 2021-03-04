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
        <div class="mid-up"></div>
        <div class="mid-down">
          <!-- FollowingsTable -->
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
import UserNavbar from "../components/UserNavbar";

export default {
  name: "UserselfFollowing",
  components: {
    Sidebar,
    UserNavbar,
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
  /* width: 235px; */
  height: 1196px;
}
.mid-col {
  display: flex;
  flex-flow: column wrap;
  border: 1px solid blue;
  margin-right: auto;
  margin-left: auto;
  /* width: 600px; */
  height: 1202px;
}
.right-col {
  border: 1px solid blue;
  /* width: 350px; */
  height: 517px;
}
.mid-up {
  border: 1px solid green;
  width: 100%;
  height: 400px;
}
.mid-down {
  border: 1px solid black;
  margin-top: 10px;
  width: 100%;
  height: 600px;
}
</style>