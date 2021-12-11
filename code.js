$(function () {
    $("form").on("submit", calcBmi);
});

function calcBmi(event) {
    event.preventDefault();

    // get value from height input box
    let height = $("input#height").val();

    // get value from weight input box
    let weight = $("input#weight").val();

    // factor BMI using formula
    let squaredHeight = height * height;
    let firstBmi = (weight / squaredHeight);
    let bmi = firstBmi * 703;

    // use formula for image
    let pixelsPerPound = 735 / 195;
    let pixelsPerInch = -385 / 23;

    let top = (height - 79) * pixelsPerInch + 12;
    let left = (weight - 80) * pixelsPerPound + 23;

    let changeTop = $(".person").css("top", top);
    let changeLeft = $(".person").css("left", left);

    $("#chart").append(changeTop, changeLeft);

    // selection for which category to display and display it
    if (bmi < 16.0) {
        $("#cat1").show();
    }

    if (bmi >= 16.0 && bmi <= 16.9) {
        $("#cat2").show();
    }

    if (bmi >= 17.0 && bmi <= 18.4) {
        $("#cat3").show();
    }

    if (bmi >= 18.5 && bmi <= 24.9) {
        $("#cat4").show();
    }

    if (bmi >= 25.0 && bmi <= 29.9) {
        $("#cat5").show();
    }

    if (bmi >= 30.0 && bmi <= 34.9) {
        $("#cat6").show();
    }

    if (bmi >= 35.0 && bmi <= 39.9) {
        $("#cat7").show();
    }

    if (bmi >= 40.0) {
        $("#cat8").show();
    }

    // display BMI
    $("#bmi").text(`BMI ${bmi.toFixed(1)}`);

}