import React, {Component} from 'react';
import {connect} from 'react-redux';
import Allblogs from "components/Blog/allblog";
import {paginationPipe} from 'pipes/paginationFilter';
import Pagination from "components/Pagination/Pagination";
// core components
import Grid from '@material-ui/core/Grid';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Header from 'components/Header/HomePageHeader';
import Footer from 'components/Footer/LoginFooter';

class Home extends Component{
    state = {
        colValue: 'col-lg-4',
        perPage: 6,
        currentPage: 1,
        pagesToShow: 3,
        gridValue: 3
    };
    onPrev = () => {
        const updatedState = {...this.state};
        updatedState.currentPage = this.state.currentPage - 1;
        this.setState(updatedState);
    };
    onNext = () => {
        this.setState({
            ...this.state,
            currentPage: this.state.currentPage + 1
        });
    };
    goPage = (n) => {
        this.setState({
            ...this.state,
            currentPage: n
        });
    };  
    render() {
        let isActive = this.state.colValue[this.state.colValue.length - 1];
        const { classes} = this.props;
        return (
            <div>
                <Header/>
                <Grid container spacing={3}>
                <GridItem xs={12} sm={12} md={2}> </GridItem>
                <GridItem xs={12} sm={12} md={8}>   
                    <GridContainer justify="center">                      
                            {paginationPipe(this.props.blogs, this.state).map(
                                blog =>{                                               
                                        return (
                                            <Allblogs key={blog.id} blog={blog} />                          
                                        )
                                    })
                            }
                            <div className="d-flex justify-content-end">
                                        <Pagination
                                            totalItemsCount={this.props.blogs.length}
                                            currentPage={this.state.currentPage}
                                            perPage={this.state.perPage}
                                            pagesToShow={this.state.pagesToShow}
                                            onGoPage={this.goPage}
                                            onPrevPage={this.onPrev}
                                            onNextPage={this.onNext}
                                        />
                                    </div>
                    </GridContainer>
                </GridItem>
                <GridItem xs={12} sm={12} md={2}> </GridItem>
                </Grid>
                <Footer />
            </div> 
        );
    }
}
const mapStateToProps = state => {
    return {blogs: state.Blog.blogs }
};

export default connect(mapStateToProps, null)(Home);
