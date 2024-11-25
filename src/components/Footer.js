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
              <p className="footer-text">Jennifer • © 2024</p>
            </Box>
            <Box>
              <p className="footer-text">
                Photo by{" "}
                <a
                  href="https://unsplash.com/@navidsohrabi?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                  style={{ textDecoration: "underline" }}
                >
                  Navid Sohrabi
                </a>{" "}
                on{" "}
                <a
                  href="https://unsplash.com/photos/a-woman-standing-next-to-a-body-of-water-nHnU3NWVYY0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                  style={{ textDecoration: "underline" }}
                >
                  Unsplash
                </a>
              </p>
            </Box>
          </VStack>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
