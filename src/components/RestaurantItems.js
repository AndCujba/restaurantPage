import React from "react";

function RestaurantItems({data}){
    return (
        <div className="row ">
        {
          data.map((value)=>{
           const {id, image, title, description} = value;
           return (
            <div className="col-sm-3 my-3" key={id}>
             <div className="card bg-dark text-center">
                 <img src={image} className="img-fluid" style={{height:"200px"}}/>
                 <a href="#" class="btn btn-link"><h3>{title}</h3></a>
                 <p>{description}</p>
                 
            </div>
         </div>
           )
          })
        }
</div>
    )
}
export default RestaurantItems;