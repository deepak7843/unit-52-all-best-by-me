import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  return (
    <Box border="4px solid green" width="250px" height="100vh">
      <Stack direction="column">
        <Box height="15vh" border="1px solid red">
          {/* user profile */}
        </Box>

        <Box height="70vh" border="6px solid blue">
          <Box border="1px solid red">
            <Flex padding="0 10px">
              <Text> All </Text>
              <Text marginLeft={"auto"}> 4 </Text>
            </Flex>
          </Box>

          <Box border="1px solid red">
            <Flex padding="0 10px">
              <Text> All </Text>
              <Text marginLeft={"auto"}> 4 </Text>
            </Flex>
          </Box>

          <Box border="1px solid red">
            <Flex padding="0 10px">
              <Text> All </Text>
              <Text marginLeft={"auto"}> 4 </Text>
            </Flex>
          </Box>

          <Box border="1px solid red">
            <Flex padding="0 10px">


              <Text> All </Text>
              <Text marginLeft={"auto"}> 4 </Text>
            </Flex>
          </Box>
        </Box>

        <Box height="10vh" border="1px solid red">
          <Button width="100%">{isAuth && "LOGOUT"}</Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Sidebar;
