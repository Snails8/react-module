import styles from './AtomPage.module.css';
import { Button } from "../../components/atoms/Button/Button"
import { CheckBox } from "../../components/atoms/Checkbox/Checkbox"
import { BasePage } from "../../components/templates/BasePage/BasePage"
import { RadioButton } from '../../components/atoms/RadioButton/RadioButton';
import { FormText } from '../../components/atoms/InputText/inputText';
import { LoadingSpinner } from '../../components/atoms/LoadingSpinner/LoadingSpiner';

export const AtomPage = () => {
  return (
    <>
      <BasePage>
        <h2>atoms</h2>

        <div className={`${styles.content}`}>
          <h5>button</h5>
          <Button 
            label="label"
            color="red"
            width={100}
            height={25}
            handleClick={() => console.log('clicked')}
          />
        </div>

        <div className={`${styles.content}`}>
          <h5>checkbox</h5>
          <CheckBox
            id='checkbox'
            label="checkbox"
            onChangeHandler={() => console.log('checkbox!')}
          />
        </div>

        <div className={`${styles.content}`}>
          <h5>radio</h5>
          <RadioButton
            id='radio'
            label='radio'
            onChangeHandler={() => console.log('radio!')}
          />
        </div>

        <div className={`${styles.content}`}>
          <h5>input text</h5>
          <FormText
            type='text'
            id='text'
            defaultValue='sample'
            required={false}
            width={100}
            height={20}
            padding={15}
            onChangeHandler={() => console.log('text')}
          />  
        </div>

        <h3>Web design</h3>
        <div className={`${styles.content}`}>
          <h5>LoadingSpinner</h5>
          <LoadingSpinner
          />
        </div>

      </BasePage>
    </>
  )
}