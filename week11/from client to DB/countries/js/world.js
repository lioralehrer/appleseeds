var world = {}

world.start = function () {
    $(document).ready(function () {
        var contentHolder = $('#content');
        world.loadCountries(contentHolder);
    });
 };
world.loadCountries = function(counterHolder){
    $.get("/list_countries", function(countries){
        if ('error' in countries){
            alert (countries.error);
            
        }
        else{
            var countiesHolder = $("<ul>");
            for (i in countries){
                var countryEntry= $("<ul>");
                for (i in countries){
                    var countryEntry = $("<li/>").addClass("country-entry clickable");
                    var imgSrc = "/images/flags/"+countries[i].code2+".png";
                    var countrtFlag = $("<img/>").addClass("country-name").text(countries[i].name);
                    var countryName = $("<span/>").addClass('country-name').text(country[i].name);
                    countryEntry.appened(countryFlag).append(countryFlag.append(countryName))
                    countryEntry.append(countrtFlag).countryName
                }            }
        }
    })
}