import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import decode from "jwt-decode";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import memories from "../../images/memories.png";
import useStyles from "./styles";
import * as actionType from "../../constants/actionTypes";


const Paginate = () => {
    return (
        <>
            <Pagination
                count={numberOfPages}
                page={page}
                variant="outlined"
                color="primary"
                onChange={(e) => setPage(e.target.textContent)}
                renderItem={renderItem}
                


            />
        </>
    )
}