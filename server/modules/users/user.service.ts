import fs from "fs";
import { User } from './user.model';
import { uploadFile } from '../common/uploadToS3'


export default class UserService {
    
    public createUser(user_params: User, callback: any) {
        const user = new User(user_params);
        user.save(callback);
    }

    public filterUser(query: any, callback: any) {
        User.findOne(query, callback);
    }

    public createUserList(user_params: User) {
        let userList:any=[];
        let obj:object = { userName: user_params.username,isActive:user_params.isActive };
        userList.push(obj);
        fs.open(__dirname +'./../../files/userList.json','r',(err,file:any)=>{
        if(err){
            fs.writeFile(__dirname +'./../../files/userList.json',JSON.stringify(userList),(err)=>{
                if(err){
                console.log(err);
                }else{
                console.log('filesaved')
                uploadFile();
                }
            })
        }else{
            let data:any = fs.readFileSync(__dirname +"./../../files/userList.json");
            let json:any = JSON.parse(data);
            json.push(...userList);  
            fs.writeFile(__dirname +"./../../files/userList.json", JSON.stringify(json),(err)=>{
                if(err){
                console.log(err);
                }else{
                console.log('file updated');
                uploadFile();
                }
            });
        }
        });
    }
    
}