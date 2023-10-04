const firebaseConfig = {
  apiKey: "AIzaSyBy0AnFWwsv1YczSX6r3KaItJRlJNn4PcU",
  authDomain: "classtest-5fae6.firebaseapp.com",
  databaseURL: "https://classtest-5fae6-default-rtdb.firebaseio.com",
  projectId: "classtest-5fae6",
  storageBucket: "classtest-5fae6.appspot.com",
  messagingSenderId: "505677396802",
  appId: "1:505677396802:web:1554916e958756a97f26db"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - "+ Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>"
        document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         like:0
      });

      document.getElementById("msg").value = "";
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name, name");
  window.location = "chat_room.html";
}