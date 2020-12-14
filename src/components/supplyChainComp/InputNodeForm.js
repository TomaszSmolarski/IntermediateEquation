import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React from "react";
import "./styles_supply.css"

export const InputNodeForm = ({node, handleNodeSubmit, handleNodeChange}) => {
    return (
        <Paper>
            <form className="form-nodes" onSubmit={handleNodeSubmit}>
                <FormControl variant="filled" className="form-nodes">
                    <InputLabel id="demo-simple-select-filled-label">Type of Node</InputLabel>
                    <Select
                        className="form-element"
                        value={node.type}
                        onChange={handleNodeChange}
                        name="type"
                    >
                        <MenuItem value={"Supplier"}>Supplier</MenuItem>
                        <MenuItem value={"Receiver"}>Receiver</MenuItem>
                        <MenuItem value={"Broker"}>Broker</MenuItem>
                    </Select>
                    <TextField variant="filled" label="VALUE" required={true}
                               type="number" name="value" id="value" value={node.value}
                               className="form-element" onChange={handleNodeChange}
                               disabled={node.brokerValueInputDisable}/>

                    <Button variant="outlined" className="form-element" type="submit">
                        ADD NODE
                    </Button>
                </FormControl>
            </form>
        </Paper>
    )
}