import React from 'react'
import { OutContainer, Form, Input, Button, Label, Link, Subtitle } from './style'
import { useSelector, useDispatch } from "react-redux";
import { authenticate, logout, reset } from "../../../types/store";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { emailPattern } from '../../../utils/pattern';
  

export default function FormContainer() {
  const { register, handleSubmit, setValue, errors } = useForm();
  const [dirty, setDirty] = useState(false);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const user = useSelector((state) => state.user);

  const onSubmit = function (data) {
    dispatch(
      authenticate({
        email: data.email,
        password: data.password,
      })
    );
  };

if (error) {
  window.alert(`Credenciais incorretas :/`);
  dispatch(reset());
} else if (user) {
  window.alert(`Bem-vindo, Alguém!`);
  dispatch(logout());
}

  return (
    <OutContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Olá, seja bem-vindo!</h2>
        <Subtitle>Para acessar a plataforma, faça seu login.</Subtitle>
        <Label htmlFor='mail'>E-mail</Label>
        <Input
          id='mail'
          placeholder='user.name@gmail.com'
          type='email'
          ref={register({
            required: "Este campo é obrigatório",
            pattern: {
              value: emailPattern,
              message: "Digite um e-mail válido",
            },
          })}
          onChange={(e) => setValue("email", e.target.value, { shouldValidate: true })}
          required />
        <Label htmlFor='password'>Senha</Label>
        <Input
          id='password'
          placeholder='*******'
          type='password'
          ref={register({ required: "Este campo é obrigatório" })}
          onChange={(e) => setValue("password", e.target.value)}
          required />
        <Button
          type='submit'
          onClick={() => {
            setDirty(true);
          } }
        >Entrar</Button>
        <Link>Esqueceu seu login ou senha? Clique <a href='#'>aqui</a></Link>
      </Form>
    </OutContainer>
  );
}
