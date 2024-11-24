<!-- src/views/Home.vue -->
<template>
  <div class="p-10">
    <div class=" mb-6 lg:mb-16 slider lg:h-[630px] sm:h-[400px] w-full  bg-[url('../img/background.png')] bg-contain  bg-no-repeat">
            <div class=" block lg:ml-14 xl:pt-[21.5rem] lg:w-1/2 lg:h-[630px] sm:h-max-[400px] ">
              <div class="lg:w-full md:w-full xl:bg-white md:bg-black md:bg-opacity-0 md:h-72 lg:h-72 rounded-lg shadow-xl">
                <div class="gap-3 h-40 ">
                  <div class="flex flex-col gap-4 h-40 ">
                  <div class=" mr-[30rem] mt-9 ml-24 py-0.5 text-white bg-[#4B6BFB] rounded-md flex items-center justify-center gap-4">Technology</div>
                  <div class=" mr-12 ml-12 py-0.5 xl:text-black md:text-white  text-4xl font-bold rounded-md flex items-center justify-center gap-4">The Impact of Technology on the Workplace: How Technology is Changing</div>
                  <div class="inline-flex justify-start items-center gap-5">
                      <div class="flex justify-start items-center gap-3 ml-12">
                        <img style="width: 36px; height: 36px; border-radius: 28px" src="https://via.placeholder.com/36x36" />
                        <div class="text-white lg:text-[#000000]  text-base font-medium leading-6 break-words">Jason Francisco</div>
                      </div>
                      <div class="text-white lg:text-[#000000] text-base font-normal leading-6 break-words">August 20,2022</div>
                  </div>
                </div>
                </div>
              </div>
            </div> 
        </div>
      </div>
        <div class=" pt-3 px-14 lg:pt-12 lg:px-56 bg-opacity-95 h-32 lg:h-56">
          <div class="bg-gray-200 h-16 lg:h-24 rounded-xl ">
                <div class="pt-0.5 lg:pt-2  text-sm font-serif text-center text-gray-500">Advertisement</div>
                <div class=" text-center text-sm lg:text-xl font-bold text-gray-500">You can place ads</div>
                <div class="text-gray-500 text-sm font-thin text-center">750x100</div>
          </div>
        </div>
        <div class="mb-4 h-auto ">
            <div class="text-xl font-bold">Latest Post</div>
            <div class="mt-8 mx-36 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <!-- Single Blog Post Card -->
      <div  v-for="(post, key) in posts" :key="key"class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out ">
        <!-- Click vao Post Image and Title -->
        <router-link :to="`./blogpost/${key}`" class="block relative">
          <img 
            v-if="post.image" 
            :src="post.image" 
            :alt="post.title"
            class="w-full h-56 object-fill transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
          <!-- object-cover   full man  hinh -->
          <div class="absolute bottom-0 left-0 bg-black bg-opacity-40 text-white p-3 text-sm w-full">
            <p>{{ post.date }}</p>
          </div>
        </router-link>

        <!-- Post Content card -->
        <div class="p-6">
          <p class="text-gray-600 mb-3 text-sm italic ">
                Danh mục : <span class="font-medium text-white bg-[#4B6BFB] rounded-md p-[4px]">{{ post.category }}</span>
              </p>
              <p class="text-gray-700 mb-3 text-sm">
                Tác giả: {{ author.name }}
              </p>   
          <!-- Clickable Post Title -->
          <router-link :to="`/blogpost/${key}`" class="block">
            <h5 class="text-2xl font-semibold text-gray-800 mb-4 hover:text-blue-600 transition duration-200">
              {{ post.title }}
            </h5>
          </router-link>

          
          <!-- Content Preview -->
          <p class="text-gray-700 mb-6 text-sm">
            {{ truncateContent(post.content) }}...
          </p>

          <!-- Action Buttons -->
          <div class="flex flex-wrap items-center justify-between mt-6 space-y-2 sm:space-y-0">
            <router-link 
              :to="`/blogpost/${key}`"
              class="flex-1 sm:flex-none text-center px-3 py-2 bg-cyan-400 font-bold text-white rounded-lg hover:bg-cyan-500 transition duration-300 ease-in-out"
            >
              Xem Chi Tiết
            </router-link>
            
            <router-link 
              :to="`/editpost/${key}`"
              class="flex-1 sm:flex-none text-center px-3 py-2 bg-yellow-500 font-bold text-white rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out"
            >
              Chỉnh Sửa
            </router-link>
            
            <button 
              @click="deletePost(key)"
              class="flex-1 sm:flex-none text-center px-3 py-2 bg-red-500 font-bold text-white rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
            >
              Xóa
            </button>
          </div>



        </div>

</div>
</div>
        </div>
        <div class="pt-1 mb-2 lg:mb-16 border-solid border-2 text-center text-gray-500 font-medium h-9 mx-36 lg:mx-[500px] rounded-md">View All Post</div>
        <div class=" pt-3 px-14 lg:pt-12 lg:px-56 bg-opacity-95 h-32 lg:h-56">
          <div class="bg-gray-200 h-16 lg:h-24 rounded-xl ">
                <div class="pt-0.5 lg:pt-2  text-sm font-serif text-center text-gray-500">Advertisement</div>
                <div class=" text-center text-sm lg:text-xl font-bold text-gray-500">You can place ads</div>
                <div class="text-gray-500 text-sm font-thin text-center">750x100</div>
          </div>
        </div>

</template>

<script>

export default {
    name: 'Home',
    props: {
    author: {
      type: Object,
      default: () => ({ name: 'Trần Phú Quý', avatar: '' })
    }
  },
  data() {
    return {
      posts: {}
    }
  },
  created() {
    this.loadPosts()
  },
  methods: {
    loadPosts() {
      this.posts = Object.keys(localStorage)
        .filter(key => key.startsWith('post_'))
        .reduce((acc, key) => {
          try {
            acc[key] = JSON.parse(localStorage.getItem(key))
            return acc
          } catch (e) {
            console.error(`Error parsing post ${key}:`, e)
            return acc
          }
        }, {})
    },
    
    truncateContent(content) {
      // Loại bỏ thẻ HTML và cắt chuỗi xuống 100 ký tự
      const plainText = content.replace(/<[^>]*>/g, '')
      return plainText.length > 32
        ? plainText.substring(0, 32) 
        : plainText
    },
    
    deletePost(key) {
      if (confirm('Bạn có chắc chắn muốn xóa bài viết này?')) {
        localStorage.removeItem(key)
        this.loadPosts()
      }
    }
  }
};
</script>