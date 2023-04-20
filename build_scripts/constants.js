const version = require('../package.json').version
const path = require('path')

const tempBuildLocation = `./build/${version}/temp`
const finalBuildLocation = `./build/${version}/browser`

module.exports = {
    // version folder
    versionFolder:`./build/${version}`,
    // src file locations
    src:{
        background:'./src/background/index.js',
        options:'./src/options/index.js',
        browser_action:'./src/browser_action/index.js',
        inapp:'./src/inapp/index.js',
        manifest:'./src/resources/manifest.json',
        images:'./assets/images',
        locales:'./src/resources/locales'
    },
    // Webpack built file locations
    webpack:{
        background:`${tempBuildLocation}/bg.js`,
        options:`${tempBuildLocation}/options.js`,
        browser_action:`${tempBuildLocation}/ba.js`,
        inapp:`${tempBuildLocation}/inapp.js`,
        tempBuildLocation,        
    },
    final:{
        background:`${finalBuildLocation}/background/bg.js`,
        options:`${finalBuildLocation}/options/options.js`,
        browser_action:`${finalBuildLocation}/browser_action/ba.js`,
        inapp:`${finalBuildLocation}/inapp/inapp.js`,
        manifest:`${finalBuildLocation}/manifest.json`,
        images:`${finalBuildLocation}/images`,
        finalBuildLocation,
    },
    localeCodes: [
        'en',
        'en_GB',
        'en_US',
    ]
}