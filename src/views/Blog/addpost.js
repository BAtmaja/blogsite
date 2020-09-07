import React, {Component} from 'react';
import Editor from "components/Blog/add-blog/Editor";
import SidebarActions from "components/Blog/add-blog/SidebarActions";
import {Grid} from '@material-ui/core';



class addPost extends Component{
    render() {
        return (
            	
					<div>
                        <Grid container spacing={4}>
                            <Grid item lg={9} md={4} sm={6} xs={12}>
                                <Editor/>
                            </Grid>
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <SidebarActions />
                            </Grid>
                        </Grid>
                   </div>
        );
            
    }
}

export default addPost;