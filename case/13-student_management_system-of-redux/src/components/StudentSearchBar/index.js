///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import "./index.css";


//-------------------------------------------------------------------------------------------------------------------//


class StudentSearchBar extends PureComponent {

    static propTypes = {

    };

    static defaultProps = {

    };

    constructor(props) {

        super(props);

        const defState = {

            key: '',
            sex: -1,
        };

        this.state = Object.assign({}, defState, this.props.defStateVal);
    }

    handleRadioChange = (e) => {

        this.setState({
            sex: +e.target.value
        })
    };

    handleSearch = () => {

        this.props.onSearch && this.props.onSearch(this.state);
    };


    render() {

        return (
            <React.Fragment>
                <div className="student-search_bar">
                    <div className="row con-ipt">
                        <span className="row-txt">关键字:</span>
                        <input
                            type="text"
                            value={this.state.key}
                            onChange={e=>this.setState({ key: e.target.value })}
                        />
                    </div>
                    <div className="row con-sex">
                    <span className="row-txt">
                        <span className="txt">性</span>别:
                    </span>
                        <div>
                            <label>
                                <input type="radio" name="sex" value={-1} onChange={this.handleRadioChange}/> 不限
                            </label>
                            <label>
                                <input type="radio" name="sex" value={0} onChange={this.handleRadioChange}/> 男
                            </label>
                            <label>
                                <input type="radio" name="sex" value={1} onChange={this.handleRadioChange}/> 女
                            </label>
                        </div>
                    </div>
                    <div className="row con-btn">
                        <button onClick={this.handleSearch}>查询</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    StudentSearchBar
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
