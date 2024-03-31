import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import rehypeRaw from "rehype-raw";

type Props = {
    content: string
}

const ArticleBody = ({ content }: Props) => {
    return (
        <div className="container mx-0 md:mx-14">
            <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                className="prose prose-invert max-w-[1000px]"
                components={{
                    img: (props: any) => (
                        <Image src={props.src} alt={props.alt} width={400} height={200}/>
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}

export default ArticleBody