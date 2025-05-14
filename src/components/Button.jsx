


import PropTypes from 'prop-types';


/* Primary Button */

const ButtonPrimary = ( {
    href,
    target='_self',
    label,
    icon,
    classes=''

}) => {

    const finalClass=`btn btn-primary ${classes}`;


    if (href) {
        return (
            <a href={href}
            target={target}
            className={"btn btn-primary" + classes}      
            >
                {label}
                {icon &&(
                <span className='material-symbols-rounded'
                aria-hidden="true">
                    {icon}
                </span> 
                )}

            </a>

        )
    } else{
        return(
            <button className={finalClass}>
                {label}
                {icon ?
                <span className='material-symbols-rounded'
                aria-hidden="true">
                    {icon}
                </span> 
                : undefined}
            </button>

        )
    }

}

ButtonPrimary.propTypes = {
    label:PropTypes.string.isRequired,
    href : PropTypes.string,
    target : PropTypes.string,
    icon : PropTypes.string,
    classes : PropTypes.string

}


const ButtonOutline = ( {
    href,
    target='_self',
    label,
    icon,
    classes=""

}) => {

    const finalClass = `btn btn-outline ${classes}`;

    if (href) {
        return (
            <a href={href}
            target={target}
            className={finalClass}      
            >
                {label}
                {icon && (
                <span className='material-symbols-rounded'
                aria-hidden="true">
                    {icon}
                </span> 
                )}

            </a>

        )
    } else{
        return(
            <button className={finalClass}>
                {label}
                {icon ?
                <span className='material-symbols-rounded'
                aria-hidden="true">
                    {icon}
                </span> 
                : undefined}
            </button>

        )
    }

}

ButtonOutline.propTypes = {
    label:PropTypes.string.isRequired,
    href : PropTypes.string,
    target : PropTypes.string,
    icon : PropTypes.string,
    classes : PropTypes.string

}


export {ButtonPrimary, ButtonOutline}
