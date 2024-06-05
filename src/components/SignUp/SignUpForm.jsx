import {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"

import styles from './SignUpForm.module.css';

import {Input} from "../shared/Input/Input.jsx";
import IconEyeClose from './eyeClose.svg';
import IconEyeOpen from './eyeOpen.svg';
import {sinUpSchema} from "./SignUpSchema.js";


export const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }  ,
        reset
    } = useForm({
        resolver: yupResolver(sinUpSchema),
        mode: "onChange"
    });
    const [showPassword, setShowPassword] = useState(false);
    const [valueInput, setValueInput] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        const subscription = watch((value) =>
            setValueInput(value)
        )
        return () => subscription.unsubscribe()
    }, [watch])

    const onSubmit= (data) => {
        alert( `Дані з форми відправлено: ${JSON.stringify(data)}`);
        reset();
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            <h2 className={styles.title}>SIGN UP</h2>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Input
                        placeholder={'Name*'}
                        type={'text'}
                        register={register}
                        name="name"
                        hasText={valueInput.name?.length > 0}
                    />
                    {errors.name && <span className={styles.error}>{errors.name.message}</span>}
                </li>
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
                CREATE
            </button>
            <p className={styles.text}>
                I already have an account? <span className={styles.link}>Sign in</span>
            </p>
        </form>
    );

}