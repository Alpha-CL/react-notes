///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import PropTypes from "prop-types";
import {commonTypes} from "../../utils/commonTypes";
import {withDataGroup} from "../hoc/withDataGroup";


//-------------------------------------------------------------------------------------------------------------------//


class Checkbox extends Component {

    static defaultProps = {

        datas: [],
        chooseDatas: []
    };

    static propTypes = {

        name: PropTypes.string.isRequired,
        datas: commonTypes.groupDatas,
        chooseDatas: commonTypes.chooseDatas,
        onChange: PropTypes.func,
        info: commonTypes.singleData
    };

    constructor(props) {

        super(props);
        this.state = {};
    }

    // datas = [
    //     {value:'footeball', text: '足球'},
    //     {value:'basketball', text: '篮球'},
    //     {value:'movie', text: '电影'}
    // ]

    getCheckBoxes() {

        // return this.props.datas.map(item => {

            return (

                <label>
                    {this.props.info.text}
                    <input
                        type="checkbox"
                        name={this.props.name}
                        value={this.props.info.value}
                        checked={this.props.chooseDatas.includes(this.props.info.value)}
                        onChange={this.handleChange}
                    />
                </label>
            );
        // });
    }

    handleChange = (e) => {

        const val = e.target.value;
        let newArr;

        if (e.target.checked) {

            newArr = [...this.props.chooseDatas, val];

        } else {

            newArr = this.props.chooseDatas.filter(item => item !== val)
        }

        this.props.handleChange && this.props.handleChange(newArr, this.props.name, e);
    };

    render() {

        return (

            <React.Fragment>
                {this.getCheckBoxes()}
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export default withDataGroup(Checkbox);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
