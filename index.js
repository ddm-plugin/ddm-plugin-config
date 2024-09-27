const config ={

    // 是否开启插件商店，默认开启；关闭后只允许下载推荐插件列表中的插件，一般不会关闭，防止有人搞恶意插件
    pluginStoreSwitch: true,

    // 推荐插件列表
    recommendList: [
        "ddm-plugin-dubbo-support", 
        "ddm-plugin-demo"
    ],

    // 黑名单插件，配置后会导致无法搜索到，防止恶意插件
    blacklist: [

    ],

    // 某些情况下，弹出让用户安装某些插件，例如语言包、数据源支持
    discoveryPlugin: {

        // 数据源缺失建议
        dataSource: {

            zookeeper: {
                title: "当前数据源【zookeeper】需要安装插件",
                "plugins":  ["ddm-plugin-dubbo-support"]
            },
            nacos: {
                title: "当前数据源【nacos】需要安装插件",
                "plugins":  ["ddm-plugin-dubbo-support"]
            },
            "dubbo-admin": {
                title: "当前数据源【dubbo-admin】需要安装插件",
                "plugins":  ["ddm-plugin-dubbo-support"]
            },
        },

        // 语言包推荐
        i18n: {
            "zh-TW": ["ddm-plugin-i18n-zh-TW"],
        }
    }
    
}


  
// 将 config 对象转换为 JSON
const configJson = JSON.stringify(config, null, 2);

// 将 JSON 写入文件
const fs = require('fs');
fs.writeFileSync('config.json', configJson);

console.log('config.json 已生成。')