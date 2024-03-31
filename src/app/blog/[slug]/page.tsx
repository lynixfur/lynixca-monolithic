import moment from "moment";
import { useEffect, useState } from "react";
import { notFound } from 'next/navigation';
import ArticleBody from "@/components/blog/ArticleBody";

async function getArticle(slug: string) {
    try {
        const response = await fetch(`https://api.lynix.ca/v1/blog/${slug}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("An error occurred while fetching the article:", error);
        // You can decide how to handle the error here. For example, you might return a default value:
        return null;
    }
}

export default async function Blog({ params }: { params: { slug: string } }) {

    const data: any = await getArticle(params.slug);

    if (!data) {
        // Return a 404 page if the article was not found
        return notFound();
    }

    return (
        <>
            <main className="flex flex-col justify-center items-center">
                <div className="w-full" style={{ "background": "url(/torontofe.jpg)", "backgroundSize": "cover", "backgroundPosition": "center" }}>
                    <div className="w-full h-[400px] flex items-center justify-center bg-cyan-950 bg-opacity-80">
                        <div className="w-full md:w-3/4 px-5 md:px-0">
                            <h1 className="text-3xl md:text-5xl font-semibold text-cyan-500 text-center md:text-left">{data.title}</h1>
                            <p className="text-center mt-3 text-neutral-300 text-xl flex items-center flex-col md:flex-row"><span className="mr-2">Posted {moment(data.created_at).format('MMMM Do YYYY')} by</span> <span className="flex items-center"><img src="/fursona/gallery/pfp.png" className="h-6 w-6 rounded-full mr-1" /> <span className="font-semibold">{data.author}</span></span></p>
                            {/* Blog Tags */}
                            <div className="hidden md:flex items-center mt-5">
                                {/* data.tags.map((tag: any) => <a href="#" className="bg-cyan-600 text-neutral-900 font-bold px-5 py-3 rounded-full mr-2">{tag}</a>)*/}
                                {data.is_furry && <a href="#" className="bg-green-600 text-neutral-900 font-bold px-5 py-1.5 rounded-full mr-2">Furry</a>}
                                {data.is_furry && <a href="#" className="bg-green-600 text-neutral-900 font-bold px-5 py-1.5 rounded-full mr-2">Furry Convention</a>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-16 flex flex-col items-start container mt-10   md:px-0 px-5">
                    <ArticleBody content={data.content} />
                </div>

            </main>
        </>
    );
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const data: any = await getArticle(params.slug);

    if (!data) {
        return {
            title: "Article Not Found",
            description: "The article you are looking for could not be found."
        };
    }

    return {
        title: `Lynix Blog - ${data.title}`,
        description: data.content_desc,
        keywords: ['Furry'],
        authors: [{ name: 'Lynix' }],
    }
}