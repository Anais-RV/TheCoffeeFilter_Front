import './TopThree.css';
import Card from '../card/Card';
import Coffee2 from '../../assets/images/Coffee2.jpg';
import Coffee3 from '../../assets/images/Coffee3.jpg';
import Coffee4 from '../../assets/images/Coffee4.jpg';

function TopThree() {
    const fakeCafes = [
        {
            id: 1,
            title: "Cafetería 1",
            pics: Coffee2,
            text: "Descripción de la cafetería 1",
            to: "/link-to-cafe1"
        },
        {
            id: 2,
            title: "Cafetería 2",
            pics: Coffee3,
            text: "Descripción de la cafetería 1",
            to: "/link-to-cafe1"
        },
        {
            id: 3,
            title: "Cafetería 3",
            pics: Coffee4,
            text: "Descripción de la cafetería 1",
            to: "/link-to-cafe1"
        },
        
        
    ];

    return (
        <div className="topthree-container">
            <h1 className="topthree-title">Top 3</h1>
            {fakeCafes.map(cafe => (
                <Card key={cafe.id} {...cafe} />
            ))}
        </div>
    );
}

export default TopThree;
