import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencyRate } from '../../../store/currency/actions'
import Loader from '../../Loader';
import './styles.scss';

const Header = () => {
  const dispatch = useDispatch();
  const { loading, currencyRate } = useSelector((state) => state.CurrencyRate);
  const memoizedRate = useMemo(() => currencyRate, [currencyRate])

  useEffect(() => {
    dispatch(getCurrencyRate())
  }, [dispatch])

  return (
    <section id='header'>
      <div className='header-container'>
        {loading ?
          <div className='header-loading'>
            <Loader />
          </div>
        :
          <div className='header-data'>
            {memoizedRate?.map((currencyPair, idx) => {
              return (
                <React.Fragment key={idx}>
                  <div  className='header-currency-pair'>
                    <span>
                      {currencyPair.ccy}/{currencyPair.base_ccy}
                    </span>
                    <span>
                      {currencyPair.buy.slice(0,5)}
                    </span>
                  </div>
                  <div className='currency-pair-bar' />
                </React.Fragment>
              )
            })}
          </div>
        }
      </div>
    </section>
  )
}

export default Header