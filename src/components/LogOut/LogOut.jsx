import styles from './LogOut.module.css';
import Button from "../shared/Button/Button.jsx";
import {useForm} from "react-hook-form";
import ModalTitle from "../shared/ModalTitle/ModalTitle.jsx";
import {useLogoutMutation} from "../../store/services/authService.js";
import {useDispatch} from "react-redux";
import {clearToken} from "../../store/features/authSlice.js";
import useResponsiveValue from "../../utilities/hooks/useResponsiveValue.js";

export const LogOut = ({setModalLogOutOpen}) => {
    const {handleSubmit} = useForm();
    const [data, {isLoading}] = useLogoutMutation();
    const dispatch = useDispatch();

    const modalTitleText = useResponsiveValue(768, 'Log Out', 'Are you logging out?');

    const onSubmit = async () => {
        await data();
        dispatch(clearToken())
        setModalLogOutOpen(false);
    };
    return (
        <>
        {isLoading
            ? <div>Loading...</div>
            : <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
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
        }
        </>

)}