<script setup lang="ts">
const changeTitle = (title: string) => {
  useHead({ title: title ? title : "Tranzix" });
};

const showMenuMobile = ref(false);
</script>

<template>
  <footer id="footer">
    <div class="container mx-auto text-white relative z-10 lg:py-12 py-6 grid lg:grid-cols-10 gap-5">
      <div class="lg:col-span-3 pr-5 flex flex-col gap-5">
        <figure class="w-[150px]">
          <img class="w-full object-cover" src="~/assets/images/Logo-Light-1.png" alt="" />
        </figure>

        <p class="text-white">Đội ngũ chuyên nghiệp và hệ thống vận chuyển tiên tiến, chúng tôi cam kết mang đến sự hài lòng cao nhất cho khách hàng.</p>

        <ul class="flex items-center gap-[10px]">
          <li class="w-11 h-11 bg-[#3b5998] rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" class="w-5 h-5" viewBox="0 0 512 512">
              <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
              />
            </svg>
          </li>
          <li class="w-11 h-11 bg-[#1da1f2] rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" class="w-5 h-5" viewBox="0 0 512 512">
              <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
              />
            </svg>
          </li>
          <li class="w-11 h-11 bg-[#cd201f] rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" class="w-5 h-5" viewBox="0 0 576 512">
              <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
              />
            </svg>
          </li>
        </ul>
      </div>

      <div class="lg:col-span-2">
        <h4 class="mb-3 text-white uppercase font-semibold text-[18px]">Danh mục</h4>

        <ul>
          <li @click="(showMenuMobile = !showMenuMobile), changeTitle('')">
            <a href="#" class="text-white py-[6px] hover:text-primary block">Trang chủ</a>
          </li>
          <li @click="(showMenuMobile = !showMenuMobile), changeTitle('Giới Thiệu')">
            <a href="#intro" class="text-white py-[6px] hover:text-primary block">Giới thiệu</a>
          </li>
          <li @click="(showMenuMobile = !showMenuMobile), changeTitle('Dịch Vụ')">
            <a href="#service" class="text-white py-[6px] hover:text-primary block">Dịch vụ vận chuyển</a>
          </li>
          <li @click="(showMenuMobile = !showMenuMobile), changeTitle('Đối Tác')">
            <a href="#out-client" class="text-white py-[6px] hover:text-primary block">Đối tác</a>
          </li>
          <li @click="(showMenuMobile = !showMenuMobile), changeTitle('Đánh Giá')">
            <a href="#evaluation" class="text-white py-[6px] hover:text-primary block">Đánh giá</a>
          </li>
          <li @click="(showMenuMobile = !showMenuMobile), changeTitle('Liên Hệ')">
            <a href="#contact" class="text-white py-[6px] hover:text-primary block">Liên hệ</a>
          </li>
        </ul>
      </div>

      <div class="lg:col-span-2">
        <h4 class="mb-3 text-white uppercase font-semibold text-[18px]">Dịch vụ vận chuyển</h4>

        <ul>
          <li>
            <a href="#" class="text-white py-[6px] hover:text-primary block">Vận tải đường bộ</a>
          </li>
          <li>
            <a href="#" class="text-white py-[6px] hover:text-primary block">Vận tải đường biển</a>
          </li>
          <li>
            <a href="#" class="text-white py-[6px] hover:text-primary block">Vận tải đường hàng không</a>
          </li>
          <li>
            <a href="#" class="text-white py-[6px] hover:text-primary block">Vận tải đường sắt</a>
          </li>
          <li>
            <a href="#" class="text-white py-[6px] hover:text-primary block">Dịch vụ kho bãi</a>
          </li>
        </ul>
      </div>

      <div class="lg:col-span-3">
        <h4 class="mb-3 text-white uppercase font-semibold text-[18px]">Liên hệ</h4>

        <ul>
          <li class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#fff" class="size-5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>

            <a href="#" class="text-white py-[6px] hover:text-primary block">0123456</a>
          </li>
          <li class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#fff" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>


            <a href="#" class="text-white py-[6px] hover:text-primary block">info@gmail</a>
          </li>
          <li class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#fff" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>


            <a href="#" class="text-white py-[6px] hover:text-primary block">Hà Nội, Việt Nam</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="css">
#footer {
  background: url("~/assets/images/CTA-1-1.jpg") center no-repeat;
  position: relative;
}

#footer::after {
  position: absolute;
  content: "";
  display: block;
  inset: 0;
  background-color: rgba(34, 34, 38, 0.9);
}
</style>
