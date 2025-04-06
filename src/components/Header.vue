<script setup lang="ts">
// TODO: 编写Header组件，包含 About + Work  'TAB Pages'
import {reactive} from "vue";

let mainInfo = reactive({
    username: "AIONIA",
})


</script>

<template>
    <div class="container">
        <!--  mainInfo  -->
        <div class="mainInfo-container">
            <div class="image-container">
                <img src="@/assets/avatar.png" class="image-avatar" alt="avatar">
            </div>
            <div class="username">{{ mainInfo.username }}</div>
        </div>

        <!--  menu  -->
        <div class="menu-container">
            <router-link class="menu-item" to="/home" active-class="active">首页</router-link>
            <router-link class="menu-item" to="/achievements" active-class="active">成果</router-link>
            <router-link class="menu-item" to="/about" active-class="active">关于</router-link>
        </div>

        <!--  anotherInfo  -->
        <div class="anotherInfo">
            其他信息
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative; /* 定位参考基准 */
    height: 70px;
    background-color: #2C314E;
    overflow: hidden;
    padding: 10px;
    transition: all 0.5s;
    color: white;
}

/* -- mainInfo style -- */
.mainInfo-container {
    display: flex;
    align-items: center;

    /* -- avatar style -- */
    .image-container {
        width: 60px;
        height: 60px;
        overflow: hidden;
        border-radius: 50%;
        border: 2px solid white;

        box-shadow: 0 0 4px 0 white;
    }

    .image-avatar {
        width: 100%;
        height: 100%;
        /* 保持比例 + 填充容器 */
        object-fit: cover;
        /* 对齐图片顶部 */
        object-position: top;
    }

    .username {
        margin-left: 20px;
        font-family: "HarmonyOS Sans", sans-serif;
        font-size: 30px;
        font-weight: bolder;
    }
}

/* -- menu-container style -- */
.menu-container {
    position: absolute;
    /* 定位到视口水平中点 */
    left: 50%;
    /* 向左回退自身宽度的一半 */
    transform: translateX(-50%);
    .menu-item {
        margin-inline: 10px;
        font-family: "HarmonyOS Sans", sans-serif;
        color: white;
        text-decoration: none;
        font-size: 25px;
        font-weight: bolder;
        cursor: pointer;
        /* 确保不影响点击事件 */
        pointer-events: auto;
        /* 禁止用户选中 */
        user-select: none;
        /* 下划线样式 */
        background: linear-gradient(to right, #ff0000, #ff0000) no-repeat right bottom;
        background-size: 0 6px;
        transition: background-size .2s;
    }
    .menu-item:hover {
        background-position: left bottom;
        background-size: 100% 6px;
    }
    .menu-item.active {
        /* 下划线样式 */
        background: linear-gradient(to right, #ff0000, #ff0000) no-repeat right bottom;
        background-size: auto 6px;
    }
}

/* -- anotherInfo style -- */
.anotherInfo {
    font-weight: bolder;
    font-size: 20px;
}
</style>