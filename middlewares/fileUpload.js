const multer = require('multer')


const fileUpload = (imageFile) => {
  
  // untuk penyimpanan file
  const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'uploads')
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + file.originalname
        cb(null, uniqueSuffix)
      }
  })
  

  // untuk validasi type file
  const fileFilter = (req, file, cb) => {
    // console.log(file.mimetype);
    if(file.mimetype == 'image/jpeg' || file.mimetype == 'image/png'){
      cb(null, true)
    } else {
      req.validationType = {
        message: "Only .jpeg, .png format"
      }

      return cb(new Error('Only .jpeg format'), false)
    }
  }

  // maksimal size file
  const maxSizeMb = 3

  const upload = multer({ storage: storage, fileFilter: fileFilter, limits: {fileSize: maxSizeMb * 1000 * 1000} }).single(imageFile)

  return (req, res, next) => {

    upload(req, res, (err) => {

      // untuk kondisi dan response tipe file
      if(req.validationType){
        console.log('error',req.validationType);
        return res.status(400).json(req.validationType)        
      }

      if(!req.file && !err){
        return res.status(400).json({
          message: 'Image is required!'
        })
      }

      // kondisi untuk max size
      console.log(err);
      if(err){
        if(err.code === 'LIMIT_FILE_SIZE'){
          return res.status(400).json({
            message: 'Maksimal size 3MB'
          })
        }
      }

      next()
    })

  }
}


  module.exports = fileUpload