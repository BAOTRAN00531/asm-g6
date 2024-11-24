<template>
    <div>
      <form @submit.prevent="handleSubmit">
        <input type="text" v-model="username" placeholder="Username">
        <input type="password" v-model="password" placeholder="Password">   
  
        <button type="submit">Đăng   
   nhập</button>
      </form>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      handleSubmit() {
        // Logic xử lý khi người dùng nhấn nút đăng nhập
        console.log('Username:', this.username);
        console.log('Password:', this.password);
  
        // Duyệt qua tất cả các key trong localStorage
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key.startsWith('user_')) {
            const storedUser = JSON.parse(localStorage.getItem(key));
            if (storedUser.username === this.username && storedUser.password === this.password) {
              // Đăng nhập thành công
              alert('Đăng nhập thành công!');
              // Lưu lại ID người dùng để sử dụng ở các nơi khác
              const userId = key.split('_')[1];
              // ... sử dụng userId
              return; // Thoát vòng lặp khi tìm thấy
            }
          }
        }
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
      }
    }
  }
  </script>