import React, { useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useGet } from "../../utils/request";

const ProgressLive = ({ treinoAtual, totalTreinos, progresso }) => (
    <div className="d-flex flex-column flex-fill">
        <div className="d-flex justify-content-between f12 fw-500">
            <p className="grayaf m-0">Treino {treinoAtual}/{totalTreinos}</p>
            <p className="purple mb-0">{progresso}%</p>
        </div>
        <ProgressBar now={progresso} striped animated />
    </div>
);

export default function CardAccount() {
    
    const userData = {
        nome: "Luís Augusto",
        ranking: 10,
        estrelas: 50,
        progresso: 40,
    };

	const {isLoading, data} = useGet({url:"users/get_user_infos"})
	console.log(data)
    return (
        <Loading isLoading={isLoading} skeleton={{ height: 200 }}>
            <section className="card-welcome bg-blue28 mt-4">
                <article className="d-flex w-100">
                    <div className="d-flex flex-column align-items-center">
                        <div className="rounded-avatar">
                            <img
                                src={`/assets/avatars/1.svg`}
                                width={55}
                                onError={(e) => (e.target.src = "/assets/default-avatar.svg")}
                            />
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-1 ps-2" style={{ width: 100 }}>
                        <div>
                            <span className="f18 fw-500 white text-start one-liner d-block">
                                Bem vindo, <span className="blue">{data && data.full_name}</span>!
                            </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-start gap-3 mt-2">
                            <div>
                                <span className="f12 fw-400 grayf0">Ranking geral: #{userData.ranking}</span>
                            </div>
                            <div>
                                <span className="f12 fw-400 yellow">{userData.estrelas} estrelas</span>
                            </div>
                        </div>
                        <Link
                            to={"configuracoes"}
                            className="button_home bg-blue28 white text-decoration-none mt-3"
                        >
                            <span className="f12 fw-300">Configurações</span>
                        </Link>
                    </div>
                </article>
                <ProgressLive treinoAtual={2} totalTreinos={5} progresso={userData.progresso} />
            </section>
        </Loading>
    );
}
