<!-- <template>
  <div class="about">
    <h1>not done yet</h1>
  </div>
</template>

<style>
  .about {
    min-height: 100vh;
    text-align: center;
  }
</style> -->
<script>
import { ref } from 'vue'

export default {
  
  data() {
    return {
      list: [
        /* ... */
        {name:"hi"},
        {name:"bye"}
      ],

    }
  },
  mounted() {
    console.log(this.$refs.items)
  },
  methods:{
    addItem() {
      console.log(this.$refs.input.value)
      const input = this.$refs.input
      this.list.push({ name: input.value })
      input.value = ''
    }
  }
}

</script>

<template>
   <div class=" container mx-auto p-5 flex items-center border-b border-teal-500 py-2">
    <input type="text" ref="input" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Rest Name">
    <button @click="addItem" class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
      Add
    </button>
  </div>
  <div class="container mx-auto p-5">
      <ul>
         <li v-for="item in list" ref="items">
          {{ item.name }}
        </li>
      </ul>
    </div>
</template>
