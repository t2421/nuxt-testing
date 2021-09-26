<template>
  <div>
    <button @click="countUp">Add up</button>
    <p>Total: clicks: <span class="count">{{count}}</span></p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default  Vue.extend({
  data() {
    return {
      count: 0
    }
  },
  methods: {
    countUp(){
      this.count++
    }
  },
})
</script>