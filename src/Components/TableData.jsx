import { Grid, TableCell, TableRow, TableBody, TableHead, Table, Paper, TableContainer, Typography, TablePagination, TableFooter } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';

const TableData = () => {

    const [user, setUser] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = React.useState(2);

    let api_url = 'https://reqres.in/api/users?page=1';

    async function getUserData(url) {
        const response = await fetch(url);
        let data = await response.json();
        setUser(data.data);
    }

    useEffect(() => {
        getUserData(api_url);
    });

    const rows = [
        ...user
    ];

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));

    return (
        <Grid container className='whole_page_data'>
            <Grid item xs={12} className="table_head">Available</Grid>
            <Grid item xs={12} className="content">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell><Typography variant='h6'>ID</Typography></TableCell>
                                <TableCell><Typography variant='h6'>First Name</Typography></TableCell>
                                <TableCell><Typography variant='h6'>Last Name</Typography></TableCell>
                                <TableCell><Typography variant='h6'>Email</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.first_name}</TableCell>
                                    <TableCell>{row.last_name}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                        <TableFooter sx={{display: 'flex', justifyContent: 'right', alignItems: 'center'}}>
                            <TablePagination
                                component="div"
                                count={100}
                                page={page}
                                onPageChange={handleChangePage}
                                rowsPerPage={rowsPerPage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}

export default TableData;