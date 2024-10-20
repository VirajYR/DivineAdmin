import React, { useState } from 'react'
import "./AddProduct.css"
import uploadArea from "../../assets/upload_area.svg"
const AddProduct = () => {
    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: "", image: "", category: "Women", new_price: "", old_price: ""
    })
    const imageHandler = (e) => {
        setImage(e.target.files[0]);

    }
    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
    }
    const addProduct = async () => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);
        const uploadResponse =   await fetch(`https://divinedelight.me/api/upload`, {
            method: "post",
            headers: {
                Accept: "application/json",
            },
            body: formData
        }).then((resp) => resp.json()).then((data) => { responseData = data })
        console.log("Response is ",uploadResponse);
        
        if (responseData.success) {
            product.image = responseData.image_url;
            console.log(product);
            await fetch(`https://divinedelight.me/api/addproduct`, {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product)
            }).then((resp) => resp.json()).then((data) => {
                data.success ? alert("Product Added") : alert("Failed")
            })
        }

    }
    return (
        <>
            <div className="AddProduct">
                <div className="AddProductFields">
                    <p>Product Title</p>
                    <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type Here' />

                </div>
                <div className="AddProductPrice">

                    <div className="AddProductFields">
                        <p>Price</p>
                        <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type Here' />

                    </div>
                    <div className="AddProductFields">
                        <p>Offer Price</p>
                        <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type Here' />

                    </div>
                </div>
                <div className="AddProductFields">
                    <p>Product Category</p>
                    <select value={productDetails.category} onChange={changeHandler} name="category" className='AddProductSelector'>
                        <option value="Women">Women</option>
                        <option value="Men">Men</option>
                        <option value="Kids">Kids</option>


                    </select>
                </div>
                <div className="AddProductFields">
                    <label htmlFor="file-input">
                        <img src={image ? URL.createObjectURL(image) : uploadArea} alt="Upload Area " className='AddproductThumbnailImg' />
                    </label>
                    <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />

                </div>
                <button onClick={() => { addProduct() }} className='AddProductBtn'>ADD</button>
            </div>
        </>
    )
}

export default AddProduct