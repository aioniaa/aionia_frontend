<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";


</script>

<template>
    <div class="app-container">
        <Header />
        <RouterView />
    </div>
</template>

<style>
/* 全局基础样式 */
html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden; /* 禁止整个页面滚动 */
    font-family: "HarmonyOS Sans", sans-serif;
}

.app-container {
    height: 100vh; /* 或 height: 100% */
    display: flex;
    flex-direction: column;
}


</style>
