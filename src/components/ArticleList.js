import React from 'react'
import Article from './Article';

export default function ArticleList(props) {

    return (
        props.elements.map((article, id) => {
            const { _id, Image, Description, Content, Category, media_url } = article;
            console.log('media + ' + media_url)
            return (
                <React.Fragment key={_id}>
                    <Article id={_id} media_url={media_url} image={`${props.apiUrl}${Image.url}`} content={Content} category={Category} description={Description} />
                </React.Fragment>
            )
        })
    )
}
