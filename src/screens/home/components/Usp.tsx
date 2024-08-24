import { Icon } from "@iconify/react";
import payDateIllustrator from "../../../assets/svgs/pay-date.svg";
import securedPaymentIllustrator from "../../../assets/svgs/secure-payment.svg";
import priceTagIllustrator from "../../../assets/svgs/price-tag.svg";
import deliveryIllustrator from "../../../assets/svgs/delivery.svg";

const Usp = () => {
    return (

        <div className="container">
            <div className="usp">
                <h2 className="usp-heading heading-2">Why Paylesa?</h2>
                <ul className="usp-list">
                    <li className="usp-item">
                        <span>
                            <img src={payDateIllustrator} alt="Pay date illustrator" />
                        </span>
                        <div>
                            <h3>Spread payments for gadgets</h3>
                            <span>
                                Securely pay in the desired number of equal payments, after paying a quarter of the total amount due, receive your product.
                            </span>
                        </div>
                    </li>
                    <li className="usp-item">
                        <span>
                            <img src={securedPaymentIllustrator} alt="Secured payment illustrator" />
                        </span>
                        <div>
                            <h3>Safe payment, secure savings</h3>
                            <span>
                                Paylesa website guarantees a secure connection so that sensitive data such as your password or credit card number remain private.
                            </span>
                        </div>
                    </li>
                    <li className="usp-item">
                        <span>
                            <img src={priceTagIllustrator} alt="Price tag illustrator" />
                        </span>
                        <div>
                            <h3>Certified pre-owned gadgets</h3>
                            <span>
                                Each of our products is technically flawless - all devices are checked, and 100% functional.
                            </span>
                        </div>
                    </li>
                    <li className="usp-item">
                        <span>
                            <img src={deliveryIllustrator} alt="Delivery illustrator" />
                        </span>
                        <div>
                            <h3>Delivery Included</h3>
                            <span>
                                Use the online shipment tracking and always keep an eye on your packages.
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Usp;