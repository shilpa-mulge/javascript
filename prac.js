 //function myfunction(){
    /*let car=["volvo","indica"]
    let person={
        fisrN:'name'
    }
document.getElementById('demo').innerHTML=car[0]+person.fisrN */
/* const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById('demo').innerHTML=text
}  */

/* const points = [40, 100, 1, 5, 25, 10]
txt=" "
const arr1=points.forEach(myFunction)
function myFunction(v){
    txt+=v+"<br>"
}
document.getElementById('demo').innerHTML=txt */
let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);
document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;