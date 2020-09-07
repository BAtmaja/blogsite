import React, {useState} from 'react';

const Bloglist = (props) => {
    const {
        title,
        category,
        description
    } = props.Bloglist;
    return(
        <div className="card h-100 bloglist">
                <div className="card-body blog_text">
                        <h4 className="card-title product_title">
                            <Link to={`/blogs/${id}`}>{title}</Link>
                        </h4>
                        <h5 className="blog_category">${category}</h5>
                        <p className="card-text blog_description">{description}</p>
                </div>
        </div>
    );
}


export default Bloglist;