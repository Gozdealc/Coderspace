import PropTypes from 'prop-types';
import { useEffect} from 'react';

function ListItem({ student,value }) {

    useEffect(() => {
        console.log("Deneme useEffect");
    }, []);
    return (
        <li>
        {student} {value}
        </li>
    );           
}


ListItem.propTypes = {
    student: PropTypes.string.isRequired,
    // Göderilecek değerin tipini proptype olarak tanımlamam gerekir.
    value: PropTypes.number.isRequired,
};

export default ListItem;
