import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NewsCard = async () => {
    return (
        <div key={news.id} className="card bg-base-100">
        <Image
            src={news.img}
            alt="blog=post1"
            style={{
                width: "100%",
                height: "auto",
            }}
            width={500}
            height={300}
        />
        <div className="card-body ps-0">
            <Link href={`/single-blog/${news.id}`}><h2 className="card-title hover:link">{news.title}</h2></Link>
            <p>{news.short}</p>
            <div className="flex justify-end">
                <div className="me-1">
                    {
                        categories.find((category) => category.id === news.category_id).name
                    }
                </div>
                <span>|</span>
                <div className="ms-1">Date: {news.updated_at.slice(0, 10)}</div>
            </div>
        </div>
    </div>
    );
};

export default NewsCard;