const fs = require('fs-extra')
const constants = require('./constants')

function generateLocaleBuildFolder(){
    const localeBuildFolder = constants.final._locales
    const localeSrcFolder = constants.src.locales
    const localeCodes = constants.localeCodes
    
    try {
        fs.mkdirSync(localeBuildFolder)
    } catch(e){
        console.log('Already made.')
        try {
            // remove all files in folders to rewrite
            fs.emptyDirSync(localeBuildFolder)
        } catch(e){
            console.error('Should never reach here: ', e)
        }
    }
    
    
    let convertedLocaleCodeObject = {}
    for(const code of localeCodes){
        convertedLocaleCodeObject[code] = {}
    }
    
    // first, gather the folders
    fs.readdirSync(localeSrcFolder, {
        encoding: 'utf8'
    }).forEach((file) => {
        try {
            const readFile = fs.readFileSync(localeSrcFolder + '/' + file, {encoding:'utf8'})
            const fileAsObj = JSON.parse(readFile)
    
            const editedFile = file.replace('.json', '')
            for (const key in convertedLocaleCodeObject){
                convertedLocaleCodeObject[key][editedFile] = fileAsObj[key]
            }
        } catch(e){
            console.error(e)
        }
    }) 
    
    // second, write the folders and files to the build\{version}\browser\locales
    for (const key in convertedLocaleCodeObject){
        const value = convertedLocaleCodeObject[key]
        const localeFolder = localeBuildFolder + '/' + key
    
        try {
            fs.mkdirSync(localeFolder)
            fs.writeFileSync(localeFolder + '/messages.json', JSON.stringify(value))
        } catch(e){
            console.error('shouldnt err here: ', e)
        }
    }
}

module.exports = {
    generateLocaleBuildFolder
}