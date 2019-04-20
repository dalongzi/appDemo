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
    },
    map: {
        "*": {"axios": "privateaxios"},
        "privateaxios": {"axios": "axios"},
    }
});

require(["bottomNav","banner","nav","jingxuanMain"],function(bottomNav,banner,nav,jingxuanMain,qitaMain){
    
});