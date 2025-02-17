const BoldText = ({ text, style }) => {
    const defaultStyle = { fontSize: '15px', fontWeight: 'bold'};

    return <b style={style}>{text}</b>;
};

export default BoldText;
