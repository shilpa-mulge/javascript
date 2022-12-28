const posts=[
    {title:'post one', body: 'This is post one',createdAt:new Date().getTime()},
    {title:'post two', body: 'This is post two',createdAt:new Date().getTime()}
];
let intervalid=0;
function getPosts(){
    clearInterval(intervalid);

  intervalid=  setInterval(()=>{
    setTimeout(()=>{
   let output='';
   posts.forEach((post,index)=>{
output+=`<li>${post.title} created ${(new Date().getTime()-post.createdAt)/1000} ago</li>`
   });
   document.body.innerHTML=output;
    },1000);},1000)
}

function createPosts(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdAt:new Date().getTime()});
        callback();
    },2000);
}
function create4thPost(post,callback){
    setTimeout(()=>{
        callback(post,getPosts);
    },1000);
    
}

createPosts({title:'post three',body:'this is post three'},getPosts);
create4thPost({title:'post four',body:'this is forth post'},createPosts);