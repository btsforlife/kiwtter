function localstorage(){
    var user_name=document.getElementById("user_name").value 
    localStorage.setItem("imp",user_name)
    window.location="kwitter_room.html"
    
}