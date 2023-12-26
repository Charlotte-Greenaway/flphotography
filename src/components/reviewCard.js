import React, { useState, forwardRef, useImperativeHandle } from 'react';

const ReviewCard = forwardRef(({ name, date, content }, ref) => {
    const [isExpanded, setIsExpanded] = useState(false);

    useImperativeHandle(ref, () => ({
        resetExpanded: () => {
            setIsExpanded(false);
        }
    }));

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const displayedContent = isExpanded ? content : `${content.substring(0, 200)}...`;
    const showSeeMore = content.length > 200;

    return (
        <div className="mx-auto bg-white shadow-md overflow-hidden w-3/4 m-4 flex justify-center">
            <div className="p-8">
                <div className="tracking-wide text-sm text-indigo-500 font-semibold">{name}</div>
                <p className="block mt-1 text-lg leading-tight font-medium text-black">
                    {showSeeMore ? displayedContent : content}
                </p>
                {showSeeMore && (
                    <button 
                        onClick={toggleExpanded} 
                        className="mt-4 text-indigo-500 hover:text-indigo-600"
                    >
                        {isExpanded ? 'See Less' : 'See More'}
                    </button>
                )}
                <p className="mt-2 text-gray-500">{date}</p>
            </div>
        </div>
    );

});

export default ReviewCard;
