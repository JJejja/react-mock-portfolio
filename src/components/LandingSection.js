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
    <VStack spacing={6}>
      <VStack spacing={4}>
        <Avatar
          name="Alexandra"
          src="https://images.unsplash.com/photo-1634595479858-79dc301eea85?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          size="xl"
          sx={{ filter: "grayscale(100%)" }}
        />
        <Heading size="xl" fontSize="2xl">
          {greeting}
        </Heading>
      </VStack>
      <VStack>
        <Heading size="2xl" fontSize="5xl">
          {bio1}
        </Heading>
        <Heading size="2xl" fontSize="5xl">
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
