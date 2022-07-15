import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  PinInput,
  PinInputField,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOtp] = useState("");

  return (
    <Box>
      <Heading>Form</Heading>
      <Stack gap="0.5rem">
        <Box>
          <Input type="email" placeholder="email" />
        </Box>
        <Box>
          <Input type="password" placeholder="password" />
        </Box>

        <Box>
          <Stack direction="row">
            <PinInput value={otp} onChange={(value) => setOtp(value)}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </Stack>
        </Box>

        <Box>
          <Text> OTP is {otp}</Text>
        </Box>

        <Box>
          <Button
        //   bg={"primaryColor.color1"}
          backgroundColor={"primaryColor.color1"}
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
              }, 2000);
            }}
            isLoading={isLoading}
          >
            Sign Up
          </Button>{" "}
        </Box>
      </Stack>
    </Box>
  );
};

export default Form;
