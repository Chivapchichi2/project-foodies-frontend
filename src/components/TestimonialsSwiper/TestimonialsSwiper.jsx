import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './TestimonialsSwiper.module.css';
import {Autoplay, Pagination} from 'swiper/modules';
import {TestimonialCard} from "../TestimonialCard/TestimonialCard.jsx";

export default function TestimonialsSwiper({getTestimanials}) {
    return (
        <section>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Autoplay]}
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
        </section>
    );
}