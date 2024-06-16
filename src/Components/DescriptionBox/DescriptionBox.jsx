import React from 'react';
import './DescriptionBox.css';


const DescriptionBox = () => {
    return ( 
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Ullam rem nostrum quo, quae dignissimos 
                    corrupti pariatur deleniti quod aspernatur aliquam nemo
                     porro exercitationem magni ut, velit modi! Eveniet, animi recusandae.</p>
                     <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Voluptatem assumenda deserunt vel qui natus tempore quidem nobis voluptate accusantium reiciendis, mollitia magnam at repellat laboriosam, 
                        similique pariatur impedit ut exercitationem?
                     </p>
            </div>
        </div>
     );
}
 
export default DescriptionBox;
