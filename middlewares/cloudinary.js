const deleteFile = require('./deleteFile');

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.cloudinaryName,
  api_key: process.env.cloudinaryKey,
  api_secret: process.env.cloudinarySecret,
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