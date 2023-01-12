import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const Result = () => {
  var resData = JSON.parse(localStorage.getItem("resData"));
  console.log("resData--", resData);
  var right = 0,
    wrong = 0;

  for (var k in resData) {
    if (resData[k] === true) right++;
    else wrong++;
  }
  var percent = Math.ceil((right / (right + wrong)) * 100);

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Correct answers count</Th>
            <Th>Incorrect answers count</Th>
            <Th>Total score</Th>
            <Th>Percentage</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{right}</Td>
            <Td>{wrong}</Td>
            <Td>{right}</Td>
            <Td>{percent}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Result;
