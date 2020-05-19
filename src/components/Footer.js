import React from 'react'

export default function Footer() {
    return (

        <footer id="main-footer" className="py-2">
            <div className="container footer-container">
                <div>
                    <img src="img/film_negative_light.png" alt="NewsGrid" />
                    <p>
                        Kinopanorama is the resource for amateurs and professionals. Resource of inspired and for inspiration from Ukrainian cinematography.
          </p>
                </div>
                <div>
                    <h3>Email Newsletter</h3>
                    <p>
                        Subscribe to our Newsletter to be one the first who receives our news
          </p>
                    <form>
                        <input type="email" placeholder="email" />
                        <input type="submit" value="Subscribe" className="btn btn-primary" />
                    </form>
                </div>
                <div>
                    <h3>Site Links</h3>
                    <ul className="list">
                        <li><a href="#">Help & Support</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h2>Join our Club</h2>
                    <p>
                        Join our club and enjoy great news, stories and trailers
          </p>
                    <a href="#" className="btn btn-secondary">Join us</a>
                </div>
                <div>
                    <p>
                        Copyright &copy; 2020, All Rights Reserved
          </p>
                </div>
            </div>
        </footer>

    )
}
