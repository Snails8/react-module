import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./PageHeader.module.css";

type PageHeaderProps = {
  title: string
  backLink: boolean
}

export const PageHeader = memo((props: PageHeaderProps) => {
  const {title, backLink} = props;
  const navigate = useNavigate();

  return (
    <div className={`${styles.header}`}>
      {backLink ? (
        <div className={`${styles.back_link_container}`}>
          <Link to="#" onClick={() => navigate(-1)}>
            <div className={`${styles.back_link}`}>
              戻る
            </div>
          </Link>
        </div>
      ): null}
      <div className={`${styles.title}`}>{title}</div>
    </div>
  )
})