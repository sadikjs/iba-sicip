import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({ 
    cloud_name: 'ditjy209s', 
    api_key: '487842548958695', 
    api_secret: 'LkIw2yphOKuI817N7L4O457I8S8' // Click 'View API Keys' above to copy your API secret
});

export const cloudinaryProfileUpload = async(file, folder) =>{
    const buffer = await file.arrayBuffer(); 
    const bytes = Buffer.from(buffer); 

    return new Promise(async(resolve, reject)=>{
      await cloudinary.uploader.upload_stream({
            resource_type: "auto", 
            folder: folder
        }, async(err, result)=>{
            if(err){
               return reject(err.message)
            }
          return  resolve(result)
        }).end(bytes)
    })
}


