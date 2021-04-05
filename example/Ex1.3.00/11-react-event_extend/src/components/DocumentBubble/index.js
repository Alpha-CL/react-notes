///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";


//-------------------------------------------------------------------------------------------------------------------//


let prev;

class DocumentBubble extends PureComponent {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {

        super(props);

        this.state = {};
    }

    handleDivClick = (e) => {

        console.log('[React_Dom_Div-Clicked]');

        console.log(prev, e, '[ReactDomEvent 是否重用]', prev === e);
    };

    handleBtnClick = (e) => {

        console.log('[React_Dom_Btn-Clicked]');

        prev = e;

        // /** ReactDomEvent 持久化，效率相对较低 **/
        // // e.persist();
        //
        // setTimeout(() => {
        //     console.log('[ReactDomEvent 被重用，无法获取]', e.type);
        // }, 1000);
        //
        // /** ReactDomEvent: 并非真实 HTMLDomEvent，而是 ReactDom 的合成 Event **/
        // console.log('[ReactDomEvent]: ', e);

        /** HtmlDomEvent **/
        // console.log('[HtmlDomEvent]: ', e.nativeEvent);

        /** 用于判断是否该事件已阻止冒泡 **/
        // console.log('[e.isPropagationStopped]: ',e.isPropagationStopped());
        //
        // /** 仅作用域虚拟DOM 中的事件冒泡，因为 ReactDomEvent 最终都会冒泡到 Document，再由 Document 监听事件变化后才触发 **/
        // e.stopPropagation();
        // console.log('[e.stopPropagation();]');
        //
        // console.log('[e.isPropagationStopped]: ',e.isPropagationStopped());

        // 模拟内部判断是否该事件阻止事件冒泡原理
        //
        // for (const handler of EventHandlers) {
        //
        //     handler(e);
        //
        //     if (isPropagationStopped) {
        //
        //         break;
        //     }
        // }
    };

    handleIptFocus = (e) => {

        console.log('[reactDom.Focused]: input.focus 是在 inputReactDom 自身上监听的');
    };

    render() {

        return (

            <React.Fragment>
                <div
                    onClick={this.handleDivClick}
                >
                    <p>ReactDomEvent 会在 事件冒泡到 Document 后才触发</p>
                    <div>
                        <input
                            type="text"
                            onFocus={this.handleIptFocus}
                        />
                    </div>
                    <br/>
                    <button
                        onClick={this.handleBtnClick}
                    >Trigger document event
                    </button>
                </div>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    DocumentBubble
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
