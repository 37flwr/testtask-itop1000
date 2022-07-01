import { useState } from 'react';
import ConvertFormContainer from '../../components/Forms/ConvertForm/ConvertFormContainer';
import './styles.scss';

const HomePage = () => {
  const [valueBase, setValueBase] = useState(0)
  const [valueConv, setValueConv] = useState(0)
  return (
    <section id='home-page'>
      <div className='home-page-container'>
        <div className='page-heading'>
          Converter
        </div>
        <ConvertFormContainer setValueBase={setValueBase} setValueConv={setValueConv} />
        <div>
          <br/>
          <span>
            {valueConv ? valueConv : 0}
          </span>
          <br/>
          <span>
            {valueBase ? valueBase : 0}
          </span>
        </div>
      </div>
    </section>
  )
}

export default HomePage