var i=0;
var arr=[];
function addlist() {
  if (i>6) {
    document.getElementById('stop').innerHTML = "List is full. Can't add anymore";
  }
  else {
  var adding = document.createElement('li');
  var input = document.getElementById("user").value;
  var x =typeof(input);
    if (input.length === 0) {
      document.getElementById('stopp').innerHTML = "Can not be blank";
    }
    else {
    document.getElementById('stopp').innerHTML = " ";
    var text = document.createTextNode(input);
    adding.appendChild(text);
    var position = document.getElementsByTagName('ol')[0];
    position.appendChild(adding);
    i++;
    }
  }
}
  function removelist() {
  var bye = document.getElementById("thanos").value;
  var int = parseInt(bye);
  var subtracting = document.getElementsByTagName('li')[(int - 1)];
  var byez = subtracting.parentNode;
  byez.removeChild(subtracting);
  i--;
  document.getElementById('stop').innerHTML = " ";
}