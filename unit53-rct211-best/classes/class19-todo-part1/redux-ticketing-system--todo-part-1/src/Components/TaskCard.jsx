import { Badge, Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

const TaskCard = ({
  title,
  description,
  tags,
  subTasks,
  colorScheme = "green",
}) => {
  return (
    // <div>TaskCard</div>

    <Box>
      <Text> {title} </Text>
      <Box>
        <Stack>
          {tags.length &&
            tags.map((item, index) => {
              return (
                <Badge key={index} colorScheme={colorScheme}>
                  {item}
                </Badge>
              );
            })}
        </Stack>
      </Box>
      <Text> {description} </Text>
      <hr style={{
        // color:"red",
      border: "3px solid black " }}  />
      {/* <hr /> */}
      {/* <hr /> */}
      {/* <br /> */}
      {/* <br /> */}
    </Box>
     
  );
};

export default TaskCard;
