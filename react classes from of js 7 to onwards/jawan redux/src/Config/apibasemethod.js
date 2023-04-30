import axios from "axios";
import React from "react";

let apihandler = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

let Get = (endpoint) => {
    return apihandler.get(endpoint)
}

let Getbyid = (endpoint, id) => {
  return apihandler.get(`${endpoint}/${id}`);
};

let Post = (endpoint,body) => {
  return apihandler.post(endpoint, body);
};

let Put = (endpoint, body) => {
  return apihandler.put(endpoint, body);
};

let Del = (endpoint, id) => {
  return apihandler.delete(`${endpoint}/${id}`);
};

export {Get , Getbyid, Post, Put, Del}