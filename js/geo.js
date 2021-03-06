function getCities() {
    var zip = document.getElementById("zip").value;

    document.getElementById('render').innerHTML = "";
    var head = document.createElement('h1');
    head.setAttribute('id', 'head_l');
    head.appendChild(document.createTextNode("Les villes correspondant au code postal " + zip + " : "));
    document.getElementById('render').appendChild(head);
    var ul = document.createElement('ul');
    ul.setAttribute('id', 'city_l');
    document.getElementById('render').appendChild(ul);

    var zip = document.getElementById("zip").value;
    var url = "http://maps.googleapis.com/maps/api/geocode/json?address=" + zip;
    var cities;
    $.getJSON(url, function(data) {
        cities = data;
        if (!data.results[0].postcode_localities) {
            if ((data.results[0].address_components[3].short_name == "FR") || (data.results[0].address_components[4].short_name == "FR")) {
                //console.log(data.results[0].address_components[1].long_name);
                var url2 = "https://www.google.fr/maps/place/" + data.results[0].address_components[1].long_name;
                var a = document.createElement('a');
                var text = document.createTextNode(data.results[0].address_components[1].long_name);
                a.appendChild(text);
                a.href = url2;
                a.target = "_blank";
                var li = document.createElement('li');
                li.setAttribute('class', 'item_l');
                li.appendChild(a);
                ul.appendChild(li);
            } else {
                alert("Veuillez saisir un pays Fran�ais.");
            }
        } else if (data.results[0].postcode_localities) {
            if ((data.results[0].address_components[4].short_name == "FR") || (data.results[0].address_components[3].short_name == "FR")) {
                $.each(data.results[0].postcode_localities, function(index, data) {
                    //console.log(data);
                    var url2 = "https://www.google.fr/maps/place/" + data;
                    var a = document.createElement('a');
                    var text = document.createTextNode(data);
                    a.appendChild(text);
                    a.href = url2;
                    a.target = "_blank";
                    var li = document.createElement('li');
                    li.setAttribute('class', 'item_l');
                    li.appendChild(a);
                    ul.appendChild(li);
                });
            } else {
                alert("Veuillez saisir un pays Fran�ais.");
            }
        }
    });
}

function activate() {
    var text = document.getElementById("zip").value;
    if ((text.length < 5) || (text.length > 5)) {
        alert("Veuillez saisir un code postal fran�ais correct.");
    } else if (text.length == 5) {
        getCities();
    }
}
