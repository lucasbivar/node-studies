const path = require("path");

//return the dir separator
console.log(path.sep);

const filePath = path.join('/08-content', "subfolder", "text.txt");
// /08-content/subfolder/text.txt
console.log(filePath);

const base = path.basename(filePath);
// text.txt
console.log(base);

// we use to take the directories in our applications, because the env of our deployed app
//will be diferent of our env
const absolute = path.resolve(__dirname, "08-content", "subfolder", "text.txt");
// /home/lucas/Documents/all/web/node_course/1.tutorial/08-content/subfolder/text.txt
console.log(absolute);
