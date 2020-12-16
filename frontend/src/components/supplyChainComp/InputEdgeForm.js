import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React from "react";


export const InputEdgeForm = ({edge, handleEdgeChange, handleEdgeSubmit, inputData}) => {

    return (
        <Paper>
            <form onSubmit={handleEdgeSubmit} className="form-nodes">
                <FormControl variant="filled" className="form-nodes">
                    <InputLabel id="demo-simple-select-filled-label">FROM</InputLabel>
                    <Select

                        className="form-element"
                        name="from"
                        defaultValue={edge.from}
                        onChange={handleEdgeChange}
                    >
                        {inputData.nodes.map(value => <MenuItem value={value.id}>{value.id}</MenuItem>)}
                    </Select>

                    <Select
                        className="form-element"
                        name="to"
                        defaultValue={edge.to}
                        onChange={handleEdgeChange}
                    >
                        {inputData.nodes.map(value => <MenuItem value={value.id}>{value.id}</MenuItem>)}
                    </Select>

                    <TextField variant="filled" label="COST" required={true}
                               type="number" name="cost" id="cost" defaultValue={edge.cost}
                               className="form-element"
                               onChange={handleEdgeChange}/>
                    {/*<TextField variant="filled" label="MIN"*/}
                    {/*           type="number" name="min" id="min" defaultValue={edge.min}*/}
                    {/*           className="form-element"*/}
                    {/*           onChange={handleEdgeChange}/>*/}
                    {/*<TextField variant="filled" label="MAX"*/}
                    {/*           type="number" name="max" id="max" defaultValue={edge.max}*/}
                    {/*           className="form-element"*/}
                    {/*           onChange={handleEdgeChange}/>*/}
                    <Button variant="filled" className="form-element" type="submit">
                        ADD EDGE
                    </Button>
                </FormControl>
            </form>
        </Paper>
    )
}