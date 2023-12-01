import ChatDashboardWrap from './components/Layouts/ChatDashboardWrap'
import SendFeedBack from './components/SendFeedBack'
import SummaryBox from './partials/SummaryBox'
import { useEffect, useState } from 'react'
import ChatHeadAudio from './components/Layouts/ChatHeadAudio'
import ResponseFeedbackModal from './partials/ResponseFeedbackModal'
import { modalData } from '../../configs/constants'
import { getFromLocalStorage } from '../../hooks/helpers'

const ChatDashboard = () => {

    // states
    const [textContent, setTextContent] = useState([]);
    const [textbox, setTextbox] = useState({ propertyOne: '', propertyTwo: '', propertyThree: '', propertyFour: '', propertyFive: '' });
    const [apiCallSuccess, setApiCalSuccess] = useState(false);

    // setting state after success api
    useEffect(() => {

        const data = JSON.parse(getFromLocalStorage('responses'));

        if (textContent.length) {
            setTextbox({
                propertyOne: textContent[0],
                propertyTwo: textContent[1],
                propertyThree: textContent[2],
                propertyFour: textContent[3],
                propertyFive: textContent[4],
            })
        } else if (data.length) {
            setTextbox({
                propertyOne: data[0],
                propertyTwo: data[1],
                propertyThree: data[2],
                propertyFour: data[3],
                propertyFive: data[4],
            })
        } else {
            setTextContent([]);
        }
    }, [textContent])

    return (
        <ChatDashboardWrap>

            <div className="app-container">

                <ChatHeadAudio
                    setTextContent={setTextContent}
                    apiCallSuccess={apiCallSuccess}
                    setApiCalSuccess={setApiCalSuccess}
                />

                <SummaryBox
                    label='Hulpvraag patiënt (of contactreden)'
                    id='textbox1'
                    value={textbox.propertyOne}
                    // onChange={(e) => setTextbox({ ...textbox, propertyOne: e.target.value })}
                    apiCallSuccess={apiCallSuccess}
                    modalId='#feedbackModal1'
                />

                <SummaryBox
                    label='Functioneringsproblemen en beloop'
                    id='textbox2'
                    value={textbox.propertyTwo}
                    // onChange={(e) => setTextbox({ ...textbox, propertyTwo: e.target.value })}
                    apiCallSuccess={apiCallSuccess}
                    modalId='#feedbackModal2'
                />

                <SummaryBox
                    label='Medische gezondheidsdeterminanten'
                    id='textbox3'
                    value={textbox.propertyThree}
                    // onChange={(e) => setTextbox({ ...textbox, propertyThree: e.target.value })}
                    apiCallSuccess={apiCallSuccess}
                    modalId='#feedbackModal3'
                />

                <SummaryBox
                    label='Omgevingsdeterminanten'
                    id='textbox4'
                    value={textbox.propertyFour}
                    // onChange={(e) => setTextbox({ ...textbox, propertyFour: e.target.value })}
                    apiCallSuccess={apiCallSuccess}
                    modalId='#feedbackModal4'
                />

                <SummaryBox
                    label='Persoonlijke determinanten'
                    id='textbox5'
                    value={textbox.propertyFive}
                    // onChange={(e) => setTextbox({ ...textbox, propertyFive: e.target.value })}
                    apiCallSuccess={apiCallSuccess}
                    modalId='#feedbackModal5'
                />
            </div>

            {/* feed back modal */}
            {modalData.map((modal, index) => (
                <ResponseFeedbackModal
                    key={`fedd${index}`}
                    title={`Feedback voor ${modal.title}`}
                    id={`feedbackModal${index + 1}`}
                    label={`feedbackModal${index + 1}Label`}
                />
            ))}

            {/* send feedback */}
            <SendFeedBack />

        </ChatDashboardWrap>
    )
}

export default ChatDashboard