<template>
  <div class="response-section pa-5">
    <!-- Responsive Devices Section -->
    <v-container>
      <div class="text-center">
        <h3 class="section-heading">Use on all of your devices!</h3>
        <p
          class="width-600 mt-5 mb-10 mx-auto"
        >We are designed to work perfectly on all of your devices; from your phone to your PC... and everything in between!</p>
      </div>
      <div align="center" justify="center">
        <v-img src="../assets/responsive-devices.png" max-width="600" max-height="300"></v-img>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ResponseSection"
};
</script>

<style>
.response-section {
  background-color: #434343;
  color: #fff;
}
</style>