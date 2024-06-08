import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './TestimonialsSwiper.module.css';
import {Pagination} from 'swiper/modules';
import {TestimonialCard} from "../TestimonialCard/TestimonialCard.jsx";

export default function TestimonialsSwiper({getTestimanials}) {
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
                {getTestimanials.map(({owner, testimonial, _id})=>{
                    return (
                        <SwiperSlide key={_id}>
                            <TestimonialCard
                                text={testimonial }
                                name={owner.name}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    );
}