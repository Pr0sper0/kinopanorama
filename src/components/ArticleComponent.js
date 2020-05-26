import React from 'react';
import { Link } from 'react-router-dom';

class ArticleComponent extends React.Component {

    render() {
        const { id, content, description, category, image, media_url } = this.props.location.state.params;
        console.log('params: ' + media_url);
        return (
            <section id="article">
                <div className="container">
                    <div className="page-container">
                        <article className="card">
                            <img src={image} alt="" />
                            <h2 className="l-heading">{this.props.params}</h2>
                            <div className="meta">
                                <small>
                                    <i className="fas fa-user"></i> Written by Stiven Spielberg May 9,
                2020
              </small>
                                <div className="category category-ent">Entertainment</div>
                            </div>
                            <p>
                                {content}
                            </p>
                            <h2>Watch this awesome video</h2>
                            <iframe
                                width="100%"
                                height="400"
                                src={media_url}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>

                            <b>Get new information soon</b>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
                                dolores quaerat in non a optio autem molestiae, alias consectetur,
                                sapiente iure ut beatae repellendus culpa quibusdam mollitia dolor
                                asperiores! Explicabo excepturi ipsum, odio adipisci reprehenderit
                                cum eligendi dolorum accusamus voluptatem consequuntur quidem
                                dicta soluta voluptates rerum ducimus voluptatibus dolor ex! Cum
                                fuga repellat voluptate nostrum placeat consectetur. Quis
                                reprehenderit cum, nulla aut, rem, porro possimus eum cupiditate
                                illo saepe ut quo ab expedita dolores? Quaerat accusamus vel dicta
                                quas explicabo tempora doloribus nulla debitis nesciunt esse
                                temporibus, perferendis ipsa et, hic quia neque? Optio velit,
                                dicta ab, repellat et delectus quia expedita aliquid quisquam ad
                                quasi autem libero? Ad inventore perspiciatis dolores
                                exercitationem minima ab, tempora tenetur, laborum aliquam itaque
                                fugit quibusdam numquam quis tempore illum iusto, nobis veniam
                                facilis vero porro voluptates sed velit? Iusto maiores eligendi
                                eos veritatis velit totam placeat error numquam officia incidunt
                                quam illo optio aspernatur rerum alias voluptate, consequuntur
                                excepturi? Laudantium earum dignissimos iste!
            </p>
                        </article>

                        <aside id="categories" className="card">
                            <h2>Categories</h2>
                            <ul className="list">
                                <li>
                                    <Link to="/"><i className="fas fa-chevron-right"></i>News</Link>
                                </li>
                                <li>
                                    <Link to="/"><i className="fas fa-chevron-right"></i>Movies</Link>
                                </li>
                                <li>
                                    <Link to="/"><i className="fas fa-chevron-right"></i>Actors</Link>
                                </li>
                                <li>
                                    <Link to="/"><i className="fas fa-chevron-right"></i>Directors</Link>
                                </li>
                                <li>
                                    <Link to="/"><i className="fas fa-chevron-right"></i>Stories</Link>
                                </li>


                            </ul>
                        </aside>

                        <aside className="card bg-secondary">
                            <p>
                                Join our club and enjoy great news, stories and trailers.
            </p>
                            <Link className="btn btn-dark btn-block">Join now</Link>
                        </aside>
                    </div>
                </div>
            </section>
        )
    }
}

export default ArticleComponent;
