<script setup lang="ts">
// TODO: Add website like youtube / github / twitter / bilibili


let webUrls = ({
    Youtube: "https://www.youtube.com/@aionia_music",
    Github: "https://github.com/aioniaa",
    Twitter: "https://x.com/aionia_zaizai",
    Bilibili: "https://space.bilibili.com/310644603",
})

</script>

<template>
    <div class="container">
        <h1>PLEASE SUBSCRIBE ME!!!</h1>
        <!-- 按钮链接 _blank让其在新的标签页打开 -->
        <div class="urls-container">
            <a :href="webUrls.Youtube" target="_blank">
                <i class="iconfont icon-Youtube-fill"></i>
                Youtube
            </a>
            <a :href="webUrls.Github" target="_blank">
                <i class="iconfont icon-github-fill"></i>
                Github
            </a>
            <a :href="webUrls.Twitter" target="_blank">
                <i class="iconfont icon-twitter"></i>
                Twitter
            </a>
            <a :href="webUrls.Bilibili" target="_blank">
                <i class="iconfont icon-bilibili_fill"></i>
                Bilibili
            </a>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
    background: url("@/assets/about_bg.png") no-repeat center/cover;
    transition: all 0.5s;

    a {
        display: inline-block;
        width: 230px;
        height: 60px;
        line-height: 60px;
        text-decoration: none;
        color: white;
        font-weight: bolder;
        font-size: 30px;
        background-color: #2C314E;
        border-radius: 30px;
        /* border: 3px solid black; */
        margin-inline: 10px;
        user-select: none;
        transition: all 0.3s;
        .iconfont {
            font-size: 30px;
            user-select: none;
        }
    }

    a:hover {
        color: #2C314E;
        background-color: #D7DAEA;
    }

}

/* 利用伪元素只让背景模糊 */
/*.container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("@/assets/about_bg.png") no-repeat center/cover;
    filter: blur(5px);
    overflow: hidden;
    z-index: -1; !* 确保背景在内容下方 *!
}*/
</style>