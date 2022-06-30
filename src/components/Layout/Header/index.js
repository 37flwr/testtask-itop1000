import axios from 'axios';
import './styles.scss';

const Header = () => {
  const price = axios.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11').then((res) => {console.log(res)})
  console.log(price);
  return (
    <div>Header</div>
  )
}

export default Header