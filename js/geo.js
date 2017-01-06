function getCities() {
    var zip = document.getElementById("zip").value;
    var url = "http://maps.googleapis.com/maps/api/geocode/json?address=" + zip;

    //var data = ajax(url);
    var cities;
    $.getJSON(url, function(data) {
    cities = data;
    console.log(data);
});
    console.log(cities);
    var object = jQuery.parseJSON(cities);
  //  console.log(object);

}

function ajax(url) {
    var cities = $.get(url,function( data ){
    },"json");
    console.log(cities);
    return cities;
}
