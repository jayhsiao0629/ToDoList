import { Box, Flex, Text, Container } from "@chakra-ui/react";

export default function Navbar() {
	return (
		<Container maxW="1200px">
			<Box bg="gray.400" px={4} my={4} borderRadius="md">
				<Flex h={16} align="center" justify="space-between">
					{/* LEFT SIDE */}
					<Flex
						justify="center"
						align="center"
						gap={3}
						display={{ base: "none", sm: "flex" }}
					>
						<img src='/react.png' alt='React Logo' width={50} height={50} />
						<Text fontSize="2xl">+</Text>
						<img src='/go.png' alt='Go Logo' width={40} height={40} />
						<Text fontSize="2xl">=</Text>
						<img src='/explode.png' alt='Explode Logo' width={50} height={50} />
					</Flex>

					{/* RIGHT SIDE */}
					<Flex align="center" gap={3}>
						<Text fontSize="lg" fontWeight="500">
							Daily Tasks
						</Text>
						
					</Flex>
				</Flex>
			</Box>
		</Container>
	);
}
