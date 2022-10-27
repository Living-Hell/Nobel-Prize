import React from "react";
import { Container, createTheme, LinearProgress, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, ThemeProvider, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

const useStyles = makeStyles(() => ({
    row: {
        backgroundColor: "#101a27",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#091217",
        },
        fontFamily: "Roboto",
    },
    pagination: {
        "& .MuiPaginationItem-root": {
            color: "#87cefb",
        },
    },
}));

export default class NobelPrize extends React.Component {
  state = {
    loading: true,
    person: null
  };

  

  async componentDidMount() {
    const url = "https://api.nobelprize.org/v1/prize.json";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.prizes, loading: false });
    console.log(data.prizes);
  }

  render() {
    if (this.state.loading) {
        <LinearProgress style={{ backgroundColor: "#40E0D0"}} />
      return <div style={{ backgroundColor: "#40E0D0"}} >loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
            <Container style = {{ textAlign: "center"}}>
                <Typography
                    variant = "h4"
                    style = {{ margin:18, fontFamily: "Roboto" }}
                    >
                    Nobel Prize Winners
                    </Typography>

                {/* Insert Filter Here*/}
        
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
                        }}
                        key = {head}
                        
                        >
                            {head}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {this.state.person.map((item =>
                    <TableRow>
                        <TableCell >{item.year}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>{item.laureates && item.laureates.map((name => 
                            <td>{name.firstname} {" "}{name.surname}{" | "}</td>
                            ))}
                        </TableCell>
                        
                    </TableRow>
                ))}
            </TableBody>
            </Table>
                    
            </TableContainer>
            <Pagination
                style = {{ 
                    padding: 20,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                 }}
                >
            </Pagination>

        </Container>
      
    );
  }
}
