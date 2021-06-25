import DefaultTheme from 'vitepress/dist/client/theme-default'
import FT from "../components/firstText.vue";

export default {
    ...DefaultTheme, // 扩展默认主题
    enhanceApp({
        app,
        router,
        siteData
    }) {
        // 注册组件
        // app.component("Comment", Comment);
        // app.component("Tags", Tags);
        // app.component("Docs", Docs);
        app.component("firstText", FT); // 注册自己的组件

        // app is the Vue 3 app instance from createApp()
        // router is VitePress' custom router (see `lib/app/router.js`)
        // siteData is a ref of current site-level metadata.
    },
};