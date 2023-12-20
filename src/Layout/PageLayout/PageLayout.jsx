import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

// instead of adding the Sidebar component to every page, we can add it only once to the PageLayout component and wrap the children with it. this way, we can have a sidebar on every page except the AuthPage.
const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading, error] = useAuthState(auth);
  const canRenderSidebar = pathname !== "/auth" && user;
  return (
    <Flex>
      {/* sidebar on the left */}
      {canRenderSidebar ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}

      {/* page content on the right */}
      <Box flex={1} w={{ base: "calc(100% - 70px", md: "calc(100% - 240px" }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
