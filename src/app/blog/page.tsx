import Image from "next/image";

export default function Home() {
    const posts = [
        {
            id: 2,
            title: 'Nuit Blanche - A reveal of my new fursuit',
            href: '#',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
            imageUrl:
                '/nuit.jpg',
            date: 'Oct 6, 2024',
            datetime: '2020-03-16',
            category: { title: 'Furry Conventions', href: '#' },
        },
        {
            id: 1,
            title: 'How Furnal Equinox Transformed My Life?',
            href: '#',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
            imageUrl:
                '/fe2024/zee.jpg',
            date: 'Mar 20, 2024',
            datetime: '2020-03-16',
            category: { title: 'Furry Conventions', href: '#' },
        },
    ]

    return (
        <main>
            <div className="relative isolate overflow-hidden bg-gray-900">
                <img
                    src="/hotel.jpg"
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="w-full px-6 py-24 sm:py-32 lg:px-8" style={{ background: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(10px)", boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)" }}>
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Blog
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Explore my personal reflections and musings on a mix of topics, including furries, IT, and more. Join me as I delve into technology trends, the furry community, and other intriguing subjects.
                        </p>
                    </div>
                </div>
            </div>
            <div className="py-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Start Filters */}
                    <div className="flex md:w-2/4">
                        <div className="flex rounded-md shadow-sm w-full">
                            <div className="relative flex-grow focus-within:z-10">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg
                                        className="h-5 w-5 text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    name="desktop-search-candidate"
                                    id="desktop-search-candidate"
                                    className="bg-neutral-900 w-full rounded-2xl border-0 py-1.5 pl-10 text-sm leading-6 text-gray-400 ring-1 ring-inset ring-neutral-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 block"
                                    placeholder="Search articles"
                                />
                            </div>
                        </div>
                    </div>
                    {/* End Filters */}
                    <div className="mt-10">
                        <p className="text-neutral-400">There are no articles available right now.</p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 hidden">
                        {posts.map((post) => (
                            <article key={post.id} className="flex flex-col items-start justify-between">
                                <div className="relative w-full">
                                    <img
                                        alt=""
                                        src={post.imageUrl}
                                        className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                    />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                </div>
                                <div className="max-w-xl">
                                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                                        <time dateTime={post.datetime} className="text-gray-400">
                                            {post.date}
                                        </time>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                            <a href={post.href}>
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </a>
                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">{post.description}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
