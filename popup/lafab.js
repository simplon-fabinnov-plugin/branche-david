var a = document.getElementById("separateur");
var b = document.getElementById("phrase1");

a.addEventListener('click', function(e){
  console.log(a);
  console.log(e);
  var ajoutP = document.createElement("h2");
  ajoutP.setAttribute("width", "300px");
  ajoutP.setAttribute("color", "red");
  ajoutP.textContent = "Ajoute cette phrase";
  a.setAttribute("width", "100px");
  document.getElementById("separateur").appendChild(ajoutP);
}, false);
