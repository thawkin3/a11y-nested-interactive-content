import React, { useState } from 'react';
import { ItemWithActions } from './ItemWithActions';
import './ItemWithActionsExample.css';

const items = [
  { title: 'All Tasks' },
  { title: 'Incomplete Tasks' },
  { title: 'Completed Tasks' },
];

export const ItemWithActionsExample = () => {
  const [selectedItem, setSelectedItem] = useState(items[0].title);

  const handleItemClick = itemTitle => {
    setSelectedItem(itemTitle);
  };

  const handleItemEdit = (itemTitle, e) => {
    e.stopPropagation();
    alert(`Editing item: ${itemTitle}`);
  };

  const handleItemDelete = (itemTitle, e) => {
    e.stopPropagation();
    alert(`Deleting item: ${itemTitle}`);
  };

  return (
    <div>
      <p>Let's pretend this is a list of filters. The selected filter appears on the right.</p>
      <div className="itemWithActionsExample">
        <div className="itemsContainer">
          {items.map(item => (
            <ItemWithActions
              key={item.title}
              title={item.title}
              onClick={() => handleItemClick(item.title)}
              onEdit={e => handleItemEdit(item.title, e)}
              onDelete={e => handleItemDelete(item.title, e)}
            />
          ))}
        </div>
        <div className="selectedItem">
          Selected filter:
          <br />
          {selectedItem}
        </div>
      </div>
    </div>
  );
};
