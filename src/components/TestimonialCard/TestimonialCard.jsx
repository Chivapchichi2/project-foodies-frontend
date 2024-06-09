import styles from './TestimonialCard.module.css'
import SectionTitle from "../shared/SectionTitle/SectionTitle.jsx";
import Icon from "../shared/Icon/Icon.jsx";
import {useEffect, useState} from "react";

export const TestimonialCard = ({text, name}) => {
    const [width, setWidth] = useState('40');
    const [height, setHeight] = useState('32');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setWidth('60');
                setHeight('48')
            } else {
                setWidth('40');
                setHeight('32')
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.container}>
            <p className={styles.text_first}>What our customer say</p>
            <SectionTitle text={"Testimonials"} addStyle={styles.section_title}/>
            <div className={styles.container_svg} >
                <Icon iconId={'icon-quote'} width={width} height={height}/>
            </div>
            <p className={styles.tastimonial}>{text}</p>
            <p className={styles.name}>{name}</p>
        </div>
    )
}