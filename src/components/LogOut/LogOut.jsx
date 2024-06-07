import styles from './LogOut.module.css';
import Button from "../shared/Button/Button.jsx";
import {useForm} from "react-hook-form";
import ModalTitle from "../shared/ModalTitle/ModalTitle.jsx";
import {useEffect, useState} from "react";

export const LogOut = () => {
    const [modalTitleText, setModalTitleText] = useState('Log Out');
    const [modalBtnText, setModalBtnText] = useState('CREATE');
    const { handleSubmit} = useForm();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setModalTitleText('Are you logging out?');
                setModalBtnText('LOG OUT');
            } else {
                setModalTitleText('Log Out');
                setModalBtnText('CREATE');
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const onSubmit= () => {
        alert( `Дані з форми відправлено: `);
    };
    return (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            <ModalTitle text={modalTitleText}/>
            <p className={styles.text}>
                You can always log back in at my time.
            </p>
            <ul className={styles.list}>
                <Button type="submit" text={modalBtnText} variant={'log_follow'}/>
                <Button type="button" text="CANCEL" variant={'log_cancel'}/>
            </ul>
        </form>
    )
}