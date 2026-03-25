import React from 'react'

export default function Buttons(props) {
  return (
    <div>
      <div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-danger" style={{backgroundColor: '#c94a57', border: '1px solid #c94a57'}} onClick={props.onToUpper}>ToUpper</button>
  <button type="button" class="btn btn-danger" style={{backgroundColor: '#764daf', border: '1px solid #6c4d97'}} onClick={props.onToLower}>ToLower</button>
  <button type="button" class="btn btn-success" style={{backgroundColor: '#299694', border: '1px solid #299694'}} onClick={props.onReverse}>Reverse</button>
  <button type="button" class="btn btn-primary" style={{backgroundColor: '#1d4b7b', border: '1px solid #1d4b7b'}} onClick={props.onLength}>Length</button>
  <button type="button" class="btn btn-secondary" style={{backgroundColor: '#2797c3', border: '1px solid #2797c3'}} onClick={props.onClear}>Clear</button>
</div>
    </div>
  )
}
