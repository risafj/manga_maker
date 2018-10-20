var im = require('imagemagick');
var fs = require('fs');
mangaNamesArray = fs.readdirSync('source')

mangaNamesArray.forEach(function (err, index) {
    im.convert(
        [`source/${mangaNamesArray[index]}/*.jpg`, '-format', 'pdf', `books/${mangaNamesArray[index]}.pdf`],
        function (err, output) {
            console.log('PDF processed')}
    )
})