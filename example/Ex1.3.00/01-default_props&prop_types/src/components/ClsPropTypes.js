///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import PropTypes from "prop-types";


//-------------------------------------------------------------------------------------------------------------------//


export {
    ClsPropTypes,
    Father,
    Son,
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class Father {
}

class Son extends Father {
}


class ClsPropTypes extends Component {

    /** 先混合 **/
    static defaultProps = {

        bool: false
    };

    /** 再调用相应的函数进行验证 **/
    static propTypes = {                        // 仅在 开发阶段报错提示，不会影响编译，仅作为提示

        /** isRequired: 必填项 **/

        /** basic_type **/
        number: PropTypes.number,               // 数字类型
        string: PropTypes.string,               // 字符串类型
        boolean: PropTypes.bool,                // 布尔类型

        arr: PropTypes.array,                   // 数组类型
        obj: PropTypes.object,                  // 对象类型
        func: PropTypes.func,                   // 函数类型
        symbol: PropTypes.symbol,               // 符号类型

        any: PropTypes.any.isRequired,          // 任意类型

        /** advance_type **/
        node: PropTypes.node,                   // 必须是一个可以渲染的内容: 字符串，数字，ReactElement
        element: PropTypes.element,             // 必须是一个 ReactElement
        elementType: PropTypes.elementType,     // 必须是一个 组件类型( 构造函数，函数 )

        // 约束 传入实例 原型链上必须有指定构造函数的原型
        son: PropTypes.instanceOf(Father),                  // 必须指定构造函数实例

        // 约束 传入值 必须来自指定数组的子项
        oneOf: PropTypes.oneOf(['male', 'female']),         // 枚举( 从一组值中取其中一个 )

        // 约束 array.item
        arrayOf: PropTypes.arrayOf(PropTypes.number),       // 指定该数组的每一子项的类型约束
        oneOfType: PropTypes.oneOfType([                    // 属性类型必须是 数组子项的其中之一
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool
        ]),

        // 约束 object
        objShape: PropTypes.shape({                         // 指定对象中每一子项的类型约束
            name: PropTypes.string,
            age: PropTypes.number,
            address: PropTypes.shape({
                province: PropTypes.string,
                city: PropTypes.string,
            }),
        }),

        // 约束 array.obj
        arrObj: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            age: PropTypes.number,
        })),

        object: PropTypes.objectOf(PropTypes.string),       // 指定该对象的每一子项的类型约束( 作用不大 )

        exact: PropTypes.exact({}),                         // 与 shape 用法相同( 必须精确匹配传递的数据 )


        /** custom_type **/
        custom: function (props, propName, componentName) {

            console.log('[customType]', props, propName, componentName);

            const val = props[propName];

            /** 验证必填 **/
            if (val === undefined || val === null) {

                return new Error(`invalid prop ${propName} in ${componentName} is required`);
            }

            /** 验证必须是数字 **/
            if (typeof val !== "number") {

                return new Error(`invalid prop ${propName} in ${componentName} is not number`);
            }

            /** 验证是否在取值范围之内 **/
            if (val < 0 || val > 100) {

                return new Error(`invalid prop ${propName} in ${componentName} must is between 0 and 100`);
            }
        },

    };

    constructor(props) {

        super(props);

        this.state = {};
    }

    render() {

        const elementType = this.props.elementType;     // 必须先赋值，再 JSX 解析

        return (

            <div>
                <div>number: {this.props.num}</div>
                <div>string: {this.props.str}</div>
                <div>boolean: {this.props.bool}</div>
                <div>function: {this.props.func}</div>
                <div>{elementType}</div>
            </div>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
