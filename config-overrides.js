const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function(config, env){

    config = injectBabelPlugin(['import', { libraryName: 'antd-mobile',style:'css' }],config);

    return config;

}