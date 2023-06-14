"use client";
// useFormManager.ts

import { useForm } from "react-hook-form";

export const useFormManager = (userData: any) => {
  const { handleSubmit, register, reset } = useForm({
    defaultValues: userData,
  });

  const handleReset = () => {
    reset();
  };

  return {
    handleSubmit,
    register,
    handleReset,
    reset,
  };
};
