var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");


btn.addEventListener("click", function () {
    var ourRequest = new XMLHttpRequest();

    if (pageCounter == 1) {
        ourRequest.open('GET', 'https://api.myjson.com/bins/1h3h53');
        ourRequest.onload = function () {
            if (ourRequest.status >= 200 && ourRequest.status < 400) {
                var ourData = JSON.parse(ourRequest.responseText);
                renderHTML(ourData);
            } else {
                console.log("We connected to the server, but it returned an error.");
            }

        };

        ourRequest.onerror = function () {
            console.log("Connection error");
        };

        ourRequest.send();

    } else if (pageCounter == 2) {

        ourRequest.open('GET', 'https://api.myjson.com/bins/16ftev');
        ourRequest.onload = function () {
            if (ourRequest.status >= 200 && ourRequest.status < 400) {
                var ourData = JSON.parse(ourRequest.responseText);
                renderHTML(ourData);
            } else {
                console.log("We connected to the server, but it returned an error.");
            }

        };

        ourRequest.onerror = function () {
            console.log("Connection error");
        };

        ourRequest.send();


    } else if (pageCounter == 3) {

        ourRequest.open('GET', 'https://api.myjson.com/bins/p68vb');
        ourRequest.onload = function () {
            if (ourRequest.status >= 200 && ourRequest.status < 400) {
                var ourData = JSON.parse(ourRequest.responseText);
                renderHTML(ourData);
            } else {
                console.log("We connected to the server, but it returned an error.");
            }
        };

        ourRequest.onerror = function () {
            console.log("Connection error");
        };

        ourRequest.send();
    }
    pageCounter++;
    if (pageCounter > 3) {
        btn.classList.add("hide-me");
    }
});

function renderHTML(data) {
    var htmlString = "";

    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " es un " + data[i].species + " que le gusta ";

        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.likes[ii];
            } else {
                htmlString += " y " + data[i].foods.likes[ii];
            }
        }

        htmlString += ' además le disgusta ';

        for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.dislikes[ii];
            } else {
                htmlString += " y " + data[i].foods.dislikes[ii];
            }
        }

        htmlString += '.</p>';

    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}

