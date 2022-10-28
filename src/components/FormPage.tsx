import { useState } from 'react';
import { FormList } from './FormList';
import { IFormCard, Form } from './Form';

export function FormPage() {
  const [candidates, setCandidates] = useState<IFormCard[]>([]);

  function addCandidate(candidate: IFormCard): void {
    setCandidates(candidates.concat(candidate));
  }

  return (
    <div className="main">
      <div className='form-page'>
        <Form onSubmit={addCandidate} />
        <FormList candidates={candidates} />
      </div>
    </div>      
  );
}
