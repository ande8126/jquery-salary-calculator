$( document ).ready( onReady );
employees = [];

function onReady(){
    $( '#addEmployeeButton' ).on('click', addEmployee );
    $( '#salariesOut' ).on('click', '#deleteEmployeeButton', deleteEmployee )
}//end onReady



function addEmployee(){
    console.log('in addEmployee');
    let newEmployee = {
        firstName: $('#firstNameIn' ).val(),
        lastName: $('#lastNameIn' ).val(),
        idNumber: $('#idNumberIn' ).val(),
        title: $('#titleOut' ).val(),
        salary: $('#salaryOut' ).val()
    }//end newEmployee
    //push to employees array
    employees.push(newEmployee);
    //output to the dom
    showEmployees();
    //clear the text input
    $('#firstNameIn' ).val( '' );
    $('#lastNameIn' ).val( '' );
    $('#idNumberIn' ).val( '' );
    $('#titleOut' ).val( '' );
    $('#salaryOut' ).val( '' ); 
}//end addEmployee

function deleteEmployee(){
    $(this).parent().parent().remove();
}//end deleteEmployee

function showEmployees(){
    //target output element
    //create new variable
    let el = $( '#salariesOut' );
    //loop thru employees
    for ( i=0; i<employees.length; i++ ) {
        //append to DOM
        el.append(`<tr>
        <td>${employees[i].firstName}</td>
        <td>${employees[i].lastName}</td>
        <td>${employees[i].idNumber}</td>
        <td>${employees[i].title}</td>
        <td>${employees[i].salary}</td>
        <td><button id="deleteEmployeeButton">Delete</button></td>
    </tr>`)
    }//end for loop
    //append to DOM
}//end showEmployees