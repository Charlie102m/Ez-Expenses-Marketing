<template>
  <v-app class="body">
    <v-content id="main">
      <TopNav />
      <router-view />
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    TopNav,
    Footer
  }
};
</script>

<style>
.main-h1 {
  font-size: 80px;
  font-weight: 300;
}
.section-heading {
  font-size: 40px;
  font-weight: 300;
}
p {
  font-size: 20px;
  font-weight: 300;
}
.dark-button {
  background-color: #434343 !important;
}
.teal-button {
  background-color: #1a9688 !important;
}
.light-filter {
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: middle;
}
.width-600 {
  max-width: 600px;
}
.floating-text {
  display: inline-block;
  text-align: center;
  color: #434343;
  background-color: #fff;
}
.floating-text p {
  font-size: 30px;
  font-weight: 400;
}
@media screen and (max-width: 600px) {
  .main-h1 {
    font-size: 50px;
  }
  .section-heading {
    font-size: 35px;
  }
  p {
    font-size: 15px;
  }
  .floating-text p {
    font-size: 20px;
  }
}
</style>
