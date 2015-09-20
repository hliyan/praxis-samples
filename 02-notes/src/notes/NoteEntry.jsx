import { React, Dispatcher, Input } from 'praxis';
import NoteSchema from './NoteSchema';

export default class NoteEntry extends React.Component {  
    constructor(props) {
        super(props);
        this.state = { value: ''};

        this.onAddButton = (e) => {
            this.createNote();
        };

        this.onChange = (value) => {
            this.setState({ value: value });
        };
    }

    render() {
        return (
            <div>
                <Input schema={NoteSchema} fieldName='text' value={this.state.value} onChange={this.onChange} />
                <button onClick={this.onAddButton} >Create Note</button>
            </div>
        );
    }

    createNote() {
        Dispatcher.dispatch({ action: 'createNote', data: { text: this.state.value } });
        this.setState({ value: '' });
    }
}