$(document).ready(function() {
    $("#test").submit(function(event) {
        event.preventDefault();
        $('#exactly100').hide();
        $('#under100').hide();
        $('#under80').hide();
        $('#under60').hide();
        $('#under40').hide();
        $('#under20').hide();
        $('#percent').hide();
      var q1 = parseInt($("#q1").val());
      var q2 = parseInt($("#q2").val());
      var q3 = parseInt($("#q3").val());
      var q4 = parseInt($("#q4").val());
      var q5 = parseInt($("#q5").val());
      var q6 = parseInt($("#q6").val());
      var q7 = parseInt($("#q7").val());
      var q8 = parseInt($("#q8").val());
      var q9 = parseInt($("#q9").val());
      var q10 = parseInt($("#q10").val());
      var q11 = parseInt($("#q11").val());
      var q12 = parseInt($("#q12").val());
      var q13 = parseInt($("#q13").val());
      var q14 = parseInt($("#q14").val());
      var q15 = parseInt($("#q15").val());
      var q16 = parseInt($("#q16").val());
      var q17 = parseInt($("#q17").val());
      var q18 = parseInt($("#q18").val());
      var q19 = parseInt($("#q19").val());
      var q20 = parseInt($("#q20").val());
      var result = (q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10 + q11 + q12 + q13 + q14 + q15 + q16 + q17 + q18 + q19 + q20);
      console.log(result);
       if (result === 100) {
         $('#exactly100').show();
       } else if (result >= 80) {
         $('#under100').show();
       } else if (result >= 60) {
         $('#under80').show();
       } else if (result >= 40) {
         $('#under60').show();
       } else if (result >= 20) {
         $('#under40').show();
       } else {
        $('#under20').show();
       }
       var percent = (result * 5);
       $('#result').text(percent);
       $('#percent').show();

    });
});