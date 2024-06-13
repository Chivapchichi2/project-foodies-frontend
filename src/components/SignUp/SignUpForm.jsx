import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import styles from "./SignUpForm.module.css";

import { Button, Input, ModalTitle } from "../shared";
import { sinUpSchema } from "./SignUpSchema.js";
import { useRegisterMutation } from "../../store/services/authService.js";
import { useResponsiveValue } from "../../utilities/index.js";
import { getUser } from "../../store/features/authSlice.js";
import { Loader } from "../shared/Loader/Loader.jsx";

const customId = "toastId";

export const SignUpForm = ({ handleClickSignIn, handleCloseSignUp }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(sinUpSchema),
    mode: "onChange",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [valueInput, setValueInput] = useState("");
  const [data, { isLoading }] = useRegisterMutation();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  useEffect(() => {
    const subscription = watch((value) => {
      setValueInput(value);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const widthIconEye = useResponsiveValue(768, "20", "18");


  const onSubmit = async (user) => {
    try {
        handleCloseSignUp();
      const result = await data(user);
      if (result.error) {
        toast.error(result.error.data.message, {
          toastId: customId,
        });
      } else {
        dispatch(getUser(result.data));
        toast.success("Sign Up successful", {
          toastId: customId,
        });
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
      {isLoading ? (
        <Loader />
      ) : (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
          <ModalTitle text={"Sign Up"} />
          <ul className={styles.list}>
            <li className={styles.item}>
              <Input
                placeholder={"Name*"}
                type={"text"}
                register={register}
                name="name"
                hasText={valueInput.name?.length > 0}
                watch={watch}
              />
              {errors.name && <span className={styles.error}>{errors.name.message}</span>}
            </li>
            <li className={styles.item}>
              <Input
                placeholder={"Email*"}
                type={"email"}
                register={register}
                name="email"
                hasText={valueInput.email?.length > 0}
              />
              {errors.email && <span className={styles.error}>{errors.email.message}</span>}
            </li>
            <li className={styles.item}>
              <Input
                placeholder={"Password"}
                type={showPassword ? "text" : "password"}
                iconId={showPassword ? "icon-eye" : "icon-eye-off"}
                togglePasswordVisibility={togglePasswordVisibility}
                register={register}
                name="password"
                hasText={valueInput.password?.length > 0}
                width={widthIconEye}
              />
              {errors.password && <span className={styles.error}>{errors.password.message}</span>}
            </li>
          </ul>
          <Button type="submit" text="CREATE" variant={"ripple"} id={"signUp"} />
          <p className={styles.text}>
            I already have an account?{" "}
            <button className={styles.link} onClick={handleClickSignIn}>
              Sign in
            </button>
          </p>
        </form>
      )}
    </>
  );
};
