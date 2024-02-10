function handleFormSubmit(event){
    event.preventDefault();

    let myObj={
        amount: event.target.expense.value,
        discription: event.target.discrip.value,
        category: event.target.different.value
    }

    let myObj_Serial=JSON.stringify(myObj);
    localStorage.setItem(myObj.category, myObj_Serial);

    let existingLi = document.getElementById(myObj.category);
    if (existingLi) {
        existingLi.textContent = myObj.amount + " - " + myObj.discription + " - " + myObj.category;
    } else {
        const string = myObj.amount + " - " + myObj.discription + " - " + myObj.category;

        const newli = document.createElement('li');
        newli.setAttribute('id', myObj.category);
        const newliText = document.createTextNode(string);
        newli.appendChild(newliText);

        // delete button 
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function(){
            localStorage.removeItem(myObj.category);
            newli.remove();
        }); 

        // edit button 
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function(){
            event.target.expense.value = myObj.amount;
            event.target.discrip.value = myObj.discription;
            event.target.different.value = myObj.category;

            localStorage.removeItem(myObj.category);
            newli.remove();
        });

        newli.appendChild(deleteButton);
        newli.appendChild(editButton);

        const list = document.getElementById("userList");
        list.appendChild(newli);
    }

    // Clear the input fields
    event.target.expense.value = '';
    event.target.discrip.value = '';
    event.target.different.value = '';
}
module.exports=handleFormSubmit;

