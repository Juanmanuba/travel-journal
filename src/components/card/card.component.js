import React from 'react';
import styles from './card.component.module.css';
import { images } from '../../assets/images';

export default function Card(props) {
  return (
    <div className={styles.cardContainer}>
      <img
        className={styles.journeyPic}
        alt="journeyImage"
        src={props.imageUrl}
      />
      <div className={styles.info}>
        <div className={styles.location}>
          <img className={styles.icon} alt="location-icon" src={images.icon} />
          <h3>{props.location}</h3>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2>{props.title}</h2>
        <h4>
          {props.startDate} - {props.endDate}
        </h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
