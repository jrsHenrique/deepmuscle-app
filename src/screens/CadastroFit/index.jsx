import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDummyRequest } from "../../utils/request";
import "./styles.scss"; // Inclua o estilo adequado
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";
import { useGet, usePost } from "../../utils/request";

const CadastroFit = ({ setAuthenticated, user }) => {

  const {isLoading, mutate} = usePost({url:"users/register_details"})
  const {isLoading:isLoadingUserInfo, data} = useGet({url:"users/get_user_infos"})

  const navigate = useNavigate();
  //const { isLoading } = useDummyRequest();
  
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [exerciseRegularity, setExerciseRegularity] = useState('');
  const [goal, setGoal] = useState('');
  const [error, setError] = useState(false);

  const isFormValid = height && weight && age && gender && exerciseRegularity && goal;

  const submitHandler = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para salvar os dados (enviar para o backend, etc.)
    // Após salvar, redireciona para a tela de perfil com as informações fornecidas
    mutate({"height": height, "weight": weight, "age" : age, "fitness_level": exerciseRegularity, "gender": gender},
      {
        onSuccess: (data) => {
          console.log(data)
        }
      }
    )
    // navigate("/profile", { state: { height, weight, age, gender, exerciseRegularity, goal } });
  };

  return (
    <div className="signup-page w-100">
      <Loading skeleton={{ height: 150 }} isLoading={isLoadingUserInfo}>
        <Header user={data} />
      </Loading>
      <Loading skeleton={{ height: 150, count: 2 }} isLoading={isLoading}>
        <form onSubmit={submitHandler}>
                <div className="input-box col-12 mb-3">
                    <input
                    id="height"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Altura (em cm)"
                    />
                </div>
                <div className="input-box col-12 mb-3">
                    <input
                    id="weight"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Peso (em kg)"
                    />
                </div>
                <div className="input-box col-12 mb-3">
                    <input
                    id="age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Idade"
                    />
                </div>
                <div className="input-box col-12 mb-3">
                    <select
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="form-select w-100"
                    >
                    <option value="">Selecione o Gênero</option>
                    <option value="male">Masculino</option>
                    <option value="female">Feminino</option>
                    </select>
                </div>
                <div className="input-box col-12 mb-3">
                    <select
                    id="exerciseRegularity"
                    value={exerciseRegularity}
                    onChange={(e) => setExerciseRegularity(e.target.value)}
                    className="form-select w-100"
                    >
                    <option value="">Selecione a Regularidade</option>
                    <option value="occasionally">Sedentário</option>
                    <option value="weekly">Regular</option>
                    <option value="daily">Professor Jhonny</option>
                    </select>
                </div>
                <div className="input-box col-12 mb-3">
                <select
                    id="goal"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="form-select w-100"
                >
                    <option value="">Selecione o Objetivo</option>
                    <option value="hipertrofia">Hipertrofia</option>
                    <option value="forca">Força</option>
                    <option value="emagrecimento">Emagrecimento</option>
                </select>
                </div>

                {error && <div className="red text-start f12">Credenciais inválidas.</div>}
                <button
                    type="submit"
                    className="btn btn-blue mt-1"
                    disabled={!isFormValid || isLoading}
                >
                    Salvar {isLoading && <img alt="" src="/assets/loading.svg" width={24} />}
                </button>
                <div className="f12 fw-400 mt-0 recovery">
                    <Link to="/" className="esqueci-senha">Já tenho cadastro</Link>
                </div>
        </form>
      </Loading>
    </div>
  );
};

const Header = ({ user }) => {


  return (
    <>
      <img src="/assets/images/register.svg" alt="" className="register" />
      <div className="content-init">
        <h1 className="f32 black fw-700 fw-bold text-start">
          {`Olá, ${user.full_name}`}
        </h1>
      </div>
    </>
  );
};

export default CadastroFit;
