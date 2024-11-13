import React from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';



const Loading = ({
	isLoading, children, width = 256, skeleton
}) =>
{
	return (
		<>
			{isLoading ?
				<div style={{ width: '100%', marginTop: 6 }}>
					{skeleton ?
						<SkeletonTheme baseColor="#e5e5e5" highlightColor="#f9f9f9">
							<Skeleton {...skeleton} style={{
								borderRadius: 15,
								marginBottom: 10
							}} duration={1.3} />
						</SkeletonTheme>
						:
						<div className="w-100 d-flex flex-column align-items-center">
							<img src="/assets/loading.svg" alt="Loading" width={width} />
						</div>
					}
				</div>
				:
				<>{children}</>
			}
		</>
	);
};

export const ButtonLoading = ({ title, submitFunction, isLoading = false, color = 'pink', className = '', disabled = false }) =>
{
	return (
		<button onClick={submitFunction} className={`btn  btn-geracao  btn-${color} ` + className} type="button" disabled={isLoading || disabled}>
			{title} {isLoading && <img src="/assets/loading.svg" alt="" width={24} />}
		</button>
	);
};

export const ButtonLoadingV1 = ({ title, submitFunction, isLoading = false, color = 'blue', className = '', disabled = false }) =>
{
	return (
		<button onClick={submitFunction} className={`btn-v1 btn-geracao btn-${color} ` + className} type="button" disabled={isLoading || disabled}>
			{title} {isLoading && <img src="/assets/loading.svg" alt="" width={24} />}
		</button>
	);
};

export default Loading