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

const Register = () => {
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

  const postImage = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      setLoading(false);
      return toast({
        title: "Image Upload Warning.",
        description: "Please select an image",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", process.env.REACT_APP_PRESET);
      data.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
      fetch(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/upload`,
        {
          method: "POST",
          body: data,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setUserData({ ...userData, profilePicture: data.url.toString() });
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast({
        title: "Image Upload Warning.",
        description: "Please select an image",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
    }
  };

  const HandlePostUser = async () => {
    setLoading(true);
    if (userData.password !== confirmPassword) {
      toast({
        title: "Validation Warning",
        description: "Password & confirm password does not match",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
      return setLoading(false);
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/user`,
        userData,
        config
      );
      console.log(data);
      toast({
        title: "Validation Warning",
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
            onChange={(e) => postImage(e.target.files[0])}
          />
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ maginTop: 15 }}
        onClick={HandlePostUser}
        isLoading={loading}
      >
        Register
      </Button>
    </VStack>
  );
};

export default Register;
