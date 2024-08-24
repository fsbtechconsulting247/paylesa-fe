import { Icon } from "@iconify/react"
import phoneCategoryImage from "../../../assets/images/category-phones.webp"
import laptopsCategoryImage from "../../../assets/images/category-laptops.webp"
import watchesCategoryImage from "../../../assets/images/category-wearables.webp"
import tabletCategoryImage from "../../../assets/images/category-tablets.webp"
import { Link } from "react-router-dom"

const Categories = () => {
    return (
        <div className='container'>
            <div className='categories'>
                <h2 className="heading-2">Explore our categories</h2>
                <ul className="category-listing">
                    <li className="category-item">
                        <Link to="/#" className="category-item__link">
                            <div>Phones & iPhones</div>
                            <div className="bgg-cyan-100">
                                <img src={phoneCategoryImage} alt='phone category' />
                            </div>
                            <div>
                                <Icon icon="mage:shield-check-fill" />
                                <span>50 certified listings</span>
                            </div>
                        </Link>
                    </li>
                    <li className="category-item">
                        <Link to={"/#"} className="category-item__link">
                            <div>Laptops & Macbooks</div>
                            <div className="bgg-green-100">
                                <img src={laptopsCategoryImage} alt='phone category' />
                            </div>
                            <div>
                                <Icon icon="mage:shield-check-fill" />
                                <span>50 certified listings</span>
                            </div>
                        </Link>
                    </li>
                    <li className="category-item">
                        <Link to="/#" className="category-item__link">
                            <div>Smartwatches</div>
                            <div className="bgg-pink-100">
                                <img src={watchesCategoryImage} alt='phone category' />
                            </div>
                            <div>
                                <Icon icon="mage:shield-check-fill" />
                                <span>50 certified listings</span>
                            </div>
                        </Link>
                    </li>
                    <li className="category-item">
                        <Link to={"/#"} className="category-item__link">
                            <div>Tablets & iPads</div>
                            <div className="bgg-indigo-100">
                                <img src={tabletCategoryImage} alt='phone category' />
                            </div>
                            <div>
                                <Icon icon="mage:shield-check-fill" />
                                <span>50 certified listings</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Categories