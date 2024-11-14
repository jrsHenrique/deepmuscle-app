import { useStyleConfig, chakra, forwardRef, Box } from '@chakra-ui/react';


const CustomCard = forwardRef((props, ref) =>
{
	const { size, variant, ...rest } = props;
	const styles = useStyleConfig('CustomCard', { size, variant });
	return <chakra.div ref={ref} __css={styles} {...rest}>{props.children}</chakra.div>;
});

export default CustomCard;