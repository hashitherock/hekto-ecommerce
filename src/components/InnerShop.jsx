import React, { useEffect, useState } from 'react'
import { HiViewGrid } from "react-icons/hi";
import { MdViewList } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { LuSearchX } from "react-icons/lu";
import { BiSolidDownArrow } from "react-icons/bi";
import { useContext } from 'react';
import { apiData } from './ContextApi';


const InnerShop = () => {

    let data = useContext(apiData);
    let [categoryShow, setCategoryShow] = useState(false)
    let [brandShow, setBrandShow] = useState(false)
    let [colorShow, setColorShow] = useState(false)
    let [priceShow, setPriceShow] = useState(false)
    let [category, setCategory] = useState([]);
    let [brand, setBrand] = useState([]);

    useEffect(() => {
        setCategory([...new Set(data.map((product) => product.category))])
        setBrand([...new Set(data.map((product) => product.brand))])
    }, [data])

    let [categoryProducts, setCategoryProducts] = useState([]);

    const handleCategory = (singleCategory) => {
        let filteredCategory = data.filter((product) => product.category === singleCategory)
        setCategoryProducts(filteredCategory);
        setPriceProducts([]);

    }
    const handleBrand = (singleCategory) => {
        let filteredBrand = data.filter((product) => product.brand === singleCategory)
        setCategoryProducts(filteredBrand);
        setPriceProducts([]);

    }

    let [priceProducts, setPriceProducts] = useState([]);
    const handlePrice = (min, max) => {
        let filteredPrice = data.filter((product) => product.price > min && product.price <= max);
        setPriceProducts(filteredPrice);
        setCategoryProducts([]);
    }

    let [currentPage, setCurrentPage] = useState(1);
    let [perPageProducts, setPerPageProducts] = useState(30);

    let lastProductIndex = currentPage * perPageProducts;
    let firstProductIndex = lastProductIndex - perPageProducts;

    let totalPage = Math.ceil(data.length / perPageProducts);
    let currentPageProducts = data.slice(firstProductIndex, lastProductIndex);
    let pages = [];
    for (let i = 1; i <= totalPage; i++) {
        pages.push(i);

    }
    const handlePrePage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    const handleNextPage = () => {
        if (currentPage !== totalPage) {
            setCurrentPage(currentPage + 1);
        }
    }
    const handlePageNumber = (singlePage) => {
        setCurrentPage(singlePage);
    }
    const handlePerPage = (e) => {
        setPerPageProducts(parseInt(e.target.value || 30));
    }

    console.log(currentPageProducts);

    return (
        <section>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center pt-28'>
                    <div>
                        <h3 className='font-Josefin text-2xl text-[#151875] font-bold pb-2'>Ecommerce Acceories & Fashion item </h3>
                        <h5 className='font-Lato text-sm text-[#8A8FB9]'>About 9,620 results (0.62 seconds)</h5>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h4 className='font-Lato text-base text-[#3F509E]'>Per Page:</h4>
                        <div>
                            <input onChange={handlePerPage} className='w-14 h-8 border-2 outline-none pl-3' type="text" />
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h3 className='font-Lato text-base text-[#3F509E]'>Sort By:</h3>
                        <select name="" id="" className='text-sm font-Lato text-[#8A8FB9] px-2 border-2 py-2 outline-none'>
                            <option value="">Best Match</option>
                            <option value="">Most Popular</option>
                            <option value="">Featured</option>
                        </select>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-2'>
                            <div>
                                <h3 className='font-Lato text-base text-[#3F509E]'>View:</h3>
                            </div>
                            <div className='flex items-center gap-2' >
                                <HiViewGrid className='text-[#151875] text-xl' />
                                <MdViewList className='text-[#151875] text-2xl' />
                            </div>
                        </div>
                        <div>
                            <input className='w-44 h-8 outline-none pl-4 border-2' type="text" />
                        </div>
                    </div>
                </div>
                <div className='pt-24 flex justify-between'>
                    <div className='w-[20%]'>
                        <div className=''>
                            <h3 onClick={() => setCategoryShow(!categoryShow)} className='flex items-center justify-between font-Josefin font-bold text-xl text-[#151875]'>Shop by Category<BiSolidDownArrow className='text-[#151875] text-base' /></h3>
                            {categoryShow &&
                                <ul className='h-52 overflow-y-scroll font-Lato text-[#151875]'>
                                    {category.map((product) => (
                                        // eslint-disable-next-line react/jsx-key
                                        <li className='capitalize cursor-pointer py-3 border-b-2 text-base' onClick={() => handleCategory(product)}>{product}</li>
                                    ))}
                                </ul>
                            }
                        </div>
                        <div className='pt-10'>
                            <h3 onClick={() => setBrandShow(!brandShow)} className='flex items-center justify-between font-Josefin font-bold text-xl text-[#151875]'>Shop by Brand<BiSolidDownArrow className='text-[#151875] text-base' /></h3>
                            {brandShow &&
                                <ul className='h-52 overflow-y-scroll font-Lato text-[#151875]'>
                                    {brand.map((product) => (
                                        <li key={product} className='capitalize cursor-pointer py-3 border-b-2 text-base' onClick={() => handleBrand(product)}>{product}</li>
                                    ))}
                                </ul>
                            }
                        </div>
                        <div className='pt-10'>
                            <h3 onClick={() => setColorShow(!colorShow)} className='flex items-center justify-between font-Josefin font-bold text-xl text-[#151875]'>Shop by Color<BiSolidDownArrow className='text-[#151875] text-base' /></h3>
                            {colorShow &&
                                <ul className='h-52 overflow-y-scroll font-Lato text-[#151875]'>
                                    <li className='capitalize cursor-pointer py-3 border-b-2 text-base relative after:absolute after:w-3 after:h-3 after:rounded-full after:bg-black after:top-1/2 after:left-0 after:-translate-y-1/2 pl-6'>Color 1</li>
                                    <li className='capitalize cursor-pointer py-3 border-b-2 text-base relative after:absolute after:w-3 after:h-3 after:rounded-full after:bg-[#DE9034] after:top-1/2 after:left-0 after:-translate-y-1/2 pl-6'>Color 2</li>
                                    <li className='capitalize cursor-pointer py-3 border-b-2 text-base relative after:absolute after:w-3 after:h-3 after:rounded-full after:bg-[#EC42A2] after:top-1/2 after:left-0 after:-translate-y-1/2 pl-6'>Color 3</li>
                                    <li className='capitalize cursor-pointer py-3 border-b-2 text-base relative after:absolute after:w-3 after:h-3 after:rounded-full after:bg-[#8568FF] after:top-1/2 after:left-0 after:-translate-y-1/2 pl-6'>Color 4</li>
                                    <li className='capitalize cursor-pointer py-3 border-b-2 text-base relative after:absolute after:w-3 after:h-3 after:rounded-full after:bg-[#B90B0C] after:top-1/2 after:left-0 after:-translate-y-1/2 pl-6'>Color 5</li>
                                    <li className='capitalize cursor-pointer py-3 border-b-2 text-base relative after:absolute after:w-3 after:h-3 after:rounded-full after:bg-[#DDDCD9] after:top-1/2 after:left-0 after:-translate-y-1/2 pl-6'>Color 6</li>
                                    <li className='capitalize cursor-pointer py-3 border-b-2 text-base relative after:absolute after:w-3 after:h-3 after:rounded-full after:bg-[#87B951] after:top-1/2 after:left-0 after:-translate-y-1/2 pl-6'>Color 7</li>
                                </ul>
                            }
                        </div>
                        <div className='pt-10'>
                            <h3 onClick={() => setPriceShow(!priceShow)} className='flex items-center justify-between font-Josefin font-bold text-xl text-[#151875]'>Shop by Price<BiSolidDownArrow className='text-[#151875] text-base' /></h3>
                            {priceShow &&
                                <ul className='h-52 overflow-y-scroll font-Lato text-[#151875]'>
                                    <li onClick={() => handlePrice(0.00, 100.00)} className='capitalize cursor-pointer py-3 border-b-2 text-base'>$0.00 - $100.00</li>
                                    <li onClick={() => handlePrice(100.01, 200.00)} className='capitalize cursor-pointer py-3 border-b-2 text-base'>$100.01 - $200.00</li>
                                    <li onClick={() => handlePrice(200.01, 400.00)} className='capitalize cursor-pointer py-3 border-b-2 text-base'>$200.01 - $400.00</li>
                                    <li onClick={() => handlePrice(400.01, 600.00)} className='capitalize cursor-pointer py-3 border-b-2 text-base'>$400.01 - $600.00</li>
                                    <li onClick={() => handlePrice(600.01, 100000.99)} className='capitalize cursor-pointer py-3 border-b-2 text-base'>$600.01 - $100000.99</li>
                                </ul>
                            }
                        </div>
                    </div>
                    <div className='w-[78%] flex flex-wrap justify-between'>
                        {categoryProducts.length > 0 ?
                            categoryProducts.map((product, index) => (
                                <div key={index} className='w-[32%] group pb-5'>
                                    <div className='w-full py-14 flex items-center justify-center relative bg-[#F6F7FB] group-hover:bg-[#EBF4F3] overflow-hidden'>
                                        <img className='h-44 object-cover' src={product.thumbnail} alt="shopimg" />
                                        <div className='cursor-pointer flex flex-col items-center absolute gap-3 -bottom-40 left-5 group-hover:bottom-5 duration-500 ease-in-out'>
                                            <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><BsCart3 className='text-[#151875] text-lg' /></div>
                                            <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><FaRegHeart className=' text-[#151875] text-lg' /></div>
                                            <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><LuSearchX className='text-[#151875] text-lg' /></div>
                                        </div>
                                    </div>
                                    <div className='text-center pt-5'>
                                        <h2 className='font-Josefin text-lg font-bold text-[#151875] overflow-hidden text-ellipsis whitespace-nowrap'>{product.title}</h2>
                                        <div className='flex gap-2 pt-2 justify-center'>
                                            <div className='w-3 h-3 rounded-full bg-[#DE9034]'></div>
                                            <div className='w-3 h-3 rounded-full bg-[#EC42A2]'></div>
                                            <div className='w-3 h-3 rounded-full bg-[#8568FF]'></div>
                                        </div>
                                        <div className='flex gap-3 pt-4 justify-center'>
                                            <h5 className='font-Josefin text-sm text-[#151875]'>{product.price}</h5>
                                            <h5 className='font-Josefin text-sm text-[#FB2E86] line-through'>$26.00 </h5>
                                        </div>
                                    </div>
                                </div>
                            ))
                            :
                            priceProducts.length > 0 ?
                                priceProducts.map((product, index) => (
                                    <div key={index} className='w-[32%] group pb-5'>
                                        <div className='w-full py-14 flex items-center justify-center relative bg-[#F6F7FB] group-hover:bg-[#EBF4F3] overflow-hidden'>
                                            <img className='h-44 object-cover' src={product.thumbnail} alt="shopimg" />
                                            <div className='cursor-pointer flex flex-col items-center absolute gap-3 -bottom-40 left-5 group-hover:bottom-5 duration-500 ease-in-out'>
                                                <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><BsCart3 className='text-[#151875] text-lg' /></div>
                                                <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><FaRegHeart className=' text-[#151875] text-lg' /></div>
                                                <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><LuSearchX className='text-[#151875] text-lg' /></div>
                                            </div>
                                        </div>
                                        <div className='text-center pt-5'>
                                            <h2 className='font-Josefin text-lg font-bold text-[#151875] overflow-hidden text-ellipsis whitespace-nowrap'>{product.title}</h2>
                                            <div className='flex gap-2 pt-2 justify-center'>
                                                <div className='w-3 h-3 rounded-full bg-[#DE9034]'></div>
                                                <div className='w-3 h-3 rounded-full bg-[#EC42A2]'></div>
                                                <div className='w-3 h-3 rounded-full bg-[#8568FF]'></div>
                                            </div>
                                            <div className='flex gap-3 pt-4 justify-center'>
                                                <h5 className='font-Josefin text-sm text-[#151875]'>{product.price}</h5>
                                                <h5 className='font-Josefin text-sm text-[#FB2E86] line-through'>$26.00 </h5>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                :
                                currentPageProducts.map((product) => (
                                    <div key={product.id} className='w-[32%] group pb-5'>
                                        <div className='w-full py-14 flex items-center justify-center relative bg-[#F6F7FB] group-hover:bg-[#EBF4F3] overflow-hidden'>
                                            <img className='h-44 object-cover' src={product.thumbnail} alt="shopimg" />
                                            <div className='cursor-pointer flex flex-col items-center absolute gap-3 -bottom-40 left-5 group-hover:bottom-5 duration-500 ease-in-out'>
                                                <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><BsCart3 className='text-[#151875] text-lg' /></div>
                                                <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><FaRegHeart className=' text-[#151875] text-lg' /></div>
                                                <div className='w-10 h-10 hover:bg-[#FFFFFF] rounded-full flex items-center justify-center'><LuSearchX className='text-[#151875] text-lg' /></div>
                                            </div>
                                        </div>
                                        <div className='text-center pt-5'>
                                            <h2 className='font-Josefin text-lg font-bold text-[#151875] overflow-hidden text-ellipsis whitespace-nowrap'>{product.title}</h2>
                                            <div className='flex gap-2 pt-2 justify-center'>
                                                <div className='w-3 h-3 rounded-full bg-[#DE9034]'></div>
                                                <div className='w-3 h-3 rounded-full bg-[#EC42A2]'></div>
                                                <div className='w-3 h-3 rounded-full bg-[#8568FF]'></div>
                                            </div>
                                            <div className='flex gap-3 pt-4 justify-center'>
                                                <h5 className='font-Josefin text-sm text-[#151875]'>{product.price}</h5>
                                                <h5 className='font-Josefin text-sm text-[#FB2E86] line-through'>$26.00 </h5>
                                            </div>
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                </div>
                <div className='flex gap-2 justify-center text-[#3f519e77] pt-12'>
                    <button onClick={handlePrePage} className='px-4 py-2 border-2 text-base'>Previous</button>
                    {pages.map((pageNumber) => (
                        <button key={pageNumber} onClick={() => handlePageNumber(pageNumber)} className={`px-4 py-2 border-2 text-base ${pageNumber === currentPage ? "bg-[#FB2E86] text-white" : ''}`}>{pageNumber}</button>
                    ))}
                    <button onClick={handleNextPage} className='px-4 py-2 border-2 text-base'>Next</button>
                </div>
            </div>

        </section>
    )
}

export default InnerShop