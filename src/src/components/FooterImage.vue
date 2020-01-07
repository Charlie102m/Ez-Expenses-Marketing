<template>
  <div class="footer-section">
    <div class="light-filter">
      <v-container fluid style="height: 100%;">
        <v-row align="center" style="height: 100%;">
          <v-col class="text-center">
            <div class="floating-text">
              <p class="ma-5">Save time, money and get back to what matters!</p>
            </div>
            <a href="https://app.ez-expenses.co.uk/register" class="d-block my-10">
              <v-btn large class="dark-button" dark>Sign Up Now!</v-btn>
            </a>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterImage"
};
</script>

<style>
.footer-section {
  height: 700px;
  background-image: url("../assets/group-ipad.jpg");
  background-position: top;
  background-size: cover;
  background-attachment: fixed;
  will-change: transform;
}
</style>
