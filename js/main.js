require.config({
    bashUrl: './js',
    paths: {
        axios: 'libs/axios',
        Et: 'libs/easy.templatejs',
        text: 'libs/text',
        privateaxios: "libs/private-axios",
        bottomNav: "modules/bottomNav/bottomNav",
        banner: "modules/banner/banner",
        nav: "modules/nav/nav",
        jingxuanMain: "modules/jingxuanMain/jingxuanMain",
        search: "modules/search/search"
    },
    map: {
        "*": {"axios": "privateaxios"},
        "privateaxios": {"axios": "axios"},
    }
});

require([
    "banner",
    "bottomNav",
    "nav",
    "jingxuanMain",
    "search"
],function(banner,bottomNav,nav,jingxuanMain,search){
    
});