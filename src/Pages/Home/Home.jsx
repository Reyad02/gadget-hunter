import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../../Components/Hero/Hero";

const Home = () => {
    const [search, setSearch] = useState(null); /// contains searching value

    /// normal pagination with gadgets
    const [gadgets, setGadgets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 12;
    const [totalPage, setTotalPage] = useState(0)

    const [priceSort, setPriceSort] = useState(null);
    const [dateSort, setDateSort] = useState(null);

    const [catgories, setCategories] = useState([]);
    const [filterCategory, setFilterCategory] = useState("none");

    const [brands, setBrands] = useState([]);
    const [filterBrand, setFilterBrand] = useState("none");

    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);

    const handleSearchChange = (e) => {
        setSearch(e.target.value)
        setCurrentPage(1);
    }

    const pageWithGadgets = (page) => {
        axios.get("/gadgets", {
            params: {
                page: page,
                limit: postPerPage,
                sortPrice: priceSort,
                sortDate: dateSort,
                filterCategory: filterCategory,
                filterBrand: filterBrand,
                minPrice: minPrice,
                maxPrice: maxPrice,
                search: search
            }
        })
            .then(res => {
                console.log(res.data.allGadgets)
                setGadgets(res.data.allGadgets)
                setCurrentPage(res.data.page);
                setTotalPage(res.data.totPages);
            }
            )
    }

    /// normal pagination with gadgets and all result
    useEffect(() => {
        pageWithGadgets(currentPage)
    }, [currentPage, priceSort, dateSort, filterCategory, filterBrand, minPrice, maxPrice, search])

    useEffect(() => {
        axios.get("/category")
            .then(res => {
                setCategories(res.data);
            })
            .catch(err => {
                console.error("Error fetching categories:", err);
            });

        // Fetch brands
        axios.get("/brand")
            .then(res => {
                setBrands(res.data);
            })
            .catch(err => {
                console.error("Error fetching brands:", err);
            });
    }, [])


    const handlePage = (page) => {
        if (page > 0 && page <= totalPage) {
            pageWithGadgets(page)
        }
    }

    return (
        <div>
            <Helmet>
                <title>Gadget Hunter - Home</title>
            </Helmet>
            <div className="max-w-5xl mx-auto">
                <label className="input input-bordered  flex items-center gap-2 bg-transparent border-[#58CCF5]">
                    <input type="text" name="searchQuery" className="grow bg-transparent text-white" placeholder="Search using product name..." onInput={handleSearchChange} />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 text-white"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                    </svg>
                </label>
            </div>
            <div className="mt-8 flex flex-col items-center lg:items-stretch lg:flex-row justify-between">
                <div className="drawer lg:drawer-open lg:grow-0 lg:shrink-1 w-64">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center mb-8 lg:mb-0">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                            Filter
                        </label>
                    </div>
                    <div className="drawer-side z-50">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu  text-white min-h-full p-4 w-64 space-y-4">
                            {/* Sidebar content here */}
                            <div className="pt-3 px-2 rounded-xl pb-4 bg-base-300">
                                <p className="text-lg font-semibold border-b-2 pb-2 mb-2 ">Brand Name</p>
                                <select name="priceSort" id="" className="p-1 w-full" onChange={(e) => {
                                    setFilterBrand(e.target.value);
                                    setCurrentPage(1);
                                }}  >
                                    <option value="none" >All Brand</option>
                                    {
                                        brands.map((brand, idx) => <option key={idx} value={`${brand}`}>{brand}</option>)
                                    }
                                </select>

                                <p className="text-lg font-semibold border-b-2 pb-2 mb-2 mt-4 ">Category Name</p>
                                <select name="priceSort" id="" className="p-1 w-full " onChange={(e) => {
                                    setFilterCategory(e.target.value);
                                    setCurrentPage(1);
                                }}  >
                                    <option value="none" >All Category</option>
                                    {
                                        catgories.map((category, idx) => <option key={idx} value={`${category}`}>{category}</option>)
                                    }
                                </select>

                                <p className="text-lg font-semibold border-b-2 pb-2 mb-2 mt-4">Price Range</p>
                                <div className="flex justify-between px-2" >
                                    <input className="w-20 p-1" type="text" placeholder="Min" onChange={(e) => { setMinPrice(e.target.value ? parseFloat(e.target.value) : null); setCurrentPage(1); }} />
                                    <input className="w-20 p-1" type="text" placeholder="Max" onChange={(e) => { setMaxPrice(e.target.value ? parseFloat(e.target.value) : null); setCurrentPage(1); }} />
                                </div>

                            </div>

                            <div className=" px-2 rounded-xl pb-4 bg-base-300">
                                <p className="text-lg font-semibold border-b-2 pb-2 mb-2 mt-4">Price</p>
                                <select name="priceSort" id="" className="p-1 w-full" onChange={(e) => setPriceSort(e.target.value)}>
                                    <option value="none" hidden={true}>Select an Option</option>
                                    <option value="low">Low to High</option>
                                    <option value="high">High to Low</option>
                                </select>

                                <p className="text-lg font-semibold border-b-2 pb-2 mb-2 mt-4">Date</p>
                                <select name="dateSort" id="" className="p-1 w-full" onChange={(e) => setDateSort(e.target.value)}>
                                    <option value="none" hidden={true}>Select an Option</option>
                                    <option value="new">Newest </option>
                                    <option value="old">Oldest</option>
                                </select>
                            </div>

                        </ul>
                    </div>
                </div>


                <div className=" lg:grow lg:shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {gadgets.length > 0 ?
                            gadgets.map((gadget, idx) =>
                                <div className="z-10" key={idx}>
                                    <div className="card bg-base-100 md:w-96 shadow-xl">
                                        <figure>
                                            <img
                                                src={gadget.image}
                                                alt={gadget.name} 
                                                className="h-56"/>
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">
                                                {gadget.name}
                                                {/* <div className="badge badge-secondary">NEW</div> */}
                                            </h2>
                                            <p>${gadget.price}.00</p>
                                            <p>Added Date: {new Date(gadget.creationDate).toLocaleDateString()}</p>
                                            <p>{gadget.description.length <= 50 ? gadget.description : `${gadget.description.slice(0, 50)}...`}</p>
                                            <div className="card-actions justify-end">
                                                <div className="badge badge-outline">{gadget.brandName}</div>
                                                <div className="badge badge-outline">{gadget.category}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) :
                            <p className="text-xl font-semibold col-span-1 md:col-span-2 lg:col-span-3 text-center mt-4 md:mt-8 lg:mt-32">Nothing Found</p>
                        }
                    </div>
                    <div className="flex justify-center mt-4">
                        {gadgets.length > 0 && (
                            <div className="join">
                                <button className="join-item btn btn-outline a" onClick={() => handlePage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                                <button className="join-item btn btn-outline" onClick={() => handlePage(currentPage + 1)} disabled={currentPage === totalPage}>Next</button>
                            </div>
                        )
                        }

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;