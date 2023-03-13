import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

interface UserInformationProps {
  userAgent: string;
  ipAddress: string;
  screenWidth: number;
  screenHeight: number;
  city: string | null;
  country: string | null;
}

const UserInformation: React.FC<UserInformationProps> = ({
  userAgent,
  ipAddress,
  screenWidth,
  screenHeight,
  city,
  country,
}) => {
  return (
    <Box sx={{ maxWidth: 800, margin: "auto" }}>
      <Typography variant="h3">We use this information for research purposes</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Information</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>User agent string</TableCell>
              <TableCell>{userAgent}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>IP address</TableCell>
              <TableCell>{ipAddress}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Screen size</TableCell>
              <TableCell>
                {screenWidth}px x {screenHeight}px
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Location</TableCell>
              <TableCell>
                {city && country
                  ? `${city}, ${country}`
                  : "Information not available"}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserInformation;
