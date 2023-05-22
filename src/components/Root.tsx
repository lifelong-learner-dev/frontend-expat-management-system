import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import HeaderSecond from "./HeaderSecond";

export default function Root() {
  return (
    <Box>
      <Header />
      <HeaderSecond />
      <Outlet />
    </Box>
  );
}