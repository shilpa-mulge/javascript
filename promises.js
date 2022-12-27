const posts=[
    {title:'post one', body: 'This is post one',createdAt:new Date().getTime()},
    {title:'post two', body: 'This is post two',createdAt:new Date().getTime()}
];

const user={name:'shilpa',UserLastActivityime:new Date().getTime()}
function getPosts(){
    setTimeout(()=>{
   let output='';
   posts.forEach((user ,post,index)=>{
output+=`<li>${post.title} created ${(new Date().getTime()-post.createdAt)/1000}</li>
           `
   });
   document.body.innerHTML=output;
    },1000);
}

function createPosts(post){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        posts.push({...post,createdAt:new Date().getTime()});
        const error=false;
        if(!error){
            resolve();
        }else{
            reject('Error:Something went wrong')
        }
    },2000);
});
  
}
function deletePost(){
    return new Promise((resolve,reject)=>{
setTimeout(() => {
    posts.pop();
    if(posts.length>0){
        resolve();
    }else{
        reject("Error:Array is empty")
    }
}, 1000);
    })
}
//getPosts()
 createPosts({title:'post three',body:'this is post three'}).then(getPosts)
 createPosts({title:'post four',body:'this is forth post'})
 .then(()=>{
    getPosts()
    setTimeout(()=>{
        deletePost().then(getPosts)
    },1000)
 })
 deletePost().then(getPosts).catch((err)=>console.log(err))
  


 
