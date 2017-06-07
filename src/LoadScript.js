import {PropTypes, Component} from 'react';

class LoadScript extends Component {
    componentDidMount() {
        this.createScript();
    }

    createScript() {
        const {url, isAsync} = this.props;
        const script = document.createElement('script');

        script.src = url;

        if (isAsync) {
            script.async = 1;
        }

        document.body.appendChild(script);
    }

    render() {
        return null;
    }
}

LoadScript.propTypes = {
    isAsync: PropTypes.bool,
    url: PropTypes.string.isRequired
};

export default LoadScript;
