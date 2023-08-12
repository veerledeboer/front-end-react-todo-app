import React from 'react';

function TextAreaInput({ id, value, readOnly, onChange }) {
    return (
        <div className="single-detail">
            <label htmlFor={id} className="detail-page-input-label">
                <textarea
                    id={id}
                    type="text"
                    value={value}
                    className="detail-page-input-field"
                    readOnly={readOnly}
                    onChange={onChange}
                    cols="40" rows="10"
                />
            </label>
        </div>
    );
}

export default TextAreaInput;