$.ajax({
    type: "GET",
    url:"/people",
}).done(function(data){
    $("#peopleList").append($("<ul/>"));
    var people = JSON.parse(data);
    people.forEach(element => {
        var person = element.name +", age: "+element.age +", city: "+element.city;
        $("#peopleList ul").append($("<li/>").html(person));
          
    });
})