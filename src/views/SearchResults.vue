<template>
    <main>
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div class="container mx-auto my-5 px-4">
  
          <!-- Title -->
          <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">
            Kết Quả Tìm Kiếm
          </h2>
  
          <!-- Nếu không có bài viết -->
          <p v-if="results.length === 0" class="text-center text-gray-600">
            Không tìm thấy bài viết nào phù hợp.
          </p>
  
          <!-- Responsive Grid for Blog Posts -->
          <div v-if="results.length > 0" class="mt-8 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  
            <!-- Single Blog Post Card -->
            <div v-for="(post, key) in results" :key="key"
              class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out ">
  
              <!-- Click vào Post Image and Title -->
              <router-link :to="`/blogpost/${post.key}`" class="block relative">
  
  
                <img v-if="post.image" :src="post.image" :alt="post.title"
                  class="w-full h-56 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105">
                <div class="absolute bottom-0 left-0 bg-black bg-opacity-40 text-white p-3 text-sm w-full">
                  <p>{{ post.date }}</p>
                </div>
              </router-link>
  
              <!-- Post Content Card -->
              <div class="p-6">
                <p class="text-gray-600 mb-3 text-sm italic">
                  Danh mục : <span class="font-medium text-white bg-[#4B6BFB] rounded-md p-[4px]">{{
                    post.category }}</span>
                </p>
  
                <div class="flex items-center space-x-4">
                  <!-- <img :src="post.authorAvatar" alt="Author Avatar" width="10%" height="10%" /> -->
                  <p class="text-gray-700 mb-3 text-sm py-1">
                    Tác giả: <b> {{ post.author }}</b>
                  </p>
                </div>
  
                <!-- Clickable Post Title -->
                <router-link :to="`/blogpost/${post.key}`" class="block">
                  
                  <h5 class="text-2xl font-semibold text-gray-800 mb-4 hover:text-blue-600 transition duration-200">
                    {{ post.title }}
                  </h5>
                </router-link>
  
                <!-- Content Preview -->
                <p class="text-gray-700 mb-6 text-sm">
                  {{ truncateContent(post.content) }}
                </p>
  
  
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  export default {
    data() {
      return {
        results: [], // Danh sách kết quả tìm kiếm
      };
    },
    created() {
      this.loadPosts(); // Tải danh sách bài viết
      this.searchPosts(); // Thực hiện tìm kiếm
    },
    methods: {
      loadPosts() {
        // Lấy tất cả bài viết từ localStorage
        return Object.keys(localStorage)
          .filter((key) => key.startsWith('post_'))
          .map((key) => {
            const post = JSON.parse(localStorage.getItem(key));
            return { ...post, key }; // Thêm key vào dữ liệu bài viết
          });
      },
      searchPosts() {
        const query = this.$route.query.q.toLowerCase(); // Lấy từ khóa tìm kiếm từ URL
        const posts = this.loadPosts(); // Gọi loadPosts để lấy danh sách bài viết
  
        // Lọc kết quả dựa trên từ khóa tìm kiếm
        this.results = posts.filter(
          (post) =>
            post.title.toLowerCase().includes(query) ||
            post.content.toLowerCase().includes(query)
        );
      },
      truncateContent(content) {
        // Rút gọn nội dung bài viết
        return content.length > 50 ? content.substring(0, 50) + '...' : content;
      },
    },
  };
  </script>
  <style scoped>
  /* Thêm CSS nếu cần tùy chỉnh thêm */
  </style>
  