// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDW2fXYDzKfDtgrjFCmZYKESPZnE0shRf8",
      authDomain: "kwitter-61643.firebaseapp.com",
      databaseURL: "https://kwitter-61643-default-rtdb.firebaseio.com",
      projectId: "kwitter-61643",
      storageBucket: "kwitter-61643.appspot.com",
      messagingSenderId: "215451124542",
      appId: "1:215451124542:web:982360b50a39b7a240e26f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
  
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      document.getElementById("room_name").style.display="none";
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
      
        localStorage.setItem("room_name", room_name);
        
        window.location = "tp.html";
    }
    //--------------------------------------------------------------------------
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "tp.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }