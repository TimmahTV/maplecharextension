const fs = require('fs-extra')
const constants = require('./constants')
const {generateLocaleBuildFolder} = require('./generateLocaleBuildFolder')

// copy over background to final build location from temp
makeDirFromFileAndCopyFile(constants.webpack.background, constants.final.background)

// copy over browser_action to final build location from temp
makeDirFromFileAndCopyFile(constants.webpack.browser_action, constants.final.browser_action)

// copy over inapp to final build location from temp
makeDirFromFileAndCopyFile(constants.webpack.inapp, constants.final.inapp)

// copy over options to final build location from temp
makeDirFromFileAndCopyFile(constants.webpack.options, constants.final.options)

// copy over images to final build location from assets
makeDirFromFileAndCopyFile(constants.src.manifest, constants.final.manifest)

// copy over manifest.json to final build location from root
makeDirFromFolderAndCopyFolder(constants.src.images, constants.final.images)

// build locale folder
generateLocaleBuildFolder()

function removeLastBackslash(location){
    const locationArr = location.split('/')
    locationArr.length = locationArr.length - 1
    return locationArr.join('/')
}

function makeDirFromFile(fileLocation){
    const convertToFolder = removeLastBackslash(fileLocation)
    recurseMakeFolderTree(convertToFolder)
}

function makeDirFromFileAndCopyFile(temp, final){
    // make folder tree
    const convertToFolder = removeLastBackslash(final)
    recurseMakeFolderTree(convertToFolder)

    // copy file
    fs.copyFileSync(temp, final)
}

function makeDirFromFolderAndCopyFolder(temp, final){
    // make folder tree
    makeDirFromFile(final)

    // copy file
    fs.copySync(temp, final)
}

function recurseMakeFolderTree(folderTree){
    try {
        if (!fs.existsSync(folderTree)) {
            fs.mkdirSync(folderTree)
        }
    } catch (err) {
        try{
            const oneLevelUp = removeLastBackslash(folderTree)
            recurseMakeFolderTree(oneLevelUp)
            recurseMakeFolderTree(folderTree)
        } catch(e){
            console.error(e);
        }
        
    }
}