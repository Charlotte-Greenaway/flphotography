import React,{useEffect} from 'react';
//import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef} from 'react';
import ReviewCard from './reviewCard';

const ReviewsSlider = ({ reviews }) => {
    const swiperRef = useRef(null);
    const reviewCardRefs = useRef(new Array(reviews.length));

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper;
            swiper.on('slideChange', () => {
                reviewCardRefs.current.forEach(ref => ref && ref.resetExpanded());
            });
        }
    }, [reviewCardRefs]);

    return (
        <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                    <ReviewCard 
                        ref={el => reviewCardRefs.current[index] = el}
                        {...review} 
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ReviewsSlider;