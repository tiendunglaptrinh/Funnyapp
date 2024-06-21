import classNames from 'classnames/bind';
import styles from './header.scss';

const cx = classNames.bind(styles);

function Header() {
    return ( 
    <div className={cx('wrapper-header')}>
        This is header.
    </div> );
}

export default Header;  