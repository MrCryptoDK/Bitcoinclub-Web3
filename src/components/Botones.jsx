const Botones = (props) => (
        <div
            className="botones-loteria"
            onClick={() => props.manejarClic(props.children)}
            >
            {props.children}
        </div>
);

export default Botones;