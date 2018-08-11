<template>
  <b-navbar toggleable="md" type="dark" variant="dark" fixed>
    <b-navbar-brand class="navbar-brand" href="#">vue-template</b-navbar-brand>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <b-collapse is-nav id="navbarsExampleDefault">
      <b-navbar-nav class="mr-auto">
        <b-nav-item active href="#">Home</b-nav-item>
        <b-nav-item href="#/page2">page2</b-nav-item>
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
  </b-navbar>
</template>
