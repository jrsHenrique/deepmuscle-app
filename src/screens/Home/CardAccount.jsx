import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import { isUndefined } from "lodash";
import { useDummyRequest } from "../../utils/request";
import ProgressBar from "react-bootstrap/ProgressBar";



const ProgressLive = () =>
{

	return (
		<div className="d-flex flex-column flex-fill">
			<div className=" d-flex justify-content-between f12 fw-500">
				<p className="grayaf m-0">Treino 1/5</p>
				<p className="purple mb-0">{20}%</p>
			</div>
			<ProgressBar now={20} striped animated />
		</div>
	);
};


export default function CardAccount()
{

	const isLoading = useDummyRequest();

	return (
		<Loading isLoading={isLoading} skeleton={{ height: 200 }}>
			<section className="card-welcome teste-card bg-blue28 mt-4">
				<article className="d-flex w-100">
					<div>

					</div>
					<div className="d-flex flex-column align-items-center">
						<div className="rounded-avatar">
							<img src={`/assets/avatars/1.svg`} width={55} />
						</div>
					</div>
					<div className="d-flex flex-column  flex-1 ps-2" style={{ width: 100 }}>
						<div className="">
							<span className="f18 fw-500 white text-start one-liner w-100 d-block">
								Bem vindo<span className="f12"></span>, <span className="blue">Luís Augusto</span>!
							</span>
						</div>
						<span className="f12 grayaf fw-400 text-start">
							{/* {data?.serie_nome} - Turma {data?.turma_codigo} ({data?.turma_turno}) */}
						</span>
						<div className="d-flex align-item-center justify-content-start gap-3">
							<div className="d-flex align-items-center gap-1 ">
								{/* <img src="/assets-v1/interface/ranking.svg" width={14} /> */}
								<span className="f12 fw-400 grayf0 text-start mt-1">
									{/* Ranking geral: #{!isUndefined(myRanking) && myRanking !== -1 ? myRanking + 1 : '-'} */}
								</span>
							</div>

							<div className="d-flex align-items-center gap-1">
								{/* <img src="/assets-v1/interface/star-on.svg" width={14} className="" /> */}
								<span className="f12 fw-400 yellow mt-1">
									{/* {(rankingGeralAlunos && !isUndefined(myRanking) && myRanking !== -1 && ((rankingGeralAlunos[myRanking].qtde_estrelas ?? 0) + (dataHome?.estrelas_v1 ?? 0))) ?? dataHome?.estrelas_v1 ?? 0} */}
								</span>
							</div>
						</div>
						<div className="d-flex flex-column align-items-center justify-content-between  gap-2 mt-2">
							<Link
								to={"configuracoes"}
								className="button_home bg-blue28 white text-decoration-none "
							>
								{/* <img src="/assets-v1/interface/settings.svg" width={14} /> */}
								<span className=" f12 fw-300">Configurações</span>
							</Link>
						</div>
					</div>
				</article>
				<ProgressLive />
			</section>
		</Loading>
	);
};
