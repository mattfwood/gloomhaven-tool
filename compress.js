const fs = require('fs');
const tinify = require('tinify');

// Below, instead of ... insert your tinify.key. You will see it on the Account page of the tinypng service.
// To get to this page, click on the name of your account in the upper right corner of the screen
tinify.key = '...';

function getFiles(dir, files_) {
  files_ = files_ || [];
  const files = fs.readdirSync(dir); // read the entire contents of the file system, starting with the folder in which we will be at the time the script is executed
  for (const i in files) {
    const name = `${dir}/${files[i]}`;
    if (fs.statSync(name).isDirectory()) {
      // if the loop element to be looped is a folder, then recursively call the same function
      getFiles(name, files_);
    } else {
      // if the loop element being traversed is a file and if the file extension by pattern is lower
      if (
        ~name.indexOf('.png') ||
        ~name.indexOf('.jpg') ||
        ~name.indexOf('.jpeg') ||
        ~name.indexOf('.JPG')
      ) {
        files_.push(name); // in the files_ array, we insert the name of this file
      }
    }
  }
  return files_;
}

const imgArr = getFiles('./public'); // we call the function, in the form of a parameter, we pass the folder in which we will be at the time the script is executed

const imgArrLimit = []; // create an empty array to retrieve the file limit
// The fact is that on a free account tinify you can optimize not more than 500 images within a month
// so if you need to optimize more than 500 images, then you need to register several accounts for different mailboxes

for (const j in imgArr) {
  // sorting out all the images of our site
  if (j >= 0 && j < 500) {
    // set a limit of 500 at a time and make a selection of images from 0 to 499
    imgArrLimit.push(imgArr[j]); // insert them into the array imgArrLimit
  }
}

for (const i in imgArrLimit) {
  // We sort through all the files from the imgArrLimit array and optimize them
  source = tinify.fromFile(imgArrLimit[i]);
  source.toFile(imgArrLimit[i]);
}

// To find out the number of images on your site, uncomment the line below:
// console.log(imgArr.length);
