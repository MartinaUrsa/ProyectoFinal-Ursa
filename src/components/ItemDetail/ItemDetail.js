import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount.js";
// Style
import "./_ItemDetail.scss";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext.js";


const ItemDetail = ( {product} ) => {

    const {pictureUrl, altImg, nombre, precio, description} = product;

    const navigate = useNavigate();

    const { onAdd } = useContext(CartContext);

    const [quantity, setQuantity] = useState(1);

    const checkStock = product.stock;

    // Creo funciones para poder sumar y restar la cantidad en ItemCount
    const handleClickResta = () => {
        quantity > 1 && setQuantity(quantity - 1);
    }

    const handleClickSuma = () => {
        quantity < checkStock && setQuantity(quantity + 1);
    }


    return (
        <div className="item-detail-container">
            <div className="item-detail">
                <img src={pictureUrl} alt={altImg}/>

                <div className="item-info">
                    <h3>{nombre}</h3>
                    <p className="price">${precio}</p>
                    <p className="description">{description}</p>

                    <div className="actions-container">
                        <ItemCount 
                            quantity={quantity} 
                            handleClickResta={handleClickResta} 
                            handleClickSuma={handleClickSuma}
                            handleOnAdd={() => {onAdd(product, quantity)}}/>  
                        {/* Botón para volver a la página anterior */}
                        <button className="volver" onClick={() => navigate(-1)}>Volver</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ItemDetail;