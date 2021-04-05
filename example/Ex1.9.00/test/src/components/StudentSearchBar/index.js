///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import styles from "./index.css";


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
                <div className={styles.search}>
                    <div className={styles.row}>
                        <span className={styles.des}>关键字:</span>
                        <input
                            type="text"
                            value={this.state.key}
                            onChange={e=>this.setState({ key: e.target.value })}
                        />
                    </div>
                    <div className={styles.row}>
                    <span className={styles.des}>
                        <span className={styles.txt}>性</span>别:
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
                    <div className={styles.row}>
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
