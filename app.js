


const firebaseConfig = {
    apiKey: "AIzaSyB7QHUjDXThzgQdx71y7cLD1WB1XyJHBFM",
    authDomain: "web-bot-262c0.firebaseapp.com",
	databaseURL: "https://web-bot-262c0-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "web-bot-262c0",
    storageBucket: "web-bot-262c0.appspot.com",
    messagingSenderId: "784552061695",
    appId: "1:784552061695:web:243dcce42644e5d424faca",
    measurementId: "G-0EGN5SPRF2"
};




firebase.initializeApp(firebaseConfig);




let tg = window.Telegram.WebApp;


tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let btn1 = document.getElementById("btn1");


btn1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("1");
		item = "1";
		tg.MainButton.show();
	}
});





Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");


const productName = document.getElementById('productName');
const productPrice = document.getElementById('productPrice');

// Вставка даних з Python у HTML
const dataName = tg.initDataUnsafe.data_list;
const dataPrice = tg.initDataUnsafe;

productName.textContent = dataName;
productPrice.textContent = dataPrice;


p.innerText = `${tg.initData.data.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);








