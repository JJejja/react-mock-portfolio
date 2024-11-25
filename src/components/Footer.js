import React from "react";
import { Box, Flex, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b" padding="5">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <VStack>
            <Box>
              <p className="footer-text">Alexandra • © 2024</p>
            </Box>
            <Box textAlign={"center"}>
              <p className="footer-text">
                All images sourced from{" "}
                <a
                  href="https://unsplash.com/"
                  style={{ textDecoration: "underline" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unsplash
                </a>{" "}
                and credited to their respective photographers.
              </p>
            </Box>
          </VStack>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
