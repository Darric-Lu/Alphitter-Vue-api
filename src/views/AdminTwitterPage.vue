<template>
  <div class="container-xxl">
    <div class="row">
      <div class="col-2">
        <AdminSideBar :active="active" />
      </div>
      <div class="col-10">
        <AdminTwitterCardTable :tweets="tweets"/>
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
import adminAPI from "../apis/admin"
import { Toast } from "../utils/helpers"

export default {
  name: "AdminTwitterPage",
  components: {
    AdminSideBar,
    AdminTwitterCardTable,
  },
  data() {
    return {
      tweets: [],
      active: {
        twitterContent: "active",
        userContent: "row",
      },
    };
  },
  created() {
    this.fetchAllTweets()
  },
  methods: {
    async fetchAllTweets() {
      try {
        const response = await adminAPI.getAdminTweets()
        console.log(response)
        this.tweets = response.data      
      } catch(error) {
        Toast.fire({
          icon:"error",
          title: "無法拿到資料捏，請稍後再試～"
        })
      }
    }
  }
};
</script>