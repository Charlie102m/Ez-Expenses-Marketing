<template>
  <div class="mobile-friendly-section">
    <div class="light-filter">
      <v-container fluid style="height: 100%;">
        <v-row align="center" style="height: 100%;">
          <v-col class="text-center">
            <div class="floating-text">
              <p class="ma-5">Completely Mobile Responsive</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileFriendly"
};
</script>

<style>
.mobile-friendly-section {
  width: 100%;
  height: 700px;
  background-image: url("../assets/woman-phone.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  color: #fff;
  will-change: transform;
}
</style>
