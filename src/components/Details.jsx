import PropTypes from 'prop-types'
import useTransactions from '../useTransactions';

const Details = ({ title }) => {
    return (
        <div className="h-1/2 bg-gray-600 p-5 rounded-xl bg-opacity-50 backdrop-filter backdrop-blur-lg">
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl">{title}</div>
            <div>
                <span>50$</span>
            </div>
        </div>
    )
}

Details.defaultProps = {
    title: "Income"
}

Details.propTypes = {
    title: PropTypes.string.isRequired
}

export default Details