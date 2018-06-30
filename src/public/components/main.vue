<template>
  <div>
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
main {
  padding: 50px;
}
</style>
