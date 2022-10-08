import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/App/action";
import { ADD_CART_SUCCESS } from "../Redux/App/actionTypes";

function Rating({ rating, numReviews }) {
  return (
    <Flex d="flex" alignItems="center">
      <Flex>
        {Array(5)
          .fill("")
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: "1" }}
                  color={i < rating ? "teal.500" : "gray.300"}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
            }
            return <BsStar key={i} style={{ marginLeft: "1" }} />;
          })}
      </Flex>
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Flex>
  );
}

function Card({ item }) {
  const dispatch = useDispatch();
  
  const handleAddToCart = (item) => {
    dispatch(addToCart(item)).then((res) => {
      if (res.status === ADD_CART_SUCCESS) {
        alert(res.message);
      }
    });
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
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a
                href={"#"}
                display={"flex"}
                onClick={() => handleAddToCart(item)}
              >
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={item.rating} numReviews={item.number_of_votes} />
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                Rs.
              </Box>
              {item.price_starts_from.toFixed(2)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default Card;
