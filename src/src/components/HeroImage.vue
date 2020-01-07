<template>
  <!-- Main Hero Image -->
  <div class="top-section">
    <div class="dark-filter">
      <v-container fluid style="height: 100%;">
        <v-row align="center" style="height: 100%;">
          <v-col id="fade-away" class="text-center">
            <h1 class="main-h1 mb-8">Welcome to EZ Expenses</h1>
            <h2 class="section-heading mb-5">
              Business miles and expenses made EZ!
            </h2>
            <p class="width-600 mx-auto">
              The perfect companion app for all working professionals who travel
              or make purchases on the job!
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroImage",
  methods: {
    handleScroll() {
      let e = document.getElementById("fade-away");
      let scroll = window.scrollY;
      let height = window.innerHeight - 400;
      if (scroll > 200) {
        let calc = (height - scroll) / height;
        e.style.opacity = calc;
      } else {
        e.style.opacity = 1;
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
.top-section {
  width: 100%;
  height: calc(100vh - 64px);
  background-image: url("../assets/car.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  color: #fff;
  transform: translatez(0);
  -webkit-transform: translatez(0);
}
.dark-filter {
  background-color: #434343c2;
  width: 100%;
  height: 100%;
}
</style>
