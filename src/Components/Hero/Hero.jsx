
const Hero = ({ setSearch, setFilterCategory }) => {
    const handleSearchChange = (e) =>{
        // console.log("hero search", e.target.value)
        setSearch(e.target.value)
        if(e.target.value){
            setFilterCategory("none")
        }
    }
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://i.ibb.co/87vTrXZ/1-UFBZi-E5-Fia-Djciz24d-P5iw.png)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md text-white">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <label className="input input-bordered  flex items-center gap-2 bg-transparent border-white">
                        <input type="text" name="searchQuery" className="grow bg-transparent text-white" placeholder="Search" onInput={handleSearchChange} />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 text-white"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Hero;