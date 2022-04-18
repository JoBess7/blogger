export default function ThreeDButton({ action, text }) {

    return (
        <button onClick={action} className="button-82-pushable" role="button">
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text">
                {text}
            </span>
        </button>
    );
}