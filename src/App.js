import Navbar from './components/navbar/navbar.component';
import Card from './components/card/card.component';

// import styles from './app.component.module.css';
import data from './data';

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="App">
      <Navbar />
      <section className="journeys-list">{cards}</section>
    </div>
  );
}
