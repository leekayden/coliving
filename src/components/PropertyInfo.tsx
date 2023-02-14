import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { PropertyList } from "../global/data";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  id: number,
  ownerId: number,
  title: string,
  description: string,
  status: string,
  price: number,
  whatsappContact: string,
  extraDetails: string[],
  maxPax: number,
  roomFeatures: string[]
) {
  return {
    id,
    ownerId,
    title,
    description,
    status,
    price,
    whatsappContact,
    extraDetails,
    maxPax,
    roomFeatures,
  };
}

interface PropertyInfoProps {
  identifier: number;
}

export default function PropertyInfo({ identifier }: PropertyInfoProps) {
  const filteredList:
    | {
        id: number;
        ownerId: number;
        title: string;
        description: string;
        status: string;
        route: string;
        price: number;
        whatsappContact: string;
        extraDetails: string[];
        maxPax: number;
        roomFeatures: string[];
      }
    | undefined = PropertyList.find((item) => item.id === identifier);

  const rows: Array<{
    id: number;
    ownerId: number;
    title: string;
    description: string;
    status: string;
    price: number;
    whatsappContact: string;
    extraDetails: string[];
    maxPax: number;
    roomFeatures: string[];
  }> = filteredList
    ? [
        createData(
          filteredList.id,
          filteredList.ownerId,
          filteredList.title,
          filteredList.description,
          filteredList.status,
          filteredList.price,
          filteredList.whatsappContact,
          filteredList.extraDetails,
          filteredList.maxPax,
          filteredList.roomFeatures
        ),
      ]
    : [];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500, display: "block" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Extra Details</StyledTableCell>
            <StyledTableCell align="right">Max Pax</StyledTableCell>
            <StyledTableCell align="right">Room Features</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">
                {row.extraDetails.join(", ")}
              </StyledTableCell>
              <StyledTableCell align="right">{row.maxPax}</StyledTableCell>
              <StyledTableCell align="right">
                {row.roomFeatures.join(", ")}
              </StyledTableCell>
            </StyledTableRow>
          ))}
          <p>WhatsApp Enquiry: {whatsappContact}</p> 
        </TableBody>
      </Table>
    </TableContainer>
  );
}
