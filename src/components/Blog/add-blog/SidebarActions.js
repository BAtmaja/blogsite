import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";

import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import FlagIcon from '@material-ui/icons/Flag';
import Table from "components/Table/Table.jsx";



function  SidebarActions() {
    return(
      <List component="nav" aria-labellebdy="nested-list-subheader"
    subheader = {
      <ListSubheader component="div" id="nested-list-subhader"> Publish</ListSubheader>
    }
    className="customListComponent"
    >
      <ListItem>
          <ListItemText>
            <span className="d-flex mb-2">
              <i className="material-icons mr-1">flag</i>
              <strong className="mr-1">Status:</strong> Draft{" "}
              <a className="ml-auto" href="#">Edit
              </a>
            </span>
          </ListItemText>
      </ListItem>
      <ListItem>
          <ListItemText>
          <span className="d-flex mb-2">
            <i className="material-icons mr-1">visibility</i>
            <strong className="mr-1">Visibility:</strong>{" "}
            <strong className="text-success">Public</strong>{" "}
            <a className="ml-auto" href="#">Edit</a>
          </span>
          </ListItemText>
      </ListItem>
      <ListItem>
          <ListItemText>
            <span className="d-flex mb-2">
              <i className="material-icons mr-1">calendar_today</i>
              <strong className="mr-1">Schedule:</strong> Now{" "}
              <a className="ml-auto" href="#">Edit</a>
            </span>
          </ListItemText>
      </ListItem>
      <ListItem>
          <ListItemText>
          <span className="d-flex">
            <i className="material-icons mr-1">score</i>
            <strong className="mr-1">Readability:</strong>{" "}
            <strong className="text-warning">Ok</strong>
          </span>
          </ListItemText>
      </ListItem>
      <ListItem>
          <ListItemText>
            <Button outline theme="accent" size="sm">
              <i className="material-icons">save</i> Save Draft
            </Button>
            <Button theme="accent" size="sm" className="ml-auto">
                <i className="material-icons">file_copy</i> Publish
              </Button>
          </ListItemText>
      </ListItem>
    </List>

 );
}
export default SidebarActions;
