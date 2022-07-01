import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import ConvertFormContainer from '../../components/Forms/ConvertForm/ConvertFormContainer';
import './styles.scss';

const HomePage = () => {
  const { loading, exchange } = useSelector((state) => state.Exchange)
  const { value_base, value_conv } = useMemo(() => exchange, [exchange])
  return (
    <section id='home-page'>
      <div className='home-page-container'>
        <div className='page-heading'>
          Converter
        </div>
        <ConvertFormContainer />
        <div>
          <span>
            {value_base ? value_base : 0}
          </span>
          <br/>
          <span>
            {value_conv ? value_conv : 0}
          </span>
        </div>
      </div>
    </section>
  )
}

export default HomePage