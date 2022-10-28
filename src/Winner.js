import { TableCell, TableRow } from '@material-ui/core';
const Winner = ({ winners }) => {
    return (
        <TableRow>
            <TableCell >{winners.year}</TableCell>
            <TableCell>{winners.category}</TableCell>
            <TableCell >{winners.laureates && 
                winners.laureates.map((name => 
                <td>{name.firstname} {" "}{name.surname}{" | "}</td>
                ))}
            </TableCell>
            
        </TableRow>
    )
}
export default Winner