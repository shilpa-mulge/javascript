class student {
    constructor(Fname, Lname, RollNo, Age, sex, dob) {
        this.Fname = Fname
        this.Lname = Lname
        this.RollNo = RollNo
        this.Age = Age
        this.sex = sex
        this.dob = new Date(dob)
    }
        getBirthYear(){
            return this.dob.getFullYear()
        }
        fullName(){
            return `${this.Fname} ${this.Lname}`
        }
    }

const s1=new student("shilpa","mulge",1,28,"female",'1994-01-21')

const s2=new student("sanvi","mulge",2,3,"female",'2020-01-29')


console.log(s1.fullName())
console.log(s1.getBirthYear())