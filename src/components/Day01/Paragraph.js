const Paragraph = ( {children} ) => (
    <p className = "lead"> { children } </p>
);

Paragraph.defaultProps = {
    children : "Hello, world!"
};

export default Paragraph;