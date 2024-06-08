import styles from './TestimonialCard.module.css'
import SectionTitle from "../shared/SectionTitle/SectionTitle.jsx";
import Icon from "../shared/Icon/Icon.jsx";

export const TestimonialCard = ({text, name}) => {
    return (
        <div className={styles.container}>
            <p className={styles.text_first}>What our customer say</p>
            <SectionTitle text={"Testimonials"} addStyle={styles.section_title}/>
            <div className={styles.container_svg} >
                <Icon iconId={'icon-photo-camera'} width={20} height={20}/>
            </div>
            <p className={styles.tastimonial}>{text}</p>
            <p className={styles.name}>{name}</p>
        </div>
    )
    return
}