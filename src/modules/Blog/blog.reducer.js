import {blogdata} from "../../data/blogdata";

const intialState = {
    blogs: blogdata,
};

const blogReducer = (state = intialState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

export default blogReducer;