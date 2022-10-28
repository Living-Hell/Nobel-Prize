import React from 'react'
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const FrequentWinners = () => {
  return (
    <Container style = {{ textAlign: "center"}}>
               
            <TableContainer>
                <Table id="MultipleWinners">
                    <TableHead style = {{backgroundColor: "#91bad6"}}>
                        <TableRow>
                            {["Year", "Category", "Laureates"].map((head) => (
                                <TableCell
                                style = {{
                                    color: "black",
                                    fontWeight: "700",
                                    fontFamily: "Roboto",
                                    fontSize: 18
                                }}
                                key = {head}
                                
                                >
                                    {head}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody >
                    <TableRow>
                        <TableCell >1903, 1911 </TableCell>
                        <TableCell>physics, chemistry</TableCell>
                        <TableCell >Marie Curie </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell >1954, 1962 </TableCell>
                        <TableCell>chemistry, peace</TableCell>
                        <TableCell >Linus Pauling </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell >1956, 1972 </TableCell>
                        <TableCell>physics, physics</TableCell>
                        <TableCell >John Bardeen </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell >1958, 1980 </TableCell>
                        <TableCell>chemistry, chemistry</TableCell>
                        <TableCell >Frederick Sanger </TableCell>
                    </TableRow>
                    </TableBody>
                    
                </Table>
            </TableContainer>
        </Container>
  )
}

export default FrequentWinners