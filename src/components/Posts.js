import React from "react";
import { PageHeader, Card } from 'antd';
import '../styles/Posts.css';

const Posts = (props) => {
    return (
        <div className="posts_container">
            <div className="page_header_container">
            <PageHeader
                className="site-page-header"
                // onBack={() => null}
                title="Posts"
            />
            </div>
            <div className="articles_container">
                <div className="article_container">
                    <Card
                    title="Inner Card title by Dave"

                    />
                </div>
            </div>
        </div>

    )
}

export default Posts ;
// export {Posts as default};