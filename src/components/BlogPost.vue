<template>
  <h2 class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-3xl font-bold  text-center text-fuchsia-400">Chi Tiết Bài
    Viết</h2>
    
  <div class="mx-auto max-w-7xl px-4 py-0 sm:px-6 lg:px-8 text-lg">
    <router-link to="/Home" class="text-blue-500 inline-block">Home</router-link> \
    <router-link to="/Post" class="text-orange-500 inline-block">Post</router-link> \
    <h3 class="font-bold  text-green-500 inline-block">{{ post.title }}</h3>
  </div>




  <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-3xl font-bold mb-3">{{ post.title }}</h2>
      <p class="text-blue-700 mb-4 text-xl"><i class="fa fa-user fa-fw" aria-hidden="true"></i>Người đăng: {{ username }}</p>
      <p class="text-gray-600 mb-4 italic">Danh mục: {{ post.category }}</p>

      <!-- Image -->
      <div v-if="post.image" class="mb-6">
        <img :src="post.image" :alt="post.title" class="w-full max-h-196 object-fill rounded-lg shadow-lg">
      </div>

      <!-- Content -->
      <div class="prose max-w-none mb-6" v-html="post.content"></div>

      <!-- Back Button -->
      <router-link to="/home"
        class="inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
        Quay lại Trang Chính
      </router-link>

      <p class="mb-8 text-3xl font-bold mt-36 text-sky-500">What do you think about this post?</p>
      <form @submit.prevent="postComment">
        <div class="mb-3"> <textarea v-model="newComment"
            class="w-full pt-5 pb-5 mb-5 bg-rose-200 rounded-lg shadow-md h-18 ps-10 pe-5 text-slate-950" rows="4"
            placeholder="Write your comment..." required></textarea> </div> <button type="submit"
          class="px-2 py-1 mb-8 font-semibold bg-red-300 rounded-lg"> Submit </button>
        <p class="mb-5 text-2xl font-semibold">Comments: </p>
        <hr />
      </form>
      <div v-if="comments.length > 0" class="pt-3 pb-3 mt-4 mb-4 rounded-md shadow-md bg-slate-100 ps-5 pe-5">
        <ul class="mb-3 list-items">
          <li v-for="(comment, index) in comments" :key="index" class="mb-5">
            <div> <strong>{{ comment.username }}:</strong> {{ comment.text }} <br /> <small class="text-slate-400">{{
              comment.timestamp }}</small> </div>
          </li>
        </ul>
      </div>
      <div v-else
        class="p-5 pt-3 pb-3 mt-4 mb-4 text-2xl font-medium text-center rounded-md shadow-md bg-slate-100 ps-5 pe-5"> No
        comment yet </div>

    </div>
  
  </div>


</template>
<script>
export default {
  name: 'BlogPost',
  data() {
    return {
      username: '',
      post: null,
      newComment: '',
      comments: []
    };
  },
  created() {
    const key = this.$route.params.key;
    try {
      const postData = localStorage.getItem(key);
      if (postData) {
        this.post = JSON.parse(postData);
        this.comments = this.post.comments || [];
      }
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu bài viết:', error);
      this.post = null;
    }
    const username = localStorage.getItem('username');
    if (username) {
      this.username = username;
    }
  },
  methods: {
    postComment() {
      if (!this.username) {
        alert('Please login first!');
        this.$router.push('/');
        return;
      }
//thoi gian
      const timestamp = new Date().toLocaleString();
      const newCommentObj = {
        username: this.username,
        text: this.newComment,
        timestamp: timestamp
      };

      //comment
      this.comments.push(newCommentObj);
      this.post.comments = this.comments;
      localStorage.setItem(this.$route.params.key, JSON.stringify(this.post));
      this.newComment = '';
    }
  }
}
</script>
