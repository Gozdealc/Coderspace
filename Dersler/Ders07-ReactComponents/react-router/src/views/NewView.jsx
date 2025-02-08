import {Outlet} from 'react-router-dom'

const NewView = () => {
return (
    <>
    <h1>Haberler</h1>
    <Outlet /> {/* Burada routing'a göre gösterilecek olan component'ı belirtiyoruz */}
    </>
);
};

export default NewView;
