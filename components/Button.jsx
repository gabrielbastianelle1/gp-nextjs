import PropTypes from 'prop-types'

export default function Button({ children, className, onClick }) {
    return (
        <button onClick={onClick} className={`${className} button`}>
            {children}
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string
}

/* Button.defaultProps = {
    className: "bg-green-500 rounded-3xl"
} */
