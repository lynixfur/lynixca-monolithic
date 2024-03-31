import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

type Props = {
    content: string
}

const ArticleBody = ({ content }: Props) => {
    return (
        <div className="container mx-14">
            <ReactMarkdown
                className="prose prose-invert max-w-[1000px]"
                components={{
                    img: (props: any) => (
                        <Image src={props.src} alt={props.alt} width={200} height={200}/>
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}

export default ArticleBody