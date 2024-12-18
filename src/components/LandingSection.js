import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hi, I'm Alexandra!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    backgroundColor="#F7F8F3"
    id="landing-section"
  >
    <VStack
      spacing={6}
      w="full"
      px={{ base: 4, md: 0 }} // Padding for smaller screens
      textAlign="center" // Center-align text on all screens
    >
      <VStack spacing={6}>
        <Avatar
          name="Alexandra"
          src="https://images.unsplash.com/photo-1634595479858-79dc301eea85?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          size="2xl"
          sx={{ filter: "grayscale(100%)" }}
        />
        <Heading size="xl" fontSize="xl">
          {greeting}
        </Heading>
      </VStack>
      <VStack spacing={2}>
        <Heading size="4xl" fontSize="4xl">
          {bio1}
        </Heading>
        <Heading size="4xl" fontSize="4xl">
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
