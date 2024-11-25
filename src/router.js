// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import SinglePost from './views/SinglePost.vue';
import Author from './views/Author.vue';
import Bloglisting from './views/BlogListing.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import AddPost from './views/AddPost.vue';
import EditPost from './views/EditPost.vue';
import BlogPost from './views/BlogPost.vue';
import Post from './views/Post.vue';

const routes = [
  {
    path: '/',
    redirect: '/Home' // Điều hướng mặc định về /home
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home, // Component hiển thị ở trang chủ
  },
  {
    path: '/Post',
    name: 'Post',
    component: Post,
  },
  {
    path: '/Singlepost',
    name: 'Singlepost',
    component: SinglePost,
  },
  {
    path: '/Author',
    name: 'Author',
    component: Author,
  },
  {
    path: '/Bloglisting',
    name: 'Bloglisting',
    component: Bloglisting,
  },
  {
    path: '/Addpost',
    name: 'Addpost',
    component: AddPost,
  },
  {
    path: '/Editpost/:key',
    name: 'Editpost',
    component: EditPost,
    props: true,
  },
  {
    path: '/Blogpost/:key',
    name: 'Blogpost',
    component: BlogPost,
    props: true,
  },
  // {
  //   path: '/register',
  //   name: 'register',
  //   component: Register,
    
  // },
  {
    path: '/login',
    name: 'login',
    component: Login,
    
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;