import React, {Component} from 'react';
import * as ReactQuill from 'react-quill'; 

import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormControl from '@material-ui/core/FormControl';
import "react-quill/dist/quill.snow.css";
import { formValueSelector } from 'redux-form';


const Editor = () => (
 
        <form className="add-new-post">
                 <ReactQuill className="add-new-post" />
        </form>            

);





export default Editor;
