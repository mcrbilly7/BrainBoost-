
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to BrainBoost Arcade 🎮</h1>
      <Link to="/game/1">Play Game 1: Quick Math Challenge</Link>
    </div>
  );
}
