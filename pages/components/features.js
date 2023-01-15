import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ListItem } from "./card";

const Features = () => {
  return (
    <Box
      w="100%"
      px={{ base: "20px", lg: "180px" }}
      pt="50px"
      mt={{ base: "50px", lg: 0 }}
      pb="50px"
    >
      {/* box */}
      <Box
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="space-around"
        w="90%"
        margin="auto"
      >
        <Box>
          <ListItem
            fontSize="18px"
            color="#171923"
            fontWeight="700"
            mb={{ base: "15px", lg: 0 }}
          >
            30 days money back Guarantee
          </ListItem>
        </Box>
        <Box
          fontSize="18px"
          color="#171923"
          fontWeight="700"
          mb={{ base: "15px", lg: 0 }}
        >
          <ListItem>
             No setup fees 100% hassle-free
          </ListItem>
        </Box>
        <Box
          fontSize="18px"
          color="#171923"
          fontWeight="700"
          mb={{ base: "15px", lg: 0 }}
        >
          <ListItem>
            No monthly subscription Pay once and for all
          </ListItem>
        </Box>
      </Box>
    </Box>
  );
};

export default Features;
