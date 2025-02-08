import ReactDOM from 'react-dom';

// Props ; Props (Properties), React bileşenlerine dışarıdan veri aktarmak için kullanılan bir mekanizmadır.
//Bir bileşene props ile veri göndererek dinamik içerikler oluşturabiliriz.
const Portal = ({target, text}) => {
  return ReactDOM.createPortal(
    <div>Ben portal , hedefim ise {text}</div>,
    target
  );
};

export default Portal;