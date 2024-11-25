<template>

  <div class="flex items-center justify-center min-h-screen relative overflow-hidden">
    <!-- Bong bóng -->
    <div class="bubble bg-blue-400 w-40 h-40 opacity-50 absolute top-10 left-20"></div>
    <div class="bubble bg-pink-300 w-20 h-20 opacity-40 absolute top-32 right-10"></div>
    <div class="bubble bg-purple-400 w-60 h-60 opacity-30 absolute bottom-10 left-1/4"></div>
    <div class="bubble bg-blue-300 w-24 h-24 opacity-50 absolute bottom-1/4 right-20"></div>
    <div class="bubble bg-green-400 w-10 h-10 opacity-60 absolute top-1/3 left-10"></div>
    <div class="bubble bg-purple-400 w-60 h-60 opacity-30 absolute top-90 right-1/4"></div>

    <!-- Khối đăng nhập -->
    <div class="p-8 rounded-lg shadow-md w-96 bg-white relative z-10">
      <h2 class="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="username" class="flex items-center mb-1 text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            v-model="username"
            class="w-full px-4 py-2 border border-yellow-300 rounded-lg"
            placeholder="Username"
          />
          <p v-if="usernameError" class="text-red-500 text-sm mt-1">{{ usernameError }}</p>
        </div>
        <div class="mb-4">
          <label for="password" class="flex items-center mb-1 text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="w-full px-4 py-2 border border-yellow-300 rounded-lg"
            placeholder="Password"
          />
          <p v-if="passwordError" class="text-red-500 text-sm mt-1">{{ passwordError }}</p>
        </div>
        <button type="submit" class="w-full bg-gray-600 text-gray-900 py-2 rounded-lg hover:bg-gray-700">
          Login
        </button>
      </form>
      <div class="mt-4 text-center">
        <p class="text-gray-400 mb-2">Or login with</p>
        <div class="flex justify-center space-x-4">
          <a href="https://www.facebook.com" target="_blank"
            class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank"
            class="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.google.com" target="_blank"
            class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
            <i class="fab fa-google"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      usernameError: '',
      passwordError: '',
    };
  },
  methods: {
    handleLogin() {
      this.usernameError = '';
      this.passwordError = '';

      if (!this.username || this.username.length < 3) {
        this.usernameError = 'Tên người dùng phải có ít nhất 3 ký tự!';
        return;
      }

      if (!this.password || this.password.length < 6) {
        this.passwordError = 'Mật khẩu phải có ít nhất 6 ký tự!';
        return;
      }

      // Giả sử đăng nhập thành công
      localStorage.setItem('username', this.username);
      this.$router.push('/');
      alert('Đăng nhập thành công!');
    },
  },
};
</script>

<style scoped>
/* Bong bóng */
.bubble {
  border-radius: 50%;
  position: absolute;
  animation: float 8s infinite ease-in-out;
}

/* Animation nổi */
@keyframes float {
  0% {
    transform: translateY(0) scale(1);
  }

  50% {
    transform: translateY(-20px) scale(1.1);
  }

  100% {
    transform: translateY(0) scale(1);
  }
}

/* Bong bóng ngẫu nhiên */
.bubble:nth-child(1) {
  animation-duration: 7s;
  animation-delay: 0s;
}

.bubble:nth-child(2) {
  animation-duration: 9s;
  animation-delay: 2s;
}

.bubble:nth-child(3) {
  animation-duration: 11s;
  animation-delay: 4s;
}

.bubble:nth-child(4) {
  animation-duration: 10s;
  animation-delay: 3s;
}

.bubble:nth-child(5) {
  animation-duration: 12s;
  animation-delay: 5s;
}
</style>