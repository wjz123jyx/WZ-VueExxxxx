import { v4 as uuidv4 } from 'uuid';


export function getUserTempId(){
    let userTempId = localStorage.getItem('USERTEMPID_KEY')
    if(!userTempId){
        userTempId = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
        localStorage.setItem('USERTEMPID_KEY',userTempId)
    }

    return userTempId
}