import handlePayment from './payment';

const handleCheckout = (cart) => {

    if(window.PaymentRequest) {

        var total = 0
        cart.forEach(element => total += (element.price*element.quantity));
        const shippingFee = (total < 3000 ? 300 : 0);

        const items = cart.map((item) => {
            return {
                label: item.name,
                amount: {
                    currency: 'JPY',
                    value: (item.price * item.quantity)
                }
            }
        });
        items.push({
            label: 'Shipping',
            amount: {
                currency: 'JPY',
                value: shippingFee,
            }
        });

        const totalWithFee = total + shippingFee;

        handlePayment(items, totalWithFee);

    } else {
        alert('Payment Request not supported !');
    }
}

export default handleCheckout;