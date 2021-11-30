import React from 'react';
import { NestedClickableCardBadExample } from './nestedClickableCard/NestedClickableCardBadExample';
import { NestedClickableCardGoodExample } from './nestedClickableCard/NestedClickableCardGoodExample';
import './App.css';

export const App = () => (
  <main>
    <h1>Accessible Nested Interactive Content</h1>
    <hr />
    <h2>Entire Card is Clickable AND There's Nested Interactive Content</h2>
    <h3>Bad Example</h3>
    <NestedClickableCardBadExample />
    <h3>Good Example</h3>
    <NestedClickableCardGoodExample />
  </main>
);
