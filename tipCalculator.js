var tipAmt = 0;
var pplSharing = 0;
var billTotalAmt = 0;
var billAmt = 0;


// Calculate Tip Amount
function calculateTip () {
    
    billAmt = $("#billCost").val();
    console.log(billAmt);
    if( $("#service").val() == $("#outstanding").val()) {
        tipAmt = billAmt * .30;
        billDivide(tipAmt);
    } else if ( $("#service").val() == $("#good").val()) {
        tipAmt = billAmt * .20;
        billDivide(tipAmt);
    } else if ( $("#service").val() == $("#okay").val()) {
        tipAmt = billAmt * .15;
        billDivide(tipAmt);
    } else if ( $("#service").val() == $("#bad").val()) {
        tipAmt = billAmt * .10;
        billDivide(tipAmt);
    }else if ( $("#service").val() == $("#terrible").val()) {
        tipAmt = billAmt * .05;
        billDivide(tipAmt);
    }
        console.log("Didn't make a service choice!")
}


// Divide Total Bill by Amount of People Sharing
function billDivide(calculateTip){
    console.log("Made it to billDivide");
    pplSharing = $("#peopleSharing").val();

    billTotalPp = billAmt / pplSharing;
    tipAmt = tipAmt / pplSharing;
    billTotalAmt = billTotalPp + tipAmt;

    console.log(tipAmt);
    console.log(billTotalPp);
    console.log(billTotalAmt);

    

// Append HTML String with Variables   

    var templateDisplay = '<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center" id="tempDiv">'
    templateDisplay += '<h4>Tip Total</h4>'
    templateDisplay += '<h3>$' + Math.round(100*tipAmt)/100 + '</h3>'
    templateDisplay += '</div>'
    templateDisplay += '<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">'
    templateDisplay += '<h4>Bill Total</h4>'
    templateDisplay += '<h3>$'+ Math.round(100*billTotalPp)/100 +'</h3>'
    templateDisplay += '</div>'
    templateDisplay += '<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">'
    templateDisplay += '<h4>Bill + Tip</h4>'
    templateDisplay += '<h3>$' + Math.round(100*billTotalAmt)/100 + '</h3>'
    templateDisplay += '</div>'

    $('#infoDisplay').html(templateDisplay);
}

// Show Tip Amount and Total Bill


$(function(){
    $("#calculate").on("click", calculateTip);
});

