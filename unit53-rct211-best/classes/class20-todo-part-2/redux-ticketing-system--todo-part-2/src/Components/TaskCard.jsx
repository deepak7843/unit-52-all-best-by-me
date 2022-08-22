import { EditIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const TaskCard = ({
  id,
  title,
  description,
  tags,
  subTasks,
  colorScheme = "green",
}) => {
  //////
  //////
  //////
  const dispatch = useDispatch();

  const [checkbox, setCheckbox] = useState(() => {
    let data = subTasks
      .filter((item) => {
        return item.status && item.subTaskTitle; //// 7-21
      })
      .map((item) => item.subTaskTitle);
    /////
    return data;
  });

  // console.log("checkbox--", checkbox);


  const updateSubTaskStatus = (value) => {
    let newSubTaskData = subTasks.map((item) => {
      if (value.includes(item.subTaskTitle)) {
        return {
          ...item,
          status: true,
        };
      }
      return { ...item, status: false };
    });

    // dispatch(updateSubtasksList(id, { subTasks: newSubTaskData })).then(() =>
    //   dispatch(getTasks())
    // );
  };

  return (
    // <div>TaskCard</div>

    <Box
      border="1px solid red"
      width={"230px"}
      // padding="10px"
      padding={"10px"}
      // marginLeft="10px"
      margin="auto"
    >
      <Flex justifyContent={"space-between"}>
        <Text> {title} </Text>
        <Link to={`/task/${id}`}>
          <EditIcon />
        </Link>{" "}
      </Flex>
      <Box>
        <Stack direction="row">
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

      <Box
      //  border="3px solid green"
      >
        <CheckboxGroup
          // defaultValue={checkbox}
          value={checkbox}
          // border="4px solid blue"
          ////
          ////
          onChange={(value) => {
            setCheckbox(value);
            updateSubTaskStatus(value);
          }}
        >
          {subTasks.length &&
            subTasks.map((item, index) => (
              <Checkbox
                // border="1px solid red"
                key={index}
                size="md"
                value={item.subTaskTitle} //// 10-4
              >
                {item.subTaskTitle}
              </Checkbox>
            ))}
        </CheckboxGroup>
      </Box>
      {/* <hr /> */}
      {/* <br /> */}
    </Box>
  );
};

export default TaskCard;
