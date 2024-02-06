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

const Register = () => {
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
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="enter your name"
          onChange={(e) => handleUserData("name", e.target.value)}
        />
      </FormControl>
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
      <FormControl id="password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={confirmshowPassword ? "text" : "password"}
            placeholder="confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement width={"4.5rem"}>
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => setConfirmShowPassword((prev) => !prev)}
            >
              {confirmshowPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="profilePicture" isRequired>
        <FormLabel>Upload Your Profile Picture</FormLabel>
        <InputGroup size="md">
          <Input
            type="file"
            p={1.5}
            accept="image/*"
            onChange={(e) => postImage("profilePicture", e.target.files[0])}
          />
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
    </VStack>
  );
};

export default Register;
