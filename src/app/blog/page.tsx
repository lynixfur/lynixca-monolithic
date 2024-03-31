"use client"

import moment from "moment";
import { useEffect, useState } from "react";

export default function Blog() {

    // Fetch blog posts from API api.lynix.ca/articles

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('https://api.lynix.ca/v1/blog')
            .then((response) => {
                if (response.ok) {
                    response.json().then((data) => {
                        console.log(data);
                        setArticles(data);
                    });
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);


    return (
        <>
            <main className="flex flex-col justify-center items-center">
                <div className="w-full" style={{"background": "url(/fe2024/toronto.jpg)", "backgroundSize": "cover", "backgroundPosition": "center"}}>
                    <div className="w-full h-[400px] flex items-center justify-center bg-cyan-950 bg-opacity-70">
                        <div><h1 className="text-5xl font-semibold text-cyan-500 text-center">Cybernetic Blog</h1>
                            <p className="text-center mt-3 text-neutral-300 text-xl">Come on in, my digital journal is open!</p></div>
                    </div>
                </div>
                <div className="mb-16 flex flex-col items-start container mt-10   md:px-0 px-5">
                    <p className="text-neutral-500 mt-2"><i className="fa-solid fa-exclamation-triangle"/> <strong>Notice: </strong> Toughts or expressions here are my own and do not reflect the views of any organization I am associated with.</p>
                    <br/>

                    {/* Loading spinner if articles are not loaded */}
                    {articles.length == 0 && <p className="text-neutral-400 mt-5 text-2xl"><i className="fa-solid fa-spinner animate-spin"></i></p>}
                    
                    {/* Blog Posts */}

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full mt-5">
                        {articles.map((article: any) => 
                            <div key={article.id} className="bg-neutral-900 rounded-xl relative overflow-hidden flex items-stretch border border-neutral-700 w-full">
                            <div className="">
                                <img src={article.cover_image} className="rounded-t-xl object-cover object-top" />
                                <div className="p-5">
                                    <h2 className="text-xl font-semibold min-h-[60px]">{article.title}</h2>
                                    <p className="text-neutral-400 mt-2 text-sm">Published {moment(article.created_at).format('MMM Do, YYYY h:mm a')}</p>
                                    
                                    <p className="text-neutral-400 mt-2 min-h-[130px]">{article.content_desc}</p>
                                    {/* Buy Button */}
                                    <a href={`/blog/${article.slug}`} className="bg-cyan-600 text-neutral-900 font-bold px-5 py-3 rounded-full mt-50 flex items-center">Read Article <i className="ml-2 fa-solid fa-arrow-right"></i></a>
                                    <button className="bg-cyan-600 text-neutral-900 font-bold px-5 py-3 rounded-full mt-50 flex items-center opacity-50 hidden">Article Unavailable <i className="ml-2 fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                        )}


                        <div className="bg-neutral-900 rounded-xl relative overflow-hidden flex items-stretch border border-neutral-700 w-full hidden">
                            <div className="">
                                <img src="/torontofe.jpg" className="rounded-t-xl object-cover object-top" />
                                <div className="p-5">
                                    <h2 className="text-xl font-semibold min-h-[60px]">Why Furnal Equinox 2024 changed my life?</h2>
                                    <p className="text-neutral-400 mt-2 text-sm">Published Mar 29, 2024 1:32am</p>
                                    
                                    <p className="text-neutral-400 mt-2 min-h-[130px]">Furnal Equinox 2024 changed the way I see things day to day it also allowed to express myself as "Furry" and let my hobby shine in the Toronto City...</p>
                                    {/* Buy Button */}
                                    <a href="/blog/why-furnal-equinox-2024-changed-my-life" className="bg-cyan-600 text-neutral-900 font-bold px-5 py-3 rounded-full mt-50 flex items-center">Read Article <i className="ml-2 fa-solid fa-arrow-right"></i></a>
                                    <button className="bg-cyan-600 text-neutral-900 font-bold px-5 py-3 rounded-full mt-50 flex items-center opacity-50 hidden">Article Unavailable <i className="ml-2 fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    );

}