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
  
 user_name=localStorage.getItem("user_name");

 

  function add_room(){
    room_name=document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name",room_name);

    window.location="chatter_page.html";
  }
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey
     console.log("Room_names-"+Room_names);
     row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>"
     document.getElementById("output").innerHTML+=row
     });});}
getData();

function redirectToRoomName(name){
     console.log(name)
     localStorage.setItem("room_name",name)
     window.location="chatter_page.html"
}

function logout(){
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")

  window.location="index.html"
}


