import { Heading, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack bg="white" color="gray.800" borderRadius="xl">
      <Image src={imageSrc} alt={title} borderRadius="xl" />
      <VStack align="left" padding="4">
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <HStack>
          <Text>See more</Text>
          <Icon as={FontAwesomeIcon} icon={faArrowRight} />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
