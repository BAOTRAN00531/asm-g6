<template>
  <h1>{{ greeting }}</h1>
  <button :title="buttonTitle" @click="changeTitle">Click vao de thay doi loi chao</button>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'Xin chao ban!',
      buttonTitle: 'Bam vao nut de thay doi loi chao'
    };
  },
  methods: {
    changeTitle() {
      this.greeting = 'Hello, World!';
      this.buttonTitle = 'Da thay doi loi chao';
    }
  }
}
</script>