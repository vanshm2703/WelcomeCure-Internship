// components/PatientTable.js
"use client";

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const patients = [
  { srNo: 1, regId: 'ARV104', regDate: '07/06/2024', firstName: 'saty', lastName: 'satly', city: '', diagnosis: 'Abortion,Abscess,Acne,Acidity,Acoustic neuroma,Acromegaly,Acquired immunodeficiency Syndrome' },
  { srNo: 2, regId: 'AVL102', regDate: '2024-05-17', firstName: 'avinash', lastName: 'sadty', city: '', diagnosis: 'Abortion,Abscess' },
  { srNo: 3, regId: 'ADW102', regDate: '2024-05-27', firstName: 'seetydd', lastName: 'mehta', city: '', diagnosis: 'Abortion,Abscess' },
  { srNo: 4, regId: 'AVL100', regDate: '2024-05-16', firstName: 'anant', lastName: 'joshi', city: '', diagnosis: 'Abortion,Abscess' },
  { srNo: 5, regId: 'AVL100', regDate: '12-05-2024', firstName: 'Amaan Ansari', lastName: 'shah', city: '', diagnosis: 'Abortion,Abscess,Acanthosis Nigricans,Achalasia cardia,Acidity,Achondroplasia,Acne,Acoustic neuroma' },
];

function PatientTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sr No</TableCell>
            <TableCell align="right">Reg ID</TableCell>
            <TableCell align="right">Reg Date</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Diagnosis</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((patient) => (
            <TableRow
              key={patient.srNo}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {patient.srNo}
              </TableCell>
              <TableCell align="right">{patient.regId}</TableCell>
              <TableCell align="right">{patient.regDate}</TableCell>
              <TableCell align="right">{patient.firstName}</TableCell>
              <TableCell align="right">{patient.lastName}</TableCell>
              <TableCell align="right">{patient.city}</TableCell>
              <TableCell align="right">{patient.diagnosis}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PatientTable;
