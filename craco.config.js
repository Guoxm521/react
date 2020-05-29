const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: { 
            '@primary-color': '#1DA57A',
            '@link-color': '#1890ff',
            '@success-color': '#52c41a',
            '@warning-color': '#faad14', 
            '@error-color': '#f5222d' },
          javascriptEnabled: true,
        },
      },
    },
  ],
};