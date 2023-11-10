const version = require('../package.json').version

const tempBuildLocation = `./build/${version}/temp`
const finalBuildLocation = `./build/${version}/browser`

module.exports = {
    // version folder
    versionFolder:`./build/${version}`,
    // src file locations
    src:{
        background:'./src/background/index.ts',
        options:'./src/options/index.ts',
        browser_action:'./src/browser_action/index.ts',
        ba_html: './src/browser_action/index.html',
        option_html: './src/options/index.html',
        inapp:'./src/inapp/index.ts',
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
        option_html: `${finalBuildLocation}/options/index.html`,
        browser_action:`${finalBuildLocation}/browser_action/ba.js`,
        ba_html:`${finalBuildLocation}/browser_action/index.html`,
        inapp:`${finalBuildLocation}/inapp/inapp.js`,
        manifest:`${finalBuildLocation}/manifest.json`,
        images:`${finalBuildLocation}/images`,
        _locales:`${finalBuildLocation}/_locales`,
        finalBuildLocation,
    },
    localeCodes: [
        'en',
        'fr',
        'de',
        'it',
        'ja-JP',
        'es',
        'ru',
    ]
}