import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail author='Sam' date='Today at 6:00AM' text='Hello' />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author='Derrick' date='Today at 6:42AM' text='Hi' />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
