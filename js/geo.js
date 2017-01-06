function getCities() {
    var zip = document.getElementById("zip").value;
    var url = "http://maps.googleapis.com/maps/api/geocode/json?address=" + zip;

    //var data = ajax(url);
    var cities;
    $.getJSON(url, function(data) {
        cities = data;
        console.log(data);
        if (!data.results[0].postcode_localities) {
            console.log(data.results[0].address_components[1].long_name);
        }
        else if (data.results[0].postcode_localities) {
          //console.log(data.results[0].address_components[1].long_name);

          $.each(data.results[0].postcode_localities, function(index,data){
            console.log(data);
          });

          /*for(var i = 0; i < data.results[0].postcode_localities.lenght i++){
          //  console.log(data.results[0].postcode_localities[i]);
          console.log(i);
        }*/
        }
        //if(!data.results[0].postcode_localities)
    });
    //console.log(cities);
    //  console.log(object);

}

/*
function ajax(url) {
    var cities = $.get(url,function( data ){
    },"json");
    console.log(cities);
    return cities;
}*/
