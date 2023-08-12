import React from 'react';

function FormInput({ id, value, readOnly, onChange }) {
    return (
        <div className="single-detail">
            <label htmlFor={id} className="detail-page-input-label">
                <input
                    id={id}
                    type="text"
                    value={value}
                    className="detail-page-input-field"
                    readOnly={readOnly}
                    onChange={onChange}
                    maxLength="30"
                />
            </label>
        </div>
    );
}

export default FormInput;