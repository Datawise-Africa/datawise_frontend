import Quill from "quill";

import React, { useRef, useState } from 'react';
import Editor from './Editor';

const Delta = Quill.import('delta');

const QuilEditor = () => {
    const [range, setRange] = useState();
    const [lastChange, setLastChange] = useState();
    const [readOnly, setReadOnly] = useState(false);

    const quillRef = useRef();

    return (
        <div>
            <Editor
                ref={quillRef}
                readOnly={readOnly}
                defaultValue={new Delta()
                .insert('Hello')
                .insert('\n', { header: 1 })
                .insert('Some ')
                .insert('initial', { bold: true })
                .insert(' ')
                .insert('content', { underline: true })
                .insert('\n')}
                onSelectionChange={setRange}
                onTextChange={setLastChange}
            />
            <div class="flex border border-gray-300 border-t-0 p-2.5">
                <label>
                Read Only:{' '}
                <input
                    type="checkbox"
                    value={readOnly}
                    onChange={(e) => setReadOnly(e.target.checked)}
                />
                </label>
                <button
                className="ml-auto"
                type="button"
                onClick={() => {
                    alert(quillRef.current?.getLength());
                }}
                >
                Get Content Length
                </button>
            </div>
            <div className="my-2.5 font-mono">
                <div className="text-gray-600 uppercase">Current Range:</div>
                {range ? JSON.stringify(range) : 'Empty'}
            </div>
            <div className="my-2.5 font-mono">
                <div className="text-gray-600 uppercase">Last Change:</div>
                {lastChange ? JSON.stringify(lastChange.ops) : 'Empty'}
            </div>
        </div>
    )
}

export default QuilEditor;