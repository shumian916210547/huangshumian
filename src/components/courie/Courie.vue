<template>
  <div class="Courie">
    <div class="nav">
      <h3 class="title">新歌速递</h3>
      <div class="btn">
        <img src="~assets/img/playCount/play-btn.svg" />
        <p>全部播放</p>
      </div>
    </div>
    <van-swipe :loop="false" :width="320" :show-indicators="false">
      <van-swipe-item>
        <li v-for="(item,index) in songList.slice(0,3)" :key="index">
          <img :src="songList[index].picUrl" />
          <span>{{songList[index].name+" "}}</span>
          <span>- {{songList[index].song.artists[0].name}}</span>
          <span>{{songList[index].song.alias[0]}}</span>
        </li>
      </van-swipe-item>
      <van-swipe-item>
        <li v-for="(item,index) in songList.slice(3,6)" :key="index">
          <img :src="songList[index+3].picUrl" />
          <span>{{songList[index+3].name+" "}}</span>
          <span>- {{songList[index+3].song.artists[0].name}}</span>
          <span>{{songList[index+3].song.alias[0]}}</span>
        </li>
      </van-swipe-item>
      <van-swipe-item>
        <li v-for="(item,index) in songList.slice(6,9)" :key="index">
          <img :src="songList[index+6].picUrl" />
          <span>{{songList[index+6].name+" "}}</span>
          <span>- {{songList[index+6].song.artists[0].name}}</span>
          <span>{{songList[index+6].song.alias[0]}}</span>
        </li>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Courie",
  components: {},
  props: {},
  data() {
    return {
      songList: [],
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    this.$bus.$on("getNewSong", (res) => {
      this.songList.push(...res.data.result);
    });
  },
  mounted() {},
};
</script>
<style lang="css" scoped>
.nav {
  height: 24px;
  position: relative;
  left: 0px;
}
.title {
  position: absolute;
  left: 10px;
}
.btn {
  font-size: 10px;
  width: 80px;
  border-radius: 10px;
  border: 1px solid rgb(242, 242, 242);
  position: absolute;
  right: 10px;
}
.btn img {
  position: absolute;
  top: 1px;
  left: 0;
  width: 16px;
  height: 16px;
}
.btn p {
  height: 18px;
  line-height: 18px;
  padding: 0 0 0 10px;
  text-align: center;
}
.Courie {
  margin-bottom: 15px;
}
.van-swipe {
  margin: 0 10px;
}
.van-swipe-item img {
  margin: 0px 5px 0 0;
  width: 50px;
  height: 50px;
}
.van-swipe-item li {
  list-style: none;
  height: 55px;
}
.van-swipe-item li span:nth-child(2) {
  position: relative;
  top: -35px;
}
.van-swipe-item li span:nth-child(3) {
  position: relative;
  top: -35px;
}
.van-swipe-item li span:nth-child(4) {
  display: block;
  position: relative;
  left: 55px;
  bottom: 25px;
}
</style>