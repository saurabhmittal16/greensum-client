import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const CarouselItem = ({ name, price, url }) => (
    <div
        style={{ display: 'flex', flexDirection: 'column' }}
    >
        <img src={url} />
        <span>{name}</span>
        <span>{price}</span>
    </div>
)

const Carousel = (props) => {
    const [page, setPage] = useState(0);
    const current = props.data;

    return (
        <div>
            <SwitchTransition mode="out-in">
                <CSSTransition
                    key={page === 0}
                    addEndListener={(node, done) => {
                        node.addEventListener("transitionend", done, false);
                    }}
                    classNames="fade"
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}
                    >
                        {
                            current.slice(page, page + 4).map((item, index) => {
                                return (
                                    <div key={`item_${index}`}>
                                        <CarouselItem {...item} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </CSSTransition>
            </SwitchTransition>
            <button
                onClick={() => setPage(0)}
            >
                First
            </button>
            <button
                onClick={() => setPage(4)}
            >
                Second
            </button>
        </div>
    )
}

Carousel.defaultProps = {
    data: [
        {
            name: 'First',
            price: 1,
            url: '/test-images/related1.png'
        },
        {
            name: 'Second',
            price: 2,
            url: '/test-images/related2.png'
        },
        {
            name: 'Third',
            price: 3,
            url: '/test-images/related3.png'
        },
        {
            name: 'Fourth',
            price: 4,
            url: '/test-images/related4.png'
        },
        {
            name: 'Second',
            price: 5,
            url: '/test-images/related2.png'
        },
        {
            name: 'Third',
            price: 6,
            url: '/test-images/related3.png'
        },
        {
            name: 'First',
            price: 7,
            url: '/test-images/related1.png'
        },
        {
            name: 'Fourth',
            price: 8,
            url: '/test-images/related4.png'
        },
        {
            name: 'Fourth',
            price: 9,
            url: '/test-images/related4.png'
        },
        {
            name: 'First',
            price: 10,
            url: '/test-images/related1.png'
        },
        {
            name: 'Two',
            price: 11,
            url: '/test-images/related2.png'
        },
        {
            name: 'Third',
            price: 12,
            url: '/test-images/related3.png'
        }
    ]
}

export default Carousel;