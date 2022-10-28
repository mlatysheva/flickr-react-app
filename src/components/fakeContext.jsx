import React, { useContext, useState } from 'react';

const Context = React.createContext();

const Foo = () => {
  const [, setVal] = useContext(Context);

  return (
    <div>
      <button onClick={() => setVal('foo')}>foo</button>
    </div>
  );
};

const Bar = () => {
  const [, setVal] = useContext(Context);

  return (
    <div>
      <button onClick={() => setVal('bar')}>bar</button>
    </div>
  );
};

export function FakeContext() {
  const [val, setVal] = useState();

  return (
    <Context.Provider value={[val, setVal]}>
      <Foo />
      <Bar />
      <p>{val}</p>
    </Context.Provider>
  );
}
