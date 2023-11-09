"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";
import Link from 'next/link';
import ChatInput from '@/components/ChatInput/ChatInput';
// CAROUSEL DATA

const postData = [
        {
          name: "Room #1",
          img:"https://res.cloudinary.com/drerw82nm/image/upload/c_fill,h_630,w_630/lazypandas/dlv1pufje7mmycc7cprw.jpg",
        },
        {
          name: "Room #2",
          img:"https://res.cloudinary.com/drerw82nm/image/upload/c_fill,h_630,w_630/lazypandas/f3c70yfa1gesy4ujgt1p.jpg",
        },
        {
          name: "Room #3",
          img:"https://res.cloudinary.com/drerw82nm/image/upload/c_fill,g_center,h_630,w_630/lazypandas/dkzhq5sqnsinu8fy0xwb.jpg",
        }
      ]

// CAROUSEL SETTINGS

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center" , background: "rgba(255, 255, 255, 0.3)", padding: "28px", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center" , background: "rgba(255, 255, 255, 0.3)", padding: "28px", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 2,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            speed: 500,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="bg-bgblue marginFeature bg-featured">
                <div className='mx-auto max-w-7xl lg:px-8 '>

                    
                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>

                                <div className='bg-transparent m-3 pb-12 my-10 rounded-3xl'>
                                    <Link href="/items-list">
                                    <Image src={items.img} alt="gaby" width={636} height={620} className="rounded-2xl" />
                                    </Link> 
                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>

                <ChatInput />
            </div>

        );
    }
}
