import phoneCategoryImage from "../../../assets/images/category-phones.webp"

const Categories = () => {
    return (
        <div className='categories'>
            <div className='container'>
                <h2>Explore our categories</h2>
                <ul>
                    <li>
                        <div>Phones & iPhones</div>
                        <div>
                            <img src={phoneCategoryImage} alt='phone category' />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Categories