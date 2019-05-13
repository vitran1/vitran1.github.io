  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDgou598mUbPbHDoV1hUDKL7_2u3GRKpFI",
    authDomain: "urstay-hotel.firebaseapp.com",
    databaseURL: "https://urstay-hotel.firebaseio.com",
    projectId: "urstay-hotel",
    storageBucket: "urstay-hotel.appspot.com",
    messagingSenderId: "158560649583"
  };
  firebase.initializeApp(config);

  // Reference UserData collection
var UserDataRef = firebase.database().ref('UserData');


// listen for form submit
document.getElementById('guestData').addEventListener('submit', 
submitForm);

//submit form
function submitForm(e){
    e.preventDefault();

    var Arrival = getInputVal('Arrival')
    var Checkout = getInputVal('check-out')
    var Fname = getInputVal('Fname');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    
    
    //console.log(Fname);
    
    //Save user data
    saveUserDataRef(Arrival,Checkout,Fname, email,phone);

    }

// Funtion to get form value

function getInputVal(id){
    return document.getElementById(id).value;
}

// Save Email to firebase
function saveUserDataRef(Arrival, Checkout,Fname, email, phone){
    var newUserRef = UserDataRef.push();
    newUserRef.set({
        Arrival:Arrival, 
        Checkout:Checkout,
        Fname: Fname,
        email: email,
        phone:phone

    });
}