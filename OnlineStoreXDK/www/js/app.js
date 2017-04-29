var products = [{
		"id": 1,
		"Product": "Mark I",
		"Price": 70000,
		"Photo": "markI.jpg"
	},
	{
		"id": 2,
		"Product": "Mark II",
		"Price": 100000,
		"Photo": "markII.jpg"
	},
	{
		"id": 3,
		"Product": "Mark III",
		"Price": 120000,
		"Photo": "markIII.jpg"
	},
	{
		"id": 4,
		"Product": "Mark V",
		"Price": 150000,
		"Photo": "markV.jpg"
	},
	{
		"id": 5,
		"Product": "Mark VI",
		"Price": 180000,
		"Photo": "markVI.jpg"
	},
	{
		"id": 6,
		"Product": "Mark XVII",
		"Price": 200000,
		"Photo": "markXVII.jpg"
	},
	{
		"id": 7,
		"Product": "Mark XLII",
		"Price": 300000,
		"Photo": "markXLII.jpg"
	},
	{
		"id": 8,
		"Product": "Veronica",
		"Price": 1000000,
		"Photo": "markXLIII.JPG"
	},
	{
		"id": 9,
		"Product": "Mark XLVI",
		"Price": 320000,
		"Photo": "markXLVI.JPG"
	}
];

var cart = [];
var cartParameters = 0;
var beenHere = false;
var formsJSON = [];
var formSubmitted = false;

function addProducts(){
	for (var i = 0; i<9; i++){
		document.getElementById("product" + (i+1)).innerHTML = "<p>" + products[i].Product + "<p><img src=" + products[i].Photo + ' onclick="addToCart(' + (i+1) +')" class="Products"> <h3>Price: $' + products[i].Price + "</h3>";	
	}
}

function addToCart(productID){
	cart[cartParameters] = {"Product": products[productID - 1].Product,
		"Price": products[productID - 1].Price,
		"Photo": products[productID - 1].Photo};
	cartParameters ++;
}

function fillCart(){
	var table = document.getElementById("cartTable");
	var totalPrice = 0;
	for (var i = 0; i<cartParameters; i++){
		var row = table.insertRow(1);
	    var name = row.insertCell(0);
	    var quantity = row.insertCell(1);
	    var price = row.insertCell(2);
	    var remove = row.insertCell(3);
	    name.innerHTML = cart[i].Product;
	    quantity.innerHTML = 2;
	    price.innerHTML = cart[i].Price * quantity.innerHTML;
	    remove.innerHTML = '<input type="button" onclick="removeItem('+ i +')" value="Remove" />';
	    totalPrice += cart[i].Price;
	}
	if (beenHere == false){
		var finalRow = table.insertRow(cartParameters + 1);
	    var totalRow = finalRow.insertCell(0);
	    var totalPriceRow = finalRow.insertCell(1);
	    totalRow.innerHTML = "Total";
	    totalPriceRow.innerHTML = "$" + totalPrice;
	    beenHere = true;
	}
}

function showCart(){
	document.getElementById("products").style.display = "none";
	document.getElementById("cart").style.display = "block";
	fillCart();
}

function showHome(){
	document.getElementById("products").style.display = "block";
	document.getElementById("cart").style.display = "none";
	cart = [];
	cartParameters = 0;
}

function removeItem(index){
	document.getElementById("cartTable").deleteRow(index + 1);
	cart.splice(index.rowIndex);
}

function showFirstForm(){
	if(formSubmitted == false){
		document.getElementById("firstForm").style.display = "block";
		document.getElementById("secondForm").style.display = "none";
		document.getElementById("thirdForm").style.display = "none";
		formSubmitted = true;
	}
}

function showSecondForm(){
	document.getElementById("firstForm").style.display = "none";
	document.getElementById("secondForm").style.display = "block";
	document.getElementById("thirdForm").style.display = "none";
}

function showThirdForm(){
	document.getElementById("firstForm").style.display = "none";
	document.getElementById("secondForm").style.display = "none";
	document.getElementById("thirdForm").style.display = "block";
}

