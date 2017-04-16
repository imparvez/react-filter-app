import React from 'react';

const List = ({ items, filterBy }) => {  
	// console.log('Items: ', items); // ["React", "Angular", "Vue", "Ember"]
	// console.log('FilterBy: ', filterBy); // Whatever the input will be
  return (
    <ul>
      {
        items
          .filter(item => item.indexOf(filterBy) > -1)
          .map((item, i) => <li key={i}>{item}</li>)
      }
    </ul>
  )
}

export default List;