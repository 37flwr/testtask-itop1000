import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import ConvertFormContainer from '../../components/Forms/ConvertForm/ConvertFormContainer';
import './styles.scss';

const HomePage = () => {
  const { loading, exchange } = useSelector((state) => state.Exchange)
  const memoizedExchange = useMemo(() => exchange, [exchange])
  console.log(memoizedExchange);
  return (
    <section id='home-page'>
      <div className='home-page-container'>
        <div className='page-heading'>
          Converter
        </div>
        <ConvertFormContainer />
      </div>
    </section>
  )
}

export default HomePage