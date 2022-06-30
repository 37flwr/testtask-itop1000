import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencyRate } from '../../../store/currency/actions'
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
          <span>Loading...</span>
        :
          <div>
            {memoizedRate?.filter((currencyPair) => currencyPair.ccy === 'USD' || currencyPair.ccy === 'EUR').map((currencyPair) => {
              return (
                <div>
                  {currencyPair.ccy}/{currencyPair.base_ccy}  {currencyPair.sale.slice(0,5)}
                </div>
              )
            })}
          </div>
        }
      </div>
    </section>
  )
}

export default Header