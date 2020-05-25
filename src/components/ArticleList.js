import React from 'react'
import Article from './Article';

class ArticleList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            elements: [],

        }

    }

    // componentDidMount(prevProps) {
    //     if (this.props.elements.length != 0)
    //         this.setState({ elements: this.props.elements })
    // }

    render() {
        return (

            this.props.loading ? <h1>Loading...</h1> :
                this.props.elements.map((article, id) => {
                    const { _id, Image, Description, Content, Category, media_url } = article;
                    return (


                        <React.Fragment key={_id}>

                            <Article id={_id} media_url={media_url} image={`${this.props.apiUrl}${Image.url}`} content={Content} category={Category} description={Description} />

                        </React.Fragment>

                    )
                })

        )
    }
}

export default ArticleList;
