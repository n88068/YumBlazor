function ShowConfirmationModal() {
    /*const myModal = new bootstrap.Modal(document.getElementById('myModal'), options)*/
    bootstrap.Modal.getOrCreateInstance(document.getElementById('bsConfirmationModal')).show();
}

function HideConfirmationModal() {    
    bootstrap.Modal.getOrCreateInstance(document.getElementById('bsConfirmationModal')).hide();
}