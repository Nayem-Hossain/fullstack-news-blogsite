import React from 'react';
import newsImage from "/public/images/news.jpg"
import Image from 'next/image';
const LatestNews = () => {
    let newsPost = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className='py-10'>
            <h1 className='pt-5 pb-1 border-b text-lg font-bold'>LATEST NEWS</h1>

            <div className='grid grid-cols-7 py-4 gap-10'>
                <div className='col-span-5'>
                    <div className='grid grid-cols-2 gap-5'>
                        {
                            newsPost.map((news) => {
                                return (

                                    <div className="card lg:card-side bg-slate-100 shadow-xl rounded-none hover:bg-slate-200">
                                        <figure className='w-40'><Image src={newsImage} alt="news cover photo" className='h-full' /></figure>
                                        <div className="card-body py-1 ps-4 pe-1">
                                            <h2 className="card-title">New album is released!</h2>
                                            <p className='text-xs'>Click the button to listen on Spotiwhy app.</p>
                                            <div className="card-actions">
                                                
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
                <div className='col-span-2'>
                    <p className='p-2 mb-2 text-lg font-bold border-b bg-slate-900 text-white'>POPULAR</p>
                    <div className='flex flex-col gap-4'>
                        {
                            newsPost.slice(0, 5).map((popular) => {
                                return (
                                    <article className="flex items-start space-x-6 p-6">
                                        <Image src={newsImage} alt="" width="60" height="88" className="flex-none rounded-md bg-slate-100" />
                                        <div className="min-w-0 relative flex-auto">
                                            <h2 className="font-semibold text-slate-900 truncate pr-20">News Title</h2>
                                            <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
                                                <div className="absolute top-0 right-0 flex items-center space-x-1">
                                                    <dt className="text-sky-500">
                                                       
                                                    </dt>
                                                    <dd>Date</dd>
                                                </div>
                                               
                                            </dl>
                                        </div>
                                    </article>
                                )
                            })
                        }

                    </div>
                </div>
            </div>

        </div >
    );
};

export default LatestNews;


// < div className=" w-full bg-white rounded-xl shadow-md overflow-hidden" >
//     <div className="md:flex">
//         <div className="md:flex-shrink-0">
//             <Image className="h-full w-full object-cover md:w-48" src={newsImage} alt="News Image" />
//         </div>
//         <div className="p-4">
//             <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">News Category</div>
//             <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">News Title</a>
//             <p className="mt-2 text-gray-500">News summary or description. You can add a brief overview of the news content here.</p>
//             <div className="mt-4">
//                 <span className="text-indigo-600 hover:underline">Read more</span>
//             </div>
//         </div>
//     </div>
// </div>
