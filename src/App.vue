<template>
    <div class="bg-gray-100 min-h-screen sans-serif flex flex-col flex-1">
        <TopNav></TopNav>
        <main class="px-8 flex flex-grow flex-col flex-1">
            <router-view></router-view>
        </main>
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopNav from "./components/navigation/TopNav.vue";
import Header from "./components/navigation/Header.vue";
import Footer from "./components/navigation/Footer.vue";

export default defineComponent({
  name: 'App',
  components: {
      TopNav,
      Header,
      Footer,
  }
})
</script>

<style>
</style>
