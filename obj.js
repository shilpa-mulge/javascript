const person={
    Fname:'Shilpa',
    Lname:'mulge',
    age:'28',
    hobies:['reading','playing','coding','movies'],
    adrress:{
          street:'chittawadi',
          district:'bidar',
          state:'karnataka',
          country:'india'
    }
}
console.log(person.hobies[3])
const {age,adrress:{state}}=person
console.log(age+" "+state)


const todolist=[
    {
        id:1,
        text:'going to bidar',
        status:'completed'
    },
    {
        id:2,
        text:'going to bengloor',
        status:'Notcompleted'
    },
    {
        id:3,
        text:'going to temple',
        status:'completed'
    }
]
console.log(todolist)
for(let i=0;i<todolist.length;i++){
    console.log(todolist[i])
}

let i=0
while(i<todolist.length){
    console.log(todolist[i])
    i++
}

for(let todo of todolist){
    console.log(todo.id)
}