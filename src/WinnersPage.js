import Winner from "./Winner"
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, LinearProgress } from '@material-ui/core';

const WinnersPage = ({ searchResults }) => {

    const results = searchResults.map(winners => <Winner  winners={winners} />)

    if(!results.length) return <LinearProgress style={{ backgroundColor: "#40E0D0"}} />;

    const content = results?.length ? results : <article><p>No Matching Winners</p></article>

    return (
        <Container style = {{ textAlign: "center"}}>
            <a href="#MultipleWinners"><h2>Frequent Winners</h2></a> 
            <TableContainer>
                <Table>
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
                        {content}
                    </TableBody>
                    
                </Table>
                <div style = {{ margin:18, fontFamily: "Roboto", textAlign: "center" }}><h2>Frequent Winners</h2></div>
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
export default WinnersPage