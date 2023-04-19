<script>
import Rest from '../components/Rest.vue';
import {ref} from 'vue'
export default{
  //if i want to use them here only HomeView.vue
  //but now i'm using the Global Registration on main.js
  // components: {
  //   Rest: Rest
  // },
  data() {
    return {
      rest: [
  {name:"KFC",rate:3.1,state:false},
  {name:"maza",rate:4.1,state:true},
  {name:"kaza",rate:4.1,state:false},
  {name:"moment", rate:3.1,state:true},
  {name:"abc",rate:0.1,state:false},
  {name:"abc",rate:3.1,state:true},
]}},
methods:{
  toggleState(restaurant) {
      restaurant.state = !restaurant.state;
    }
}
}


</script>

<template>
  <div>
    <Rest :name="item.name" :rate="item.rate" :state="item.state"  v-for="(item, index) in rest" :key="index" @click="toggleState(item)" />
  </div>
</template>
