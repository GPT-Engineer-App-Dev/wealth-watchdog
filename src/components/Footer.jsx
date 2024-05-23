import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.700" color="white" py={4} mt={8}>
      <Flex direction="column" align="center">
        <Text mb={2}>© 2023 Financial Times</Text>
        <Flex>
          <Link px={2} href="/about">About</Link>
          <Link px={2} href="/contact">Contact</Link>
          <Link px={2} href="/privacy">Privacy Policy</Link>
          <Link px={2} href="/terms">Terms of Service</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;