import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import RestaurantItems from "./RestaurantItems.js";
import Data from "./Data.js";
import RestaurantTabs from "./RestaurantTabs";
import "./Restaurant.css";



function Restaurant() {
   
    const [data, setData] = useState(Data);
    const categoryData = Data.map((value)=>{
          return value.category
     });
    const tabsData= ["Toate", ...new Set(categoryData)];
    
    const filterCategory=(category) =>{
        if(category=="Toate"){
            setData(Data);
            return;
        }
       const filteredData =  Data.filter((value)=>{
           return value.category == category;
       })
       setData(filteredData);
    }
    return(
     
        <div className="container">
        <h1>Selecteaza o categroie ca sa vezi cele mai noi postari ale restaurantului nostru!</h1>
      <div className="row">
            <div className="col-sm-1">
            </div>
            <div className="col-sm-10">
            <RestaurantTabs filterCategory={filterCategory} tabsData={tabsData}/>
            <RestaurantItems  data={data} />
            </div>
            <div className="col-sm-1">
            </div>
        </div>
           
       </div>
    );
}


export default Restaurant;