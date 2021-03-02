const Paragraph = ( {children} ) => (
    <p className = "lead"> { children } </p>
);

Paragraph.defaultProps = {
    message : "Hello, world!"
};

export default Paragraph;