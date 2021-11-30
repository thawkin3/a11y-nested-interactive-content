import React from 'react';
import { ItemWithActionsBadExample } from './itemWithActions/badExample/ItemWithActionsBadExample';
import { ItemWithActionsGoodExample } from './itemWithActions/goodExample/ItemWithActionsGoodExample';

export const App = () => (
  <main>
    <h1>Accessible Nested Interactive Content</h1>
    <hr />
    <h2>Item with Actions</h2>
    <hr />
    <ItemWithActionsBadExample />
    <hr />
    <ItemWithActionsGoodExample />
  </main>
);
