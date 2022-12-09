
function person(Fname,Lname,RollNo,Age,sex,dob){
    this.Fname=Fname
    this.Lname=Lname
    this.RollNo=RollNo
    this.Age=Age
    this.sex=sex
    this.dob=new Date(dob)
    this.getBirth=function(){
        return this.dob.getFullYear()
    }
        this.fullName=function(){
            return `${this.Fname} ${this.Lname}`
        }
   
        this.getAge=function(dateString) {
            var today = new Date();
            var birthDate = new Date(dateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }
        
}
const p=new person("shilpa","mulge",1,28,"female",'2020-01-29')
console.log(p.dob)