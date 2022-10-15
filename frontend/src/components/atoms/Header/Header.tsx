import styles from './Header.module.css'

type HeaderProps = {
  pageTitle: string
}

export const Header = (
  props: HeaderProps 
) => {
  return (
    <div className={`${styles.base}` }>
      {props.pageTitle}
    </div>
  )
}