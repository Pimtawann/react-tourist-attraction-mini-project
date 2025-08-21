function CategoryTags(props) {
    return (
        <div className="text-slate-800 mt-1">
        <span className="mr-2">หมวด</span>
        <div className="inline">
        {props.tags.map((tag, index)=>{
            return(
            <span key={index} 
            onClick={()=>props.onTagClick(tag)} 
            className="text-slate-500 hover:underline cursor-pointer mr-1"
            >{tag}</span>
         )
        })}
        </div>
        </div>
    );
};

export default CategoryTags;