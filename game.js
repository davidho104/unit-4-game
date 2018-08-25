var wins = 0;
var losses = 0;
var currentScore = 0;
var targetScore = 47;
var crystalValues = [12, 16, 8, 11];
$("#target-score").text(targetScore);
for (var i = 0; i < crystalValues.length; i++) {
    var image = $("<img>");
    image.addClass("image-class");
    image.attr("src", "http://hdwallpaper.live/wp-content/uploads/2018/07/blue-diamond-wallpaper-hd.jpg");
    // image.attr("src", "https://displate.com/image-visualisation/standard/16/2018-02-26/002316234f186aac1ff172a67d50c87f_237a6274172ccd3ac95164eeede94ef2.jpg?w=640&h=640&v=3");
    image.attr("value-class", crystalValues[i])
    $("#crystals-div").append(image);
}
$(".image-class").on("click", function () {
    var value = ($(this).attr("value-class"))
    var value = parseInt(value);
    currentScore += value;
    document.querySelector(".score").innerHTML = "Current Score: " + currentScore;
    console.log(currentScore);
    if (currentScore === targetScore) {
        wins++;
        document.querySelector(".wins").innerHTML = "Wins: " + wins;
        currentScore = 0;
    } else if (currentScore > targetScore) {
        losses++;
        document.querySelector(".losses").innerHTML = "Losses: " + losses;
        currentScore = 0;
    }
})