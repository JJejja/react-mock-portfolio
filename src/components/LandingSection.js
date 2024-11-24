import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hi, I'm Jennifer!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isLightBackground
    backgroundColor="#F7F8F3"
    id="landing-section"
  >
    <VStack spacing={5}>
      <VStack>
        <Avatar
          name="Dan Abrahmov"
          src="https://i.pravatar.cc/150?img=7"
          size="xl"
        />
        <Heading size="l">{greeting}</Heading>
      </VStack>
      <VStack>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
