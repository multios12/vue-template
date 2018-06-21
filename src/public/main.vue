<template>
  <div>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <b-navbar-brand class="navbar-brand" href="#">vue-template</b-navbar-brand>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <b-collapse is-nav id="navbarsExampleDefault">
      <b-navbar-nav class="mr-auto">
        <b-nav-item active href="#">Home</b-nav-item>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item disabled href="#">Disabled</b-nav-item>
        <b-nav-item-dropdown text="Dropdown">
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Action2</b-dropdown-item>
          <b-dropdown-item href="#">Action3</b-dropdown-item>

        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav class="mr-auto">
        <b-form inline class="my-2 my-lg-0">
          <b-form-input class="mr-sm-2"></b-form-input>
          <b-button outline-success class="my-2 my-sm-0" type="submit"><span class="fas fa-search"></span>Search</b-button>
        </b-form>
      </b-navbar-nav>
    </b-collapse>
  </nav>

  <main role="main" class="container">
    <b-card id="listCard" title="リストサンプル">
        <p>更新日：
          <span id="update">未取得</span>
        </p>
        <b-table hover :items="items">
        </b-table>
    </b-card>
  </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import moment from "moment";

export default Vue.extend({
  data() {
    return {
      items: [
        {
          name: "テスト",
          no: 1,
        }
      ]
    };
  }
});
</script>

<style>
body {
  padding: 50px;
  min-height: 75rem;
  padding-top: 4.5rem;
}
</style>
