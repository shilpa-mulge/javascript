class user{
    static count=0
    constructor(Uname,email,password){
        this.Uname=Uname
        this.email=email
        this.password=password
        user.count++
    }
   userCount(){
    
    console.log("Number of user registerd "+user.count)
   }
    registerd(){
        console.log(this.Uname+" is now register")
    
    }
}

class member extends user{
    constructor(Uname,email,password,memberPac ){
    super(Uname,email,password)
    this.package=memberPac
    let TodaysD=new Date()
   const membershipactivetillyear=TodaysD.getFullYear()
   const membershipactivetillMonth=TodaysD.getMonth()
   const membershipactivetillday=TodaysD.getDay()
   this.membershipactivetilldate=new Date(membershipactivetillyear,membershipactivetillMonth+1,
    membershipactivetillday)
    }
    reneveMemberShip(){
        const membershipactivetillyear=this. membershipactivetilldate.getFullYear()
   const membershipactivetillMonth=this.membershipactivetilldate.getMonth()
   const membershipactivetillday=this.membershipactivetilldate.getDay()
   if(this.package==="Standerd"){
   this.membershipactivetilldate=new Date(membershipactivetillyear,membershipactivetillMonth+1,
    membershipactivetillday)
    }else if(this.package==="Yearly"){
        this.membershipactivetilldate=new Date(membershipactivetillyear+1,membershipactivetillMonth,
            membershipactivetillday)
    }
}
subcriptivTillDate(){
    console.log(this.membershipactivetilldate)
}
    getPackage(){
        console.log(this.Uname+" is subscribed to the "+this.package)
    }
   
}


let bob=new user("bob","bobname.gmail.com",'12345')
let mik=new member("mik","mik.gmail.com",'2341',"Yearly")
mik.userCount()

