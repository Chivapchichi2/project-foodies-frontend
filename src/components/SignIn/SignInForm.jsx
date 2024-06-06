import {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"

import styles from './SignInForm.module.css';

import {Input} from "../shared/Input/Input.jsx";
import IconEyeClose from './eyeClose.svg';
import IconEyeOpen from './eyeOpen.svg';
import {sinInSchema} from "./SignInSchema.js";


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

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        const subscription = watch((value) =>
            setValueInput(value)
        )
        return () => subscription.unsubscribe()
    }, [watch])

    const handleClickSingUp = () => {
        setOpenSingUp(true);
    }

    const onSubmit= (data) => {
        alert( `Дані з форми відправлено: ${JSON.stringify(data)}`);
        reset();
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            <h2 className={styles.title}>SIGN IN</h2>
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
                        svg={showPassword ? IconEyeOpen : IconEyeClose}
                        togglePasswordVisibility={togglePasswordVisibility}
                        register={register}
                        name="password"
                        hasText={valueInput.password?.length > 0}
                    />
                    {errors.password && <span className={styles.error}>{errors.password.message}</span>}
                </li>
            </ul>
            <button type="submit" className={styles.btn}>
                SIGN IN
            </button>
            <p className={styles.text}>
                Don't have an account? <button className={styles.link} onClick={handleClickSingUp}>Create an account</button>
            </p>
        </form>
    );

}