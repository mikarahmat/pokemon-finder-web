$(function (){
    $("#bttn").click(function (){
        let name = document.getElementById("name");
        $.ajax({
            method: "GET",
            url: "https://pokeapi.co/api/v2/pokemon/" + name.value,
            dataType: "json",
            success: function (response) {
                let info = "Name : " + response.name + " Weight : " + response.weight;
                let imgsrc = response["sprites"]["other"]["official-artwork"]["front_default"];
                let img = $("<img>").attr({
                    "src": imgsrc,
                    "width": 250,
                    "height": 250,
                });
                $("div#result").text(info).append(img);
                name.value = "";
            }
        });
    });
});