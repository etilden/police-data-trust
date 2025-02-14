import styles from './response-textarea.module.css'
import { FormLevelError } from '../index'
import { ChangeEvent, useEffect, useState } from 'react'

interface ResponseTextAreaProps { isSubmitted: boolean}

export default function ResponseTextArea({ isSubmitted }: ResponseTextAreaProps) {
  const [textareaId, counterId, errorId] = ['responseTextArea', 'responseCounter', 'responseError']
  const [charMax, charMin] = [500, 150]

  const errorMessage: string = `Please provide a response of at least ${charMin} characters`
  
  const [charCount, setCharCount] = useState(0)
  const [isValid, setIsValid] = useState(checkIsValid())

  function checkIsValid(newCharCount?: number): boolean {
    const currCharCount = newCharCount || charCount
    return !isSubmitted || currCharCount >= charMin
  }
  
  function handleTextareaChange({ target: { value }}: ChangeEvent<HTMLTextAreaElement>): void {
    setIsValid(checkIsValid(value.length))
    setCharCount(value.length)
  }

  useEffect(() => { setIsValid(checkIsValid()) }, [isSubmitted])

  return (
    <div className={`defaultInputContainer ${!isValid && 'hasError'}`}>
      <label htmlFor={textareaId}>
        Why are you signing up to the NPDC?:
      </label>
      <textarea
        id={textareaId}
        cols={52}
        rows={7}
        maxLength={charMax}
        aria-required="true"
        aria-describedby={`${counterId} ${!isValid ? errorId : null}`}
        onChange={handleTextareaChange}
      />
      <div className={styles.responseSubtext}>
        <p id={counterId}>{charCount}/{charMax}</p>
        {!isValid && <FormLevelError errorId={errorId} errorMessage={errorMessage} />}
      </div>
    </div>
  )
}
