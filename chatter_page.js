// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBKPi1D-o6r6cgwI3vWmtAw01itatNxg_g",
      authDomain: "covid19-aoys.firebaseapp.com",
      databaseURL: "https://covid19-aoys-default-rtdb.firebaseio.com",
      projectId: "covid19-aoys",
      storageBucket: "covid19-aoys.appspot.com",
      messagingSenderId: "786413802706",
      appId: "1:786413802706:web:03726875997332c7a7490b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")

function send(){
      msg=document.getElementById("msg").value
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
      });

      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")

      window.location="index.html"
}