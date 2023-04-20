const fs = require('fs-extra')
const constants = require('./constants')

const localeBuildFolder = constants.final.finalBuildLocation + '/_locales'
const localeSrcFolder = constants.src.locales
const localeCodes = constants.localeCodes

try {
    fs.mkdirSync(localeBuildFolder)
} catch(e){
    console.log('Already made.')
}


let convertedLocaleCodeObject = {}
for(const code of localeCodes){
    convertedLocaleCodeObject[code] = ""
}

const revertTheObject = JSON.parse(JSON.stringify(convertedLocaleCodeObject))

console.log('start')
fs.readdirSync(localeSrcFolder, {
    encoding: 'utf8'
}).forEach((file) => {
    console.log('file: ', file)
    try {
        const readFile = fs.readFileSync(localeSrcFolder + '/' + file, {encoding:'utf8'})
        const fileAsObj = JSON.parse(readFile)
        console.log('fileAsObj: ', fileAsObj)
    } catch(e){
        console.error(e)
    }
}) 