
const Minio = require('minio')

const minioClient = new Minio.Client({
    endPoint: 'play.min.io',
    port: 9000,
    useSSL: true,
    accessKey: 'Q3AM3UQ867SPQQA43P2F',
    secretKey: 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG',
})

const uploadMinio =async(filename, filePath) => {
    const bucketName = 'product-file'
    await minioClient.fPutObject(bucketName, filename, filePath)
    // untuk dapat url file
    const resultMinio = await minioClient.presignedGetObject(bucketName, filename)
    // console.log('result', resultMinio);
    return resultMinio
}

module.exports = uploadMinio