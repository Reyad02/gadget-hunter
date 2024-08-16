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

    /// searched value with search result pagination
    const [fullResult, setFullResult] = useState([]);
    const [searchedGadgets, setSearchedGadgets] = useState([])
    const [searchedCurrentPage, setSearchedCurrentPage] = useState(1);
    const [searchedTotalPage, setSearchedTotalPage] = useState(0);

    const [priceSort, setPriceSort] = useState(null);
    const [dateSort, setDateSort] = useState(null);

    const [catgories, setCategories] = useState([]);
    const [filterCategory, setFilterCategory] = useState("none");

    const [brands, setBrands] = useState([]);
    const [filterBrand, setFilterBrand] = useState("none");

    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);


    console.log("filterCategory", filterCategory);
    console.log("filterBrand", filterBrand)

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
                maxPrice: maxPrice
            }
        })
            .then(res => {
                setGadgets(res.data.allGadgets)
                setCurrentPage(res.data.page);
            }
            )
    }

    /// normal pagination with gadgets and all result
    useEffect(() => {
        pageWithGadgets(currentPage)

        axios.get("/allGadgets", {
            params: {
                sortPrice: priceSort,
                sortDate: dateSort,
                // filterCategory: filterCategory
            }
        })
            .then(res => {
                setFullResult(res.data)
                setTotalPage(Math.ceil(res.data.length / postPerPage))
            }
            )
    }, [currentPage, priceSort, dateSort, filterCategory, filterBrand, minPrice, maxPrice])


    //// for searched results and pagination 
    useEffect(() => {
        if (search) {
            const searchingGadgets = fullResult.filter(gadget =>
                gadget.name.toLowerCase().includes(search.toLowerCase())
            );
            setSearchedGadgets(searchingGadgets);
            setSearchedTotalPage(Math.ceil(searchingGadgets.length / postPerPage));
            setSearchedCurrentPage(1);

        }
        else {
            setSearchedTotalPage(0);
        }
    }, [search, fullResult]);

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
                console.log(res.data)
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

    const handleSearchedPage = (page) => {
        if (page > 0 && page <= searchedTotalPage) {
            setSearchedCurrentPage(page);
        }
    };

    const currentSearchedGadgets = searchedGadgets.slice((searchedCurrentPage - 1) * postPerPage, searchedCurrentPage * postPerPage);

    return (
        <div>
            <Helmet>
                <title>Gadget Hunter - Home</title>
            </Helmet>
            <Hero setSearch={setSearch} setFilterCategory={setFilterCategory}></Hero>

            <div className="mt-8 flex flex-col items-center lg:items-stretch lg:flex-row justify-between">
                <div className="drawer lg:drawer-open lg:grow-0 lg:shrink-1 w-64">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center mb-8 lg:mb-0">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                            Filter
                        </label>
                    </div>
                    <div className="drawer-side ">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-white min-h-full p-4 w-64 space-y-4">
                            {/* Sidebar content here */}
                            <div className="border border-red-400 pb-2">
                                <p className="text-lg font-semibold border-b-2 pb-2 mb-2 ">Brand Name</p>
                                <select name="priceSort" id="" className="p-1" onChange={(e) => setFilterBrand(e.target.value)} disabled={search}>
                                    <option value="none" >All Brand</option>
                                    {
                                        brands.map((brand, idx) => <option key={idx} value={`${brand}`}>{brand}</option>)
                                    }
                                </select>

                                <p className="text-lg font-semibold border-b-2 pb-2 mb-2 mt-4">Category Name</p>
                                <select name="priceSort" id="" className="p-1" onChange={(e) => setFilterCategory(e.target.value)} disabled={search}>
                                    <option value="none" >All Category</option>
                                    {
                                        catgories.map((category, idx) => <option key={idx} value={`${category}`}>{category}</option>)
                                    }
                                </select>

                                <p className="text-lg font-semibold border-b-2 pb-2 mb-2 mt-4">Price Range</p>
                                <div className="flex justify-between px-2" >
                                    <input className="w-20 p-1" type="text" placeholder="Min" disabled={search} onChange={(e) => setMinPrice(e.target.value ? parseFloat(e.target.value) : null)} />
                                    <input className="w-20 p-1" type="text" placeholder="Max" disabled={search} onChange={(e) => setMaxPrice(e.target.value ? parseFloat(e.target.value) : null)}/>
                                </div>

                            </div>

                            <div className="border border-red-400">
                                <p className="text-lg font-semibold border-b-2 pb-2 mb-2 mt-4">Price</p>
                                <select name="priceSort" id="" className="p-1" onChange={(e) => setPriceSort(e.target.value)}>
                                    <option value="none" hidden={true}>Select an Option</option>
                                    <option value="low">Low to High</option>
                                    <option value="high">High to Low</option>
                                </select>

                                <p className="text-lg font-semibold border-b-2 pb-2 mb-2 mt-4">Date</p>
                                <select name="dateSort" id="" className="p-1" onChange={(e) => setDateSort(e.target.value)}>
                                    <option value="none" hidden={true}>Select an Option</option>
                                    <option value="new">Newest </option>
                                    <option value="old">Oldest</option>
                                </select>
                            </div>

                        </ul>
                    </div>
                </div>

                {
                    (!search || search === "") ?
                        <div className=" lg:grow lg:shrink-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {gadgets.map((gadget, idx) =>
                                    <div key={idx}>
                                        <div className="card bg-base-100 md:w-96 shadow-xl">
                                            <figure>
                                                <img
                                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                                    alt="Shoes" />
                                            </figure>
                                            <div className="card-body">
                                                <h2 className="card-title">
                                                    {gadget.name}
                                                    <div className="badge badge-secondary">NEW</div>
                                                </h2>
                                                <p>{gadget._id}</p>
                                                <p>${gadget.price}.00</p>
                                                <p>{gadget.creationDate}</p>
                                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                                <div className="card-actions justify-end">
                                                    <div className="badge badge-outline">Fashion</div>
                                                    <div className="badge badge-outline">Products</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-center mt-4">
                                <div className="join">
                                    <button className="join-item btn btn-outline" onClick={() => handlePage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                                    <button className="join-item btn btn-outline" onClick={() => handlePage(currentPage + 1)} disabled={currentPage === totalPage}>Next</button>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="lg:grow lg:shrink-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {
                                    currentSearchedGadgets.map((gadget, idx) =>
                                        <div key={idx}>
                                            <div className="card bg-base-100 md:w-96 shadow-xl">
                                                <figure>
                                                    <img
                                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                                        alt="Shoes" />
                                                </figure>
                                                <div className="card-body">
                                                    <h2 className="card-title">
                                                        {gadget.name}
                                                        <div className="badge badge-secondary">NEW</div>
                                                    </h2>
                                                    <p>{gadget._id}</p>
                                                    <p>${gadget.price}.00</p>
                                                    <p>{gadget.creationDate}</p>
                                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                                    <div className="card-actions justify-end">
                                                        <div className="badge badge-outline">Fashion</div>
                                                        <div className="badge badge-outline">Products</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="flex justify-center mt-4">
                                <div className="join">
                                    <button className="join-item btn btn-outline" onClick={() => handleSearchedPage(searchedCurrentPage - 1)} disabled={searchedCurrentPage === 1}>Previous</button>
                                    <button className="join-item btn btn-outline" onClick={() => handleSearchedPage(searchedCurrentPage + 1)} disabled={searchedCurrentPage === searchedTotalPage}>Next</button>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default Home;