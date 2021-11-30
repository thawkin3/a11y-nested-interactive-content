import React from 'react';
import './ItemWithActions.css';

export const ItemWithActions = ({ title, onClick, onEdit, onDelete }) => {
  const onKeyPress = e => {
    if (clickKeys.includes(e.key)) {
      onClick();
    }
  };

  return (
    <div
      className="item"
      onClick={onClick}
      onKeyPress={onKeyPress}
      role="button"
      tabIndex={0}
    >
      <div>{title}</div>
      <div className="actionsContainer">
        <button className="button outline" onClick={onEdit}>
          Edit
        </button>
        <button className="button outline" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

const clickKeys = ['Enter', 'Space', ' '];
