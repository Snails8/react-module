import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => <div className={`${styles.spinner}`} data-testid='loading-spinner' />;

export default LoadingSpinner;