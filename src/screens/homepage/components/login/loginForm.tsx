"use client";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import AuthContext from "@/utils/context/auth-context";
import { LoginFormData } from "@/types";
import Card from "@/components/Card/card";
import { Button, Input, InputWrapper, Label } from "@/components/global-styles";
import { LoginContainer } from "./loginForm.styles";

export const LoginForm = () => {
  const { logIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    logIn(data.userName);
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <Label htmlFor="userName">Name</Label>
            <Input
              {...register("userName", { required: true })}
              id="userName"
              placeholder="Insert your name"
            />
            {errors.userName && errors.userName.type !== "server" && (
              <span>This field is required</span>
            )}
            {errors.userName?.type === "server" && (
              <span>{errors.userName?.message}</span>
            )}
          </InputWrapper>
          <Button type="submit">Log in</Button>
        </form>
      </Card>
    </LoginContainer>
  );
};
