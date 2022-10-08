import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
const Dashboard = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dsd-heroku.herokuapp.com/user?_sort=score&_order=desc`)
      .then((res) => {
        console.log("user", res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>NAME</Th>
            <Th>SCORE</Th>
          </Tr>
        </Thead>
        <Tbody>
          {user.map((e) => {
            return (
              <Tr key={e.id}>
                <Td>{e.id}</Td>
                <Td>{e.name}</Td>
                <Td>{e.score}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Dashboard;
