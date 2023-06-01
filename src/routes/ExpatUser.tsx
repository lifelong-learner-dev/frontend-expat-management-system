import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSupporterOnlyPage from "../components/SupporterOnlyPage";
import useUser from "../lib/useUser";

export default function ExpatUser() {
  useSupporterOnlyPage();
  const { user, userLoading } = useUser();
  return (
        <TableContainer mt={"10"} ml={"10"} mr={"10"}>
        <Table variant='simple'>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
            <Tr bg={'gray.200'}>
                <Th>Subjects</Th>
                <Th>Contents</Th>
            </Tr>
            </Thead>
            <Tbody>
            <Tr>
                <Td> First name </Td>
                <Td>{user?.first_name}</Td>
            </Tr>
            <Tr>
                <Td>Last name</Td>
                <Td>{user?.last_name}</Td>
            </Tr>
            <Tr>
                <Td>Cellphone number</Td>
                <Td>{user?.cellphone_number}</Td>
            </Tr>
            <Tr>
                <Td>E-mail address</Td>
                <Td>{user?.email}</Td>
            </Tr>
            <Tr>
                <Td>House address</Td>
                <Td>{user?.house_address}</Td>
            </Tr>
            <Tr>
                <Td></Td>
            </Tr>
            <Tr bg={'gray.100'}>
                <Td as={'b'}>Turkish ID</Td>
                <Td></Td>
            </Tr>
            <Tr>
                <Td>Turkish ID number</Td>
                <Td>{user?.turkish_id}</Td>
            </Tr>
            <Tr>
                <Td>Turkish ID Expiry date</Td>
                <Td>{user?.tc_id_expiry_date}</Td>
            </Tr>
            <Tr>
                <Td></Td>
            </Tr>
            <Tr bg={'gray.100'}>
                <Td as={'b'}>Passport</Td>
                <Td></Td>
            </Tr>
            <Tr>
                <Td>Passport number</Td>
                <Td>{user?.passport_number}</Td>
            </Tr>
            <Tr>
                <Td>Passport Expiry date</Td>
                <Td>{user?.passport_expiry_date}</Td>
            </Tr>
            <Tr>
                <Td></Td>
            </Tr>
            <Tr>
                <Td>Gender</Td>
                <Td>{user?.gender}</Td>
            </Tr>
            <Tr>
                <Td>Department</Td>
                <Td>{user?.department}</Td>
            </Tr>
            <Tr>
                <Td>Division</Td>
                <Td>{user?.division}</Td>
            </Tr>
            <Tr>
                <Td></Td>
            </Tr>
            </Tbody>
            <Tfoot>
            <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
            </Tr>
            </Tfoot>
        </Table>
        </TableContainer>
    );
  }