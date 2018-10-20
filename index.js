var im = require('imagemagick');
var fs = require('fs');
mangaNamesArray = fs.readdirSync('source')

mangaNamesArray.forEach(function (err, index) {
    mangaName = mangaNamesArray[index] 
    im.convert(
        [`source/${mangaName}/*.jpg`, '-format', 'pdf', `books/${mangaName}.pdf`],
        function (err, output) {
            console.log('Manga processed')}
    )
})