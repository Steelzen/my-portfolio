import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const PortfolioList = () => {
    const [dataportfolio, setDataportfolio] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get(
            "https://steelzen-website.herokuapp.com/mydata/project/list"
          );
          const data = response.data;
          setDataportfolio(data);
        } catch (error) {
          // Handle error if needed
        }
      }
  
      fetchData();
    }, []);

    return ( 
        <div className="mb-5 po_items_ho">
            {dataportfolio.map((data, i) => {
                return (
                    <div key={i} className="po_item">
                        <img src={data.img_src} alt="" />
                        <div className="content">
                            <p>{data.content}</p>
                            <p>{data.additional_info}</p>
                            <div className="link">
                                <a href={data.site_link}>Demo</a>
                                <a href={data.code_link}>Github</a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
 
export default PortfolioList;