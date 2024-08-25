import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import samsungLogo from "../../../assets/images/samsung-logo.webp"

const FeaturedBrands = () => {
    return (
        <div className='container'>
            <div className='featured-brands'>
                <h2 className='heading-2'>Featured Brands</h2>
                <ul className='featured-brands__list'>
                    <li>
                        <Link to={"/#"}>
                            <img src={samsungLogo} alt='Samsung logo' />
                            <span>Samsung</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/#"}>
                            <Icon icon="ic:baseline-apple" />
                            <span>Apple</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/#"}>
                            <Icon icon="simple-icons:google" />
                            <span>Google</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/#"}>
                            <Icon icon="simple-icons:motorola" />
                            <span>Motorola</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/#"}>
                            <Icon icon="cib:huawei" />
                            <span>Huawei</span>
                        </Link>
                    </li>

                    <li>
                        <Link to={"/#"}>
                            <Icon icon="cib:hp" />
                            <span>HP</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/#"}>
                            <Icon icon="cib:dell" />
                            <span>Dell</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FeaturedBrands