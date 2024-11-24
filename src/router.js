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
import Register from './views/Register.vue';

const routes = [
  {
    path: '/',
    redirect: '/home' // Điều hướng mặc định về /home
  },
  {
    path: '/home',
    name: 'home',
    component: Home, // Component hiển thị ở trang chủ
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
  {
    path: '/author',
    name: 'author',
    component: Author,
  },
  {
    path: '/bloglisting',
    name: 'bloglisting',
    component: Bloglisting,
  },
  {
    path: '/addpost',
    name: 'addpost',
    component: AddPost,
  },
  {
    path: '/editpost/:key',
    name: 'editpost',
    component: EditPost,
    props: true,
  },
  {
    path: '/blogpost/:key',
    name: 'blogpost',
    component: BlogPost,
    props: true,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

