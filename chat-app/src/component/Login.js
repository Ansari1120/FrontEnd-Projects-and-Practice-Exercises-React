import { VStack } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  Button,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Login = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmshowPassword, setConfirmShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleUserData = (key, value) => {
    setUserData({ ...userData, [key]: value });
  };

  const postImage = (pics) => {};
  const HandlePostUser = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/user/login`,
        userData,
        config
      );
      console.log(data);
      toast({
        title: "Message",
        description: data.message,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      localStorage.setItem("userInfo", JSON.stringify(data.data));
      setLoading(false);
      history.push("/chats");
    } catch (error) {
      setLoading(false);
      toast({
        title: "Validation Error",
        description: error?.response?.data?.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  console.log("data", userData);
  console.log(showPassword);
  return (
    <VStack spacing={"5px"} color="black">
      <FormControl id="email" isRequired>
        <FormLabel>E-mail</FormLabel>
        <Input
          value={userData.email}
          placeholder="enter your email"
          onChange={(e) => handleUserData("email", e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            value={userData.password}
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
        isLoading={loading}
      >
        Login
      </Button>
      <Button
        colorScheme="red"
        width="100%"
        style={{ maginTop: 15 }}
        onClick={() => {
          setUserData({
            ...userData,
            email: "guest@example.com",
            password: "123456",
          });
        }}
      >
        Login as Guest User
      </Button>
    </VStack>
  );
};

export default Login;
