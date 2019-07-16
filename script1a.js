// proekts JS


// za manage page

function Student(firstName,lastName,birthDate,hometown) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.hometown = hometown;
}


let addStudent = document.getElementById("btn-add");
let studentContainer = document.getElementById("list-students");
var students = [];

function listStudents(){
    studentContainer.innerHTML = "";
    let index = 0;
    for (let item of students) {
        index++;
        studentContainer.innerHTML += `<li id="li-${index}"> <label id="first-${index}">${item.firstName}</label> , 
        <label id="last-${index}">${item.lastName}</label> , 
        <label>${item.birthDate}</label> ,<label> ${item.hometown}</label> 
        <button class="btn-edit" id="btn-edit-${index}"> EDIT </button>  
        <button class="btn-delete" id="btn-delete-${index}"> DELETE </button></li>`;
    }
}

addStudent.addEventListener("click", function(){
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let birthDate = document.getElementById("birth-date").value;
    let hometown = document.getElementById("hometown").value;
    let newStudent = new Student(firstName,lastName,birthDate,hometown);
    students.push(newStudent);
    listStudents();
    clearForm();

});

function clearForm() {
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("birth-date").value = "";
    document.getElementById("hometown").value = "";
}




document.addEventListener("click", function(e){
    if(e.target.className == "btn-edit"){        
        let index = parseInt(event.target.id.split("-")[2]);
        let currentStudent = students[index-1];
        updateStudent(index);
    }

    if(event.target.className == "btn-delete") {
        let index = parseInt(event.target.id.split("-")[2]);
        delStudent(index);        
    }

});

 function updateStudent(index){
    var updateFirstname = prompt("Enter student first name");
    var nameContainer = document.getElementById("first-"+index);
    nameContainer.innerHTML = updateFirstname;
    var updateLastname = prompt("Enter student last name");
    var lastNameContainer = document.getElementById("last-"+index);
    lastNameContainer.innerHTML = updateLastname;  
 }
function delStudent(index){
    var deleteS = confirm("Are you sure you want to delete student?");
    if(deleteS == true){
        var li= document.getElementById("li-"+index).style.display = 'none';//style.visibility = "hidden"
    } 
}