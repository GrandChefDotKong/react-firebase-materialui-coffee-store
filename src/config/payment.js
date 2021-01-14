const handlePayment = (items, total) => {

    const supportedPaymentMethods = [{
        supportedMethods: "basic-card",
        data: {
            supportedNetworks: ["visa", "mastercard"],
        },
    }];

    const paymentDetails = {
        displayItems: items,
        total: {
            label: 'Total Cost',
            amount: {
                currency: 'JPY',
                value: total,
            }
        }
    }

    //console.log( paymentDetails);

    const shippingOptions = [{}];

    const paymentRequest = new PaymentRequest(supportedPaymentMethods, paymentDetails, shippingOptions);
    paymentRequest.show().then((paymentResponse) => {
    // POST the payment information to the server
    // There's no server-side component in this project, so we skip this and simulate a server response
        /*
        return fetch('/pay', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paymentResponse.toJSON())
        }).then((serverResponse) => {
                // Examine server response
            if(serverResponse.status === 200) {
                return paymentResponse.complete("success");   
            } else 
                return paymentResponse.complete("fail");
            }
        });
        */
    // server response with a 2 second delay to make it seem more realistic.
        window.setTimeout(function() {
            paymentResponse.complete('success')
                .then(function() {
                    console.log(instrumentToJsonString(paymentResponse));
                });
        }, 2000);
    }).catch((err) => {
        console.log(`Erreur : ${err}`);
    });
};

function instrumentToJsonString(payment) {
    let details = payment.details;
    details.cardNumber = 'XXXX-XXXX-XXXX-' + details.cardNumber.substr(12);
    details.cardSecurityCode = '***';
  
    return JSON.stringify({
      methodName: payment.methodName,
      details: details,
    }, undefined, 2);
}

export default handlePayment;