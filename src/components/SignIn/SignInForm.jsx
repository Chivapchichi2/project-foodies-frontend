import {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"

import styles from './SignInForm.module.css';

import {Input} from "../shared/Input/Input.jsx";
import {sinInSchema} from "./SignInSchema.js";
import Button from "../shared/Button/Button.jsx";
import ModalTitle from "../shared/ModalTitle/ModalTitle.jsx";
import {CustomModal} from "../shared/CustomModal/CustomModal.jsx";
import {SignUpForm} from "../SignUp/SignUpForm.jsx";
import {useLoginMutation} from "../../store/services/authService.js";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {getToken} from "../../store/features/authSlice.js";

const customId = 'toastId';

export const SignInForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }  ,
        reset
    } = useForm({
        resolver: yupResolver(sinInSchema),
        mode: "onChange"
    });
    const [showPassword, setShowPassword] = useState(false);
    const [valueInput, setValueInput] = useState('');
    const [openSingUp, setOpenSingUp] = useState(false);
    const [width, setWidth] = useState('18');
    const [data, {isLoading}] = useLoginMutation();
    const dispatch = useDispatch();

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    useEffect(() => {
        const subscription = watch((value) =>
            setValueInput(value)
        )
        return () => subscription.unsubscribe()
    }, [watch])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setWidth('20');
            } else {
                setWidth('18');
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClickSingUp = () => setOpenSingUp(true);

    const onSubmit= async (user) => {
        try {
            const result = await data(user);
            if (result.error) {
                toast.error(result.error.data.message, {
                    toastId: customId,
                });
            } else {
                dispatch(getToken(result.data.token))
                toast.success('Sign In successful', {
                    toastId: customId,
                })
                reset();
            }
        } catch (error) {
            toast.error(error.message, {
                toastId: customId,
            });
        }
    };

    return (
<>
    {isLoading
        ? <div>Loading...</div>
        : <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            <ModalTitle text={'SIGN IN'}/>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Input
                        placeholder={'Email*'}
                        type={'email'}
                        register={register}
                        name="email"
                        hasText={valueInput.email?.length > 0}
                    />
                    {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                </li>
                <li className={styles.item}>
                    <Input
                        placeholder={'Password'}
                        type={showPassword ? 'text' : 'password'}
                        iconId={showPassword ? "icon-eye" : "icon-eye-off"}
                        togglePasswordVisibility={togglePasswordVisibility}
                        register={register}
                        name="password"
                        hasText={valueInput.password?.length > 0}
                        width={width}
                    />
                    {errors.password && <span className={styles.error}>{errors.password.message}</span>}
                </li>
            </ul>
            <Button type="submit" text="SIGN IN" variant={'auth'}/>
            <p className={styles.text}>
                {"Don't have an account? "}
                <button className={styles.link} onClick={handleClickSingUp}>Create an account</button>
            </p>
        </form>
    }

    {openSingUp && (<CustomModal isOpen={openSingUp} onClose={() => setOpenSingUp(false)}>
        <SignUpForm/>
    </CustomModal>)}
</>
    );

}