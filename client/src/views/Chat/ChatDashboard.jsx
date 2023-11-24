import ChatHeader from './components/Layouts/ChatHeader'
import ChatDashboardWrap from './components/Layouts/ChatDashboardWrap'
import SendFeedBack from './components/SendFeedBack'
import SummaryBox from './partials/SummaryBox'
import { useState } from 'react'

const ChatDashboard = () => {

    // states
    const [textbox, setTextbox] = useState({ propertyOne: '', propertyTwo: '', propertyThree: '', propertyFour: '', propertyFive: '' });

    return (
        <ChatDashboardWrap>

            <div className="app-container">

                <ChatHeader />

                <SummaryBox
                    label='Hulpvraag patiënt (of contactreden)'
                    id='textbox1'
                    value={textbox.propertyOne}
                    onChange={(e) => setTextbox({ ...textbox, propertyOne: e.target.value })}
                />

                <SummaryBox
                    label='Functioneringsproblemen en beloop'
                    id='textbox2'
                    value={textbox.propertyTwo}
                    onChange={(e) => setTextbox({ ...textbox, propertyTwo: e.target.value })}
                />

                <SummaryBox
                    label='Medische gezondheidsdeterminanten'
                    id='textbox3'
                    value={textbox.propertyThree}
                    onChange={(e) => setTextbox({ ...textbox, propertyThree: e.target.value })}
                />

                <SummaryBox
                    label='Omgevingsdeterminanten'
                    id='textbox4'
                    value={textbox.propertyFour}
                    onChange={(e) => setTextbox({ ...textbox, propertyFour: e.target.value })}
                />

                <SummaryBox
                    label='Persoonlijke determinanten'
                    id='textbox5'
                    value={textbox.propertyFive}
                    onChange={(e) => setTextbox({ ...textbox, propertyFive: e.target.value })}
                />
            </div>

            {/* <div className="modal fade" id="feedbackModal1" tabIndex="-1" aria-labelledby="feedbackModal1Label" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content elegant-modal">
                        <div className="modal-header elegant-modal-header">
                            <h5 className="modal-title elegant-title" id="feedbackModal1Label">Feedback voor Hulpvraag patiënt (of
                                contactreden)</h5>
                            <button type="button" className="btn-close elegant-close" data-bs-dismiss="modal"
                                aria-label="Sluiten"></button>
                        </div>
                        <div className="modal-body elegant-body">
                            <form id="feedbackForm1" className="feedback-form">
                                <label htmlFor="nauwkeurigheid1" className="elegant-label">Nauwkeurigheid (%)</label>
                                <input type="number" id="nauwkeurigheid1" name="nauwkeurigheid1" min="0" max="100" value="100"
                                    className="elegant-input" />
                                <label htmlFor="extraOpmerkingen1" className="elegant-label">Opmerkingen</label>
                                <textarea id="extraOpmerkingen1" name="extraOpmerkingen1" rows="2"
                                    className="form-control elegant-textarea"></textarea>
                            </form>
                        </div>
                        <div className="modal-footer elegant-footer">
                            <button type="button" className="btn btn-secondary elegant-btn-secondary" data-bs-dismiss="modal">Sluiten
                            </button>
                            <button type="button" className="btn btn-primary elegant-btn-primary"
                            // onclick="sendCategoryFeedback(1)"
                            >
                                Verzenden
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="feedbackModal2" tabIndex="-1" aria-labelledby="feedbackModal2Label" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content elegant-modal">
                        <div className="modal-header elegant-modal-header">
                            <h5 className="modal-title elegant-title" id="feedbackModal2Label">Feedback voor Functioneringsproblemen en beloop</h5>
                            <button type="button" className="btn-close elegant-close" data-bs-dismiss="modal"
                                aria-label="Sluiten"></button>
                        </div>
                        <div className="modal-body elegant-body">
                            <form id="feedbackForm2" className="feedback-form">
                                <label htmlFor="nauwkeurigheid2" className="elegant-label">Nauwkeurigheid (%)</label>
                                <input type="number" id="nauwkeurigheid2" name="nauwkeurigheid2" min="0" max="100" value="100"
                                    className="elegant-input" />
                                <label htmlFor="extraOpmerkingen2" className="elegant-label">Opmerkingen</label>
                                <textarea id="extraOpmerkingen2" name="extraOpmerkingen2" rows="2"
                                    className="form-control elegant-textarea"></textarea>
                            </form>
                        </div>
                        <div className="modal-footer elegant-footer">
                            <button type="button" className="btn btn-secondary elegant-btn-secondary" data-bs-dismiss="modal">Sluiten
                            </button>
                            <button type="button" className="btn btn-primary elegant-btn-primary"
                            // onclick="sendCategoryFeedback(2)"
                            >
                                Verzenden
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="feedbackModal3" tabIndex="-1" aria-labelledby="feedbackModal3Label" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content elegant-modal">
                        <div className="modal-header elegant-modal-header">
                            <h5 className="modal-title elegant-title" id="feedbackModal3Label">Feedback voor Medische gezondheidsdeterminanten</h5>
                            <button type="button" className="btn-close elegant-close" data-bs-dismiss="modal"
                                aria-label="Sluiten"></button>
                        </div>
                        <div className="modal-body elegant-body">
                            <form id="feedbackForm3" className="feedback-form">
                                <label htmlFor="nauwkeurigheid3" className="elegant-label">Nauwkeurigheid (%)</label>
                                <input type="number" id="nauwkeurigheid3" name="nauwkeurigheid3" min="0" max="100" value="100"
                                    className="elegant-input" />
                                <label htmlFor="extraOpmerkingen3" className="elegant-label">Opmerkingen</label>
                                <textarea id="extraOpmerkingen3" name="extraOpmerkingen3" rows="2"
                                    className="form-control elegant-textarea"></textarea>
                            </form>
                        </div>
                        <div className="modal-footer elegant-footer">
                            <button type="button" className="btn btn-secondary elegant-btn-secondary" data-bs-dismiss="modal">Sluiten
                            </button>
                            <button type="button" className="btn btn-primary elegant-btn-primary"
                            // onclick="sendCategoryFeedback(3)"
                            >
                                Verzenden
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="feedbackModal4" tabIndex="-1" aria-labelledby="feedbackModal4Label" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content elegant-modal">
                        <div className="modal-header elegant-modal-header">
                            <h5 className="modal-title elegant-title" id="feedbackModal4Label">Feedback voor Omgevingsdeterminanten</h5>
                            <button type="button" className="btn-close elegant-close" data-bs-dismiss="modal"
                                aria-label="Sluiten"></button>
                        </div>
                        <div className="modal-body elegant-body">
                            <form id="feedbackForm4" className="feedback-form">
                                <label htmlFor="nauwkeurigheid4" className="elegant-label">Nauwkeurigheid (%)</label>
                                <input type="number" id="nauwkeurigheid4" name="nauwkeurigheid4" min="0" max="100" value="100"
                                    className="elegant-input" />
                                <label htmlFor="extraOpmerkingen4" className="elegant-label">Opmerkingen</label>
                                <textarea id="extraOpmerkingen4" name="extraOpmerkingen4" rows="2"
                                    className="form-control elegant-textarea"></textarea>
                            </form>
                        </div>
                        <div className="modal-footer elegant-footer">
                            <button type="button" className="btn btn-secondary elegant-btn-secondary" data-bs-dismiss="modal">Sluiten
                            </button>
                            <button type="button" className="btn btn-primary elegant-btn-primary"
                            // onclick="sendCategoryFeedback(4)"
                            >
                                Verzenden
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="feedbackModal5" tabIndex="-1" aria-labelledby="feedbackModal5Label" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content elegant-modal">
                        <div className="modal-header elegant-modal-header">
                            <h5 className="modal-title elegant-title" id="feedbackModal5Label">Feedback voor Persoonlijke determinanten</h5>
                            <button type="button" className="btn-close elegant-close" data-bs-dismiss="modal"
                                aria-label="Sluiten"></button>
                        </div>
                        <div className="modal-body elegant-body">
                            <form id="feedbackForm5" className="feedback-form">
                                <label htmlFor="nauwkeurigheid5" className="elegant-label">Nauwkeurigheid (%)</label>
                                <input type="number" id="nauwkeurigheid5" name="nauwkeurigheid5" min="0" max="100" value="100"
                                    className="elegant-input" />
                                <label htmlFor="extraOpmerkingen5" className="elegant-label">Opmerkingen</label>
                                <textarea id="extraOpmerkingen5" name="extraOpmerkingen5" rows="2"
                                    className="form-control elegant-textarea"></textarea>
                            </form>
                        </div>
                        <div className="modal-footer elegant-footer">
                            <button type="button" className="btn btn-secondary elegant-btn-secondary" data-bs-dismiss="modal">Sluiten
                            </button>
                            <button type="button" className="btn btn-primary elegant-btn-primary"
                            // onclick="sendCategoryFeedback(5)"
                            >
                                Verzenden
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}

            <SendFeedBack />

        </ChatDashboardWrap>
    )
}

export default ChatDashboard