"use strict";

(function (core){
    class Contact{
        constructor(fullName = "", contactNumber = "", emailAddress = "") {
            this.FullName = fullName;
            this.ContactNumber = contactNumber;
            this.EmailAddress = emailAddress;
        }

        get FullName(){
            return this.m_contactNumber;
        }
        get ContactNumber(){
            return this.m_contactNumber;
        }
        get EmailAddress(){
            return this.m_contactNumber;
        }

        set FullName(fullName){
            this.m_fullName = fullName;
        }
        set ContactNumber(contactNumber){
            this.m_contactNumber = contactNumber;
        }
        set EmailAddress(emailAddress){
            this.m_emailAddress = emailAddress;
        }

        hello(){
            if(this.FullName != "" && this.ContactNumber != "" && this.EmailAddress  != ""){
                return `${this.m_fullName}, ${this.m_contactNumber}, ${this.m_emailAddress}`;
            }
            console.error("One or more of th properties of the Contact object are missing or invalid");
            return null;
        };
        deserialize(data){
            let propertyArray = data.split(",");
            this.FullName = propertyArray[0];
            this.ContactNumber = propertyArray[1];
            this.EmailAddress = propertyArray[2];
        }


        toString(){
            return `Full Name: ${this.FullName}\n Contact Number: ${this.ContactNumber}\n EmailAddress: ${this.EmailAddress
            }`
        }
    }
    core.Contact = Contact;
})(core || (core = {}));
