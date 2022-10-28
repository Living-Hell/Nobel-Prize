import Winner from "./Winner"
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';

const WinnersPage = ({ searchResults }) => {

    const results = searchResults.map(winners => <Winner  winners={winners} />)

    const content = results?.length ? results : <article><p>No Matching Winners</p></article>

    return (
        <Container style = {{ textAlign: "center"}}>
                <Typography
                    variant = "h4"
                    style = {{ margin:18, fontFamily: "Roboto" }}
                    >
                    Nobel Prize Winners
                    </Typography>
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
                </TableContainer>
                </Container>
    )
}
export default WinnersPage