import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useModal } from "@/hooks/useModal";

import Header from "@/@components/Molecule/Header";
import FlexBox from "@/@components/Layout/FlexBox";
import TitleBar from "@/@components/Molecule/TitleBar";
import InputGroup from "./InputGroup";
import ButtonGroup from "./ButtonGroup";

import ModalRoot from "@/@components/Molecule/Modal";

import { schema } from "@/constants/validationSchema";

import type { SignUpFormData } from "./InputGroup";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({ resolver: yupResolver(schema) });

  const { showModal, hideModal } = useModal();

  const cancleHandler = () => {
    showModal("confirm", {
      message: "회원가입을 종료하겠습니까?",
      onCancle: () => {
        hideModal();
      },
      onConfirm: () => {
        hideModal();
      },
    });
  };

  return (
    <>
      <Header title="회원가입" />
      <FlexBox direction="column" gap={1.565}>
        <TitleBar content="회원정보" required />
        <InputGroup register={register} errors={errors} />
        <ButtonGroup
          /* eslint-disable */
          /**
           * @todo handleSubmit logic
           */
          onCancle={cancleHandler}
          onConfirm={handleSubmit(formData => {
            console.log(formData);
          })}
        />
      </FlexBox>
      <ModalRoot />
    </>
  );
};

export default Register;
