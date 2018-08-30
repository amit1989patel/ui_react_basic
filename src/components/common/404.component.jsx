import React from 'react';
import { Link } from 'react-router';
//landing page presentaional component
class ErrorPage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 page-404">
                    <div className="number font-green"> 404 </div>
                    <div className="details">
                        <h3>Oops! You're lost.</h3>
                        <p>
                            We can not find the page you're looking for.
                        <br />
                            <Link to="/"> Return home</Link> or try the search bar below.
                       </p>
                        <form action="index.html">
                            <div className="input-group input-medium">
                                <input type="text" className="form-control" placeholder="keyword..." />
                                <span className="input-group-btn">
                                    <button type="submit" className="btn green">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ErrorPage;