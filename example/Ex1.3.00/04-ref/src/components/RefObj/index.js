///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


class RefObj extends Component {

    /**
     * ref: React.createRef();              // obj.current: target
     *
     *
     * 1) 赋值初期为 null
     * 2) 当 render(); 执行时，进行赋值
     */

    refObj = React.createRef();

    // refObj = {                               // 也可以手写
    //     current: null
    // };

    constructor(props) {

        super(props);

        this.state = {};

    }

    handleClick = () => {

        console.log('this.refs: ', this.refs);                 // 使用 ref: obj; 后 this.refs 废弃

        console.log('this.refObj: ', this.refObj);
        console.log('this.refObj.current: ', this.refObj.current);       // 获取目标元素( ReactDom | ReactClassComp )

    };

    render() {

        return (

            <React.Fragment>
                <h4
                    ref={this.refObj}
                >Ref: Obj</h4>
                <button
                    onClick={this.handleClick}
                >get refs.refObj
                </button>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    RefObj
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
