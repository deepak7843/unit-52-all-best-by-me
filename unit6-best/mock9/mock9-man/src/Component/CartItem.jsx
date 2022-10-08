import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  chakra,
  Tooltip,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  border,
  Text,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useState } from "react";
import OtpInput from "react-otp-input";
import { useDispatch } from "react-redux";
import { deleteCartItem, getCartItems } from "../Redux/App/action";
import { DELETE_CART_ITEM } from "../Redux/App/actionTypes";

function CartItem({ item }) {
  const dispatach = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, setState] = useState({ otp: "" });
  const [no, setNo] = useState(1);
  //   console.log(state.otp);

  const handleOtp = (otp) => {
    setState({ otp });
  };

  const handleDelete = (id) => {
    dispatach(deleteCartItem(id))
      .then((res) => {
        if (res.status === DELETE_CART_ITEM) {
          alert(res.message);
        }
      })
      .then(() => dispatach(getCartItems()));
  };

  const handleSubmit = () => {
    // console.log(state.otp);
    if (state.otp != "1234") {
      alert("wrong OTP");
    } else {
      alert("Thank you buying");
    }
  };
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Image
          src={item.image}
          width={"100%"}
          alt={`Picture of ${item.name}`}
          roundedTop="lg"
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              {item.type}
            </Badge>
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {item.name}
            </Box>
            <Tooltip
              label="Delete Item"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <Text as="span" cursor={"pointer"} display={"flex"} onClick={() => handleDelete(item.id)}>
                <DeleteIcon />
              </Text>
            </Tooltip>
          </Flex>
          <Flex justifyContent="space-between" alignContent="center">
            <Box>
              <Button
                colorScheme={"green"}
                disabled={no <= 1}
                onClick={() => setNo(no - 1)}
              >
                {"<"}
              </Button>
              <span>{no}</span>
              <Button colorScheme={"green"} onClick={() => setNo(no + 1)}>
                {">"}
              </Button>
            </Box>
            <Box>Total Rs: {item.price_starts_from * no}</Box>
          </Flex>
          <Box>
            Total price including GST: Rs.{" "}
            {item.price_starts_from * no +
              Math.floor((item.price_starts_from * no * 18) / 100)}
          </Box>
        </Box>
        <Box p={2} textAlign={"center"}>
          <Button onClick={onOpen}>Place order</Button>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Otp:</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <OtpInput
              numInputs={4}
              separator={<span>-</span>}
              onChange={handleOtp}
              inputStyle={"otpBorder"}
              value={state.otp}
            />
            <Button m={"2"} onClick={handleSubmit}>
              Submit
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default CartItem;
