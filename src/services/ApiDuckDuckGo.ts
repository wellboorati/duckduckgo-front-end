import axios from "axios";
import { duckduckgoApi } from "../values";

const ApiDuckDuckGo = axios.create({
  baseURL: duckduckgoApi,
  headers: {
    "Content-Type": "application/json",
  },
});

export default ApiDuckDuckGo;
