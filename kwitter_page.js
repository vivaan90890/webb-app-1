//YOUR FIREBASE LINKS
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
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementByIdI("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag=name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function updateLike(message_id){
console.log("click on like button"+message_id);
button_id=message_id;
like=document.getElementById(button_id).value;
updated_like=Number(like)+1;
console.log(updated_like);
firebase.database().ref(room_name).child(message_id).update({
like:updated_like
});
}
 function logout(){
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location.replace("index.html");
            }
