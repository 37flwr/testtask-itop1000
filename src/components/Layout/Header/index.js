import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencyRate } from '../../../store/currency/actions'
import './styles.scss';

const Header = () => {
  const dispatch = useDispatch();
  const { loading, currencyRate } = useSelector((state) => state.CurrencyRate);
  const memoizedRate = useMemo(() => currencyRate, [currencyRate])

  console.log(loading);

  useEffect(() => {
    dispatch(getCurrencyRate())
  }, [dispatch])

  return (
    <div>Header</div>
  )
}

export default Header