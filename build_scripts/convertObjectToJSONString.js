module.exports = (obj) => {
    const keys = Object.keys(obj)
    let finalStr = '{'
    const indent = '    '

    for(const [index, key] of keys.entries()){
        const value = obj[key]

        finalStr += `\n${indent}"${key}":"${value}"`
        if(index !== keys.length - 1){
            finalStr += ','
        }
    }

    finalStr += '\n}'

    return finalStr
}