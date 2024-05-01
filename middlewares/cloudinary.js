const deleteFile = require('./deleteFile');

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dweahoclk',
  api_key: '577355243647593',
  api_secret: 'ETSwTf7eoVuRAk47Nr1s58W8cpY',
  secure: true,
});

const uploadFileCloudinary = async(filePath) => {

    try {

        const result = await cloudinary.uploader.upload(filePath, {
            folder: 'upload_wave42',
            use_filename: true
        })

        // console.log(result.original_filename);
        const filename = result.original_filename + '.' + result.format
        deleteFile(filename)

        return result.public_id

        
    } catch (error) {
        console.log(error);
    }
}

// untuk delete file cloudinary

const deleteFileCloudinary = async(fileName) => {
    const result = await cloudinary.uploader.destroy(fileName);
    console.log(result);
}


module.exports = {uploadFileCloudinary, deleteFileCloudinary}