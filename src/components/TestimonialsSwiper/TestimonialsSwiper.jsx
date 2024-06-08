import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './TestimonialsSwiper.module.css';
import {Pagination} from 'swiper/modules';
import {TestimonialCard} from "../TestimonialCard/TestimonialCard.jsx";

export default function TestimonialsSwiper() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination ]}
                className={styles.container}
            >
                <SwiperSlide>
                    <TestimonialCard
                        text={'Foodies has transformed my cooking experience! With its diverse recipe collection and user-friendly interface, I can easily find, save, and cook delicious meals for any occasion. From quick dinners to elaborate feasts, this app has become my go-to kitchen companion. Highly recommended!'}
                        name={"GoIT"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialCard
                        text={'Foodies is a must-have for any home cook! With its extensive recipe collection and easy-to-use interface, I\'ve discovered new culinary delights and streamlined my meal planning. Cooking has never been this enjoyable!'}
                        name={"Foodies user"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialCard
                        text={'Thank you for the wonderful recipe for feta pasta with tomatoes and basil. It turned out to be not only tasty, but also incredibly colorful. This has become a favorite family meal!'}
                        name={"Larry Pageim"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialCard
                        text={'Thank you for the wonderful recipe for feta pasta with tomatoes and basil. It turned out to be not only tasty, but also incredibly colorful. This has become a favorite family meal!'}
                        name={"Card 4"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialCard
                        text={'Thank you for the wonderful recipe for feta pasta with tomatoes and basil. It turned out to be not only tasty, but also incredibly colorful. This has become a favorite family meal!'}
                        name={"Card 5"}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}