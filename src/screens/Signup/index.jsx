import * as React from "react";
import { FC, useEffect, useState } from "react";
import "./styles.scss";
import Container from "../../components/Container";
import Axios from "axios";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Loading from "../../components/Loading";
import { usePost } from "../../utils/request";



const logout = (setAuthenticated, navigate) =>
{
	setAuthenticated(false);

	navigate && navigate('/');


	Axios.defaults.headers.common = {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		Authorization: ""
	};
}

const Register = ({ setAuthenticated }) =>
{
	const navigate = useNavigate()
	const queryParams = useLocation().search


	return (
		<Container topNav={false} centered>
			<div className="signup-page w-100">
				<Header />
				<InputFields setAuthenticated={setAuthenticated} />
			</div>
		</Container>
	)
}

const Header = () =>
{
	return (
		<>
			<img src="/assets/images/register.svg" alt="" className="register" />
			<div className="content-init">
				<h1 className="f32 black fw-700 fw-bold text-start">Cadastro</h1>
				{/* <p className="grayaf f14 lh-1 text-start pt-0 mb-4">Faça o login utilizando as credenciais</p> */}
			</div>
		</>
	)
}

const InputFields = ({ setAuthenticated }) =>
{
	const { isLoading, mutate } = usePost({ url: 'auth/sign_up', headers: true })
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('')
	const [passwordConfirmation, setPasswordConfirmation] = useState('')
	const [error, setError] = useState(false)
	const [errorAuthorization, setErrorAuthorization] = useState(false)
	const [showPassword, setShowPassword] = useState(false)
	const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false)
	const [name, setName] = useState('')

	const navigate = useNavigate()

	let decoded_token = null
	const loginHandler = (e) =>
	{
		e.preventDefault();
		if (login && password && name)
		{
			mutate({ email: login, password, full_name: name }, {
				onSuccess: (data) =>
				{
					navigate && navigate('/');
				},
				onError: (error) =>
				{
					setError(true);
				}
			});
		}
	}

	return (
		<form onSubmit={loginHandler}>
			<div className="input-box col-12 mb-3">
				<img src="assets/email.svg" alt="" />
				<input id="email" className="form-login w-100" placeholder="Email"
					value={login} onChange={(e) => setLogin(e.target.value)}
					onKeyDown={() => { error && setError(false); setErrorAuthorization(false) }} />
			</div>
			<div className="input-box col-12 mb-3">
				<img src="assets/email.svg" alt="" />
				<input id="name" className="form-login w-100" placeholder="Nome"
					value={name} onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className="input-box col-12 mb-3">
				<img src="assets/chave.svg" alt="" />
				<input id="password" type={`${showPassword ? "text" : "password"}`} className="form-login w-100" placeholder="Senha"
					value={password} onChange={(e) =>
					{
						setPassword((s) =>
						{
							setErrorAuthorization(e.target.value != passwordConfirmation
							); return e.target.value
						});
					}}
					onKeyDown={() =>
					{
						error && setError(false);
					}} />
				<img src="assets/eye.svg" alt="" className="eye" onClick={() => { setShowPassword(e => !e) }} />
			</div>
			<div className="input-box col-12 mb-3">
				<img src="assets/chave.svg" alt="" />
				<input id="password-confirmation" type={`${showPasswordConfirmation ? "text" : "password"}`} className="form-login w-100" placeholder="Confirme sua senha"
					value={passwordConfirmation} onChange={(e) =>
					{
						setPasswordConfirmation((s) =>
						{
							setErrorAuthorization(password != e.target.value
							); return e.target.value
						});
					}}
					onKeyDown={() =>
					{
						error && setError(false);
					}} />
				<img src="assets/eye.svg" alt="" className="eye" onClick={() => { setShowPasswordConfirmation(e => !e) }} />
			</div>
			{error && <div className="red text-start f12">Credenciais inválidas.</div>}
			{errorAuthorization && <div className="red f12">As senhas não coincidem.</div>}
			<button type="submit" className="btn btn-blue mt-1" /*disabled={!login || !password || isLoading}*/>
				Cadastro {isLoading && <img alt="" src="/assets/loading.svg" width={24} />}
			</button>
			<div className="f12 fw-400 mt-0 recovery">
				<Link to='/' className="esqueci-senha">Já tenho cadastro</Link>
			</div>
		</form>
	)
}

const Help = () =>
{
	return (
		<div className="d-flex justify-content-center f12 fw-500 flex-column mt-5 mb-2 help">
			<a href="" className="black text-center text-decoration-none">Contate nosso suporte</a>
			<a href="" target="_blank"
				className="black lh-1 text-center text-decoration-none mt-2">Política de privacidade</a>
		</div>
	)
}

export default Register;