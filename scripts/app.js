"use strict";
(function (){
    function AddContact(fullName, contactNumber, emailAddress){
        let contact = new core.Contact(fullName, contactNumber, emailAddress);
        if(contact.hello()){
            let key = contact.FullName.substring(0,1) + Date.now();
            localStorage.setItem(key, contact.hello());
        }
    }

    function DisplayHomePage(){
        console.log("Home Page")

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
        }
    }
    window.addEventListener("load", Start)
})();