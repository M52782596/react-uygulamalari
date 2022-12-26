import axios from "axios";

// ## this function brings user  and post datas by parameter which is called id 
const getUserAndPostById=(id)=>{

    gettypeControl(id);
  
    
 Promise.all([getPostById(id),getUserById(id)]).then(data=>console.log(data)).catch(data=>console.log(data));


  
}

// ## this function is controller for input type
function gettypeControl(value){
     

        if(typeof(value)==="number"){
            console.log("step of variable type  is passed succesfully");
        }
        else{
           throw ("Not A Number");
        }

  
}

//## This function brings the Post Datas by parameter which is called Id
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

//## This function brings the User Datas by parameter which is called Id
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
getUserAndPostById(1);