import {React} from 'praxis';

export default class Note extends React.Component {  
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li key={this.props.key}>{this.props.text}</li>
        );
    }
}