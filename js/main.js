require.config({
    bashUrl: '../js',
    paths: {
        axios: 'libs/axios',
        Et: 'libs/easy.templatejs',
        text: 'libs/text',
        privateaxios: "libs/private-axios"
    },
    map: {
        "*": {"axios": "privateaxios"},
        "privateaxios": {"axios": "axios"},
    }
});

require(["axios"],function(as){
    as.get("http://localhost:3000/api/home",{params:{
        sectionId:1,
    }}).then(function(resp){
        console.log(resp);
    });
});