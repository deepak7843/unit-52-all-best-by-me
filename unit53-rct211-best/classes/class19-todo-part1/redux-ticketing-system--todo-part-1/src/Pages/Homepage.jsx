import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskCard from "../Components/TaskCard";
import { getTasks } from "../Redux/AppReducer/action";

const Homepage = () => {
  const tasks = useSelector((state) => state.AppReducer.tasks);
  const dispatch = useDispatch();
  const getTasksHandler = useCallback(() => {
    dispatch(getTasks());
  }, [dispatch]);

  useEffect(() => {
    if (tasks.length === 0) {
      getTasksHandler();
    }
  }, [getTasksHandler, tasks.length]);

  return (
    // <div>Homepage</div>

    <Box border="3px solid red" width="100%">
      <Flex justifyContent="space-around">
        {/* Todo */}
        <Box border="1px solid black" width="250px" height="95vh">
          <Box>
            <Text textAlign="center">TODO</Text>
          </Box>
          {tasks.length > 0 &&
            tasks
              .filter((item) => item.task_status === "todo")
              .map((item) => {
                return (
                  <TaskCard key={item.id} {...item} colorScheme={"blue"} />
                );
              })}
        </Box>
        {/* in-progress //////////////////////********** */}
        {/* ///// */}
        {/* ///// */}
        <Box border="1px solid black" width="250px" height="95vh">
          <Box>
            <Text textAlign="center">IN-PROGRESS</Text>
          </Box>

          {tasks.length > 0 &&
            tasks
              .filter((item) => item.task_status === "in-progress")
              .map((item) => {
                return (
                  <TaskCard key={item.id} {...item} colorScheme={"yellow"} />
                );
              })}
        </Box>
        {/* done */} {/*  //////////////////////********** */}
        {/* ///// */}
        {/* ///// */}
        <Box border="1px solid black" width="250px" height="95vh">
          <Box>
            <Text textAlign="center">DONE</Text>
          </Box>

          {tasks.length > 0 &&
            tasks
              .filter((item) => item.task_status === "done")
              .map((item) => {
                return <TaskCard key={item.id} {...item} colorScheme="blue" />;
              })}
        </Box>
      </Flex>
    </Box>
  );
};

export default Homepage;
