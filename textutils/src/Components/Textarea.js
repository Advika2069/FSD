import React from 'react'

export default function textarea({text,handleChange}) {
  return (
    <div>
      <div class="form-floating">
  <textarea class="form-control" 
  placeholder="Leave a comment here" 
  id="floatingTextarea" 
  value={text} 
  onChange={handleChange} 
></textarea>

</div>
    </div>
  )
}
