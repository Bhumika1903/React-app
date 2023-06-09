import { useAuth } from '../hooks';
import styles from '../styles/settings.module.css'

const Settings = () => {
    
    const auth = useAuth();
    return (
        <div className={styles.settings}>
            <div className={styles.imgContainer}>
                <img
                src='https://cdn-icons-png.flaticon.com/512/4140/4140061.png'
                alt=''
                />
            </div>

            <div className={styles.field}>
                <div className={styles.fieldLabel}>Email</div>
                <div className={styles.fieldValue}>{auth.user?.email}</div>
            </div>

            <div className={styles.field}>
                <div className={styles.fieldLabel}>Name</div>
                <div className={styles.fieldValue}>{auth.user?.name}</div>
            </div>

            <div className={styles.field}>
                <div className={styles.fieldLabel}>Password</div>
                <input type='password'/>
            </div>

            <div className={styles.field}>
                <div className={styles.fieldLabel}>Confirm Password</div>
                <input type='password'/>
            </div>

            <div className={styles.btnGrp}>
                <button className={`button ${styles.editBtn}`}>Edit profile</button>
            </div>
        </div>
    );
};

export default Settings;