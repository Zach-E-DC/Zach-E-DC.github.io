"use strict";
class User{
    constructor(firstName = "", lastName = "", emailAddress="",
                password="", confirmPassword = "") {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.EmailAddress = emailAddress;
        this.Password = password;
        this.ConfirmPassword = confirmPassword;
    }
    get FirstName(){
        return this.m_firstName;
    }
    get LastName(){
        return this.m_lastName;
    }
    get EmailAddress(){
        return this.m_emailAdress;
    }
    get Password(){
        return this.m_password;
    }
    get ConfirmPassword(){
        return this.m_confirmPassword;
    }
    set FirstName(firstName){
        this.m_firstName = firstName;
    }
    set LastName(lastName){
        this.m_lastName = lastName;
    }
    set EmailAddress(emailAddress){
        this.m_emailAdress = emailAddress;
    }
    set Password(password){
        this.m_password = password;
    }
    set ConfirmPassword(confirmPassword){
        this.m_confirmPassword = confirmPassword;
    }
    hello(){
        if(this.FirstName != "" && this.LastName != "" && this.EmailAddress  != "" && this.Password != "" &&
            this.ConfirmPassword != ""){
            return `${this.m_firstName}, ${this.m_lastName}, ${this.m_emailAdress}, ${this.m_password}, 
            ${this.m_confirmPassword}`;
        }
        console.error("One or more of the properties of the Contact object are missing or invalid");
        return null;
    };

}
(function (){
    function BottomNavBar(){
        let navbarLinks = document.getElementById("navbarLinks");

//creating list element
        let listItem = document.createElement("a");
        listItem.setAttribute("id", "nav-item");
        listItem.innerText("Human Resources");

//creating link
        let link=document.createElement("a");
        link.setAttribute("class", "nav-link");
        link.setAttribute("href", "hresources.html");

//creating icon
        let icon=document.createElement("i");
        icon.setAttribute("class", "fa-solid fa-person");

        link.textContent="Human Resources";

//appending
        listItem.appendChild(link);
        navbarLinks.appendChild(listItem);

//d
        let outher_nav=document.createElement("nav");
        outher_nav.setAttribute("class","navbar fixed-bottom navbar-expand-lg bg-body-tertiary navbar-dark bg-dark");

        let outer_div=document.createElement("div");
        outer_div.setAttribute("class","container-fluid");



        let inner_div=document.createElement("nav");
        inner_div.setAttribute("class","collapse navbar-collapse");


        let copyright = document.createElement("div");
        copyright.setAttribute("class", "navbar-text text-right");

        let currentYear = new Date().getFullYear();
        copyright.textContent = "Copyright © " + currentYear;

        inner_div.appendChild(copyright);
        outer_div.appendChild(inner_div);
        outher_nav.appendChild(outer_div);
        document.body.appendChild(outher_nav);
    }
    function SimpleDOM(){
        //SIMPLE DOM B
        let products=document.getElementById("products");
        products.innerHTML="Projects";
        products.innerHTML = "<i class='fas fa-box'></i>Projects";
        products.appendChild(iconElement)
        let navbar = document.querySelector("#navbarSupportedContent .navbar-nav");

        let hrNavItem = document.createElement("li");
        hrNavItem.className = "nav-item";

        let hrNavLink = document.createElement("a");
        hrNavLink.className = "nav-link";
        hrNavLink.href = "humanresources.html";

        let hrNavIcon = document.createElement("i");
        hrNavIcon.className = "fas fa-users";

        let hrNavText = document.createTextNode(" Human Resources");
    }
    function AddContact(fullName, contactNumber, emailAddress){
        let contact = new core.Contact(fullName, contactNumber, emailAddress);
        if(contact.hello()){
            let key = contact.FullName.substring(0,1) + Date.now();
            localStorage.setItem(key, contact.hello());
        }
    }
    function AddUser(firstName, lastName, emailAddress, password, confirmPassword){
        let user = new User(firstName, lastName, emailAddress, password, confirmPassword);
        if(user.hello()){
            let key = user.FirstName.substring(0,1) + Date.now();
            localStorage.setItem(key, user.hello());
        }
    }


    function DisplayHomePage(){;


        console.log("Home Page")
        document.querySelector('#navbarLinks a[href="products.html"]').textContent = "Projects";
        $("#AboutUsBtn").on("click", () => {
            location.href = "about.html"
        })

        $("main").append(`<p id="MainParagraph" class="mt-3">This is the main Paragraph</p>`);
        $("body").append(`<article class="container"> 
                            <p id="ArticleParagraph" class="mt-3">This is my article paragraph</p> </article>`)
    }

    function DisplayProductsPage(){
        console.log("Products Page")

    }

    function DisplayServicesPage(){
        console.log("Services Page")
    }

    function DisplayAboutUsPage(){
        console.log("About Us Page")

    }

    function DisplayContactPage(){
        console.log("Contact Us Page")
        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");
        sendButton.addEventListener("click", function(){
            //event.preventDefault();
            if(subscribeCheckbox.checked){
                console.log("Checkbox checked!");
                AddContact(document.getElementById("fullName").value,
                            document.getElementById("contactNumber").value,
                            document.getElementById("emailAddress").value);
            }
        });
    }

    function DisplayContactListPage(){
        console.log("Contact-List Page")
        if(localStorage.length > 0){
            let contactList = document.getElementById("contactList");
            let data = "";

            let keys = Object.keys(localStorage);

            let index = 1;
            for(const key of keys){
                let contactData = localStorage.getItem(key);
                let contact = new core.Contact();
                contact.deserialize(contactData);
                data += `<tr><th scope="row" class="text-center">${index}</th>
                        <td>${contact.m_fullName}</td>
                        <td>${contact.m_contactNumber}</td>
                        <td>${contact.m_emailAddress}</td>

                        <td class="text-center">
                            <button value="${key}" class="btn btn-primary btn-sm edit">
                                <i class="fas fa-edit fa-sm"></i> Edit</button>
                        </td>
                        <td class="text-center">
                            <button value="${key}" class="btn btn-danger btn-sm delete">
                                <i class="fas fa-trash-alt fa-sm"></i> Delete</button>
                        </td>
                        </tr>`;
                index++;
            }
            contactList.innerHTML = data;

            $("#addButton").on("click", () => {
               location.href = "edit.html#add"
            });
            $("button.edit").on("click", function(){
                location.href = "edit.html#" + $(this).val();
            })


            $("button.delete").on("click", function() {
               if(confirm("Delete contact, are you sure???")){
                 localStorage.removeItem($(this).val());
               }
               location.href = "contact-list.html";
            });
        }
    }
    function DisplayEditPage(){
        console.log("Edit Page")
        let page = location.hash.substring(1);

        switch (page){
            case"add":
                $("main>h1").text("Add Contact");
                $("#editButton").html(`<i class="fas fa-plus-circle fa-sm"></i> Add`);

                $("#editButton").on("click", (event) => {
                    event.preventDefault();
                    AddContact(document.getElementById("fullName").value,
                        document.getElementById("contactNumber").value,
                        document.getElementById("emailAddress").value);
                    location.href = "contact-list.html";
                });
                $("#cancelButton").on("click", () => {
                    location.href = "contact-list.html";
                });


                break;
            default:{
                //edit operation code
                let contact = new core.Contact();
                contact.deserialize(localStorage.getItem(page));
                $("#fullName").val(contact.m_fullName);
                $("#contactNumber").val(contact.m_contactNumber);
                $("#emailAddress").val(contact.m_emailAddress);

                $("#editButton").on("click", (event) => {
                    event.preventDefault();
                    contact.m_fullName = $("#fullName").val();
                    contact.m_contactNumber = $("#contactNumber").val();
                    contact.m_emailAddress = $("#emailAddress").val();

                    localStorage.setItem(page, contact.hello());
                    location.href = "contact-list.html";
                });
                $("#cancelButton").on("click", ()=> {
                    location.href = "contact-list.html";
                });
            }
        }
    }
    function ValidateField(input_field_id, regular_expression, error_message){
        let messageArea = $("#messageArea");

        $(input_field_id).on("blur", function(){

            let Text = $(this).val();
            if(!regular_expression.test(Text)){

                $(this).trigger("focus").trigger("select");
                messageArea.addClass("alert alert-danger").text(error_message).show();
            }else{
                messageArea.removeAttr("class").hide();
            }

        })
    }
    function ValidateForms(){
        ValidateField("#firstName",
            /^[a-zA-Z]{2,}$/,
            "First name must be greater than 2 characters and can not include numbers/special characters");
        ValidateField("#lastName",
            /^[a-zA-Z]{2,}$/,
            "Last name must be greater than 2 characters and can not include numbers/special characters");
        ValidateField("#emailAddress",
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{8,}$/,
            "Email address must be greater then 8 characters and must include the @ symbol");
        ValidateField("#password",
            /^[a-zA-Z0-9._-]{6,}$/,
            "Password Length must be greater than 6 characters");
        ValidateField("#confirmPassword",
            /^[a-zA-Z0-9._-]{6,}$/,
            "Password Length must be greater than 6 characters");
        ValidateField("#username",
            /^[a-zA-Z]{2,}$/,
            "Username must be greater than 2 characters");
        ValidateField("#loginPassword",
            /^[a-zA-Z0-9._-]{6,}$/,
            "Password Length must be greater than 6 characters");
    }

    function DisplayLoginPage(){
        console.log("Welcome to login page")
        ValidateForms();
        let navUsername = $("#navUsername");
        $("#loginButton").on("click", () => {
            navUsername.text($("#username").val());
        });


    }
    function DisplayRegisterPage(){
        console.log("Welcome to register page")
        ValidateForms();
        let user = new User();
        $("#registerButton").on("click", () => {
            // if($("#password") == $("#confirmPassword"))
            AddUser(user.m_firstName = $("#firstName").val(),
                user.m_lastName = $("#lastName").val(),
                user.m_emailAdress = $("#regEmailAddress").val(),
                user.m_password = $("#password").val(),
                user.m_confirmPassword = $("#confirmPassword").val());
            user.hello();
            location.href = "login.html";

        });
    }

    function Start()
    {
        console.log("App Started!")
        switch (document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Products":
                DisplayProductsPage();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "About":
                DisplayAboutUsPage();
                break;
            case "Contact":
                DisplayContactPage();
                break;
            case "Contact-List":
                DisplayContactListPage();
                break;
            case "Edit Contact":
                DisplayEditPage();
                break;
            case "Login":
                DisplayLoginPage();
                break;
            case "Register":
                DisplayRegisterPage();
                break;
        }
    }
    window.addEventListener("load", Start)
})();