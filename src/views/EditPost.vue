<!-- EditPost.vue -->
<template>
  <div id="root">
  <div class="content-wrapper max-w-screen-2xl text-base mx-auto px-8  ">
    <header class="py-8 mx-10"> 
      <nav class=" flex flex-row justify-around items-center relative">
        <div class="logo  text-center  font-semibold cursor-pointer">
          <img src="../img/logo.png" class="h-9 w-70" alt="">
        </div>
        <ul id="cus-top-menu" class=" hidden lg:flex lg:items-center lg:justify-end lg:gap-9  text-md text-gray-500 font-bold">
          <li class="cus-top-menu-item">
               <router-link to="/">Home</router-link>
          </li>
          <li class="cus-top-menu-item ">
                <router-link to="/">Blog</router-link>
          </li>
          <li class="cus-top-menu-item">
            <a href="#">Single Post</a>
          </li>
          <li class="cus-top-menu-item">
            <a href="#">Pages</a>
          </li>
          <li class="cus-top-menu-item ">
            <a href="#">Contact</a>
          </li>
          <li class="lg:hidden">
            <div id="search-bar" class="flex flex-row">
            <div class="relative">
              <form class="max-w-md mx-auto">
                <div class="relative w-full">
                  <input type="search" name="" class=" py-2.5 w-40 z-20 rounded-l-lg text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2  dark:bg-gray-100  dark:placeholder-gray-400 dark:text-gray-400" id="" placeholder="search">
                  <button type="submit" class="absolute top-0 end-0 p-2.5  text-sm font-medium h-full text-zinc-800 bg-gray-100 rounded-e-lg dark:hover:bg-gray-100 ">
                            <svg class=" w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span class="sr-only">Search</span>
                     </button>
                </div>
              </form>
            </div>
          </div>
          </li>
        </ul>
        <div class="flex flex-row">
          <div id="" class="hidden lg:flex flex-row">
            <div class="relative">
              <form class="max-w-md mx-auto">
                <div class="relative w-full">
                  <input type="search" name="" class=" py-2.5 w-40 z-20 rounded-l-lg text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2  dark:bg-gray-100  dark:placeholder-gray-400 dark:text-gray-400" id="" placeholder="search">
                  <button type="submit" class="absolute top-0 end-0 p-2.5  text-sm font-medium h-full text-zinc-800 bg-gray-100 rounded-e-lg dark:hover:bg-gray-100 ">
                            <svg class=" w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span class="sr-only">Search</span>
                     </button>
                </div>
              </form>
            </div>
          </div>
          <div class="relative w-9 mt-1 mr-9 ml-10 h-7">
              <div class="absolute top-0 left-0 rounded-full bg-gray-200 w-12 h-7">
              </div>
              <div class="absolute top-1 left-1 shadow-md rounded-full bg-white flex items-start justify-start p-1">
                  <img class="w-3.5 h-3.5 object-contain" alt="" src="../img/sunny.svg">
              </div>
            </div> 
          <div class=" lg:hidden cursor-pointer">
            <svg id="cus-toggel-top-menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div> 
      </div>
     </nav>
  </header>



