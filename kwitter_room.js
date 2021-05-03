var firebaseConfig = {
      apiKey: "AIzaSyDX8scV2IHzEb8GuOrZIknb_FJbKdTlRRE",
      authDomain: "kwitter-app-941d2.firebaseapp.com",
      databaseURL: "https://kwitter-app-941d2-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-941d2",
      storageBucket: "kwitter-app-941d2.appspot.com",
      messagingSenderId: "217166226899",
      appId: "1:217166226899:web:995c4aa550c3023fc47b26"
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