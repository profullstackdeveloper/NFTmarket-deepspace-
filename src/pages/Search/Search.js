import React, { useState } from "react";
import Header from "../../components/Header";
import searchIcon from "../../assets/img/icons/search.svg";
import SmallButton from "../../components/Button/SmallButton";
import Card from '../../components/Card'
import { Select } from "antd";
import { Slider } from "antd";

const { Option } = Select;


const buttonnames = ['All items','Art','Game','Photography','Music','Video']
const Search = () => {
  const handleChange = () => {};
  return (
    <div>
      <Header />
      <div className="d-flex flex-column categoy">
        <div className="category_top d-flex flex-row align-items-center">
          <div className="category_title">Type your keywords</div>
          <div className="category_search d-flex flex-row align-items-center">
            <input
              type="text"
              placeholder="Search..."
              className="catogory_search_input"
            />
            <img src={searchIcon} className="seach-icon" />
          </div>
        </div>
        <div className="category_sort d-flex flex-row justify-content-between align-items-center">
          <div className="sort-filter-container d-flex flex-row align-items-center">
            <Select
              defaultValue="Trending Now"
              style={{ width: 256 }}
              onChange={handleChange}
            >
              <Option value="Trending Now">Trending Now</Option>
              <Option value="Oldest">Oldest</Option>
            </Select>
            <div style={{ width: "195px" ,marginLeft:'20px'}}>
              <div style={{fontSize:'12px'}}>  Price Range</div>
              <Slider defaultValue={10} max={20} tooltipVisible />
              <div className="d-flex flex-row justify-content-between" style={{marginTop:'15px'}}>
                <div style={{fontWeight:500}}>0 DXE</div>
                <div style={{fontWeight:500}}>20 DXE</div>
              </div>
              
            </div>
          </div>
          <div className="sort-button-container">
            {buttonnames.map((item,index) =>{
             return  <SmallButton name={item} key={index} />
            })}
          </div>
        </div>
        <div className="card-list d-flex flex-row flex-wrap">
            <Card />
            <Card />
            <Card />

          </div>
      </div>
    </div>
  );
};

export default Search;
