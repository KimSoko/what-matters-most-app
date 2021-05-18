import React from 'react';
import ReactDOM from 'react-dom';

const Decide = ({ list, handleVote }) => {

  return (
    <div>
      {list && (
        <div>
          { console.log('This is list in return ', list[0].name) }
          {/* {list[0].name === '1' || list[0].name === '2' || list[0].name === '7' && (
            <> */}
            {/* {console.log('This is list[0] ', list[0])} */}
              <div key={`${list[0].name}-${list[0].value}`} id="top-div">
                <button className="option-button" id="option-A" name={list[0].name} onClick={handleVote}>{list[0].value}</button>
              </div>

              <div key={`${list[1].name}-${list[1].value}`} id="bottom-div">
                <button className="option-button" id="option-B" name={list[1].name} onClick={handleVote}>{list[1].value}</button>
              </div>
            {/* </>
          )} */}

          {/* {list[0].name === '3' || list[0].name === '4' && (
            <>
            {console.log('This is list[0] ', list[0])}
              <div key={`${list[0].name}-${list[0].value}`} id="top-div">
                <button className="option-button" id="option-C" name={list[0].name} onClick={handleVote}>{list[0].value}</button>
              </div>

              <div key={`${list[1].name}-${list[1].value}`} id="bottom-div">
                <button className="option-button" id="option-D" name={list[1].name} onClick={handleVote}>{list[1].value}</button>
              </div>
            </>
          )}

          {list[0].name === '5' || list[0].name === '6' && (
            <>
            {console.log('This is list[0] ', list[0])}
              <div key={`${list[0].name}-${list[0].value}`} id="top-div">
                <button className="option-button" id="option-E" name={list[0].name} onClick={handleVote}>{list[0].value}</button>
              </div>

              <div key={`${list[1].name}-${list[1].value}`} id="bottom-div">
                <button className="option-button" id="option-F" name={list[1].name} onClick={handleVote}>{list[1].value}</button>
              </div>
            </>
          )} */}
        </div>
      )}
    </div>
  )
};
export default Decide;