function submitFirstForm(){
	var userName = document.getElementById("userName").value;
	var password = document.getElementById("password").value;
	var confirmPassword = document.getElementById("confirmPassword").value;
	var country = document.getElementById("country").value;
	var city = document.getElementById("city").value;
	var address = document.getElementById("address").value;
	var mobile = document.getElementById("mobile").value;
	var checked = document.getElementById("roundedOne").checked;
	if(userName == "" || password == "" || country == "" || city == "" || address == "" || mobile == ""){
		alert("Field Missing");
	}else if(password != confirmPassword){
		alert("Passwords don't match");
	}else if(checked == false){
		alert("You must agree to ther terms & conditions");
	}else {
		formsJSON[0] = { "userName": userName,
		"password": password,
		"country": country,
		"city": city,
		"address": address,
		"mobile": mobile
		};
		showSecondForm();
	}
}

function submitSecondForm(){
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var email = document.getElementById("email").value;
	var country = document.getElementById("country2").value;
	var city = document.getElementById("city2").value;
	var address1 = document.getElementById("address1").value;
	var address2 = document.getElementById("address2").value;
	var zipCode = document.getElementById("zipCode").value;
	if(firstName == "" || lastName == "" || email == "" || country == "" || city == "" || address1 == "" || zipCode == ""){
		alert("Field Missing");
	}else if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) != true){
		alert("invalid email");
	}else {
		formsJSON[1] = { "firstName": firstName,
		"lastName": lastName,
		"email": email,
		"country": country,
		"city": city,
		"address1": address1,
		"address2": address2,
		"zipCode": zipCode
		};
		showThirdForm();
	}
}

function submitThirdForm(){
	var checked = document.getElementById("slideTwo").checked;
	if(checked == false){
		var firstName = document.getElementById("firstName2").value;
		var lastName = document.getElementById("lastName2").value;
		var email = document.getElementById("email2").value;
		var country = document.getElementById("country3").value;
		var city = document.getElementById("city3").value;
		var address1 = document.getElementById("address12").value;
		var address2 = document.getElementById("address22").value;
		var zipCode = document.getElementById("zipCode2").value;
		if(firstName == "" || lastName == "" || email == "" || country == "" || city == "" || address1 == "" || zipCode == ""){
			alert("Field Missing");
		}else if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) != true){
			alert("invalid email");
		}else {
			formsJSON[2] = { "firstName": firstName,
			"lastName": lastName,
			"email": email,
			"country": country,
			"city": city,
			"address1": address1,
			"address2": address2,
			"zipCode": zipCode
			};
			showFormsValues();	
		}
	}else {
		formsJSON[2] = formsJSON[1];
		showFormsValues();
	}
}

