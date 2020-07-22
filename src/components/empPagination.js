import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class PaginationEmp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pager: {},
            emps: []
        };
    }

    componentDidMount() {
        this.loadPage();
    }

    componentDidUpdate() {
        this.loadPage();
    }

    loadPage() {
        const params = new URLSearchParams(window.location.search);
        const page = parseInt(params.get('page')) || 1;
        if (page !== this.state.pager.currentPage) {
            Axios('http://localhost:5600/emp/page/'+this.props.match.params.pageNo+'/'+this.props.match.params.limit)
                .then((result) => {
                    this.setState({
                         pager:{
                            result
                         },
                         emps:result.data.employees
                        });
                });
        }
    }

    render() {
        const { pager, pageOfItems } = this.state;
        return (
            <div className="card text-center m-3">
                <h3 className="card-header">React + Node - Server Side Pagination Example</h3>
                <div className="card-body">
                    {pageOfItems.map(item =>
                        <div key={item.id}>{item.name}</div>
                    )}
                </div>
                <div className="card-footer pb-0 pt-3">
                    {pager.pages && pager.pages.length &&
                        <ul className="pagination">
                            <li className={`page-item first-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                                <Link to={{ search: `?page=1` }} className="page-link">First</Link>
                            </li>
                            <li className={`page-item previous-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                                <Link to={{ search: `?page=${pager.currentPage - 1}` }} className="page-link">Previous</Link>
                            </li>
                            {pager.pages.map(page =>
                                <li key={page} className={`page-item number-item ${pager.currentPage === page ? 'active' : ''}`}>
                                    <Link to={{ search: `?page=${page}` }} className="page-link">{page}</Link>
                                </li>
                            )}
                            <li className={`page-item next-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                                <Link to={{ search: `?page=${pager.currentPage + 1}` }} className="page-link">Next</Link>
                            </li>
                            <li className={`page-item last-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                                <Link to={{ search: `?page=${pager.totalPages}` }} className="page-link">Last</Link>
                            </li>
                        </ul>
                    }                    
                </div>
            </div>
        );
    }
}

export default PaginationEmp;