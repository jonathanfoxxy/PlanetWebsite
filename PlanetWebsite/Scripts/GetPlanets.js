var API_URL = 'https://cors-anywhere.herokuapp.com/https://m2n8q21cfb.execute-api.eu-west-1.amazonaws.com/live/planet'

$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: API_URL,

        success: function (data) {
            //$('#planets').html('');
            console.log(data);

            var count = 1;
            var table = document.getElementById("myTable");

            data.planet.forEach(function (planet) {
                var row = table.insertRow(count);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                cell1.innerHTML = planet.name;
                cell2.innerHTML = planet.distanceFrom;
                count++;
                //$('#planets').append('<p>' + planet.name + '</p>');
                //$('#planets').append('<p>' + planet.distanceFrom + '</p>');

            })
        }
    });
});