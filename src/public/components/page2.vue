<template>
<b-card title="page2">

    <b-button @click="back">return main</b-button>
</b-card>
</template>

<script lang="ts">
import Vue from "vue";
import router from "../router";

export default Vue.extend({
  methods: {
    back: function() {
      router.push("/main");
    }
  }
});
</script>
