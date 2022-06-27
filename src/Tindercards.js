import React, {useState} from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";




function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://www.biography.com/.image/t_share/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
        },
        {
            name: "Jeff Bezos",
            url: "https://www.wraltechwire.com/wp-content/uploads/2020/01/jeff-bezos-2-1280x640.jpg",
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };
    
    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };


    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {people.map((person) => (
            <tinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
                >

                <div
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
                >
                    <h3>{person.name}</h3>
                </div>
            </tinderCard>
           ))}
            </div>
           
        </div>
    );
} 

export default TinderCards;