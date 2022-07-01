import { useState } from 'react';
import ConvertFormContainer from '../../components/Forms/ConvertForm/ConvertFormContainer';
import './styles.scss';

const HomePage = () => {
  const [valueBase, setValueBase] = useState(0)
  const [valueConv, setValueConv] = useState(0)
  const [currencyBase, setCurrencyBase] = useState('usd')
  const [currencyConv, setCurrencyConv] = useState('uah')
  return (
    <section id='home-page'>
      <div className='home-page-container'>
        <div className='page-heading'>
          Converter
        </div>
        <ConvertFormContainer 
          setValueBase={setValueBase} 
          setValueConv={setValueConv} 
          setCurrencyBase={setCurrencyBase} 
          setCurrencyConv={setCurrencyConv} 
        />
        <div className='convert-output-container'>
          <span className='convert-output'>
            {valueConv ? `${valueConv} ${currencyConv}` : 0}
          </span>
          <span className='convert-output'>
            {valueBase ? `${valueBase} ${currencyBase}` : 0}
          </span>
        </div>
      </div>
    </section>
  )
}

export default HomePage