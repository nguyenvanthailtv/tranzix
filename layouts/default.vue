<script setup lang="ts">
import Header from "~/components/common/Header.vue";
import Footer from "~/components/common/Footer.vue";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const showBtn = ref(false)

const handleScroll = () => {
  showBtn.value = window.scrollY > 600;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<template>
  <Header />
  <div class="mb--[98px]"></div>

  <slot />

  <Footer />

  <div @click="scrollToTop()" v-if="showBtn" class=" capitalize cursor-pointer fixed z-10 bottom-16 right-1 rotate-90 flex gap-2 text-primary">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6 stroke-primary">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
    </svg>

    go to top
  </div>
</template>
