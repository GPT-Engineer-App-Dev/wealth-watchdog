import { Box, Container, Flex, Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <Box>
      <NavBar />
      <Container maxW="container.xl" mt={4}>
        <VStack spacing={8}>
          <Box bg="gray.100" p={4} borderRadius="md" w="full">
            <Heading as="h1" size="xl">Prominent Headline</Heading>
            <Text mt={2}>This is the main headline section with a brief description of the top story.</Text>
          </Box>
          <Grid templateColumns={{ base: "1fr", md: "3fr 1fr" }} gap={4} w="full">
            <GridItem>
              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                <Box bg="gray.100" p={4} borderRadius="md">
                  <Heading as="h2" size="md">Article 1</Heading>
                  <Text mt={2}>Brief description of the article.</Text>
                </Box>
                <Box bg="gray.100" p={4} borderRadius="md">
                  <Heading as="h2" size="md">Article 2</Heading>
                  <Text mt={2}>Brief description of the article.</Text>
                </Box>
                <Box bg="gray.100" p={4} borderRadius="md">
                  <Heading as="h2" size="md">Article 3</Heading>
                  <Text mt={2}>Brief description of the article.</Text>
                </Box>
                <Box bg="gray.100" p={4} borderRadius="md">
                  <Heading as="h2" size="md">Article 4</Heading>
                  <Text mt={2}>Brief description of the article.</Text>
                </Box>
              </Grid>
            </GridItem>
            <GridItem>
              <Box bg="gray.100" p={4} borderRadius="md">
                <Heading as="h2" size="md">Trending Topics</Heading>
                <VStack spacing={2} mt={2}>
                  <Text>Topic 1</Text>
                  <Text>Topic 2</Text>
                  <Text>Topic 3</Text>
                  <Text>Topic 4</Text>
                </VStack>
              </Box>
            </GridItem>
          </Grid>
        </VStack>
      </Container>
      <Footer />
    </Box>
  );
};

export default Index;