<template>
  <div>
    <h1>当前求和为: {{sum_x}}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: 'CountVueX',
  data() {
    return {
      n: 1
    }
  },
  methods: {
    increment() {
      this.$store.dispatch('increment', this.n)
    },
    decrement() {
      console.log(this.$store.state.sum);
    },
    incrementOdd() {},
    incrementWait() {
      setTimeout(()=>{

      })
    }
  },
  computed: {
    sum_x() {
      return this.$store.state.sum
    }
  },
  mounted() {
    console.log(this);
  }
}
</script>

<style>
  button {
    margin-left: 5px;
  }
</style>
