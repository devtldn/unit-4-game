// To whom it may concern: THIS DOESN'T WORK

$(document).ready(function () {

    var wins = 0;
    var losses = 0;

    function crystalValues() {
        var valueGreen = Math.ceil(Math.random() * 12);
        var valueYellow = Math.ceil(Math.random() * 12);
        var valueRed = Math.ceil(Math.random() * 12);
        var valueBlue = Math.ceil(Math.random() * 12);

        var pointsToMatch = (Math.ceil(Math.random() * (120 - 19) + 19));
        $("#ai-total").html(`<h4>${pointsToMatch}</h4>`);

        var valueTotal = parseInt(valueGreen) + parseInt(valueYellow) + parseInt(valueRed) + parseInt(valueBlue);

        function crystalButtons() {
            $("#crystal-buttons").on("click", "#grn-cr", function () {
                $("#your-total").val(valueGreen);
                $("#your-total").html(`<h4>${valueTotal}</h4>`);
                alert(`You are currently sitting at ${valueTotal} points.`);
            })

            $("#crystal-buttons").on("click", "#yllw-cr", function () {
                $("#your-total").val(valueYellow);
                $("#your-total").html(`<h4>${valueTotal}</h4>`);
                alert(`You are currently sitting at ${valueTotal} points.`);
            })

            $("#crystal-buttons").on("click", "#rd-cr", function () {
                $("#your-total").val(valueRed);
                $("#your-total").html(`<h4>${valueTotal}</h4>`);
                alert(`You are currently sitting at ${valueTotal} points.`);
            })

            $("#crystal-buttons").on("click", "#bl-cr", function () {
                $("#your-total").val(valueBlue);
                $("#your-total").html(`<h4>${valueTotal}</h4>`);
                alert(`You are currently sitting at ${valueTotal} points.`);
            })
        }
        crystalButtons();

    }
    crystalValues();
});