<template>
 <h2 class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-3xl font-bold mb-6 text-center text-gray-800">Chi Tiết Bài Viết</h2>

<div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-3xl font-bold mb-3">{{ post.title }}</h2>
    <p class="text-gray-600 mb-4 italic">Danh mục: {{ post.category }}</p>

    <!-- Image -->
    <div v-if="post.image" class="mb-6">
      <img :src="post.image" :alt="post.title" class="w-full max-h-96 object-cover rounded-lg shadow-lg">
      <!-- <img :src="post.image" :alt="post.title" class="w-full max-h-196 object-fill rounded-lg shadow-lg"> -->
    </div>

    <!-- Content -->
    <div class="prose max-w-none mb-6 text-6xl" v-html="post.content"></div>

    <!-- Back Button -->
    <router-link 
      to="/" 
      class="inline-block px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300"
    >
      Quay lại Trang Chính
    </router-link>
  </div>
</div>


</template>
<script>
export default {
  name: 'BlogPost',
  data() {
    return {
      post: null
    }
  },
  created() {
    const key = this.$route.params.key;
    try {
      const postData = localStorage.getItem(key);
      if (postData) {
        this.post = JSON.parse(postData);
      }
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu bài viết:', error);
      this.post = null;
    }
  },
  head() {
    return {
      title: this.post ? this.post.title : 'Không tìm thấy bài viết'
    }
  }
}
</script>