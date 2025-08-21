import SearchBar from "./SearchBar";
import TravelArticleCard from "./TravelArticleCard";
import { useState, useEffect } from "react";
import axios from "axios";

function TravelFeed (){
    const [travelArticle, setTravelArticle] = useState([]);
    const [text, setText] = useState("")

    const getTravelData = async () => {
        try {
          const response = await axios.get(`http://localhost:4001/trips?keywords=${text}`)
          console.log("data;",response.data.data)
          setTravelArticle(response.data.data)
        } catch {
          console.error();
        }
    };
      

    useEffect(()=>{
        getTravelData();
    }, [text]);

    const handleTagClick = (tag) => {
        const words = text.split(" ").filter(Boolean);
        if (words.includes(tag)) {
            return;
        } else {
          setText([...words, tag].join(" "));
        }
      };

    return(
        <div className="max-w-[850px] mx-auto pt-12 pb-16 px-4">
        <h1 className="text-sky-600 text-5xl md:text-6xl font-semibold tracking-tight text-center">เที่ยวไหนดี</h1>
        <div className="mt-6">
            <SearchBar text={text} onTextChange={(value)=> setText(value)}/>
        </div>
        <div className="flex flex-col gap-10 mt-10 w-180">
        {travelArticle.map((item)=>{
            return(
                <div>
                    <TravelArticleCard
                       key={item.eid}
                       title={item.title}
                       description={item.description}
                       url={item.url}
                       tags={item.tags}
                       photos={item.photos}
                       onTagClick={handleTagClick}
                />
                </div>
            )
        })}
        </div>
        </div>
    );
}

export default TravelFeed;