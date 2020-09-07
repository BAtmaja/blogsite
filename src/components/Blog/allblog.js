import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// react plugin for creating charts
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import AccountBalance from "@material-ui/icons/AccountBalance";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { bugs, website, server } from "variables/general.jsx";


const Allblogs = (props) => {
const{
        title,
        category,
        description
    } = props.blog
    return(
            <GridItem xs={12} sm={12} md={4}>
                <Card>
                <CardHeader color="warning">
                    <p>{title}</p>
                </CardHeader>
                <CardBody>
                    <p >{description}</p>
                </CardBody>
                <CardFooter>
                    <div>
                        Categoery: {category}
                    </div>
                </CardFooter>
                </Card>
            </GridItem>
    );
};
export default connect()(Allblogs);