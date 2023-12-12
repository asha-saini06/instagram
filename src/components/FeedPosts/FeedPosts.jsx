import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useEffect, useState } from "react";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3, 4].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size="10" />
              <VStack>
                <Skeleton height="10px" w={"200px"} />
                <Skeleton height="10px" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}>content wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          <FeedPost img="maki.jpg" username="maki" avatar="maki.jpg" />
          <FeedPost
            img="/strongest.png"
            username="gojo"
            avatar="/jjk_trio1.png"
          />
          <FeedPost img="/nobara.png" username="nobara" avatar="/nobara.png" />
          <FeedPost img="/gumi.jpg" username="megumi" avatar="/gumi.jpg" />
          <FeedPost
            img="special_grade_sqaud.jpg"
            username="yuji"
            avatar="jjk_trio2.jpg"
          />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
