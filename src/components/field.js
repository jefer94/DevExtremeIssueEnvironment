import React from 'react'
import PropTypes from 'prop-types'
import TextBox from 'devextreme-react/text-box'

const Field = ({ placeholder, onValueChanged, mode }) =>
  <div className={'dx-field'}>
    <div className={'dx-field-value field-value'}>
      <TextBox mode={mode} showClearButton={true} placeholder={placeholder} onValueChanged={onValueChanged} />
    </div>
  </div>

Field.propTypes = {
  mode : PropTypes.string,
  placeholder : PropTypes.string,
  onValueChanged : PropTypes.func
}

export default Field