<div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
  <div class="p-4 border rounded-lg bg-gray-50">
    <h2 class="text-2xl font-bold mb-4">Chỉnh Sửa Bài Viết</h2>
    
    <form @submit.prevent="saveChanges">
      <!-- Tiêu đề -->
      <div class="mb-3">
        <label for="editTitle" class="block mb-2">Tiêu Đề</label>
        <input
          type="text"
          id="editTitle"
          v-model="post.title"
          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
      </div>

      <!-- Toolbar -->
      <div class="mb-3 space-x-2">
        <button
          v-for="(tool, index) in toolbar"
          :key="index"
          type="button"
          @click="formatText(tool.command)"
          class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          {{ tool.label }}
        </button>
      </div>

      <!-- Nội dung -->
      <div class="mb-3">
        <label for="editContent" class="block mb-2">Nội Dung</label>
        <div
          ref="contentEditable"
          contenteditable="true"
          class="w-full h-40 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          v-html="post.content"
        ></div>
      </div>

      <!-- Upload ảnh -->
      <div class="mb-3">
        <label for="editpostImage" class="block mb-2">Thêm Ảnh</label>
        <input
          type="file"
          id="editpostImage"
          @change="handleImageUpload"
          accept="image/*"
          class="w-full px-3 py-2 border rounded-lg"
        >
        <!-- Image Preview -->
        <div v-if="post.image" class="mt-3">
          <img
            :src="post.image"
            alt="Current Image"
            class="max-w-full h-auto rounded-lg"
          >
        </div>
      </div>

      <!-- Danh mục -->
      <div class="mb-3">
        <label for="editCategory" class="block mb-2">Chọn Danh Mục</label>
        <select
          id="editCategory"
          v-model="post.category"
          class="w-full px-3 py-2 border rounded-lg"
        >
          <option v-for="category in categories" :key="category.value" :value="category.value">
            {{ category.label }}
          </option>
        </select>
      </div>

      <!-- Buttons -->
      <div class="flex space-x-2">
        <button
          type="submit"
          class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Lưu Thay Đổi
        </button>
        <router-link
          to="/"
          class="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          Quay lại
        </router-link>
      </div>
    </form>
  </div>
</div>


</div>
</div>
</template>

<script>
export default {
name: 'EditPost',
data() {
  return {
    post: {
      title: '',
      content: '',
      category: '',
      image: null
    },
    toolbar: [
      { label: 'In đậm', command: 'bold' },
      { label: 'In nghiêng', command: 'italic' },
      { label: 'Gạch chân', command: 'underline' },
      // { label: 'Danh sách', command: 'insertUnorderedList' },
      // { label: 'Danh sách số', command: 'insertOrderedList' }
    ],
    categories: [
    { value: 'Cong nghe', label: 'Danh mục cn' },
      { value: 'Giai tri', label: 'Danh mục gt' },
      { value: 'The gioi', label: 'Danh mục tg' },
      { value: 'category1', label: 'Danh mục 1' },
      { value: 'category2', label: 'Danh mục 2' },
      { value: 'category3', label: 'Danh mục 3' }
    ]
  }
},
created() {
  // Lấy key từ route params
  const key = this.$route.params.key
  // Lấy dữ liệu bài viết từ localStorage
  const postData = localStorage.getItem(key)
  if (postData) {
    this.post = JSON.parse(postData)
  } else {
    // Nếu không tìm thấy bài viết, chuyển về trang chủ
    this.$router.push('/post')
  }
},
methods: {
  formatText(command) {
    document.execCommand(command, false, null)
  },

  handleImageUpload(event) {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.post.image = e.target.result
      }
      reader.readAsDataURL(file)
    }
  },

  saveChanges() {
    // Cập nhật nội dung từ contenteditable
    this.post.content = this.$refs.contentEditable.innerHTML

    // Validate dữ liệu
    if (!this.post.title.trim()) {
      alert('Vui lòng nhập tiêu đề!')
      return
    }

    if (!this.post.content.trim()) {
      alert('Vui lòng nhập nội dung!')
      return
    }

    try {
      // Lưu thay đổi vào localStorage
      const key = this.$route.params.key
      localStorage.setItem(key, JSON.stringify(this.post))
      
      // Hiển thị thông báo thành công
      alert('Thay đổi đã được lưu!')
      
      // Chuyển về trang chủ
      this.$router.push('/post')
    } catch (error) {
      console.error('Lỗi khi lưu bài viết:', error)
      alert('Có lỗi xảy ra khi lưu bài viết!')
    }
  }
}
}
</script>

<style scoped>
[contenteditable="true"] {
min-height: 150px;
overflow-y: auto;
}

[contenteditable="true"]:empty:before {
content: attr(placeholder);
color: #9ca3af;
font-style: italic;
}
</style>