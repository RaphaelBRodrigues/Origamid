import react from 'react';
import productsList from './products.json';

const Products = () => {

    return(
       productsList.map(({ nome , propiedades } , index) => {
        return(
           <fieldset key={index}>
            <p>{nome}</p>
            <ul>
                {propiedades.map((propiedade,i) => {
                    return <li key={i}>{propiedade}</li>
                } )}
            </ul>
        </fieldset>
        );
        })
        
    );
}

export default Products;