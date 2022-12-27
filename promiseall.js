const posts=[
    {title:'post one', body: 'This is post one',createdAt:new Date().getTime()},
    {title:'post two', body: 'This is post two',createdAt:new Date().getTime()}
];
function getPosts(){
    setTimeout(()=>{
   let output='';
   posts.forEach((post,index)=>{
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
        UpdateLastActivity();
        const error=false;
        if(!error){
            resolve();
        }else{
            reject('Error:Something went wrong')
        }
    },1000);
});
  
}
const user={name:'shilpa',LastActivitytime:'21 of jan'}

function UpdateLastActivity(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.LastActivitytime=new Date().getTime();
            resolve("last activity time is"+user.LastActivitytime);
        },1000)
    })
}
function UserUpdatesPost(){
  Promise.all([createPosts,UpdateLastActivity]).
    then(([createPostsresolves,UpdateLastActivityresolve])=>
    {
        console.log(UpdateLastActivityresolve())
    })
    .catch(err=>console.log(err))
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
createPosts({title:'post three',body:'this is 3 post'}).then(UserUpdatesPost)
deletePost()