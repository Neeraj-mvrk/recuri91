import fs from "fs";
import env from "../../environment";
import AWS from 'aws-sdk';

const bucket_info:any=env.getS3Cred();
const s3 = new AWS.S3({
    accessKeyId: bucket_info.ID,
    secretAccessKey: bucket_info.SECRET
});

export const uploadFile = async () => {
    console.log('s3 upload started');
    // Read content from the file
    const fileContent = fs.readFileSync(__dirname +"./../../files/userList.json");

    // Setting up S3 upload parameters
    const params = {
        Bucket: bucket_info['BUCKET'],
        Key: 'userlist.json', // File name you want to save as in S3
        Body: fileContent
    };

    // Uploading files to the bucket
    await s3.upload(params, function(err:any, data:any) {
        if (err) {
            console.log(err);
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};