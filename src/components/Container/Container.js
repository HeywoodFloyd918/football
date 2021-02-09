import { FootbalContext } from '../../context/FootballContext';
import { useContext, useEffect } from 'react';
function Container() {
    const context = useContext(FootbalContext);
    useEffect(() => {
        context.fetch();
    }, [])
    return (
        <div className={"container-md"}>
            {
                context.matches.map((match, i) => {
                    return (
                        <div className="card" style={{width: '18rem'}}>
                            <div className="card-body">
                                <h5 className="card-title">{match.homeTeam.name + " vs " + match.awayTeam.name}</h5>
                                <p className="card-text">{match.score.fullTime.homeTeam + "-" + match.score.fullTime.awayTeam}</p>
                                <p className="card-text">{match.competition.name}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Container;
