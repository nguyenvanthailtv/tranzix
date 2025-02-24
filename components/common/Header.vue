<script setup lang="ts">
const changeTitle = (title: string) => {
  useHead({ title: title ? title : "Tranzix" });
};

const showMenuMobile = ref(false);
</script>

<template>
  <header class="bg-white shadow-md fixed z-[100] h-[98px] left-0 right-0 [container-type:inline-size]">
    <section class="container mx-auto py-5 flex justify-between">
      <div class="p-[10px] xl:w-[20%]">
        <a href="#" class="w-[142px] block">
          <img src="~/assets/images/logo-1.png" alt="" class="w-full h-full object-cover" />
        </a>
      </div>

      <ul class="w-[60%] xl:flex hidden items-center justify-center">
        <li>
          <a href="#" @click="changeTitle('')" class="py-[13px] px-5 cursor-pointer hover:text-primary duration-400 transition text-black-600 font-medium capitalize">Trang chủ</a>
        </li>
        <li>
          <a href="#intro" @click="changeTitle('Giới Thiệu')" class="py-[13px] px-5 cursor-pointer hover:text-primary duration-400 transition text-black-600 font-medium capitalize">Giới thiệu</a>
        </li>
        <li>
          <a href="#service" @click="changeTitle('Dịch Vụ')" class="py-[13px] px-5 cursor-pointer hover:text-primary duration-400 transition text-black-600 font-medium capitalize">Dịch vụ </a>
        </li>
        <li>
          <a href="#out-client" @click="changeTitle('Đối Tác')" class="py-[13px] px-5 cursor-pointer hover:text-primary duration-400 transition text-black-600 font-medium capitalize">Đối tác</a>
        </li>
        <li>
          <a href="#evaluation" @click="changeTitle('Đánh Giá')" class="py-[13px] px-5 cursor-pointer hover:text-primary duration-400 transition text-black-600 font-medium capitalize">Đánh giá</a>
        </li>
        <li>
          <a href="#contact" @click="changeTitle('Liên Hệ')" class="py-[13px] px-5 cursor-pointer hover:text-primary duration-400 transition text-black-600 font-medium capitalize">Liên hệ</a>
        </li>
        <!-- <li>
                    <a href="#" class="py-[13px] px-5 cursor-pointer hover:text-primary duration-400 transition text-black-600 font-medium capitalize">Trang chủ</a>
                </li> -->
      </ul>

      <div class="flex items-center justify-end xl:w-[20%] gap-5">
        <a href="#" class="button button-tablet">Yêu cầu báo giá</a>

        <button @click="showMenuMobile = !showMenuMobile" class="p-[6px] bg-[#000]/5 rounded-[5px] cursor-pointer xl:hidden block">
          <template v-if="!showMenuMobile">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#000" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </template>
          <template v-else>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#000" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </template>
        </button>
      </div>
    </section>

    <section class="shadow-md absolute w-full h-auto overflow-hidden bg-white transiton ease-linear duration-700" :class="showMenuMobile ? 'max-h-screen' : 'max-h-0'">
      <div class="container mx-auto">
        <ul>
          <li @click="(showMenuMobile = !showMenuMobile),changeTitle('')" >
            <a href="#" class="block text-black-600 py-[10px] pl-5 font-medium hover:bg-primary hover:text-white">Trang chủ</a>
          </li>
          <li @click="(showMenuMobile = !showMenuMobile),changeTitle('Giới Thiệu')">
            <a href="#intro" class="block text-black-600 py-[10px] pl-5 font-medium hover:bg-primary hover:text-white">Giới thiệu</a>
          </li>
          <li @click="(showMenuMobile = !showMenuMobile),changeTitle('Dịch Vụ')">
            <a href="#service" class="block text-black-600 py-[10px] pl-5 font-medium hover:bg-primary hover:text-white">Dịch vụ</a>
          </li>
          <li @click="(showMenuMobile = !showMenuMobile),changeTitle('Đối Tác')">
            <a href="#out-client" class="block text-black-600 py-[10px] pl-5 font-medium hover:bg-primary hover:text-white">Đối tác</a>
          </li>
          <li @click="(showMenuMobile = !showMenuMobile),changeTitle('Đánh Giá')">
            <a href="#evaluation" class="block text-black-600 py-[10px] pl-5 font-medium hover:bg-primary hover:text-white">Đánh giá</a>
          </li>
          <li @click="(showMenuMobile = !showMenuMobile),changeTitle('Liên Hệ')">
            <a href="#contact" class="block text-black-600 py-[10px] pl-5 font-medium hover:bg-primary hover:text-white">Liên hệ</a>
          </li>
          </ul>

        <a @click="showMenuMobile = !showMenuMobile" href="#" class="button my-5 button-mobile !hidden">Yêu cầu báo giá</a>
      </div>
    </section>
  </header>
</template>
<style lang="css">
@container (max-width: 500px) {
  header .button-tablet {
    display: none;
  }

  header .button-mobile {
    display: inline-flex !important;
  }
}
</style>
