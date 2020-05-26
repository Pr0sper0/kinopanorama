import React from 'react'
import Article from './Article';

import { Ring } from 'react-awesome-spinners'

class ArticleList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            elements: [],
            counter: 0

        }

    }

    componentDidMount() {
        console.log('length: ' + this.props.elements.length)
        // if (true) {
        //     setInterval(() => {
        //         console.log(this.state.elements); this.setState({
        //             counter: this.state.counter + 1,
        //             elements: this.props.elements
        //         })
        //     }, 3000)

        // }

    }

    render() {
        return (

            this.props.loading ? <div style={{ minHeight: '10rem' }}><h1><Ring size='64' color='#44aa33' /></h1></div> :
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
