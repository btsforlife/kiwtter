
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDU0KB48EYtuKIb9D5xHjZolANrGuXZF-k",
      authDomain: "kwitter-c2d68.firebaseapp.com",
      databaseURL: "https://kwitter-c2d68-default-rtdb.firebaseio.com",
      projectId: "kwitter-c2d68",
      storageBucket: "kwitter-c2d68.appspot.com",
      messagingSenderId: "186086496620",
      appId: "1:186086496620:web:36e9d73259da577fc2fb49"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("imp")
document.getElementById("urname").innerHTML="welcome "+user_name

function addroom(){
      Room_name=document.getElementById("room_name").value
firebase.database().ref("/").child(Room_name).update({
      purpose:"adding room name"

})
localStorage.setItem("room_name",Room_name)
window.location="kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name'id="+Room_names+" onclick='redirecttoroomname(this.id)'># "+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML +=row

      //End code
      });});}
getData();
 function redirecttoroomname(name){
       localStorage.setItem("room_name",name)
       window.location="kwitter_page.html"
 }

function logout(){
      localStorage.removeItem("imp")
      localStorage.removeItem("room_name")
      window.location="index.html"
}