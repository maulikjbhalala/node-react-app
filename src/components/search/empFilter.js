import React, { Suspense } from 'react';
import Axios from 'axios';
const FilterLoad = React.lazy(() => import('./filterLoad'));

class FilterClass extends React.Component {
    constructor() {
        super();
        this.state =
        {
            emps: [],
            q: ''
        };
        this.filterFunc = this.filterFunc.bind(this);
        this.dataChange = this.dataChange.bind(this);
        this.nullInput = this.nullInput.bind(this);
        this.dataBackSpaceChange = this.dataBackSpaceChange.bind(this);
    };

    filterFunc() {
        let emps = this.state.emps;
        let q = this.state.q;

        emps = emps.filter(function (emp) {
            return (emp.empName.toLowerCase().indexOf(q) != -1) || (emp.empEmail.toLowerCase().indexOf(q) != -1);
        });
        this.setState({ emps: emps });
    };

    dataChange(e) {
        let q = e.target.value.toLowerCase();
        this.setState({ q }, () => this.filterFunc());
    }


    dataBackSpaceChange(e) {
        let q = e.target.value.toLowerCase();
        this.setState({ q }, () => this.filterFunc());
    }


    componentWillMount() {
        Axios.get('http://localhost:5600/emp/').then((result) => {
            this.setState(
                {
                    emps: result.data
                }
            )

        }).catch((Error) => {
            console.log(Error)
        });
    }



    nullInput(e) {
        console.log(e.target.value)
        if (e.target.value === '' || e.target.value.length === 0 || e.target.value === null || e.target.value === undefined) {
            this.setState({
                q: '',
                emps: this.state.emps
            })
        }
        window.location.reload(true);
    }




    render() {

        return (
            <Suspense fallback={<p>Wait Search box and Filter are Loading..</p>}>
                <FilterLoad dataChange={this.dataChange} emps={this.state.emps} nullInput={this.nullInput} q={this.state.q} dataBackSpace={this.dataBackSpaceChange} />
            </Suspense>


        )

    }


};



export default FilterClass;