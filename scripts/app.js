"use strict";

(function (){
    function assignment_1(){
        let navbarLinks = document.getElementById("navbarLinks");

//creating list element
        let listItem = document.createElement("li");
        listItem.setAttribute("class", "nav-item");

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

    };

    function DisplayHomePage(){
        document.body.style.backgroundImage = "url('./Photos/backg.png')"
        let MainContent = document.getElementsByTagName("main")[0];
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3" style="color: aqua">Welcome to the Website. Have fun!</p>`;
        Article.setAttribute("class", "main");
        Article.innerHTML = ArticleParagraph;
        MainContent.appendChild(Article);
        assignment_1();
    };

    function DisplayProductsPage(){
        assignment_1();
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">Normally there would be pictures of 
        projects here. However, we couldnt find any. However, some notable ones we did were an Employee management
        system done in C# .Net, An employee system in Java, and a Selenium website tester in python</p>`;
        Article.setAttribute("class", "main");
        Article.innerHTML = ArticleParagraph;
        let MainContent = document.getElementsByTagName("main")[0]
        MainContent.appendChild(Article);

    }
    function DisplayServicesPage(){
        let Skill1 = document.createElement("img");
        Skill1.src="./Photos/data-science-2.jpg";
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is Cans Skill of Data Science. He has ben doing it for 
        many years.</p>`;
        Article.setAttribute("class", "main");
        Article.innerHTML = ArticleParagraph;
        let MainContent = document.getElementsByTagName("main")[0]
        MainContent.appendChild(Skill1);
        MainContent.appendChild(Article);

        let Skill2 = document.createElement("img");
        Skill2.src="./Photos/R.jpg";
        let Article1 = document.createElement("article");
        let ArticleParagraph1 = `<p id="ArticleParagraph" class="mt-3">This is Cans skill in the language R</p>`;
        Article.setAttribute("class", "main");
        Article.innerHTML = ArticleParagraph1;
        MainContent.appendChild(Skill2);
        MainContent.appendChild(Article);

        let Skill3 = document.createElement("img");
        Skill3.src="./Photos/sql.png";
        let Article2 = document.createElement("article");
        let ArticleParagraph2 = `<p id="ArticleParagraph" class="mt-3">This is Zach and Can skill SQL</p>`;
        Article.setAttribute("class", "main");
        Article.innerHTML = ArticleParagraph2;
        MainContent.appendChild(Skill3);
        MainContent.appendChild(Article2);
        assignment_1();
    }
    function DisplayAboutUsPage(){
        let MainImg = document.createElement("img");
        MainImg.src="./Photos/team.jpg";
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is Zach and Can at a WeaveSphere event in Toronto</p>`;
        Article.setAttribute("class", "main");
        Article.innerHTML = ArticleParagraph;
        let MainContent = document.getElementsByTagName("main")[0]
        MainContent.appendChild(MainImg);
        MainContent.appendChild(Article);
        assignment_1();
    }
    function DisplayContactPage(){
        let submitButton = document.getElementById("submitButton");
        submitButton.addEventListener("click", function (){
            let timer = 3;
            timer -= 3;
            timer -= 2;
            timer -= 1
            timer -= 1;
            if(timer = 0){
                location.href = "index.html"
            }
            let User = new Contact(document.getElementById("fullName").value,
                document.getElementById("contactNumber").value,
                document.getElementById("emailAddress").value,
                document.getElementById("shortMsg").value)
            console.log(User.toString());

        });
        assignment_1();
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
        }
    }
    window.addEventListener("load", Start)
})();