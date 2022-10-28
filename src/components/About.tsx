import { Counter } from './Counter';
import { FakeContext } from './fakeContext';

function About() {
  return (
    <div className="main">
      <h1>Fake components as reference</h1>
      <p>I created this React application to learn React and Redux.</p>
      <p>In the application I used the mostly widely spread features that a website could have.</p>
      <Counter />
      <FakeContext />
    </div>
  );
}

export default About;
