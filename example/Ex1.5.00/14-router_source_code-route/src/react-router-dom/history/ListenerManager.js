///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//-------------------------------------------------------------------------------------------------------------------//


class ListenerManager {

    listeners = [];

    addListener(listener) {

        this.listeners.push(listener);

        return () => {

            const index = this.listeners.indexOf(listener);

            this.listeners.splice(index, 1);
        };
    }

    triggerListener(location, action) {

        for (const listener of this.listeners) {

            listener(location, action);
        }
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    ListenerManager
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
