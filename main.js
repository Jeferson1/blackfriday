let emails = JSON.parse(localStorage.getItem('list_emails')) || [];

function saveData(){
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    
    const client = { name, email };
    
    emails.push(client);
        
    if(email.length > 0 && name.length > 0){
        localStorage.setItem('list_emails', JSON.stringify(emails)); 
        confirmPage();
    } else {
        showAlert();        
    }
}

function confirmPage(){
    window.location.replace("./pages/confirm.html");
}

function showAlert(){
    const alert = document.querySelector('span');
    alert.removeAttribute('class', 'hidden');
    alert.setAttribute('class', 'show');
}