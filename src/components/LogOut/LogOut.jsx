import styles from './LogOut.module.css';
import Button from "../shared/Button/Button.jsx";
import {useForm} from "react-hook-form";
import ModalTitle from "../shared/ModalTitle/ModalTitle.jsx";
import {useEffect, useState} from "react";

export const LogOut = ({setModalLogOutOpen}) => {
    const [modalTitleText, setModalTitleText] = useState('Log Out');
    const { handleSubmit} = useForm();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setModalTitleText('Are you logging out?');
            } else {
                setModalTitleText('Log Out');
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
                You can always log back in at any time.
            </p>
            <ul className={styles.list}>
                <Button
                    type="submit"
                    text="Log out"
                    variant={'log_follow'}/>
                <Button
                    type="button"
                    text="Cancel"
                    variant={'log_cancel'}
                    onClick={() => setModalLogOutOpen(false)}/>
            </ul>
        </form>
    )
}