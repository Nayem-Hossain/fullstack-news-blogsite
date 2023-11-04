import React from "react";

const HeroNews = () => {
    return (
        <div className="grid grid-cols-3 gap-5">
            <div className="carousel w-full col-span-2">
                <div id="slide1" className="carousel-item relative w-full md:h-96">
                    <img
                        src="https://zamzam.com/blog/wp-content/uploads/2021/08/shutterstock_1745937893.jpg"
                        className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                    <div className="absolute inset-0 top-60 items-center justify-center text-white text-center p-4">
                        <h4 className="text-xl font-bold">Lorem Ipsum is simply dummy text</h4>
                        <p className="text-sm">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s.
                        </p>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-96">
                    <img
                        src="https://zamzam.com/blog/wp-content/uploads/2021/08/shutterstock_1745937893.jpg"
                        className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-96">
                    <img
                        src="https://zamzam.com/blog/wp-content/uploads/2021/08/shutterstock_1745937893.jpg"
                        className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide4" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-96">
                    <img
                        src="https://zamzam.com/blog/wp-content/uploads/2021/08/shutterstock_1745937893.jpg"
                        className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div className="hero h-96" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroNews;
