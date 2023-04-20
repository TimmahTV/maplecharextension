const fs = require('fs-extra')
const constants = require('./constants')

const localeName = process.argv[2]
if(!localeName) throw new Error('No file name given. try: npm run generateLocaleFile -- FILENAME')
const locationOfFile = `./src/resources/locales/${localeName}.json`

fs.writeFileSync(locationOfFile, generateLocaleString(constants.localeCodes))

function generateLocaleString(strCodes){
    const indent = '    '
    let finalStr = '{'

    for(const [index, code] of strCodes.entries()){
        finalStr += `\n${indent}"${code}":{`
        finalStr += `\n${indent}${indent}"message":"",`
        finalStr += `\n${indent}${indent}"description":""`
        finalStr += `\n${indent}}`
        if(index !== strCodes.length - 1){
            finalStr += ','
        }
    }

    finalStr += '\n}'

    return finalStr
}