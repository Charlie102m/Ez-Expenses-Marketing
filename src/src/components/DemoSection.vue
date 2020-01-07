<template>
  <!-- Teal info panel -->
  <div class="demo-section">
    <v-container>
      <v-row align="center" justify="center" class="pa-5">
        <!-- looping AddTrip video -->
        <v-col cols="12" sm="12" md="6" class="text-center px-5">
          <video src="../assets/AddTripHd.min.mp4" autoplay="true" loop="true" muted="true"></video>
        </v-col>
        <!-- USP's checklist -->
        <v-col cols="12" sm="12" md="6" class="white--text px-5">
          <h3 class="section-heading my-3">Don't wait to get paid!</h3>
          <p class>Take the pain out of getting reimbursed for your efforts!</p>
          <div class="ma-3">
            <i class="fas fa-check-circle mr-5"></i> Fast
          </div>
          <div class="ma-3">
            <i class="fas fa-check-circle mr-5"></i> Simple
          </div>
          <div class="ma-3">
            <i class="fas fa-check-circle mr-5"></i> Mobile friendly
          </div>
          <p
            class="width-600"
          >With EZ Expenses you can log your purchases and work trips in seconds. Then your claim is just a click of a button away!</p>
          <p>
            <strong>And did we mention...it's 100% FREE!</strong>
          </p>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" class="mb-5">
        <a href="https://app.ez-expenses.co.uk/register">
          <v-btn large class="dark-button" dark>Sign Up Now!</v-btn>
        </a>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "DemoSection"
};
</script>

<style>
.demo-section {
  background-color: #1a9688;
}
.check-list {
  font-size: 2rem;
}
video {
  max-width: 600px;
  width: 90%;
}
</style>