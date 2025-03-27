// import React, { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// const RichTextEditor = () => {
//   const [value, setValue] = useState('');

//   return <ReactQuill theme="snow" value={value} onChange={setValue} />;
// }
// export default RichTextEditor;


import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const RichTextEditor = ({ placeholder,input,setInput }) => {
	const editor = useRef(null);
	// const [content, setContent] = useState('');
	const handleChange = (content) => {
		setInput({...input,description:content})
	}

	const config = useMemo(() => ({
			readonly: false, // all options from https://xdsoft.net/jodit/docs/,
			placeholder: placeholder || 'Start typings...'
		}),
		[placeholder]
	);

	return (
		<JoditEditor
        className='my-2'
			ref={editor}
			value={input.description}
			config={config}
			tabIndex={1} // tabIndex of textarea
			//onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={handleChange}
		/>
	);
};

export default RichTextEditor;