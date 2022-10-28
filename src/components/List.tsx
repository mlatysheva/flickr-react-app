import { Card, CardProps } from './Card';

interface IListProps {
  searchQuery?: string;
  data: CardProps[];
}

function List(props: IListProps) {
  return (
    <div className="cards-wrapper">
      {props.data
        .filter((card) => {
          if (props.searchQuery === '') {
            return card;
          } else if (
            props.searchQuery != null &&
            card.continent.toLowerCase().includes(props.searchQuery.toLowerCase())
          ) {
            return card;
          }
        })
        .map((card) => (
          <Card
            key={card.id}
            id={card.id}
            country={card.country}
            continent={card.continent}
            flag={card.flag}
            flag_local={card.flag_local}
            population={card.population}
            GDP={card.GDP}
          />
        ))}
    </div>
  );
}

export default List;
