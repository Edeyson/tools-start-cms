$(document).ready(function () {
    setTimeout(function () {
      $("#hdnHotelPassengers").val(
        '[{"Room":"1","Adults":"2","Childs":"0","AgeChilds":""}]'
      );
      $("#txtHotelNumberPassenger").val(2);
      $("#paxRoom1AdtQuantity").attr("min", "1");
      var paxmin = parseInt(2);
      $("#paxRoom1AdtQuantity").val(paxmin);
      $("#paxRoom1AdtQuantity").change();
    }, 600);
  
    $("#hotelPopUpBtn").on("click", function () {
      setTimeout(function () {
        $("#txtHotelNumberPassenger").val(2);
        var paxmin = parseInt(2);
        $("#paxRoom1AdtQuantity").val(paxmin);
        $("#paxRoom1AdtQuantity").change();
      }, 500);
    });
  });




  $(document).ready(function () {
    setTimeout(function () {
      $("#hdnAirHotelPassengers").val(
        '[{"Room":"1","Adults":"2","Childs":"0","AgeChilds":""}]'
      );
      $("#txtAirHotelNumberPassenger").val(2);
      $("#paxRoom1AdtQuantity").attr("min", "1");
      var paxmin = parseInt(2);
      $("#paxRoom1AdtQuantity").val(paxmin);
      $("#paxRoom1AdtQuantity").change();
    }, 600);
  
    $("#hotelPopUpBtn").on("click", function () {
      setTimeout(function () {
        $("#txtAirHotelNumberPassenger").val(2);
        var paxmin = parseInt(2);
        $("#paxRoom1AdtQuantity").val(paxmin);
        $("#paxRoom1AdtQuantity").change();
      }, 500);
    });
  });



  $(document).ready(function () {
    setTimeout(function () {
      $("#hdnAirPassengers").val(
        '{"Adults":"2","Childs":"0","Infants":"0"}'
      );
      $("#txtAirNumberPassenger").val(2);
    }, 600);
  
    $("#AirPopUpBtn").on("click", function () {
      setTimeout(function () {
        $("#paxAdtQuantity").val(2);
      }, 500);
    });
  });