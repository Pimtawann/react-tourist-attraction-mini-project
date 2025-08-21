import CategoryTags from "./CategoryTags";
import { useState } from "react";


function TravelArticleCard(props) {
    const coverSrc = props.photos?.[0];
    const thumbs = props.photos?.slice(1, 4) ?? [];
    const [copied, setCopied] = useState(false);

    function truncateText(str = "", max = 100) {
        if (!str) return "";
        return str.length <= max ? str : str.slice(0, max).trimEnd() + "...";

    }

    const handleCopy = async () => {
        await navigator.clipboard.writeText(props.url);
        setCopied(true);
    }

    return (
        <div className="flex w-[850px] items-center">
        <div className="rounded-2xl shadow-md overflow-hidde w-95 h-50">
            <img src={coverSrc} alt={props.title} className="w-95 h-50 rounded-xl object-cover"/>
        </div>
        <div className="p-4">
            <a href={props.url} target="_blank" className="text-xl font-semibold hover:underline text-slate-800">{props.title}</a>
            <p className="text-slate-600">{truncateText(props.description, 100)}</p>
            <a href={props.url} target="_blank" rel="noreferrer" className="text-sky-500 underline hover:text-sky-700">อ่านต่อ</a>
            <div className="flex flex-wrap gap-2">
            <CategoryTags tags={props.tags} onTagClick={props.onTagClick} className="px-2 py-1 rounded cursor-pointer "/>
            </div>
            <div className="flex gap-6 mt-2 overflow-auto">
                {thumbs.map((src, i)=>(
                    <img key={src} src={src} alt={`${props.title}-thumb-${i+1}`} className="w-20 h-20 object-cover rounded-lg"/>
                ))}
            </div>

        </div>
        <div className="mt-4 pt-37">
            <img
              src="/copy.png"
              alt="copy link"
              onClick={handleCopy}
              className="w-13 h-11 cursor-pointer opacity-70 hover:opacity-100"
            />
        </div>
        </div>
    );
};

export default TravelArticleCard;
