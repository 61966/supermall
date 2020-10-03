module.exports = {
configureWebpack : {//不是等号，是冒号
    resolve: {
        alias: {
            'assets': '@/assets',
            'common': '@/components/common',
            'content': '@/components/content',
            'components': '@/components',
            'network': '@/network',
            'views': '@/views'
        }
    }
}
}