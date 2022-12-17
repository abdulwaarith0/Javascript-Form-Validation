document.querySelector("#name").addEventListener("blur", validateName);
document.querySelector("#zipcode").addEventListener("blur", validateZipcode);
document.querySelector("#email").addEventListener("blur", validateEmail);
document.querySelector("#phone").addEventListener("blur", validatePhone);


function validateName(e) {
    const name = document.querySelector("#name");
    const re = /^[a-zA-Z]{2,10}$/;

    if (!re.test(name.value)) {
        name.classList.add("is-invalid");
    } else {
        name.classList.remove("is-invalid");
    }

};

function validateZipcode(e) {
    const zipCode = document.querySelector("#zipcode");
    const re = /^[0-9]{6}(-[0-9]{4})?$/;

    if (!re.test(zipCode.value)) {
        zipCode.classList.add("is-invalid");
    } else {
        zipCode.classList.remove("is-invalid");
    }

};

function validateEmail(e) {
    const email = document.querySelector("#email");
    // const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    const re = /^(\w+)@(\w+)\.([a-zA-Z]{2,5})$/;

    if (!re.test(email.value)) {
        email.classList.add("is-invalid");
    } else {
        email.classList.remove("is-invalid");
    }

};

function validatePhone(e) {
    const phone = document.querySelector("#phone");
    const re = /^\(?\d{3}\)?[-. ]?\d{4}[-. ]?\d{4}$/;

    if (!re.test(phone.value)) {
        phone.classList.add("is-invalid");
    } else {
        phone.classList.remove("is-invalid");
    }

};
