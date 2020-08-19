import React, {useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import database from './firebase'

const TinderCards = () => {
    const [people, setPeople] = useState([
        // {
        //     name: 'steve jobs',
        //     url: 'http://static2.businessinsider.com/image/54bfc9856da8111179b83990/steve-jobs-used-this-simple-productivity-hack-to-hone-apples-focus.jpg',
        // },
        // {
        //     name: 'mark zuckerberg',
        //     url: 'https://image.cnbcfm.com/api/v1/image/104410446-GettyImages-669889288.jpg?v=1529474846',
        // },
        // {
        //     name: 'elon musk',
        //     url: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/08/08/17/elon-musk.jpg',
        // }
    ]);


    useEffect(() => {
        const unsubscribe = database
            .collection('people')
            .onSnapshot(snapshot =>
            setPeople(snapshot.docs.map(doc => doc.data()))
        );
        return () => {
            unsubscribe();
        }
    }, [])

    // BAD
    // const people = [];
    // people.push("sonny", "quazi");

    // GOOD in react
    // setPeople([...people, "sonny", "quazi"])

    return (
        <div>
            <div className="tinderCards__cardContainer">

                    
            {people.map(person => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']}
                >
                    <div
                    style = {{backgroundImage: `url(${person.url})`}}
                    className="card">
                        <h3>{person.name}</h3>

                    </div>
                </TinderCard>
            ))}
            </div>  
        </div>
    );
}

export default TinderCards
