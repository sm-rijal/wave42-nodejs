const fs = require('fs');
const path = require('path');


const deleteFile = (filePath) => {

    // console.log(filePath);
    // console.log(path.join(__dirname, '../uploads', filePath));
    filePath = path.join(__dirname, '../uploads', filePath)

    fs.unlink(filePath, (err) => {
        if(err) {
            console.log('error delete file:', err);
        } else {
            console.log('delete file berhasil');
        }
    })
}


module.exports = deleteFile