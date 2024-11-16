import * as React from 'react';
import './styles.scss';
import {useShow} from "../../utils/request.jsx"
import { ModalDetalhes } from '../../components/ModalDetalhes.jsx';
// import { useGet } from '../../utils/request.jsx';

const Treinos = () =>
{
	const treinosDoDia = [
		{ exercicio: "Supino Reto", series: 3, repeticoes: "10-12" },
		{ exercicio: "Rosca Direta", series: 4, repeticoes: "8-10" },
		{ exercicio: "Agachamento Livre", series: 4, repeticoes: "12-15" },
		{ exercicio: "Levantamento Terra", series: 3, repeticoes: "10-12" },
		{ exercicio: "Desenvolvimento Militar", series: 3, repeticoes: "10-12" },
		{ exercicio: "Cadeira Extensora", series: 4, repeticoes: "12-15" }
	  ];

	const {show, hide, visible} = useShow()

	// const { data: treinos, isLoading, error } = useGet({
    //     url: '/treinos-do-dia',  // Altere a URL para a sua API real
    //     schema: null,  // Caso você esteja usando alguma validação de schema, passe aqui
    // });

	return (
		<section className='treinos'>
			<section className='treino-card d-flex flex-column'>
				<div className='d-flex justify-content-center mt-1 mb-1 item-card'>
					<span className='item-up item-date'>25/10</span>
					<span className='item-up text-center'>Biceps e Peito</span>
				</div>
				<span>
					<img src='assets/dumbbell_white.svg' width={15} />
					<span className = "details-button" onClick={show}>Mais detalhes</span>
					<ModalDetalhes 
					treinos = {treinosDoDia}
					description="Treino completo de força e hipertrofia."
					show={visible} 
					onHide={hide}/>
				</span>
			</section>
			<section className='treino-card d-flex flex-column'>
				<div className='d-flex justify-content-center mt-1 mb-1 item-card'>
					<span className='item-up item-date'>26/10</span>
					<span className='item-up text-center'>Biceps e Peito</span>
				</div>
				<span>
					<img src='assets/dumbbell_white.svg' width={15} />
					<span className = "details-button" onClick={show}>Mais detalhes</span>
					<ModalDetalhes 
					treinos = {treinosDoDia}
					description="Treino completo de força e hipertrofia."
					show={visible} 
					onHide={hide}/>
				</span>
			</section>
			<section className='treino-card d-flex flex-column'>
				<div className='d-flex justify-content-center mt-1 mb-1 item-card'>
					<span className='item-up item-date'>27/10</span>
					<span className='item-up text-center'>Biceps e Peito</span>
				</div>
				<span>
					<img src='assets/dumbbell_white.svg' width={15} />
					<span className = "details-button" onClick={show}>Mais detalhes</span>
					<ModalDetalhes 
					treinos = {treinosDoDia}
					description="Treino completo de força e hipertrofia."
					show={visible} 
					onHide={hide}/>
				</span>
			</section>
			<section className='treino-card d-flex flex-column'>
				<div className='d-flex justify-content-center mt-1 mb-1 item-card'>
					<span className='item-up item-date'>28/10</span>
					<span className='item-up text-center'>Biceps e Peito</span>
				</div>
				<span>
					<img src='assets/dumbbell_white.svg' width={15} />
					<span className = "details-button" onClick={show}>Mais detalhes</span>
					<ModalDetalhes 
					treinos = {treinosDoDia}
					description="Treino completo de força e hipertrofia."
					show={visible} 
					onHide={hide}/>
				</span>
			</section>
			<section className='treino-card d-flex flex-column'>
				<div className='d-flex justify-content-center mt-1 mb-1 item-card'>
					<span className='item-up item-date'>29/10</span>
					<span className='item-up text-center'>Biceps e Peito</span>
				</div>
				<span>
					<img src='assets/dumbbell_white.svg' width={15} />
					<span className = "details-button" onClick={show}>Mais detalhes</span>
					<ModalDetalhes 
					treinos = {treinosDoDia}
					description="Treino completo de força e hipertrofia."
					show={visible} 
					onHide={hide}/>
				</span>
			</section>
			<section className='treino-card d-flex flex-column'>
				<div className='d-flex justify-content-center mt-1 mb-1 item-card'>
					<span className='item-up item-date'>30/10</span>
					<span className='item-up text-center'>Biceps e Peito</span>
				</div>
				<span>
					<img src='assets/dumbbell_white.svg' width={15} />
					<span className = "details-button" onClick={show}>Mais detalhes</span>
					<ModalDetalhes 
					treinos = {treinosDoDia}
					description="Treino completo de força e hipertrofia."
					show={visible} 
					onHide={hide}/>
				</span>
			</section>

		</section>
	)
}

export default Treinos;