import * as React from 'react';
import './styles.scss';

const Treinos = () =>
{
	return (
		<section className='treinos'>
			<section className='treino-card d-flex flex-column'>
				<div className='d-flex justify-content-center mt-1 mb-1 item-card'>
					<span className='item-up item-date'>25/10</span>
					<span className='item-up text-center'>Biceps e Peito</span>
				</div>
				<span>
					<img src='assets/dumbbell_white.svg' width={15} />
					<span>Mais detalhes</span>
				</span>
			</section>
			<section className='treino-card d-flex flex-column'>
				<div className='d-flex justify-content-center mt-1 mb-1 item-card'>
					<span className='item-up'>25/10</span>
					<span className='item-up'>Peito</span>
				</div>
				<span>
					<img src='assets/dumbbell_white.svg' width={15} />
					<span>Mais detalhes</span>
				</span>
			</section>
			<section className='treino-card d-flex flex-column'>
				<div className='d-flex justify-content-center mt-1 mb-1 item-card'>
					<span className='item-up'>25/10</span>
					<span className='item-up'>Peito</span>
				</div>
				<span>
					<img src='assets/dumbbell_white.svg' width={15} />
					<span>Mais detalhes</span>
				</span>
			</section>
			<section className='treino-card d-flex flex-column'>
				<div className='d-flex justify-content-center mt-1 mb-1 item-card'>
					<span className='item-up'>25/10</span>
					<span className='item-up'>Peito</span>
				</div>
				<span>
					<img src='assets/dumbbell_white.svg' width={15} />
					<span>Mais detalhes</span>
				</span>
			</section>
			<section className='treino-card d-flex flex-column'>
				<div className='d-flex justify-content-center mt-1 mb-1 item-card'>
					<span className='item-up'>25/10</span>
					<span className='item-up'>Peito</span>
				</div>
				<span>
					<img src='assets/dumbbell_white.svg' width={15} />
					<span>Mais detalhes</span>
				</span>
			</section>
			<section className='treino-card d-flex flex-column'>
				<div className='d-flex justify-content-center mt-1 mb-1 item-card'>
					<span className='item-up'>25/10</span>
					<span className='item-up'>Peito</span>
				</div>
				<span>
					<img src='assets/dumbbell_white.svg' width={15} />
					<span>Mais detalhes</span>
				</span>
			</section>

		</section>
	)
}

export default Treinos;