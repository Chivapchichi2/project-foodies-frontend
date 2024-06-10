import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"

import styles from './SignUpForm.module.css';

import {Input} from "../shared/Input/Input.jsx";
import {sinUpSchema} from "./SignUpSchema.js";
import {CustomModal} from "../shared/CustomModal/CustomModal.jsx";
import {SignInForm} from "../SignIn/SignInForm.jsx";
import Button from "../shared/Button/Button.jsx";
import ModalTitle from "../shared/ModalTitle/ModalTitle.jsx";
import {useRegisterMutation} from "../../store/services/authService.js";
import {toast} from "react-toastify";

const customId = 'toastId';

export const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
        reset
    } = useForm({
        resolver: yupResolver(sinUpSchema),
        mode: "onChange"
    });
    const [showPassword, setShowPassword] = useState(false);
    const [valueInput, setValueInput] = useState('');
    const [openSingIn, setOpenSingIn] = useState(false);
    const [width, setWidth] = useState('18');
    const [data, {isLoading}] = useRegisterMutation();

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    useEffect(() => {
        const subscription = watch((value) => {
            setValueInput(value);
        });
        return () => subscription.unsubscribe();
    }, [watch]);

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

    const handleClickSingIn = () => setOpenSingIn(true)

    const onSubmit = async (user) => {
        try {
            const result = await data(user);
            if (result.error) {
                toast.error(result.error.data.message, {
                    toastId: customId,
                });
            } else {
                toast.success('Sign Up successful', {
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
                    <ModalTitle text={'Sign Up'}/>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Input
                                placeholder={'Name*'}
                                type={'text'}
                                register={register}
                                name="name"
                                hasText={valueInput.name?.length > 0}
                                watch={watch}
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
                    <Button type="submit" text="CREATE" variant={'auth'}/>
                    <p className={styles.text}>
                        I already have an account? <button className={styles.link} onClick={handleClickSingIn}>Sign
                        in</button>
                    </p>
                </form>}

            {openSingIn && (<CustomModal isOpen={openSingIn} onClose={() => setOpenSingIn(false)}>
                <SignInForm/>
            </CustomModal>)}
        </>
    );

}