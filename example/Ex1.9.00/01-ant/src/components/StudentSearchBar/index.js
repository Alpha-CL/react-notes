///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import styles from "./index.css";
import {Input, Row, Col, Radio, Button} from "antd";


//-------------------------------------------------------------------------------------------------------------------//


class StudentSearchBar extends PureComponent {

    constructor(props) {

        super(props);

        const defState = {

            key: '',
            sex: -1,
        };

        this.state = Object.assign({}, defState, this.props.defStateVal);

	    // this.state = {
		//     ...this.props.defStateVal,
		//     key: '',
		//     sex: -1,
	    // };
    }

    handleRadioChange = (e) => {

	    this.setState({
		    sex: e.target.value
	    });
    };

    handleSearch = (val) => {

	    // console.log(val);
	    console.log(this.state);

	    if (this.props.onSearch) {

		    this.props.onSearch(this.state);
	    }
    };

	handleInputChange = e => {

		this.setState({
			key: e.target.value
		});
	};

    render() {

	    return (
		    <React.Fragment>

			    <Row
				    className={styles.wrap}
				    type={"flex"}
				    align="middle"
			    >
				    <Col>
					    <Input.Search
						    onSearch={this.handleSearch}
						    value={this.state.key}
						    onChange={this.handleInputChange}
						    addonBefore="关键字"
						    placeholder="input search text"
						    allowClear
						    style={{width: 200}}
					    />
				    </Col>
				    <Col>
					    <Radio.Group
						    className={styles.radio}
						    onChange={this.handleRadioChange}
						    value={this.state.sex}
					    >
						    <Radio value={-1}>不限</Radio>
						    <Radio value={0}>男</Radio>
						    <Radio value={1}>女</Radio>
						    <Button
							    onChange={this.handleSearch}
						    >查询</Button>
					    </Radio.Group>
				    </Col>
			    </Row>

			    {/*<div className={styles.search}>
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
                </div>*/}

		    </React.Fragment>
	    );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    StudentSearchBar
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
