const path = require('path')
const multer = require ('multer')


const storageImagesProduct = multer.diskStorage({
    destination: (req,file, cb) => 
    cb(null, './public/images/products'),
    
    filename: (req,file,cb) =>
    cb(null, 'product-' + Date.now() + path.extname(file.originalname))
})

const uploadImageProducts = multer({
    storage: storageImagesProduct
})

module.exports= {
    uploadImageProducts
}