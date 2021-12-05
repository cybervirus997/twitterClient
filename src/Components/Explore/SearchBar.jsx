import React from 'react'
import '../../../node_modules/font-awesome/css/font-awesome.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../../App.css";

const SearchBar = () => {
    return (
        <div class="form-group has-search" style={{marginLeft:"30px",marginRight:"20px",marginBottom:"40px"}}>
        <span class="fa fa-search form-control-feedback"></span>
        <input style={{borderRadius:"60px",marginTop:"10px",marginBottom:"10px"}} type="text" className="form-control" placeholder="Search twitter" />
      </div>
    )
}

export default SearchBar
