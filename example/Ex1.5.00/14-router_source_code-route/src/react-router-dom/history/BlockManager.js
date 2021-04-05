///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//-------------------------------------------------------------------------------------------------------------------//


class BlockManager {

    prompt = null;

    constructor(getUserConfirmation) {

        this.getUserConfirmation = getUserConfirmation;
    }

    block(prompt) {

        if (typeof prompt !== 'string' && typeof prompt !== 'function') {

            throw new Error('block must be string or function');
        }

        this.prompt = prompt;

        return () => {

            this.prompt = null;
        };
    }

    triggerBlock(location, action, callback) {

        let message;

        if (!this.prompt) {

            callback();
            return;
        }

        if (typeof this.prompt === 'string') {

            message = this.prompt;

        } else if (typeof  this.prompt === 'function') {

            message = this.prompt(location, action);
        }

        this.getUserConfirmation(message, result => {

            if (result) {

                callback();
            }
        });
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    BlockManager
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
