<style>
        .box::before, .box::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 380px;
            height: 420px;
            background: linear-gradient(0deg, transparent, rgba(69, 243, 255, 0.8), rgba(69, 243, 255, 0.8));
            transform-origin: bottom right;
            animation: animate 6s linear infinite;
        }

        .box::after {
            animation-delay: -3s;
        }

        @keyframes animate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(60deg); }
        }
    </style>
<template>
<div class="flex justify-center items-center min-h-screen bg-gray-900 text-white">
    <div class="flex justify-center items-center h-full container">
        <div class="relative w-96 rounded-lg bg-gray-800 shadow-lg box overflow-hidden">
            <div class="relative inset-1 bg-gray-900 rounded-lg z-10 p-10">
                <h2 class="text-2xl text-cyan-400 mb-5 text-center">Đăng Nhập</h2>
                <form id="loginForm">
                    <div class="relative mb-5">
                        <input type="email" id="email" required class="w-full px-3 py-2 bg-transparent border-b-2 border-gray-500 text-white outline-none focus:border-cyan-400 transition-all">
                        <span class="absolute left-0 px-2 text-gray-500 pointer-events-none transition-all transform top-2.5 text-sm">Email</span>
                    </div>
                    <div class="relative mb-5">
                        <input type="password" id="password" required class="w-full px-3 py-2 bg-transparent border-b-2 border-gray-500 text-white outline-none focus:border-cyan-400 transition-all">
                        <span class="absolute left-0 px-2 text-gray-500 pointer-events-none transition-all transform top-2.5 text-sm">Mật khẩu</span>
                    </div>
                    <div class="flex justify-between text-gray-500 mb-5">
                        <a href="#" class="hover:text-cyan-400 transition-all">Quên Mật Khẩu?</a>
                        <a href="#" class="hover:text-cyan-400 transition-all">Đăng Ký</a>
                    </div>
                    <input type="submit" value="Đăng Nhập" class="w-full py-2 bg-cyan-400 text-white rounded-md cursor-pointer hover:bg-cyan-600 transition-all">
                </form>
            </div>
        </div>
    </div>
</div>

</template>
<script>
export default {
    name: 'account',
};
</script>