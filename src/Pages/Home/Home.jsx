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

    const pageWithGadgets = (page) => {
        axios.get("/gadgets", {
            params: {
                page: page,
                limit: postPerPage
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
        })
            .then(res => {
                setFullResult(res.data)
                setTotalPage(Math.ceil(res.data.length / postPerPage))
            }
            )
    }, [currentPage])


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

    const currentSearchedGadgets = searchedGadgets.slice((searchedCurrentPage - 1) * postPerPage,searchedCurrentPage * postPerPage);

    return (
        <div>
            <Helmet>
                <title>Gadget Hunter - Home</title>
            </Helmet>
            <Hero setSearch={setSearch} ></Hero>
            <div className="mt-8">
                {
                    (!search || search === "") ?
                        <>
                            <div className="grid grid-cols-3 gap-4">
                                {gadgets.map((gadget, idx) =>
                                    <div key={idx}>
                                        <div className="card bg-base-100 w-96 shadow-xl">
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
                        </>
                        :
                        <>
                            <div className="grid grid-cols-3 gap-4">
                                {
                                    currentSearchedGadgets.map((gadget, idx) =>
                                        <div key={idx}>
                                            <div className="card bg-base-100 w-96 shadow-xl">
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
                        </>
                }
            </div>
        </div>
    );
};

export default Home;