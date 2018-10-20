const im = require('imagemagick');
const fs = require('fs');

// fs.readFile('01_002.jpg', function (err, data) {
//     if (err) throw err;
//     console.log(data);
// });

im.convert(['jpg_files/*.jpg', '-format', 'pdf', 'test.pdf'], function(err, output){
    console.log(output)
})
