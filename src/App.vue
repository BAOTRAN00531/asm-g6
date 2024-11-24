<template>
 <div id="root">
    <div class="content-wrapper max-w-screen-2xl text-base mx-auto px-8  ">
      <header class="pt-8 pb-12  mx-10"> 
        <nav class=" flex flex-row justify-around items-center relative">
          <div class="logo  text-center  font-semibold cursor-pointer">
            <img src="/src/img/logo_2.png" class="h-9 w-70 ml-4" alt="">
          </div>
          <ul id="cus-top-menu" class=" hidden lg:flex lg:items-center lg:justify-end lg:gap-9  text-md text-gray-500 font-bold">
            <li  class="cus-top-menu-item">
            <router-link to="/">home</router-link>   
            </li>
            <li class="cus-top-menu-item ">
              <router-link to="/post">Post</router-link>
            </li>
            <li class="cus-top-menu-item">
              <router-link to="/singlepost">Single Post</router-link>
            </li>
            <li class="cus-top-menu-item">
              <router-link to="/bloglisting">Blog listing</router-link>
            </li>
            <li class="cus-top-menu-item ">
              <router-link to="/author">Author</router-link>
            </li>
            <li class="cus-top-menu-item ">
              <router-link to="/register">register</router-link>
            </li>
            <li class="cus-top-menu-item ">
              <router-link to="/login">login</router-link>
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
    </div>

    <div class="content-wrapper max-w-screen-2xl text-base mx-auto px-8  ">
      
      <router-view></router-view>
      
    </div>
  
 </div>
 <footer class="bg-gray-100">
    <div class="mx-auto w-full max-w-screen-xl p-10 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 sm:mr-16  md:mb-0">
              <a href="#" class="flex items-center">
                  <img src="../img/logo_2.png" class="h-8 me-3" alt="" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap text-bl">MetaBlog</span>
              </a>
          </div>
          <div class="grid grid-cols-3 gap-8 sm:gap-6 lg:grid-cols-3">
              <div class="w-80">
                  <h2 class="mb-3 text-lg font-semibold text-gray-900">About</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-sans w-48">
                      <li class="mb-4">
                          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at nisi lorem. Nullam fringilla efficitur orci, ac molestie nulla tempus ac. </span>
                      </li>
                      <li>
                          <span class="text-black font-semibold bg-opacity-30">Email : </span>
                          <span>info@gmail.com</span>
                          <br>
                          <span class="text-black font-semibold bg-opacity-30">Phone : </span>
                          <span>880 123 456 789</span>
                      </li>
                  </ul>
              </div>
              <div class="sm:ml-10">
                  <h2 class="mb-3 text-lg font-semibold text-gray-900  ">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="">
                          <a href="#" class="hover:underline ">Home</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">About</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Blog</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Archived</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Athor</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Contact</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-3 text-lg font-semibold text-gray-900  ">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="">
                          <a href="#" class="hover:underline">Lifestyle</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Technology</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Travel</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Business</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Economy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Sports</a>
                      </li>
                  </ul>
              </div>
              
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" class="hover:underline">MetaBlog™</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <span class="">Terms of Use</span>
              </a>
              <span></span>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <span class="">Privacy Policy</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <span class="">CookiePolicy</span>
              </a>
             
          </div>
      </div>
    </div>
</footer>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import router from './router';
import post from './js/post';
export default {
  name: 'App',
};
</script>

<style scoped>
/* Bạn có thể thêm các kiểu tùy chỉnh ở đây nếu cần */
</style>
