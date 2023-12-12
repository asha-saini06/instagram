import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>

      <SuggestedUser
        name="Yuta Okkotsu"
        followers={2001}
        avatar="https://i.pinimg.com/originals/2d/fa/7a/2dfa7a0e97662755a03b91465c72f258.jpg"
      />
      <SuggestedUser
        name="Shoko Ieiri"
        followers={1989}
        avatar="https://i.pinimg.com/736x/2c/12/41/2c1241527d3d4da1d01d0f44d83f934b.jpg"
      />
      <SuggestedUser
        name="Toge Inumaki"
        followers={2001}
        avatar="https://i.pinimg.com/736x/1e/33/d0/1e33d05a1efed65b7a5611764a0f051f.jpg"
      />

      <Box fontSize={12} mt={5} color={"gray.500"} alignSelf={"start"}>
        © 2023 Built By{" "}
        <Link
          href="https://github.com/asha-saini06"
          target="_blank"
          color="blue.500"
          fontSize={14}
        >
          Asha Saini
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
