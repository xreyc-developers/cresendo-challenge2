import classes from './Container.module.css';

const Container = (props) => {
    return <div className="container">{props.children}</div>
}

export default Container;