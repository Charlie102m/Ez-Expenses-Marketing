<template>
  <v-app-bar app flat>
    <v-toolbar-title>EZ Expenses</v-toolbar-title>
    <div class="flex-grow-1"></div>
    <a href="https://app.ez-expenses.co.uk/login">
      <v-btn color="teal-button mr-3" dark>Login</v-btn>
    </a>
    <a href="https://app.ez-expenses.co.uk/register">
      <v-btn class="dark-button" dark>Sign Up</v-btn>
    </a>
  </v-app-bar>
</template>

<script>
export default {
  name: "TopNav"
};
</script>

<style>
a {
  text-decoration: none !important;
  color: inherit;
}
</style>