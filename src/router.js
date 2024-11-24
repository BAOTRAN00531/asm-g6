// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import SinglePost from './views/SinglePost.vue';
import Author from './views/Author.vue';
import Bloglisting from './views/BlogListing.vue';
import Account from './views/Login.vue';
import AddPost from './views/AddPost.vue'
import EditPost from './views/EditPost.vue'
import BlogPost from './views/BlogPost.vue'
import Post from './views/Post.vue';
const routes = [
  {
    path: '',
    redirect: '/asm/home'
  },
  {
    path: '/asm',
    children: [
      {
        path: '',
        redirect: 'home'
      },
      {
        path: 'home',
        name: 'Home',
        component: Home
      }
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: Home, // Component hiển thị khi không có route nào được chọn
  },
  {
    path: '/post',
    name: 'post',
    component: Post,
  },
  {
    path: '/singlepost',
    name: 'singlepost',
    component: SinglePost,
  },
  { path: '/author', component: Author },
  { path: '/bloglisting', component: Bloglisting },
  { path: '/addpost', component: AddPost },
  { path: '/editpost/:key', component: EditPost },
  { path: '/blogpost/:key', component: BlogPost },
  {
    path: '/asm-g6/',
    redirect: '/asm-g6/home'
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

