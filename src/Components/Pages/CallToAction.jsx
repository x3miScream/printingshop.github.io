import React from 'react';
import '../../Styles/CallToAction.css';
import Button from '../Button.jsx';
import TextInput from '../TextInput.jsx';
import settings from '../../Data/Settings.json'

const CallToAction = () => {
    return(
    <div className='call-to-action' id='callToActionSection'>
        {/* <h6 className='text__md'>
            GET A QUOTE
        </h6> */}
        <div className='call-to-action-info'>
            <div className='call-to-action-info-img-section'>
                <img src={settings.hostingBaseUrl + '/Images/img-20.jpg'} className='call__to__action__img'></img>
            </div>
            <div className='call-to-action-info-input-section'>
                <form className='call-to-acton-input-area'>
                    <TextInput type='text' name='quantity' placeHolder='Quantity' className='text-input'></TextInput>
                    <TextInput type='text' name='openSize' placeHolder='Open Size (W x H)' className='text-input'></TextInput>
                        <TextInput type='text' name='closedSize' placeHolder='Closed Size (W x H)' className='text-input'></TextInput>
                    <TextInput type='text' name='printSideOption' placeHolder='footer-input' className='text-input'></TextInput>
                    <TextInput type='text' name='paperType' placeHolder='PaperType' className='text-input'></TextInput>

                    <Button buttonStyle='btn--primary'>Send Request</Button>
                </form>
            </div>
        </div>
    </div>);
};

export default CallToAction;