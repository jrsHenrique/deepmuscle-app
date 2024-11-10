import * as React from 'react';
import './styles.scss';

const TreinoDia = () =>
{
	return (
		<section className='treino-dia-card d-flex flex-column'>
			<div className='d-flex justify-content-between mt-1 mb-1'>
				<span className='item-up'>25/10</span>
				<span className='item-up'>Peito</span>
			</div>
			<section className='treinos-card d-flex flex-column'>
				<span className='mt-1'>
					<img src='assets/dumbbell.svg' width={20} />
					<span>Exercício 1 - Supino Reto</span>
				</span>
				<span>
					<img src='assets/dumbbell.svg' width={20} />
					<span>Exercício 1 - Supino Reto</span>
				</span>
				<span>
					<img src='assets/dumbbell.svg' width={20} />
					<span>Exercício 1 - Supino Reto</span>
				</span>
				<span>
					<img src='assets/dumbbell.svg' width={20} />
					<span>Exercício 1 - Supino Reto</span>
				</span>

			</section>
		</section>
	)
}

export default TreinoDia;