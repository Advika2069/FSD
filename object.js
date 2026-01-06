let student={
   name:"Advika",
   grade:85,
   Subjects:["maths","Science"],
   passed: 90>=40 ? true : false
 }

fun(student);
    function fun(student){
        console.log("Name:",student.name);
        console.log("grade:",student.grade);
        student.grade = 90;
        console.log("updated grade:",student.grade);
        console.log("passed:",student.passed);
        console.log(student["Subjects"]);  
    }
for(var i in student){
    console.log(i,":",student[i]);
}
