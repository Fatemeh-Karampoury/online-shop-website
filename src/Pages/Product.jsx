import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedeProducts from '../Components/RelatedeProducts/RelatedeProducts';


const Product = () => {
    const {all_product}= useContext(ShopContext);
    const {productId} =useParams();
    const product = all_product.find((e)=> e.id === Number(productId));
    return ( 
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product}/>
            <DescriptionBox />
            <RelatedeProducts />
        
        </div>
     );
}
 
export default Product;