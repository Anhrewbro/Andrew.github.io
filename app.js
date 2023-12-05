


const firebaseConfig = {
    apiKey: "AIzaSyA3O_OQ7cNnw4pzsGMa5Ho3P6dnxGSmozw",
	authDomain: "webapp-72057.firebaseapp.com",
	databaseURL: "https://webapp-72057-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "webapp-72057",
	storageBucket: "webapp-72057.appspot.com",
	messagingSenderId: "857969097256",
	appId: "1:857969097256:web:d556c23c52a26af3ab531d"
};




firebase.initializeApp(firebaseConfig);

firebase.database().ref('cons');


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








