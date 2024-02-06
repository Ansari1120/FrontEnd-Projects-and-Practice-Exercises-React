import { VStack } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  Button,
  InputGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [userData, setUserData] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmshowPassword, setConfirmShowPassword] = useState(false);

  const handleUserData = (key, value) => {
    setUserData({ ...userData, [key]: value });
  };

  const postImage = (pics) => {};
  const HandlePostUser = async () => {};
  console.log("data", userData);
  console.log(showPassword);
  return (
    <VStack spacing={"5px"} color="black">
      <FormControl id="email" isRequired>
        <FormLabel>E-mail</FormLabel>
        <Input
          placeholder="enter your email"
          onChange={(e) => handleUserData("email", e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="enter your password"
            onChange={(e) => handleUserData("password", e.target.value)}
          />
          <InputRightElement width={"4.5rem"}>
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ maginTop: 15 }}
        onClick={HandlePostUser}
      >
        Register
      </Button>
      <Button
        colorScheme="red"
        width="100%"
        style={{ maginTop: 15 }}
        onClick={() => {
          //   handleUserData("email", "guest@example.com");
          //   handleUserData("password", "123456");
          //   setUserData({ ...userData, password: "123456" });
          //   setUserData({ ...userData, email: "guest@example.com" });
        }}
      >
        Login as Guest User
      </Button>
    </VStack>
  );
};

export default Login;
