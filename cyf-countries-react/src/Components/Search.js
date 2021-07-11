import React from "react";

const Search = ({inputUpdate, input}) => {
 

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={inputUpdate} value={input}></input>
            {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
            </form>
            </nav>
        </div>
    )
}

export default Search
