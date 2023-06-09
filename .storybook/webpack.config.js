const path = require('path');

module.exports = ({ config }) => {
  console.log('Webpack configuration loaded');

  config.module.rules.push({
    test: /\.(png|jpe?g|gif|webp)$/i,
    type: 'asset/resource',
  });

  config.resolve.alias['assets'] = path.resolve(__dirname, '../src/assets');
  config.resolve.alias['@tc'] = path.resolve(__dirname, '../src/components');

  return config;
};
