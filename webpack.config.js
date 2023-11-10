const version = require('./package.json').version
const fileLocations = require('./build_scripts/constants')

module.exports = {
    mode:'development',
    devtool: 'source-map',
    entry: {
      bg: fileLocations.src.background,
      ba: fileLocations.src.browser_action,
      inapp: fileLocations.src.inapp,
      options: fileLocations.src.options,
    },
    output: {
      filename: `${version}/temp/[name].js`,
      path: __dirname + '/build',
    },
  };