import React from "react";
import {
  Box,
  Text,
  Heading,
  Button,
  Stack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { Inter } from "@next/font/google";
import { CheckIcon } from "../icons/Icon";

const inter = Inter({ subsets: ["latin"] });

export const ListItem = (props) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="20px" {...rest}>
      <Icon as={CheckIcon} w="22px" h="22px" />
      <Text>{children}</Text>
    </HStack>
  );
};

const Card = () => {
  return (
    <Box
      className={inter.className}
      // mx="auto"
      // my="auto"
      margin="auto"
      mx={{ base: "20px", lg: "auto" }}
      w={{ lg: "996px" }}
      mt="-256px"
      borderRadius="12px"
      overflow="hidden"
      boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
    >
      <Box
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        {/* Left side */}
        <Box bg="#f0eafb" p={{ base: "52px", lg: "37px" }} textAlign="center">
          <Heading>
            <Box fontSize={{ base: "20px", lg: "24px" }} fontWeight="800">
              Premium PRO
            </Box>
            <Box
              fontSize={{ base: "50px", lg: "60px" }}
              fontWeight="800"
              mt="16px"
            >
              $320
            </Box>
          </Heading>
          <Text fontWeight="500" fontSize="18px" color="#171923" mt="8px">
            billed just once
          </Text>
          <Button colorScheme="purple" size="lg" w="282px" mt="24px">
            Get Started
          </Button>
        </Box>

        {/* Right side */}
        <Box bg="#FFFFFF" p="30px" pl={{ base: "17px", lg: "60px" }}>
          <Text fontSize="18px" fontWeight="400" color="#2d3748">
            Access these features when you get this pricing package for your
            business.
          </Text>
          <Stack as="ul" pt="26px" spacing="20px">
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>Additional phone numbers</ListItem>
            <ListItem>Automated messages via Zapier</ListItem>
            <ListItem>24/7 support and consulting</ListItem>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
