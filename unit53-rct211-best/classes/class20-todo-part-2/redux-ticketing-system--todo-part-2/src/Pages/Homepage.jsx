import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import TaskCard from "../Components/TaskCard";
import { getTasks } from "../Redux/AppReducer/action";

const Homepage = () => {
  const tasks = useSelector((state) => state.AppReducer.tasks);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();


  const getTasksHandler = useCallback(() => {
    dispatch(getTasks());
  }, [dispatch]);


  
  const filterByParamTags = (task) => { 
    //to filter out the tags that we have based on the params
    const tagsInTheParams = searchParams.getAll("tags");
    console.log("tagsInTheParams--", tagsInTheParams);

    if (tagsInTheParams.includes("All") || tagsInTheParams.length === 0) {
      return task;
    }

    const data = task.tags.filter((tag) => {
      if (tagsInTheParams.includes(tag)) {
        return true;
      }
      return false;
    });


    // console.log("data--", data);   
    if (data.length) {
      return task;
    }

    return false;
  };

  useEffect(()=>{
    if(tasks.length===0){
      getTasksHandler()
    }
  } , [getTasksHandler, tasks.length] )

  return (
    // <div>Homepage</div>

    <Box border="3px solid green" width="100%">
      <Flex justifyContent="space-around">
        {/* Todo */}
        <Box border="1px solid black" width="250px" height="95vh">
          <Box>
            <Text textAlign="center">TODO</Text>
          </Box>
          {
            tasks.length> 0 && tasks.filter((item) => item.task_status=== "todo" )
            .filter(filterByParamTags) /// 43-17 explain
            .map((item)=>{
              return <TaskCard key={item.id} {...item} colorScheme={"green"} />
            } )
          }
        </Box>

        {/* in-progress */}
        <Box border="1px solid black" width="250px" height="95vh">
          <Box>
            <Text textAlign="center">IN-PROGRESS</Text>
          </Box>

          {
            tasks.length> 0 && tasks.filter((item) => item.task_status=== "in-progress" )
            .filter(filterByParamTags)
            .map((item)=>{
              return <TaskCard key={item.id} {...item} colorScheme={"yellow"} />
            } )
          }
        </Box>

        {/* done */}
        <Box border="1px solid black" width="250px" height="95vh">
          <Box>
            <Text textAlign="center">DONE</Text>
          </Box>

          {
            tasks.length> 0 && tasks.filter((item) => item.task_status=== "done" )
            .filter(filterByParamTags)
            .map((item)=>{
              return <TaskCard key={item.id} {...item}  colorScheme="blue" />
            } )
          }
        </Box>
      </Flex>
    </Box>
  );
};

export default Homepage;
