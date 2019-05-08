import { IonButton } from '@ionic/react'
import TestRenderer from 'react-test-renderer'
import PasswordForm from './password-form'
import { should } from 'chai'

should()

describe('Tests', function() {
  describe('Array', function() {
    it('should return -1 when the value is not present', function() {
      [1, 2, 3].indexOf(4).should.equal(-1)
    })
  })

  describe('Ionic Components', function() {
    it('should render IonButton', function() {
      const testRenderer = TestRenderer.create(
        <IonButton>Press me</IonButton>
      )
      
      testRenderer.should.be.a('object')
    })
  })

  describe('DevExtreme Components', function() {
    it('should render PasswordForm', function() {
      const testRenderer = TestRenderer.create(
        <PasswordForm />
      )
      
      testRenderer.should.be.a('object')
    })
  })
})