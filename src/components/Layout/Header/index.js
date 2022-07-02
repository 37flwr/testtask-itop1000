import { useEffect, useMemo, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencyRate } from '../../../store/currency/actions'
import Loader from '../../Loader';
import CurrencyPair from './components/CurrencyPair';
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
          <>
            <div className='header-rates'>
              {memoizedRate?.map((currencyPair, idx) => (
                  <CurrencyPair currencyPair={currencyPair} idx={idx} />
                ))}
            </div>
            <div className='header-logo'>
              Converter
            </div>
          </>
        }
      </div>
    </section>
  )
}

export default Header