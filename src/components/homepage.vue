<template>
  <div id="root">
    <div class="content-wrapper max-w-screen-2xl text-base mx-auto px-8  ">
      <header class="pt-8 pb-12  mx-10"> 
        <nav class=" flex flex-row justify-around items-center relative">
          <div class="logo  text-center  font-semibold cursor-pointer">
            <img src="../img/logo.png" class="h-9 w-70 ml-4" alt="">
          </div>
          <ul id="cus-top-menu" class=" hidden lg:flex lg:items-center lg:justify-end lg:gap-9  text-md text-gray-500 font-bold">
            <li class="cus-top-menu-item">
              <a href="#">Home</a>
            </li>
            <li class="cus-top-menu-item ">
              <a href="#">Blog</a>
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
     <main class=" lg:px-36">
    
        <div class=" slider h-[630px]  bg-[url('src/img/background.png')] bg-contain bg-no-repeat">
            <div class=" block ml-14 pt-[21.5rem] w-1/2 h-full  justify-center items-center">
              <div class="w-full bg-white h-72 rounded-lg shadow-xl">
                <div class="flex flex-col gap-4 h-40 ">
                  <div class=" mr-[28rem] mt-9 ml-12 py-0.5 text-white bg-[#4B6BFB] rounded-md flex items-center justify-center gap-4">Technology</div>
                  <div class=" mr-12   ml-12 py-0.5 text-black  text-4xl font-bold rounded-md flex items-center justify-center gap-4">The Impact of Technology on the Workplace: How Technology is Changing</div>
                </div>
              </div>
            </div>
        </div>
 
        
     </main>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
}
</script>
<!-- <script>
// export default {
//   data() {
//     return {
//       greeting: 'Xin chao ban!',
//       buttonTitle: 'Bam vao nut de thay doi loi chao'
//     };
//   },
//   methods: {
//     changeTitle() {
//       this.greeting = 'Hello, World!';
//       this.buttonTitle = 'Da thay doi loi chao';
//     }
//   }
// }
</script> -->