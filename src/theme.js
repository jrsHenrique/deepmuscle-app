import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const CustomCard = {
	baseStyle: (props) => ({
		p: '20px',
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		position: 'relative',
		borderRadius: '14px',
		minWidth: '0px',
		wordWrap: 'break-word',
		bg: mode('#ffffff', 'navy.800')(props),
		boxShadow: mode(
			'14px 17px 40px 4px rgba(112, 144, 176, 0.08)',
			'unset',
		)(props),
		backgroundClip: 'border-box',
	}),
};

export const CardComponent = {
	components: {
		CustomCard,
	},
};

const theme = extendTheme({
	components: {
		CustomCard: {
			baseStyle: (props) => ({
				p: '20px',
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				position: 'relative',
				borderRadius: '14px',
				minWidth: '0px',
				wordWrap: 'break-word',
				bg: mode('#ffffff', 'navy.800')(props),
				boxShadow: mode(
					'14px 17px 40px 4px rgba(112, 144, 176, 0.08)',
					'unset',
				)(props),
				backgroundClip: 'border-box',
			}),
		}
	},
});

export default theme;