function showFormsValues(){
	var table = document.getElementById("resultsTable");
	var row1 = table.insertRow(1);
    var field1 = row1.insertCell(0);
    var value1 = row1.insertCell(1);
    var row2 = table.insertRow(2);
    var field2 = row2.insertCell(0);
    var value2 = row2.insertCell(1);
    var row3 = table.insertRow(3);
    var field3 = row3.insertCell(0);
    var value3 = row3.insertCell(1);
    var row4 = table.insertRow(4);
    var field4 = row4.insertCell(0);
    var value4 = row4.insertCell(1);
    var row5 = table.insertRow(5);
    var field5 = row5.insertCell(0);
    var value5 = row5.insertCell(1);
    var row6 = table.insertRow(6);
    var field6 = row6.insertCell(0);
    var value6 = row6.insertCell(1);
    var row7 = table.insertRow(7);
    var field7 = row7.insertCell(0);
    var value7 = row7.insertCell(1);
    var row8 = table.insertRow(8);
    var field8 = row8.insertCell(0);
    var value8 = row8.insertCell(1);
    var row9 = table.insertRow(9);
    var field9 = row9.insertCell(0);
    var value9 = row9.insertCell(1);
    var row10 = table.insertRow(10);
    var field10 = row10.insertCell(0);
    var value10 = row10.insertCell(1);
    var row11 = table.insertRow(11);
    var field11 = row11.insertCell(0);
    var value11 = row11.insertCell(1);
    var row12 = table.insertRow(12);
    var field12 = row12.insertCell(0);
    var value12 = row12.insertCell(1);
    var row13 = table.insertRow(13);
    var field13 = row13.insertCell(0);
    var value13 = row13.insertCell(1);
    var row14 = table.insertRow(14);
    var field14 = row14.insertCell(0);
    var value14 = row14.insertCell(1);
    var row15 = table.insertRow(15);
    var field15 = row15.insertCell(0);
    var value15 = row15.insertCell(1);
    var row16 = table.insertRow(16);
    var field16 = row16.insertCell(0);
    var value16 = row16.insertCell(1);
    var row17 = table.insertRow(17);
    var field17 = row17.insertCell(0);
    var value17 = row17.insertCell(1);
    var row18 = table.insertRow(18);
    var field18 = row18.insertCell(0);
    var value18 = row18.insertCell(1);
    var row19 = table.insertRow(19);
    var field19 = row19.insertCell(0);
    var value19 = row19.insertCell(1);
    var row20 = table.insertRow(20);
    var field20 = row20.insertCell(0);
    var value20 = row20.insertCell(1);
    var row21 = table.insertRow(21);
    var field21 = row21.insertCell(0);
    var value21 = row21.insertCell(1);
    var row22 = table.insertRow(22);
    var field22 = row22.insertCell(0);
    var value22 = row22.insertCell(1);
    var row23 = table.insertRow(23);
    var field23 = row23.insertCell(0);
    var value23 = row23.insertCell(1);
    var row24 = table.insertRow(24);
    var field24 = row24.insertCell(0);
    var value24 = row24.insertCell(1);
    var row25 = table.insertRow(25);
    var field25 = row25.insertCell(0);
    var value25 = row25.insertCell(1);
    var row26 = table.insertRow(26);
    var field26 = row26.insertCell(0);
    var value26 = row26.insertCell(1);

    field1.innerHTML = "Your Data";
    value1.innerHTML = "";
    field2.innerHTML = "User Name";
    value2.innerHTML = formsJSON[0].userName;
    field3.innerHTML = "Password";
    value3.innerHTML = formsJSON[0].password;
    field4.innerHTML = "Country";
    value4.innerHTML = formsJSON[0].country;
    field5.innerHTML = "City";
    value5.innerHTML = formsJSON[0].city;
    field6.innerHTML = "Address";
    value6.innerHTML = formsJSON[0].address;
    field7.innerHTML = "Mobile";
    value7.innerHTML = formsJSON[0].mobile;
    field8.innerHTML = "Your Shipping Address Data";
    value8.innerHTML = "";
    field9.innerHTML = "First Name";
    value9.innerHTML = formsJSON[1].firstName;
    field10.innerHTML = "Last Name";
    value10.innerHTML = formsJSON[1].lastName;
    field11.innerHTML = "Email";
    value11.innerHTML = formsJSON[1].email;
    field12.innerHTML = "Country";
    value12.innerHTML = formsJSON[1].country;
    field13.innerHTML = "City";
    value13.innerHTML = formsJSON[1].city;
    field14.innerHTML = "Address1";
    value14.innerHTML = formsJSON[1].address1;
    field15.innerHTML = "Address2";
    value15.innerHTML = formsJSON[1].address2;
    field16.innerHTML = "Zip Code";
    value16.innerHTML = formsJSON[1].zipCode;
    field17.innerHTML = "Your Billing Address Data";
    value17.innerHTML = "";
    field18.innerHTML = "First Name";
    value18.innerHTML = formsJSON[2].firstName;
    field19.innerHTML = "Last Name";
    value19.innerHTML = formsJSON[2].lastName;
    field20.innerHTML = "Email";
    value20.innerHTML = formsJSON[2].email;
    field21.innerHTML = "Country";
    value21.innerHTML = formsJSON[2].country;
    field22.innerHTML = "City";
    value22.innerHTML = formsJSON[2].city;
    field23.innerHTML = "Address1";
    value23.innerHTML = formsJSON[2].address1;
    field24.innerHTML = "Address2";
    value24.innerHTML = formsJSON[2].address2;
    field25.innerHTML = "Zip Code";
    value25.innerHTML = formsJSON[2].zipCode;

    document.getElementById("firstForm").style.display = "none";
	document.getElementById("secondForm").style.display = "none";
	document.getElementById("thirdForm").style.display = "none";
	document.getElementById("formsResults").style.display = "block";
}


