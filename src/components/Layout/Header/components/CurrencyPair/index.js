import { Fragment } from 'react'
import './styles.scss'

const CurrencyPair = ({ currencyPair, idx }) => (
    <Fragment key={idx}>
        <div className='header-currency-pair'>
            <span>
                {currencyPair.ccy}/{currencyPair.base_ccy}
            </span>
            <span>
                {currencyPair.buy.slice(0,5)}
            </span>
        </div>
        <div className='currency-pair-bar' />
    </Fragment>
  )

export default CurrencyPair