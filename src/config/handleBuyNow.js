import handlePayment from './payment';

const handleBuyNow = (name, price) => {

    if(window.PaymentRequest) {

        const shippingFee = (price < 3000 ? 300 : 0);
        const items = [{
            label: name,
            amount: {
                currency: 'JPY',
                value: price
            }
        },{
            label: 'Shipping',
            amount: {
                currency: 'JPY',
                value: shippingFee,
            }
        }];

        const totalWithFee = price + shippingFee;

        handlePayment(items, totalWithFee);

    } else {
        alert('Payment Request not supported !');
    }
}

export default handleBuyNow;