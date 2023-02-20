import React from "react";
import  './Button.css';

function RestaurantTabs({filterCategory, tabsData}){
    return(
        <>
 <div className="text-center my-4">
 {
 tabsData.map((category, index)=>{
      return (
        <button 
            className='btn--outline btn--large'
            onClick={()=> filterCategory(category)} key={index}>{category}</button>
      )
 })
 }
</div>
        </>
    )
}
export default RestaurantTabs;

