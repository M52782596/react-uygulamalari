import axios from "axios";
const getUserAndPostById=(id)=>{

    gettypeControl(id);
  
    
 Promise.all([getPostById(id),getUserById(id)]).then(data=>console.log(data)).catch(data=>console.log(data));


  
}
function gettypeControl(value){
     

        if(typeof(value)==="number"){
            console.log("step of variable type  is passed succesfully");
        }
        else{
           throw ("Not A Number");
        }

  
}
const  getPostById= (id)=>{
    return new Promise(async(resolve,reject)=>{
        
        try{
            const {data}=await axios("https://jsonplaceholder.typicode.com/posts/"+id);
            resolve(data);
        }
        catch{
           reject("post is not found")
        }
          
        
       
    })
    
  

}
const getUserById=(id)=>{
    return new Promise(async(resolve,reject)=>{
       
       try{
        const {data}=await axios("https://jsonplaceholder.typicode.com/users/"+id);  
         resolve(data);
       }catch{
        reject("user is not found")
       }
    })

   
}
// function isDataValid(data){
//     if(data){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
getUserAndPostById("mer");