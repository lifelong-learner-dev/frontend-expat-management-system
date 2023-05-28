import { Box } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import HeaderSecond from "./HeaderSecond";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


export default function Root() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <Box>
      <Header />
      {!isHome && <HeaderSecond />}
      <Outlet />
      <ReactQueryDevtools />
    </Box>
  );
}