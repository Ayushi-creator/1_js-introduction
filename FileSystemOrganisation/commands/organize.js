const fs=require('fs')
const path=require('path')

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
      "docx",
      "doc",
      "pdf",
      "xlsx",
      "xls",
      "odt",
      "ods",
      "odp",
      "odg",
      "odf",
      "txt",
      "ps",
      "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb"],
  };
  
function organizeFn(dirpath) {
    //input of a directory path
    let destPath
    if (dirpath == undefined) {
      console.log('Please Enter a valid Directory Path');
      //check whether the  dirpath is passed or not
      return;
    } else {
      let doesExist = fs.existsSync(dirpath);
      //console.log(doesExist);
      //this will tell wheter the dirpath exists or not
      if (doesExist == true) {
        destPath = path.join(dirpath, 'organized_files')
  
        //C:\Users\Ayushi Sharma\javascript\1_js introduction\FileSystemOrganisation\testFolder\organized_files-i want to create folder in this path
        if (fs.existsSync(destPath) == false) {
          fs.mkdirSync(destPath)//we will only create folder if it does not already exists
        }
        else {
          console.log('This folder alredy exists')
        }
      }
      else {
        console.log('Please enter a valid path')
      }
    }
    organizeHelper(dirpath, destPath)
  }
  //we are writing this function to categorise our files
  function organizeHelper(src, dest) {
    let childNames = fs.readdirSync(src)//get all the files and folders inside yoour source
    //console.log(childNames)
    for (let i = 0; i < childNames.length; i++) {
      let childAdress = path.join(src, childNames[i])//path is identified for the files
      let isFile = fs.lstatSync(childAdress).isFile()//we check here to identify only the files
      //        console.log(childAdress +"  " +isFile)
  
      if (isFile == true) {
        let fileCategory = getCategory(childNames[i])
        console.log(childNames[i] + " belongs to " + fileCategory)
        //we took out all the category type of  different files
  
        sendFiles(childAdress, dest, fileCategory)
      }
    }
  
  }
  
  function getCategory(name) {
    let ext = path.extname(name)
    ext = ext.slice(1)// we will take out the extension name of files
    //console.log(ext)
  
    for (let type in types) {
      let cTypeArr = types[type]
      //console.log(cTypeArr)
  
      for (let i = 0; i < cTypeArr.length; i++) {
        if (ext == cTypeArr[i])
          //we matched the extension 
  
          return type
      }
    }
    return 'others'
  }
  function sendFiles(srcFilePath, dest, fileCategory) {
    let catPath = path.join(dest, fileCategory)
  
    if (fs.existsSync(catPath) == false) {
      // checking for category folder path
      fs.mkdirSync(catPath);
    }
  
  
    let fileName = path.basename(srcFilePath)/// we took out the names of the files
    let destFilePath = path.join(catPath, fileName)// here we created a path for the files in category folders
  
    fs.copyFileSync(srcFilePath, destFilePath)// copied files from src to dest
    fs.unlinkSync(srcFilePath)
    console.log(fileName + "is copied to " + fileCategory)
  }
  module.exports={
    organizeKey: organizeFn
}