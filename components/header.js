import React from "react";
import { Inter } from "@next/font/google";
import { Box, Text, Heading } from "@chakra-ui/react";
const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  return ( 
    <Box pb="112px">
      <Box
        px={{ base: "10px" }}
        textAlign={{ base: "left", lg: "center" }}
        color="#F7FAFC"
        className={inter.className}
        bg="#6B46C1"
        pt="90px"
        pb="246px"
      >
        <Heading
          fontWeight="800"
          fontSize={{ base: "30px", lg: "48px" }}
          pb="16px"
        >
          Simple pricing for your business
        </Heading>
        <Text
          fontSize={{ base: "18px", lg: "24px" }}
          color="#f7fafc"
          fontWeight="500"
        >
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
