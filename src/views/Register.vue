<template>
    <div>
      <h2>Đăng ký</h2>
      <form @submit.prevent="handleSubmit">
        <input type="text" v-model="username" placeholder="Tên đăng nhập">
        <input type="email" v-model="email" placeholder="Email">
        <input type="password" v-model="password" placeholder="Mật khẩu">
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Register',
    data() {
      return {
        username: '',
        email: '',
        password: ''
      }
    },
    methods: {
      handleSubmit() {
        // Tạo một đối tượng user chứa thông tin đăng ký
        const user = {
          username: this.username,
          email: this.email,
          password: this.password
        };
  
        // Lưu thông tin user vào localStorage
        localStorage.setItem(`user_${Math.random().toString(36).substr(2, 9)}`, JSON.stringify(user));
  
        // Hiển thị thông báo đăng ký thành công (bạn có thể tùy chỉnh)
        alert('Đăng ký thành công!');
      }
    }
  }
  </script>