import Navbar from './components/navbar/navbar.component';
// import Card from './components/card/card.component';

// import styles from './app.component.module.css';
// import data from './data';

export default function App() {
  // const cards = data.map((card) => {
  //   return <Card {...card} />;
  // });

  return (
    <div className="App">
      <Navbar />
      {/* <div className={styles.journeysSection}>{cards}</div> */}
    </div>
  );
}
