import MessageBox from "../../components/MessageBox";
import { useState } from "react";
import
{
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Flex,
	Icon,
	Img,
	Input,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { MdAutoAwesome, MdBolt, MdEdit, MdPerson } from 'react-icons/md';

const ChatBox = () =>
{
	const [output, setOutput] = useState('');
	const [inputOnSubmit, setInputOnSubmit] = useState('');
	const [inputCode, setInputCode] = useState('');
	const [outputCode, setOutputCode] = useState('');
	const [model, setModel] = useState('gpt-4o');
	const [loading, setLoading] = useState(false);
	const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
	const inputColor = useColorModeValue('navy.700', 'white');
	const iconColor = useColorModeValue('brand.500', 'white');
	const bgIcon = useColorModeValue(
		'linear-gradient(180deg, #FBFBFF 0%, #CACAFF 100%)',
		'whiteAlpha.200',
	);
	const brandColor = useColorModeValue('brand.500', 'white');
	const buttonBg = useColorModeValue('white', 'whiteAlpha.100');
	const gray = useColorModeValue('gray.500', 'white');
	const buttonShadow = useColorModeValue(
		'14px 27px 45px rgba(112, 144, 176, 0.2)',
		'none',
	);
	const textColor = useColorModeValue('navy.700', 'white');
	const placeholderColor = useColorModeValue(
		{ color: 'gray.500' },
		{ color: 'whiteAlpha.600' },
	);

	const handleTranslate = async () =>
	{
	};

	const handleChange = (Event) =>
	{
		setOutput(Event.target.value);
	};


	return (
		<>

			<Flex
				direction="column"
				w="100%"
				mx="auto"
				display={output ? 'flex' : 'none'}
				mb={'auto'}
			>
				<Flex w="100%" align={'center'} mb="10px">
					{/* <Flex
						borderRadius="full"
						justify="center"
						align="center"
						bg={'transparent'}
						border="1px solid"
						borderColor={borderColor}
						me="20px"
						h="40px"
						minH="40px"
						minW="40px"
					>
						<Icon
							as={MdPerson}
							width="20px"
							height="20px"
							color={brandColor}
						/>
					</Flex> */}
					{/* <Flex
						p="22px"
						border="1px solid"
						borderColor={borderColor}
						borderRadius="14px"
						w="100%"
						zIndex={'2'}
					>
						<Text
							color={textColor}
							fontWeight="600"
							fontSize={{ base: 'sm', md: 'md' }}
							lineHeight={{ base: '24px', md: '26px' }}
						>
							{inputOnSubmit}
						</Text>
						<Icon
							cursor="pointer"
							as={MdEdit}
							ms="auto"
							width="20px"
							height="20px"
							color={gray}
						/>
					</Flex> */}
				</Flex>
				<Flex w="100%">
					{/* <Flex
						borderRadius="full"
						justify="center"
						align="center"
						bg={'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%)'}
						me="20px"
						h="40px"
						minH="40px"
						minW="40px"
					>
						<Icon
							as={MdAutoAwesome}
							width="20px"
							height="20px"
							color="white"
						/>
					</Flex> */}
					<MessageBox output={output} />
				</Flex>
			</Flex>
			{/* Chat Input */}
			<Flex
				w="100%"
				ms={{ base: '0px', xl: '20px' }}
				mt="20px"
				justifySelf={'flex-end'}
			>
				<Input
					minH="54px"
					h="100%"
					border="1px solid"
					borderColor={borderColor}
					borderRadius="45px"
					p="15px 20px"
					me="10px"
					fontSize="sm"
					fontWeight="500"
					_focus={{ borderColor: 'none' }}
					color={inputColor}
					_placeholder={placeholderColor}
					placeholder="Digite sua dúvida aqui..."
					onChange={handleChange}
				/>
				<Button
					variant="primary"
					py="20px"
					px="16px"
					fontSize="sm"
					borderRadius="45px"
					ms="auto"
					w={{ base: '160px', md: '210px' }}
					h="54px"
					_hover={{
						boxShadow:
							'0px 21px 27px -10px rgba(96, 60, 200, 0.48) !important',
						bg: 'linear-gradient(15.46deg, #4A22E1 26.3%, #7B5AFF 86.4%) !important',
						_disabled: {
							bg: 'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%)',
						},
					}}
					onClick={handleTranslate}
					isLoading={loading ? true : false}
				>
					Enviar
				</Button>
			</Flex>
		</>
	);
}

export default ChatBox;