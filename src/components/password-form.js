import React, { Component } from 'react'
import { Button } from 'devextreme-react'
import Field from './field'

class PasswordForm extends Component {
  constructor(props) {
    super(props)

    this.isLoading = true

    this.state = { i18n : {} }
  }

  async loadLang() {
    const lang = await import('../libs/i18n')
    const password = await lang.PASSWORD
    const currentPassword = await lang.CURRENT_PASSWORD
    const repeatPassword = await lang.REPEAT_PASSWORD
    const update = await lang.UPDATE

    this.setState({ i18n : { password, currentPassword, repeatPassword, update } })
  }

  async send() {
    // ...
  }

  add(key, value) {
    this[key] = value
  }

  render() {
    if (this.isLoading) {
      this.isLoading = false
      this.loadLang()
    }

    const { i18n } = this.state

    return (
      <div className={'form'}>
        <div className={'dx-fieldset center'}>
          <Field mode="password" placeholder={i18n.currentPassword} onValueChanged={v => this.add('oldPassword', v.value)} />
          <Field mode="password" placeholder={i18n.password} onValueChanged={v => this.add('password1', v.value)} />
          <Field mode="password" placeholder={i18n.repeatPassword} onValueChanged={v => this.add('password2', v.value)} />
          <div className={'buttons'}>
            <Button
              text={'Update'}
              type={'default'}
              stylingMode={'contained'}
              onClick={this.send.bind(this)} />
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordForm
