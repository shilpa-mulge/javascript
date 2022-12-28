class queue{
    constructor(){
        this.queue=[];
        this.min=0;
        this.max=0;
    }
     push=(val)=>{
this.queue.push(val)
this.max=this.max+1;
    }
    pop(){
        if(this.min<this.max){
      const valpop= this.queue[this.min] 
      this.queue[this.min]=undefined;
      this.min=this.min+1;
      return valpop;
        }else{
           // console.log("queue is empty");
           return -1;
        }
    }
    display(){
        console.log(this.queue);
        console.log(this.min);
        console.log(this.max);
    }
}

const q=new queue();
q.push(2)
q.push(100)
console.log(q.pop())
console.log(q.pop())
console.log(q.pop())


