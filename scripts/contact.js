"use strict";

class Contact{
    constructor(fullName = "", contactNumber = "", emailAddress = "", shortMsg = "") {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
        this.ShortMsg = shortMsg;
    }

    get FullName(){
        return this._FullName;
    }
    get ContactNumber(){
        return this._ContactNumber;
    }
    get EmailAddress(){
        return this._EmailAdress;
    }
    get ShortMsg(){
        return this._ShortMsg;
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
    set ShortMsg(shortMsg){
        this.m_shortMsg = shortMsg;
    }

    toString(){
        return `Full Name: ${this.m_fullName}\n Contact Number: ${this.m_contactNumber}\n EmailAddress: ${this.m_emailAddress
        }\n Short Message ${this.m_shortMsg}`
    }
}