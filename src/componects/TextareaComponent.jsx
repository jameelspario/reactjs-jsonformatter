import React from 'react'

const TextareaComponent = ({value, onChange}) => {
  // const [content, setContent] = useState(0);

  return (
    <div>
      <div className='flex-grow flex'>
        <textarea
          id="jsondata"
          placeholder="Paste the JSON here"
          className="text-grey-darkest p-2 m-1 bg-transparent focus:outline-none font-mono w-full h-96"
          name="inputJSON"
          cols="30"
          rows="15"
          value={value}
          onChange={onChange}
        />
      </div>

    </div>
  )
}

export default TextareaComponent