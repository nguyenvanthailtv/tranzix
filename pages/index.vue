<script setup lang="ts">
const activeTab = ref(1);

const changeActiveTab = (tabNumber: number) => {
  if (activeTab.value !== tabNumber) activeTab.value = tabNumber;
};

const tabs = [
  {
    id: 1,
    name: "Vận tải đường bộ",
  },
  {
    id: 2,
    name: "Vận tải đường biển",
  },
  {
    id: 3,
    name: "Vận tải hàng không",
  },
  {
    id: 4,
    name: "Vận tải đường sắt",
  },
  {
    id: 5,
    name: "Dịch vụ kho bãi",
  },
];

import "vue3-carousel/carousel.css";
// import { Carousel, Slide, Pagination } from "vue3-carousel";

const carouselConfig = {
  itemsToShow: 2,
  itemsToScroll: 1.5,
  gap: 30,
  wrapAround: false,
};

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
</script>

<template>
  <!-- Banner -->
  <section class="border-b-[7px] border-b-solid border-b-[#FC7B5C]">
    <img class="w-full object-cover" src="../assets/images/banner-1.jpg" alt="" />
  </section>

  <section class="bg-primary">
    <div class="container mx-auto py-[50px] grid grid-cols-12">
      <div
        class="lg:col-span-4 col-span-12 lg:px-6 lg:pb-0 pb-10 lg:border-r-[3px] border-0 border-solid border-orange-500 relative after:content-[''] after:absolute lg:after:hidden after:block after:w-[100%] after:max-w-[500px] after:h-[2px] after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:bg-orange-500"
      >
        <div class="flex justify-center mb-4">
          <img class="w-[64px] h-[64px] object-cover scale-95 transition-all duration-500 ease-in-out hover:scale-100 cursor-pointer" src="../assets/images/truck.png" alt="" />
        </div>

        <h6 class="text-[18px] text-center text-white font-medium">Đường bộ vận tải nhanh chóng giúp kết nối hiệu quả các khu vực</h6>
      </div>
      <div
        class="lg:col-span-4 col-span-12 lg:px-6 lg:py-0 py-10 lg:border-r-[3px] border-0 border-solid border-orange-500 relative after:content-[''] after:absolute lg:after:hidden after:block after:w-[100%] after:max-w-[500px] after:h-[2px] after:bottom-0 after:left-[50%] after:translate-x-[-50%] after:bg-orange-500"
      >
        <div class="flex justify-center mb-4">
          <img class="w-[64px] h-[64px] object-cover scale-95 transition-all duration-500 ease-in-out hover:scale-100 cursor-pointer" src="../assets/images/ship.png" alt="" />
        </div>

        <h6 class="text-[18px] text-center text-white font-medium">Liên kết đường thủy với các hãng tàu lớn cung cấp dịch vụ vận tải chất lượng</h6>
      </div>
      <div class="lg:col-span-4 col-span-12 lg:px-6 lg:pt-0 pt-10">
        <div class="flex justify-center mb-4">
          <img class="w-[64px] h-[64px] object-cover scale-95 transition-all duration-500 ease-in-out hover:scale-100 cursor-pointer" src="../assets/images/airplane.png" alt="" />
        </div>

        <h6 class="text-[18px] text-center text-white font-medium">Chỉ mất 2 ngày vận tải châu Âu nhanh chóng qua đường hàng không</h6>
      </div>
    </div>
  </section>

  <!-- Giới thiệu -->

  <div id="intro" class="overflow-x-hidden">
    <section class="container mx-auto py-section grid lg:grid-cols-2 grid-cols-1 lg:gap-[120px] gap-[30px]">
      <div class="relative">
        <div class="hover-1 rounded-lg overflow-hidden">
          <img src="~/assets/images/img-1.jpg" alt="" />
        </div>
        <div class="absolute right-0 bottom-10 before:absolute before:content-[''] before:w-full before:h-full before:bg-primary before:left-5 before:top-5 before:rounded-[5px]">
          <div class="relative py-[40px] w-[250px] rounded-[5px] z-10 bg-white">
            <h2 class="text-[45px] font-extrabold text-primary text-center">20</h2>
            <h5 class="text-[18px] font-semibold text-black-700 text-center">năm kinh nghiệm</h5>
          </div>
        </div>
      </div>

      <div class="relative">
        <h1 class="uppercase text-title font-bold text-black-700">Giao hàng <span class="text-primary">nhanh chóng và an toàn</span></h1>

        <p class="mt-5 leading-[1.8]">
          Chúng tôi đã tạo ra một trải nghiệm mới trong lĩnh vực logistics, kết hợp giữa dịch vụ logistics chất lượng cao nhất cùng với dịch vụ khách hàng xuất sắc. Khách hàng có thể đăng ký tham gia bằng cách chỉ cần thanh toán một khoản
          phí thành viên hàng năm là $129.
        </p>

        <p class="mt-5 leading-[1.8]">
          Khi có yêu cầu, nhân viên dịch vụ logistics của MONA sẽ cung cấp hướng dẫn cho những người cần chú ý đặc biệt và các chứng chỉ bổ sung cho điều kiện vận chuyển đặc biệt. Một lịch vận chuyển có thể tùy chỉnh sẽ được đặt ở bất kỳ
          đâu trên trang web của bạn để tăng doanh thu.
        </p>

        <ul class="mt-5">
          <li class="text-[18px] font-bold text-black-700 flex mb-[10px] capitalize">
            <div class="w-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#FA4216" class="size-6 text-primary">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>

            Tập chung vào khách hàng
          </li>
          <li class="text-[18px] font-bold text-black-700 flex mb-[10px] capitalize">
            <div class="w-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#FA4216" class="size-6 text-primary">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>

            Dịch vụ xuất sắc
          </li>
        </ul>

        <div class="absolute right-0 bottom-0 w-[200px] animation-move-left-right lg:block hidden">
          <img class="w-full object-cover" src="~/assets/images/requ-left.png" alt="" />
        </div>
      </div>
    </section>
  </div>

  <!-- Dịch vụ -->
  <section id="service" class="bg-[#f7f6f4] py-section overflow-x-hidden">
    <div class="container mx-auto relative">
      <h5 class="text-center text-[18px] text-primary uppercase font-semibold mb-3">Dịch vụ</h5>

      <h1 class="text-title uppercase text-black-700 font-bold text-center mb-8"><span class="text-primary">Tận Tâm</span> phục vụ</h1>

      <div class="overflow-x-auto mb-8">
        <ul class="flex justify-between items-center tablist py-5 lg:gap-0 gap-5">
          <template v-for="tab in tabs" :key="tab.id">
            <li
              class="w-[218px] min-w-[218px] px-4 py-6 cursor-pointer text-center font-league-spartan uppercase rounded-[5px] font-semibold bg-white transition duration-500 ease-in-out hover:text-white tab-item"
              :class="activeTab === tab.id ? 'active text-white' : 'text-black-600'"
              @click="changeActiveTab(tab.id)"
            >
              <span class="relative text-inherit">{{ tab.name }}</span>
            </li>
          </template>
        </ul>
      </div>

      <template v-if="activeTab === 1">
        <div class="flex items-center animation-zoom-in lg:flex-row flex-col lg:gap-0 gap-5">
          <div class="lg:w-[45%] relative">
            <div class="hover-1 z-10">
              <img class="w-full object-cover rounded-[5px]" src="~/assets/images/Service-1-1.jpg" alt="" />
            </div>
            <div class="shape-1">
              <img class="w-full h-full object-cover" src="~/assets/images/shape-66-2.png" alt="" />
            </div>
            <div class="shape-2">
              <img class="w-full h-full object-cover" src="~/assets/images/shape-66-2.png" alt="" />
            </div>
          </div>

          <div class="lg:w-[55%] lg:pl-[90px]">
            <h1 class="uppercase text-title font-bold text-black-700">vận tải đường bộ</h1>

            <p class="mt-5 leading-[1.8]">Là phương thức vận chuyển linh hoạt và phổ biến nhất, phù hợp cho việc vận chuyển hàng hóa trên các quãng đường ngắn và trung bình.</p>

            <p class="mt-5 leading-[1.8]">Vận tải đường bộ cho phép giao hàng tận nơi và đáp ứng nhanh chóng nhu cầu vận chuyển nội địa hoặc xuyên biên giới.</p>
            <a href="#" class="button mt-6">Liên hệ</a>
          </div>
        </div>
      </template>
      <template v-else-if="activeTab === 2">
        <div class="flex items-center animation-zoom-in lg:flex-row flex-col lg:gap-0 gap-5">
          <div class="lg:w-[55%] lg:pr-[90px]">
            <h1 class="uppercase text-title font-bold text-black-700">vận tải đường biển</h1>

            <p class="mt-5 leading-[1.8]">
              Đây là phương thức vận chuyển lý tưởng cho hàng hóa có khối lượng lớn và trọng tải nặng trên quãng đường dài. Vận tải đường biển thường được sử dụng trong thương mại quốc tế, giúp tiết kiệm chi phí, nhưng thời gian vận chuyển
              lâu hơn so với các phương thức khác.
            </p>

            <ul class="mt-5">
              <li class="font-medium text-black-700 flex mb-[10px] capitalize">
                <div class="w-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#FA4216" class="size-6 text-primary">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>

                Tận tâm
              </li>
              <li class="font-medium text-black-700 flex mb-[10px] capitalize">
                <div class="w-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#FA4216" class="size-6 text-primary">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>

                Uy tín
              </li>
            </ul>

            <a href="#" class="button mt-6">Liên hệ</a>
          </div>
          <div class="lg:w-[45%] relative">
            <div class="hover-1 z-10">
              <img class="w-full object-cover rounded-[5px]" src="~/assets/images/Service-2-1.jpg" alt="" />
            </div>
            <div class="shape-1">
              <img class="w-full h-full object-cover" src="~/assets/images/shape-66-2.png" alt="" />
            </div>
            <div class="shape-2">
              <img class="w-full h-full object-cover" src="~/assets/images/shape-66-2.png" alt="" />
            </div>
          </div>
        </div>
      </template>
      <template v-else-if="activeTab === 3">
        <div class="flex items-center animation-zoom-in lg:flex-row flex-col lg:gap-0 gap-5">
          <div class="lg:w-[45%] relative">
            <div class="grid grid-cols-3 grid-rows-2 gap-5">
              <div class="col-span-2 row-span-2 hover-1">
                <img class="w-full object-cover rounded-[5px]" src="~/assets/images/Service-3.1-1.jpg" alt="" />
              </div>

              <div class="col-span-1 row-span-1 hover-1">
                <img class="w-full object-cover rounded-[5px]" src="~/assets/images/Service-3.2-1.jpg" alt="" />
              </div>
              <div class="col-span-1 row-span-1 hover-1">
                <img class="w-full object-cover rounded-[5px]" src="~/assets/images/Service-3.3-1.jpg" alt="" />
              </div>
            </div>

            <div class="shape-1">
              <img class="w-full h-full object-cover" src="~/assets/images/shape-66-2.png" alt="" />
            </div>
            <div class="shape-2">
              <img class="w-full h-full object-cover" src="~/assets/images/shape-66-2.png" alt="" />
            </div>
          </div>

          <div class="lg:w-[55%] lg:pl-[90px]">
            <h1 class="uppercase text-title font-bold text-black-700">vận tải hàng không</h1>

            <p class="mt-5 leading-[1.8]">
              Là lựa chọn tốt nhất cho các loại hàng hóa có giá trị cao, yêu cầu giao nhanh hoặc nhạy cảm về thời gian. Vận tải đường hàng không mang lại sự tiện lợi với tốc độ vận chuyển nhanh chóng nhưng có chi phí cao hơn so với vận tải
              đường bộ và đường biển.
            </p>
            <ul class="mt-5">
              <li class="font-medium text-black-700 flex mb-[10px] capitalize">
                <div class="w-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#FA4216" class="size-6 text-primary">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>

                Tận tâm
              </li>
              <li class="font-medium text-black-700 flex mb-[10px] capitalize">
                <div class="w-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#FA4216" class="size-6 text-primary">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>

                Uy tín
              </li>
            </ul>

            <a href="#" class="button mt-6">Liên hệ</a>
          </div>
        </div>
      </template>
      <template v-else-if="activeTab === 4">
        <div class="flex items-center animation-zoom-in lg:flex-row flex-col lg:gap-0 gap-5">
          <div class="lg:w-[55%] lg:pr-[90px]">
            <h1 class="uppercase text-title font-bold text-black-700">vận tải đường sắt</h1>

            <p class="mt-5 leading-[1.8]">
              Là một lựa chọn an toàn và tiết kiệm chi phí cho việc vận chuyển hàng hóa cồng kềnh trên quãng đường dài, đặc biệt là trong các khu vực có hệ thống đường sắt phát triển. Vận tải đường sắt thường được sử dụng trong vận chuyển
              nội địa hoặc xuyên quốc gia ở các khu vực kết nối tốt.
            </p>
            <ul class="mt-5">
              <li class="font-medium text-black-700 flex mb-[10px] capitalize">
                <div class="w-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#FA4216" class="size-6 text-primary">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>

                Tận tâm
              </li>
              <li class="font-medium text-black-700 flex mb-[10px] capitalize">
                <div class="w-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#FA4216" class="size-6 text-primary">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>

                Uy tín
              </li>
            </ul>

            <a href="#" class="button mt-6">Liên hệ</a>
          </div>
          <div class="lg:w-[45%] relative">
            <div class="grid grid-cols-3 gap-5">
              <div class="col-span-2 hover-1">
                <img class="w-full object-cover rounded-[5px]" src="~/assets/images/Service-4.1-1.jpg" alt="" />
              </div>

              <div class="col-span-1 row-span-1 hover-1">
                <img class="w-full object-cover rounded-[5px]" src="~/assets/images/Service-4.2-1.jpg" alt="" />
              </div>
            </div>

            <div class="shape-1">
              <img class="w-full h-full object-cover" src="~/assets/images/shape-66-2.png" alt="" />
            </div>
            <div class="shape-2">
              <img class="w-full h-full object-cover" src="~/assets/images/shape-66-2.png" alt="" />
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="flex items-center animation-zoom-in lg:flex-row flex-col lg:gap-0 gap-5">
          <div class="lg:w-[45%] relative">
            <div class="hover-1 z-10">
              <img class="w-full object-cover rounded-[5px]" src="~/assets/images/Service-5.1-1.jpg" alt="" />
            </div>
            <div class="shape-1">
              <img class="w-full h-full object-cover" src="~/assets/images/shape-66-2.png" alt="" />
            </div>
            <div class="shape-2">
              <img class="w-full h-full object-cover" src="~/assets/images/shape-66-2.png" alt="" />
            </div>
          </div>

          <div class="lg:w-[55%] lg:pl-[90px]">
            <h1 class="uppercase text-title font-bold text-black-700">Dịch vụ kho bãi</h1>

            <p class="mt-5 leading-[1.8]">
              Bao gồm các hoạt động quản lý, lưu trữ và xử lý hàng hóa trong kho bãi. Kỹ thuật dịch vụ kho bãi giúp tối ưu hóa không gian lưu trữ, đảm bảo an toàn hàng hóa, đồng thời hỗ trợ quy trình đóng gói và phân phối hiệu quả. Công
              nghệ quản lý kho thông minh cũng giúp theo dõi và kiểm soát hàng tồn kho chặt chẽ hơn.
            </p>

            <a href="#" class="button mt-6">Liên hệ</a>
          </div>
        </div>
      </template>

      <div class="absolute right-0 bottom-[-80px] w-[200px] animation-move-left-right lg:block hidden">
        <img class="w-full object-cover" src="~/assets/images/jahaj-3.png" alt="" />
      </div>
    </div>
  </section>

  <section id="out-client" class="py-section">
    <div class="container mx-auto">
      <h1 class="text-title uppercase text-black-700 font-bold text-center mb-8"><span class="text-primary">Đối tác</span> lâu năm</h1>

      <ul class="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
        <li class="bg-white py-14 rounded-[5px] shadow-[2px_0px_20px_2px_rgba(0,0,0,0.2)] text-center">
          <img class="mx-auto" src="~/assets/images/clients-logo-5-1.png" alt="" />
        </li>
        <li class="bg-white py-14 rounded-[5px] shadow-[2px_0px_20px_2px_rgba(0,0,0,0.2)] text-center">
          <img class="mx-auto" src="~/assets/images/clients-logo-4-1.png" alt="" />
        </li>
        <li class="bg-white py-14 rounded-[5px] shadow-[2px_0px_20px_2px_rgba(0,0,0,0.2)] text-center">
          <img class="mx-auto" src="~/assets/images/clients-logo-3-1.png" alt="" />
        </li>
        <li class="bg-white py-14 rounded-[5px] shadow-[2px_0px_20px_2px_rgba(0,0,0,0.2)] text-center">
          <img class="mx-auto" src="~/assets/images/clients-logo-2-1.png" alt="" />
        </li>
        <li class="bg-white py-14 rounded-[5px] shadow-[2px_0px_20px_2px_rgba(0,0,0,0.2)] text-center">
          <img class="mx-auto" src="~/assets/images/clients-logo-1-1.png" alt="" />
        </li>
        <li class="bg-white py-14 rounded-[5px] shadow-[2px_0px_20px_2px_rgba(0,0,0,0.2)] text-center">
          <img class="mx-auto" src="~/assets/images/clients-logo-5-1.png" alt="" />
        </li>
      </ul>
    </div>
  </section>

  <section id="evaluation" class="py-section bg-[#F7F6F4]">
    <div class="container mx-auto">
      <swiper
        :modules="[Pagination, Autoplay]"
        :pagination="{ clickable: true }"
        :slides-per-view="2"
        :space-between="30"
        :breakpoints="{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }"
      >
        <!-- :autoplay="{
      delay: 700
    }" -->
        <swiper-slide>
          <div
            class="relative px-10 py-9 bg-white rounded-[5px_5px_5px_0px] shadow-[0px_8px_24px_rgba(149,157,165,0.2)] after:[clip-path:polygon(0_0,0%_100%,100%_0)] after:absolute after:content-[''] after:w-7 after:h-6 after:bg-white after:bottom-[-24px] after:left-0"
          >
            <ul class="flex gap-[1px]">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="#ffc92e" class="w-[22px] h-[22px]">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="#ffc92e" class="w-[22px] h-[22px]">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="#ffc92e" class="w-[22px] h-[22px]">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="#ffc92e" class="w-[22px] h-[22px]">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="#ffc92e" class="w-[22px] h-[22px]">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </li>
            </ul>

            <p class="text-[18px] text-black-600 mt-4">Giải pháp logitics toàn diện của họ giúp tối ưu hóa quy trình vận chuyển hàng hóa của chúng tôi. Tôi cảm thấy yên tâm về việc hàng hóa của mình được quản lý một cách chuyên nghiệp.</p>
          </div>

          <div class="mt-8 pl-5 flex gap-5 items-center">
            <img class="w-[70px] h-[70px] rounded-full object-cover" src="http://picsum.photos/1024/600?random=1" alt="" />
            <div>
              <h3 class="text-[24px] text-black-600 font-medium">Lê Hảo</h3>

              <span>Khách hàng</span>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div
            class="relative px-10 py-9 bg-white rounded-[5px_5px_5px_0px] shadow-[0px_8px_24px_rgba(149,157,165,0.2)] after:[clip-path:polygon(0_0,0%_100%,100%_0)] after:absolute after:content-[''] after:w-7 after:h-6 after:bg-white after:bottom-[-24px] after:left-0"
          >
            <ul class="flex gap-[1px]">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="#ffc92e" class="w-[22px] h-[22px]">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="#ffc92e" class="w-[22px] h-[22px]">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="#ffc92e" class="w-[22px] h-[22px]">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="#ffc92e" class="w-[22px] h-[22px]">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="#ffc92e" class="w-[22px] h-[22px]">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </li>
            </ul>

            <p class="text-[18px] text-black-600 mt-4">Giải pháp logitics toàn diện của họ giúp tối ưu hóa quy trình vận chuyển hàng hóa của chúng tôi. Tôi cảm thấy yên tâm về việc hàng hóa của mình được quản lý một cách chuyên nghiệp.</p>
          </div>

          <div class="mt-8 pl-5 flex gap-5 items-center">
            <img class="w-[70px] h-[70px] rounded-full object-cover" src="http://picsum.photos/1024/600?random=2" alt="" />
            <div>
              <h3 class="text-[24px] text-black-600 font-medium">Xuân Trung</h3>

              <span>Khách hàng</span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="relative px-10 py-9 bg-white rounded-[5px_5px_5px_0px] shadow-[0px_8px_24px_rgba(149,157,165,0.2)] after:[clip-path:polygon(0_0,0%_100%,100%_0)] after:absolute after:content-[''] after:w-7 after:h-6 after:bg-white after:bottom-[-24px] after:left-0"
          >
            <ul class="flex gap-[1px]">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="#ffc92e" class="w-[22px] h-[22px]">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="#ffc92e" class="w-[22px] h-[22px]">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="#ffc92e" class="w-[22px] h-[22px]">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="#ffc92e" class="w-[22px] h-[22px]">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="#ffc92e" class="w-[22px] h-[22px]">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </li>
            </ul>

            <p class="text-[18px] text-black-600 mt-4">Giải pháp logitics toàn diện của họ giúp tối ưu hóa quy trình vận chuyển hàng hóa của chúng tôi. Tôi cảm thấy yên tâm về việc hàng hóa của mình được quản lý một cách chuyên nghiệp.</p>
          </div>

          <div class="mt-8 pl-5 flex gap-5 items-center">
            <img class="w-[70px] h-[70px] rounded-full object-cover" src="http://picsum.photos/1024/600?random=3" alt="" />
            <div>
              <h3 class="text-[24px] text-black-600 font-medium">An An</h3>

              <span>Khách hàng</span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="relative px-10 py-9 bg-white rounded-[5px_5px_5px_0px] shadow-[0px_8px_24px_rgba(149,157,165,0.2)] after:[clip-path:polygon(0_0,0%_100%,100%_0)] after:absolute after:content-[''] after:w-7 after:h-6 after:bg-white after:bottom-[-24px] after:left-0"
          >
            <ul class="flex gap-[1px]">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="#ffc92e" class="w-[22px] h-[22px]">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="#ffc92e" class="w-[22px] h-[22px]">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="#ffc92e" class="w-[22px] h-[22px]">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="#ffc92e" class="w-[22px] h-[22px]">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="#ffc92e" class="w-[22px] h-[22px]">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </li>
            </ul>

            <p class="text-[18px] text-black-600 mt-4">Giải pháp logitics toàn diện của họ giúp tối ưu hóa quy trình vận chuyển hàng hóa của chúng tôi. Tôi cảm thấy yên tâm về việc hàng hóa của mình được quản lý một cách chuyên nghiệp.</p>
          </div>

          <div class="mt-8 pl-5 flex gap-5 items-center">
            <img class="w-[70px] h-[70px] rounded-full object-cover" src="http://picsum.photos/1024/600?random=4" alt="" />
            <div>
              <h3 class="text-[24px] text-black-600 font-medium">Bạch Ngân</h3>

              <span>Khách hàng</span>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="relative px-10 py-9 bg-white rounded-[5px_5px_5px_0px] shadow-[0px_8px_24px_rgba(149,157,165,0.2)] after:[clip-path:polygon(0_0,0%_100%,100%_0)] after:absolute after:content-[''] after:w-7 after:h-6 after:bg-white after:bottom-[-24px] after:left-0"
          >
            <ul class="flex gap-[1px]">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="#ffc92e" class="w-[22px] h-[22px]">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="#ffc92e" class="w-[22px] h-[22px]">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="#ffc92e" class="w-[22px] h-[22px]">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="#ffc92e" class="w-[22px] h-[22px]">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="#ffc92e" class="w-[22px] h-[22px]">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </li>
            </ul>

            <p class="text-[18px] text-black-600 mt-4">Giải pháp logitics toàn diện của họ giúp tối ưu hóa quy trình vận chuyển hàng hóa của chúng tôi. Tôi cảm thấy yên tâm về việc hàng hóa của mình được quản lý một cách chuyên nghiệp.</p>
          </div>

          <div class="mt-8 pl-5 flex gap-5 items-center">
            <img class="w-[70px] h-[70px] rounded-full object-cover" src="http://picsum.photos/1024/600?random=5" alt="" />
            <div>
              <h3 class="text-[24px] text-black-600 font-medium">Văn Thắng</h3>

              <span>Khách hàng</span>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
  <section id="contact" class="py-section ">
    <div class="container mx-auto grid lg:grid-cols-2 grid-cols-1  lg:gap-10 gap-5 items-center">

      <div class="order-2 lg:order-1 flex-1">
        <h1 class="text-[30px] uppercase text-black-700 font-bold  mb-4">Bạn đang phân vân về <span class="text-primary">dịch vụ</span> của chúng tôi</h1>
        <p>Liên hệ trực tiếp để chúng tôi có thể hỗ trợ sớm nhất cho bạn</p>

        <div class="flex gap-[10px] mt-3 flex-wrap">
          <input class="px-5 py-4 flex-1 min-w-[250px] bg-white rounded-[5px] outline-none shadow-[0px_0px_30px_0px_rgba(0,0,0,0.07)] text-black-200" type="text" name="" placeholder="Nhập email..." id="">
          <div class="flex-1">
            <button class="button items-center h-full whitespace-nowrap">Gửi liên hệ</button>
          </div>
        </div>
      </div>

      <div class="lg:order-2 order-1 flex-1">
        <img class="w-full object-cover rounded-[5px]" src="~/assets/images/Service-details-1-1.jpg" alt="">
      </div>
    </div>
  </section>
</template>
