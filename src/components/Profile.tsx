import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile () {
    const { level } = useContext(ChallengesContext)
    
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.cloudflare.steamstatic.com/19a10621ea8cd67e34a877b26356b5bb214eccff_full.jpg" alt="Jorge Henrique" />
            <div>
                <strong>Jorge Henrique</strong>
                <p>
                    <img src="icons/level.svg" alt="" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}