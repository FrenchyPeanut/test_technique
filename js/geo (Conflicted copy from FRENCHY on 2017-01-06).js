function getCities() {
    var zip = document.getElementById("zip").value;
    var url = "http://maps.googleapis.com/maps/api/geocode/json?address=" + zip;
    var cities;
    $.getJSON(url, function(data) {
        cities = data;
        if (!data.results[0].postcode_localities) {
          if((data.results[0].address_components[3].short_name == "FR")||(data.results[0].address_components[4].short_name == "FR")) {
            console.log(data.results[0].address_components[1].long_name);
          }
          else{
            alert("Veuillez saisir un pays Français.");
          }
        }
        else if (data.results[0].postcode_localities) {
          if ((data.results[0].address_components[4].short_name == "FR")||(data.results[0].address_components[3].short_name == "FR")) {
          $.each(data.results[0].postcode_localities, function(index,data){
            console.log(data);
          });
        }
      }
    });
}
function activate(){
  var text = document.getElementById("zip").value;
  if((text.length < 5)||(text.length > 5)){
    alert("Veuillez saisir un code postal français correct.");
  }
  else if(text.length == 5){
    getCities();
  }
}
