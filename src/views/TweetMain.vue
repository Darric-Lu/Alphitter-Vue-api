<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-2 left-col">
        <!-- Sidebar -->
        <Sidebar />
      </div>
      <div class="col-lg-6 mid-col">
        <div class="twitterEditCard">
          <div class="mid-header">首頁</div>
          <div class="textarea">
              <img src="https://avatars.githubusercontent.com/u/8667311?s=200&v=4" alt="">
              <textarea class="form-control" placeholder="有甚麼新鮮事?" id="floatingTextarea2" style="height: 100px">
              </textarea>
              <span>
                <button
                type="submit"
                class="btn btn-secondary tweet"
                >
                推文
                </button>
              </span>
          </div>
          <div class="divider"></div>
        </div>
        <div class="mid-down">
          <!-- twitterCardTable -->
          <twitterCardTable 
          :tweets="tweets"
          :users="users"
          />
        </div>
      </div>
      <div class="col-lg-3 right-col p-0">
        <!-- Recommendationtable -->
        <RecommendationTable />
      </div>
    </div>
  </div>
</template>


<script>
import Sidebar from '../components/Sidebar'
import twitterCardTable from '../components/twitterCardTable'

const dummydata = {
  'users': [
    {
      'id': 1,
      'accountNumber': '@abc',
      'name': 'Russ Kertzmann',
      'email': 'user6@example.com',
      'password': '1234578',
      'image': 'https://loremflickr.com/320/240/restaurant,food/?random=56.98329738383367',
      'description': 'sed',
      'followersCounts': 45,
      'followingsCounts': 45,
    },
    {
      'id': 2,
      'accountNumber': '@efg',
      'name': 'Russ Kertzmann',
      'email': 'user6@example.com',
      'password': '1234578',
      'image': 'https://loremflickr.com/320/240/restaurant,food/?random=56.98329738383367',
      'description': 'sed',
      'followersCounts': 12,
      'followingsCounts': 34,
    },
    {
      'id': 3,
      'accountNumber': '@hij',
      'name': 'Russ Kertzmann',
      'email': 'user6@example.com',
      'password': '1234578',
      'image': 'https://loremflickr.com/320/240/restaurant,food/?random=56.98329738383367',
      'description': 'sed',
      'followersCounts': 68,
      'followingsCounts': 3347,
    },
    {
      'id': 4,
      'accountNumber': '@klm',
      'name': 'Russ Kertzmann',
      'email': 'user6@example.com',
      'password': '1234578',
      'image': 'https://loremflickr.com/320/240/restaurant,food/?random=56.98329738383367',
      'description': 'sed',
      'followersCounts': 699,
      'followingsCounts': 3332,
    },
    {
      'id': 5,
      'accountNumber': '@npq',
      'name': 'Russ Kertzmann',
      'email': 'user6@example.com',
      'password': '1234578',
      'image': 'https://loremflickr.com/320/240/restaurant,food/?random=56.98329738383367',
      'description': 'sed',
      'followersCounts': 9,
      'followingsCounts': 332,
    },
  ],
  'tweets': [
    {
      'id': 1,
      'accountNumber': '@abc',
      'name': 'Russ Kertzmann',
      'image': 'https://loremflickr.com/320/240/restaurant,food/?random=56.98329738383367',
      'content': '難生養美創市所。自車要北親成用孩員，知科便有況生接人前是馬收把清百己量般事有得又士來然房的；點創知期後，如同陸中不養日之形。長他局再改、個國加；農不此，安平後取天仍治西才有小究無開院現著醫晚。',
      'createdAt': '2019-07-30T16:24:55.443Z',
      'updatedAt': '2019-07-30T16:24:55.443Z',
    },
    {
      'id': 2,
      'accountNumber': '@efg',
      'name': 'Russ Kertzmann',
      'image': 'https://loremflickr.com/320/240/restaurant,food/?random=56.98329738383367',
      'content': '難生養美創市所。自車要北親成用孩員，知科便有況生接人前是馬收把清百己量般事有得又士來然房的；點創知期後，如同陸中不養日之形。長他局再改、個國加；農不此，安平後取天仍治西才有小究無開院現著醫晚。',
      'createdAt': '2019-07-30T16:24:55.443Z',
      'updatedAt': '2019-07-30T16:24:55.443Z',
    },
    {
      'id': 3,
      'accountNumber': '@hij',
      'name': 'Russ Kertzmann',
      'image': 'https://loremflickr.com/320/240/restaurant,food/?random=56.98329738383367',
      'content': '難生養美創市所。自車要北親成用孩員，知科便有況生接人前是馬收把清百己量般事有得又士來然房的；點創知期後，如同陸中不養日之形。長他局再改、個國加；農不此，安平後取天仍治西才有小究無開院現著醫晚。',
      'createdAt': '2019-07-30T16:24:55.443Z',
      'updatedAt': '2019-07-30T16:24:55.443Z',
    },
    {
      'id': 4,
      'accountNumber': '@klm',
      'name': 'Russ Kertzmann',
      'image': 'https://loremflickr.com/320/240/restaurant,food/?random=56.98329738383367',
      'content': '難生養美創市所。自車要北親成用孩員，知科便有況生接人前是馬收把清百己量般事有得又士來然房的；點創知期後，如同陸中不養日之形。長他局再改、個國加；農不此，安平後取天仍治西才有小究無開院現著醫晚。',
      'createdAt': '2019-07-30T16:24:55.443Z',
      'updatedAt': '2019-07-30T16:24:55.443Z',
    },
    {
      'id': 5,
      'accountNumber': '@npq',
      'name': 'Russ Kertzmann',
      'image': 'https://loremflickr.com/320/240/restaurant,food/?random=56.98329738383367',
      'content': '難生養美創市所。自車要北親成用孩員，知科便有況生接人前是馬收把清百己量般事有得又士來然房的；點創知期後，如同陸中不養日之形。長他局再改、個國加；農不此，安平後取天仍治西才有小究無開院現著醫晚。',
      'createdAt': '2019-07-30T16:24:55.443Z',
      'updatedAt': '2019-07-30T16:24:55.443Z',
    }
  ]
}

export default {
  name: 'TweetMain',
  components: {
    Sidebar,
    twitterCardTable
  },
  data() {
    return {
      users:[],
      tweets: [],
    }
  },
  created() {
    this.fetchMain()
  },
  methods: {
    fetchMain() {
      this.users = dummydata.users
      this.tweets = dummydata.tweets
    }
  }
}
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
.twitterEditCard {
  border: 1px solid green;
  width: 100%;
  height: auto;
}
.mid-down {
  border: 1px solid black;
  width: 100%;
  height: auto;
}
.mid-header {
  background: #FFFFFF;
  border: 1px solid #E6ECF0;
  box-sizing: border-box;
  padding: 2px;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
}
img {
  /* position: absolute; */
  width: 50px;
  height: 50px;
  /* left: 48%;
  top: 60px; */
}
.textarea {
  display: flex;
}
textarea{
  border-style: none;
}
span {
  display: flex;
  align-items: flex-end;
}
.tweet {
  background: #ff6600;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  width: 64px;
  height: 40px;
}
.divider {
  width: 100%;
  height: 10px;
  background: #E6ECF0;
}
.right-col {
  border: 1px solid blue;
  /* width: 350px; */
  height: 517px;
}
</style>

<script>
import RecommendationTable from "../components/RecommendationTable";

export default {
  name: "TweetMain",
  components: {
    RecommendationTable,
  },
};
</script>