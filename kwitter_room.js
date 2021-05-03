var firebaseConfig = {
       apiKey: "AIzaSyDc5vKjgRQUNgHdAoEufqm2bnYuG6VBlM8",
       authDomain: "fghf-dbd27.firebaseapp.com",
       databaseURL: "https://fghf-dbd27-default-rtdb.firebaseio.com",
       projectId: "fghf-dbd27",
       storageBucket: "fghf-dbd27.appspot.com",
       messagingSenderId: "1088482830285",
       appId: "1:1088482830285:web:57ba1c7b2013d9c2198684"
     };
     // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function add_room(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room_name/"+Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
 });
});
}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}