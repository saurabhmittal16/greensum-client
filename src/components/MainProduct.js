import React, { useState } from 'react';
import { Image, Rating, Icon, Form, Button } from 'semantic-ui-react';

// Handles product image
const BorderedImage = ({ path }) => {
    return (
        <div style={{
            height: "100%"
        }}>
            <Image src={path} bordered fluid/>
        </div>
    )
}

// Product rating and number or reviews
const ProductRating = ({ rating = 3, max = 5, numberOfReviews}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        }}>
            <Rating maxRating={max} defaultRating={rating} icon='star' size='small' disabled/>
            <p style={{
                fontSize:"1rem",
                marginLeft: "2rem"
            }}>({numberOfReviews} customer { numberOfReviews === 1 ? 'review' : 'reviews'})</p>
        </div>
    )
}

// Product price 
const ProductPrice = ({ price }) => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "3rem"
        }}>
            <Icon name='rupee sign' size="large"/>
            <h1 style={{
                marginTop:"1rem",
                fontSize: "2.8rem",
                fontWeight: "800"
            }}>{price}</h1>
        </div>
    )
}

// Product description
const ProductDescription = ({ description }) => {
    return(
        <div style={{
            marginTop: "3rem",
            color: "#838383"
        }}>
           <p>{description}</p>
        </div>
    )
}

// Product buy data
const ProductCheckout = ({maxItems = 7}) => {
    // creates state for handling dynamic item number change
    const [ items, setItems ] = useState(1);

    return (
        // The full form
        <div style={{
            marginTop:"3rem"
        }}>
            <Form>
                <div style={{
                    display:"flex",
                    alignItems:"center"
                }}>
                    <Form.Field>
                        <input 
                            type='text' 
                            value={items} 
                            style={{
                                width:"3rem",
                                textAlign:"center",
                                color:"#000000",
                                opacity:"1",
                                border:"none",
                                marginTop: "1rem"
                            }}
                            disabled
                        />
                    </Form.Field>
                    {/* Increment decrement Buttons */}
                    <div style={{
                        display:"flex",
                        flexDirection:"column",
                        overflowY:"hidden"
                    }}>
                        <button 
                            style={{
                                backgroundColor:"transparent",
                                border:"none",
                                color:"#276b2e"
                            }}
                            onClick={() => {
                                let check = items + 1;
                                if(check <= maxItems) {
                                    setItems(check);
                                }
                            }}
                        >
                            <Icon name="angle up" size="large"/>
                        </button>
                        <button 
                            style={{
                                backgroundColor:"transparent",
                                border:"none",
                                color:"#276b2e"
                            }}
                            onClick={() => {
                                let check = items - 1;
                                if(check >= 1) {
                                    setItems(check);
                                }
                            }}
                        >
                            <Icon name="angle down" size="large"/>
                        </button>
                    </div>
                    {/* Add to cart button */}
                    <div style={{
                        marginLeft: "2rem"
                    }}>
                        <button
                            style={{
                                backgroundColor:"#276b2e",
                                color:"#fff",
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"center",
                                border:"none",
                                width: "9.1rem",
                                fontSize:"1.1rem",
                                padding:"0.7rem"
                            }}
                        >
                            Add To Cart
                        </button>
                    </div>
                    {/* Heart/Favorites Button */}
                    <div>
                        <button 
                            style={{
                                backgroundColor:"transparent",
                                color:"#f44336",
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"center",
                                border:"none",
                                padding:"0.6rem",
                                marginLeft:"2rem",
                                boxShadow: "4px 4px 3px 0px #ccc"
                            }}
                        >
                            <Icon name="heart outline" size="large"/>
                        </button>
                    </div>
                </div>
            </Form>
        </div>
    )
}

const ProductUtilities = ({ category, tags }) => {
    return (
        <div style={{marginTop:"3rem"}}>
            {/* Category */}
            <div style={{ display:"flex", alignItems:"baseline"}}>
                <h2 style={{fontSize:"1rem", marginRight:"0.8rem"}}>Category: </h2><p>{category}</p>
            </div>

            {/* Tags from an array */}
            <div style={{ display:"flex", alignItems:"baseline"}}>
                <h2 style={{fontSize:"1rem", marginRight:"0.8rem"}}>Tag: </h2>
                <div style={{display:"flex"}}>
                    {tags.map( tag => <p key={tag} style={{padding:"0.3rem"}}>{tag}</p> )}
                </div>
            </div>

            {/* Sharing icons */}
            <div style={{ display:"flex", alignItems:"baseline"}}>
                <h2 style={{fontSize:"1rem", marginRight:"0.8rem"}}>Share: </h2>
                <div style={{display: "flex"}}>
                    <button style={{ backgroundColor:"transparent" , border:"none", marginRight:"1rem"}}>
                        <Icon name="whatsapp" size="large"/>
                    </button>
                    <button style={{ backgroundColor:"transparent" , border:"none", marginRight:"1rem"}}>
                        <Icon name="talk" size="large"/>
                    </button>
                    <button style={{ backgroundColor:"transparent" , border:"none", marginRight:"1rem"}}>
                        <Icon name="mail outline" size="large"/>
                    </button>
                    <button style={{ backgroundColor:"transparent" , border:"none", marginRight:"1rem"}}>
                        <Icon name="facebook" size="large"/>
                    </button>                   
                </div>
            </div>
        </div>
    )
}

// Final MainProduct component
export default () => {
    return (
        <div className="container main">
            <div style={ {
                display: "flex",
            }}>
                <div style={{
                    flex: 1
                }}>
                    <BorderedImage path='/test-images/cheese-one.jpg'/>
                </div> 
                <div style={{
                    flex: 1,
                    marginLeft: "2rem"
                }}>
                    <h1>Cheese Block</h1>
                    <ProductRating numberOfReviews={6}/>
                    <ProductPrice price={150}/>
                    <ProductDescription 
                        description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit autem at velit totam natus placeat consequatur. Et magni soluta nostrum voluptatibus voluptatem explicabo adipisci? Non, modi harum? Magni, eius repudiandae omnis similique dignissimos'}
                    />
                    <ProductCheckout />
                    <ProductUtilities tags={['Food', 'Cheese']} category="Food"/>
                </div>
            </div>
        </div>
    )
}