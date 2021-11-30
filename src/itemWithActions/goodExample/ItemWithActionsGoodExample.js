import React, { useState } from 'react';
import { ItemWithActionsGood } from './ItemWithActionsGood';
import './ItemWithActionsGoodExample.css';

const items = [
  { title: 'All Tasks' },
  { title: 'Incomplete Tasks' },
  { title: 'Completed Tasks' },
];

export const ItemWithActionsGoodExample = () => {
  const [selectedItem, setSelectedItem] = useState(items[0].title);

  const handleItemClick = itemTitle => {
    setSelectedItem(itemTitle);
  };

  const handleItemEdit = itemTitle => {
    alert(`Editing item: ${itemTitle}`);
  };

  const handleItemDelete = itemTitle => {
    alert(`Deleting item: ${itemTitle}`);
  };

  return (
    <div>
      <h3>Good Example</h3>
      <p>
        Let's pretend this is a list of filters. The selected filter appears on
        the right.
      </p>
      <div className="itemWithActionsGoodExample">
        <ul className="itemsContainer">
          {items.map(item => (
            <ItemWithActionsGood
              key={item.title}
              title={item.title}
              onClick={() => handleItemClick(item.title)}
              onEdit={() => handleItemEdit(item.title)}
              onDelete={() => handleItemDelete(item.title)}
            />
          ))}
        </ul>
        <div className="selectedItem">
          Selected filter:
          <br />
          {selectedItem}
        </div>
      </div>
    </div>
  );
};
