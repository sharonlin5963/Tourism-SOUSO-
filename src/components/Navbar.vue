<template>
  <div class="navbar">
    <router-link to="/" class="nav_logo">
      <div class="logo">
        <img :src="logo" alt="logo">
      </div>
    </router-link>
    <router-link to="/scenicSpot" class="nav_item" active-class="nav-active">
      <div class="item">
        <SvgIcon iconName="map-outline" iconClass="nav_icon"/>
        <h3>SOÜ 景點</h3>
      </div>
    </router-link>
    <router-link to="/restaurant" class="nav_item" active-class="nav-active">
      <div class="item">
        <SvgIcon iconName="restaurant-outline" iconClass="nav_icon"/>
        <h3>SOÜ 美食</h3>
      </div>
    </router-link>
    <router-link to="/hotel" class="nav_item" active-class="nav-active">
      <div class="item">
        <SvgIcon iconName="bed-outline" iconClass="nav_icon"/>
        <h3>SOÜ 旅宿</h3>
      </div>
    </router-link>
    <router-link to="/activity" class="nav_item" active-class="nav-active">
      <div class="item">
        <SvgIcon iconName="bulb-outline" iconClass="nav_icon"/>
        <h3>SOÜ 活動</h3>
      </div>
    </router-link>
    <router-link to="/itinerary" class="nav_item" active-class="nav-active">
      <div class="item">
        <SvgIcon iconName="footsteps-outline" iconClass="nav_icon"/>
        <h3>行程規劃</h3>
      </div>
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import SvgIcon from '../components/SvgIcon.vue'
// images
import logoImg from '../assets/images/logo/Logo.svg'

export default {
  name: 'Navbar',
  components: {
    SvgIcon
  },
  setup () {
    const logo = ref(logoImg)
    return {
      logo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.navbar{
  // position: fixed;
  // top: 0;
  // left: 0;
  display: grid;
  grid-template-rows: 33.3% repeat(5, 1fr);
  max-width: 170px;
  width: 8.85%;
  height: 100vh;
  background-color: #13545A;
  text-align: center;
  .nav_item,
  .nav_logo{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav_logo{
    grid-row: 1 / 2;
    background-color: #FDF6EE;
    img{
      height: 20vh;
    }
  }
  .nav_item + .nav_item{
    border-top: 1px solid #5A8C8C;
  }
  .item .nav_icon{
    width: 2rem;
    height: 2rem;
    fill: #5A8886;
  }
  h3{
    margin: 0;
    color: #5A8886;
    font-size: 0.8rem;
  }
  .nav_item:hover {
    h3{
      color: #24868F;
    }
    .nav_icon{
      fill: #24868F;
    }
  }
  .nav-active {
    h3{
      color: #26A69A;
    }
    .nav_icon{
      fill: #26A69A;
    }
  }
}
</style>
