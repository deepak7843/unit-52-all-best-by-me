import { Box, Button, SimpleGrid, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Layouts = () => {
  const items = new Array(12).fill(0).map((a, i) => i + 1);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    // <div>Layouts</div>

    <Box>
      <Button  onClick={toggleColorMode} >
        
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>
      <SimpleGrid
        columns={{
          base: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 5,
          // "2xl":2,
        }}

        bg={useColorModeValue("blue.400", "red.400"  )  }
      >
        {/* <SimpleGrid columns={[2,3,4]} > */}

        {/* <SimpleGrid columns={3} > */}
        {items.map((item, index) => {
          return (
            <Box
              key={index}
              border="1px solid blue"
              //  width="100px"
            >
              {item}
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Layouts;
