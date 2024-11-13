import React from 'react';
import ReactMarkdown from 'react-markdown'
import { useColorModeValue } from '@chakra-ui/react'
import CustomCard from './Card'

const MessageBox = (props) =>
{
	const textColor = useColorModeValue('navy.700', 'white')
	const { output } = props
	return (
		<CustomCard
			display={output ? 'flex' : 'none'}
			px="22px !important"
			pl="22px !important"
			color={textColor}
			minH="450px"
			fontSize={{ base: 'sm', md: 'md' }}
			lineHeight={{ base: '24px', md: '26px' }}
			fontWeight="500"
		>
			<ReactMarkdown className="font-medium">
				{output ? output : ''}
			</ReactMarkdown>
		</CustomCard>
	)
}

export default MessageBox